"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function CustomsJobsPage() {

  const [jobs,setJobs] = useState<any[]>([]);
  const [customers,setCustomers] = useState<any[]>([]);

  const [customerId,setCustomerId] = useState("");
  const [jobNumber,setJobNumber] = useState("");
  const [cargoType,setCargoType] = useState("");
  const [vesselName,setVesselName] = useState("");
  const [blNumber,setBlNumber] = useState("");
  const [assignedOfficer,setAssignedOfficer] = useState("");

  async function loadData() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data: customer } = await supabase
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      const companyId = customer?.company_id;


    const { data: jobData } =
      await supabase
        .from("customs_jobs")
        .select("*")
        .order("created_at",{ascending:false});

    const { data: customerData } =
      await supabase
        .from("customers")
        .select("*")
        .order("company_name");

    setJobs(jobData || []);
    setCustomers(customerData || []);
  }

  useEffect(()=>{
    loadData();
  },[]);

  async function createJob() {

    if(!jobNumber){
      alert("Enter Job Number");
      return;
    }

    const { error } =
      await supabase
        .from("customs_jobs")
        .insert({
          customer_id: customerId || null,
          job_number: jobNumber,
          cargo_type: cargoType,
          vessel_name: vesselName,
          bl_number: blNumber,
          assigned_officer: assignedOfficer,
          status: "created",
            company_id: customers.find(c=>c.id===customerId)?.company_id || null
        } as any);

    if(error){
      alert(error.message);
      return;
    }

    setCustomerId("");
    setJobNumber("");
    setCargoType("");
    setVesselName("");
    setBlNumber("");
    setAssignedOfficer("");

    await loadData();

    alert("Customs Job Created");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-5xl font-black">
            Customs Jobs Center
          </h1>

          <p className="mt-2 text-slate-500">
            Customs clearing workflow management.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-3xl font-black">
            Create Customs Job
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <select
              value={customerId}
              onChange={(e)=>setCustomerId(e.target.value)}
              className="rounded-xl border p-3"
            >
              <option value="">Select Customer</option>

              {customers.map((c)=>(
                <option key={c.id} value={c.id}>
                  {c.company_name}
                </option>
              ))}
            </select>

            <input
              value={jobNumber}
              onChange={(e)=>setJobNumber(e.target.value)}
              placeholder="Job Number"
              className="rounded-xl border p-3"
            />

            <input
              value={cargoType}
              onChange={(e)=>setCargoType(e.target.value)}
              placeholder="Cargo Type"
              className="rounded-xl border p-3"
            />

            <input
              value={vesselName}
              onChange={(e)=>setVesselName(e.target.value)}
              placeholder="Vessel Name"
              className="rounded-xl border p-3"
            />

            <input
              value={blNumber}
              onChange={(e)=>setBlNumber(e.target.value)}
              placeholder="BL Number"
              className="rounded-xl border p-3"
            />

            <input
              value={assignedOfficer}
              onChange={(e)=>setAssignedOfficer(e.target.value)}
              placeholder="Assigned Officer"
              className="rounded-xl border p-3"
            />

          </div>

          <button
            onClick={createJob}
            className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-white"
          >
            Create Job
          </button>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-3xl font-black">
            Customs Job Registry
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Job</th>
                <th className="p-3 text-left">Cargo</th>
                <th className="p-3 text-left">Vessel</th>
                <th className="p-3 text-left">BL</th>
                <th className="p-3 text-left">Officer</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job)=>(
                <tr key={job.id} className="border-b">
                  <td className="p-3">{job.job_number}</td>
                  <td className="p-3">{job.cargo_type}</td>
                  <td className="p-3">{job.vessel_name}</td>
                  <td className="p-3">{job.bl_number}</td>
                  <td className="p-3">{job.assigned_officer}</td>
                  <td className="p-3">{job.status}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}
