"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function AdminPaymentsPage() {
  const [payments,setPayments] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  async function loadPayments(){
    const { data } = await supabase
      .from("payments")
      .select("*")
      .order("created_at",{ ascending:false });

    setPayments(data || []);
    setLoading(false);
  }

  async function updateStatus(id:string,status:string){
    const { error } = await supabase
      .from("payments")
      .update({
        status,
        approved_at:new Date().toISOString(),
        approved_by:"admin"
      })
      .eq("id",id);

    if(error){
      alert(error.message);
      return;
    }

    await loadPayments();
  }

  useEffect(()=>{
    loadPayments();
  },[]);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-black mb-8">
        PAYMENT APPROVAL CENTER
      </h1>

      {loading && <p>Loading...</p>}

      <div className="space-y-4">
        {payments.map((payment)=>(
          <div
            key={payment.id}
            className="rounded-2xl border border-slate-700 p-6 bg-slate-900"
          >
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <p><b>Status:</b> {payment.status}</p>
                <p><b>Amount:</b> {payment.amount}</p>
                <p><b>Method:</b> {payment.payment_method}</p>
                <p><b>Reference:</b> {payment.transaction_reference}</p>
                <p><b>Payer:</b> {payment.payer_name}</p>
                <p><b>Phone:</b> {payment.payer_phone}</p>
              </div>

              <div>
                {payment.proof_url && (
                  <a
                    href={payment.proof_url}
                    target="_blank"
                    className="text-yellow-400 underline"
                  >
                    View Proof
                  </a>
                )}
              </div>

            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={()=>updateStatus(payment.id,"approved")}
                className="px-4 py-2 bg-green-600 rounded-lg"
              >
                Approve
              </button>

              <button
                onClick={()=>updateStatus(payment.id,"rejected")}
                className="px-4 py-2 bg-red-600 rounded-lg"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
