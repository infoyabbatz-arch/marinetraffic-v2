"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function InvoicesPage() {

  const [invoices,setInvoices] = useState<any[]>([]);
  const [customers,setCustomers] = useState<any[]>([]);

  const [customerId,setCustomerId] = useState("");
  const [invoiceNumber,setInvoiceNumber] = useState("");
  const [amount,setAmount] = useState("");
  const [currency,setCurrency] = useState("USD");
  const [dueDate,setDueDate] = useState("");

  async function loadData() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      
const { data: membership } = await supabase
.from("organization_users")
.select("company_id")
.eq("user_id", user.id)
.maybeSingle();

const companyId = membership?.company_id;

if (!companyId) return;

const { data: invoiceData } =
      await supabase
        .from("invoices")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at",{ascending:false});

    const { data: customerData } =
      await supabase
        .from("customers")
        .select("*")
        .eq("company_id", companyId)
        .order("company_name");

    setInvoices(invoiceData || []);
    setCustomers(customerData || []);
  }

  useEffect(()=>{
    loadData();
  },[]);

  async function createInvoice() {

    if(!invoiceNumber){
      alert("Enter invoice number");
      return;
    }

    const { error } =
      await supabase
        .from("invoices")
        .insert({
          customer_id: customerId || null,
          invoice_number: invoiceNumber,
          amount: Number(amount || 0),
          currency,
          due_date: dueDate || null,
          status: "draft"
        } as any);

    if(error){
      alert(error.message);
      return;
    }

    setCustomerId("");
    setInvoiceNumber("");
    setAmount("");
    setCurrency("USD");
    setDueDate("");

    await loadData();
  }

  async function updateStatus(id:string,status:string){

    const payload:any = { status };

    if(status === "sent"){
      payload.sent_at = new Date().toISOString();
    }

    if(status === "paid"){
      payload.paid_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from("invoices")
      .update(payload)
      .eq("id",id);

    if(error){
      alert(error.message);
      return;
    }

    loadData();
  }

  const totalRevenue = useMemo(
    ()=> invoices.reduce((a,b)=>a + Number(b.amount || 0),0),
    [invoices]
  );

  const paidRevenue = useMemo(
    ()=> invoices
      .filter(i=>i.status==="paid")
      .reduce((a,b)=>a + Number(b.amount || 0),0),
    [invoices]
  );

  const outstandingRevenue = totalRevenue - paidRevenue;

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-5xl font-black">
            Invoice Center
          </h1>

          <p className="mt-2 text-slate-500">
            Revenue and payment management.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">Invoices</div>
            <div className="mt-2 text-5xl font-black">
              {invoices.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">Revenue</div>
            <div className="mt-2 text-5xl font-black">
              {totalRevenue}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">Paid</div>
            <div className="mt-2 text-5xl font-black">
              {paidRevenue}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">Outstanding</div>
            <div className="mt-2 text-5xl font-black">
              {outstandingRevenue}
            </div>
          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-3xl font-black">
            Create Invoice
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <select value={customerId}
              onChange={(e)=>setCustomerId(e.target.value)}
              className="rounded-xl border p-3">
              <option value="">Select Customer</option>
              {customers.map((c)=>(
                <option key={c.id} value={c.id}>
                  {c.company_name}
                </option>
              ))}
            </select>

            <input
              value={invoiceNumber}
              onChange={(e)=>setInvoiceNumber(e.target.value)}
              placeholder="Invoice Number"
              className="rounded-xl border p-3"
            />

            <input
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Amount"
              className="rounded-xl border p-3"
            />

            <select
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
              className="rounded-xl border p-3">
              <option>USD</option>
              <option>TZS</option>
              <option>EUR</option>
            </select>

            <input
              type="date"
              value={dueDate}
              onChange={(e)=>setDueDate(e.target.value)}
              className="rounded-xl border p-3"
            />

          </div>

          <button
            onClick={createInvoice}
            className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-white">
            Create Invoice
          </button>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-3xl font-black">
            Invoice Registry
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Invoice</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((invoice)=>(
                <tr key={invoice.id} className="border-b">

                  <td className="p-3">
                    {invoice.invoice_number}
                  </td>

                  <td className="p-3">
                    {invoice.amount} {invoice.currency}
                  </td>

                  <td className="p-3">
                    {invoice.status}
                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={()=>updateStatus(invoice.id,"sent")}
                      className="rounded bg-blue-600 px-3 py-1 text-white">
                      Sent
                    </button>

                    <button
                      onClick={()=>updateStatus(invoice.id,"paid")}
                      className="rounded bg-green-600 px-3 py-1 text-white">
                      Paid
                    </button>

                    <button
                      onClick={()=>updateStatus(invoice.id,"overdue")}
                      className="rounded bg-red-600 px-3 py-1 text-white">
                      Overdue
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}
