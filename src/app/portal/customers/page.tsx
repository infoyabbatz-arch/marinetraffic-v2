"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: membership } = await supabase
      .from("organization_users")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!membership) return;

    const { data } = await supabase
      .from("customers")
      .select("*")
      .eq("company_id", membership.company_id)
      .order("created_at", { ascending: false });

    setCustomers(data || []);
  }

  async function addCustomer() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: membership } = await supabase
      .from("organization_users")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!membership) return;

    const { error } = await supabase
      .from("customers")
      .insert({
        company_id: membership.company_id,
        company_name: companyName,
        contact_person: contactPerson,
        email,
        phone,
        country,
        status: "active",
      });

    if (error) {
      alert(error.message);
      return;
    }

    setCompanyName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setCountry("");

    await loadCustomers();
  }

  const filtered = customers.filter((c) =>
    c.company_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-5xl font-black">
          Customers
        </h1>
        <p className="mt-3 text-slate-500">
          Manage customer companies and contacts.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black mb-6">
          Add Customer
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="border rounded-xl p-3"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Contact Person"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <button
          onClick={addCustomer}
          className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-white font-bold"
        >
          Add Customer
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">
            Customer Directory
          </h2>

          <input
            className="border rounded-xl p-3 w-72"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-3">{customer.company_name}</td>
                <td className="p-3">{customer.contact_person}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.country}</td>
                <td className="p-3">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
