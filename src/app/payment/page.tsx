"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function PaymentPage() {

 const [reference,setReference] = useState("");
 const [payerName,setPayerName] = useState("");
 const [payerPhone,setPayerPhone] = useState("");
const [companyId,setCompanyId] = useState("");
const [proofFile,setProofFile] = useState<File | null>(null);

useEffect(()=>{
  async function loadCompany(){
    const {
      data:{user}
    } = await supabase.auth.getUser();

    if(!user) return;

    const { data: membership } = await supabase
      .from("organization_users")
      .select("company_id")
      .eq("user_id", user.id)
      .single();

    if(membership?.company_id){
      setCompanyId(membership.company_id);
    }
  }

  loadCompany();
},[]);


 
async function uploadProof() {
  if(!proofFile) return null;

  const fileName =
    Date.now() + "-" + proofFile.name.replace(/\s+/g,"-");

  const { error } = await supabase.storage
    .from("payment-proofs")
    .upload(fileName, proofFile, {
      upsert: true
    });

  if(error){
    console.error(error);
    return null;
  }

  const { data } = supabase.storage
    .from("payment-proofs")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

async function submitPayment() {

   const proofUrl = await uploadProof();

await fetch("/api/payments/submit",{
     method:"POST",
     headers:{ "Content-Type":"application/json" },
     body:JSON.stringify({
       companyId,
       amount:49,
       method:"Bank Transfer",
       reference,
       payerName,
       payerPhone,
       proofUrl
     })
   });

   alert("Payment submitted for approval.");
 }

 return (
   <main className="min-h-screen bg-slate-950 text-white p-10">
     <div className="max-w-4xl mx-auto">

       <h1 className="text-5xl font-bold mb-8">
         ERP Subscription Payment
       </h1>

       <div className="grid md:grid-cols-3 gap-6">

         <div className="border rounded-xl p-5">
           <h2 className="font-bold text-xl mb-4">CRDB BANK</h2>
           <p>MarineTraffic Group Limited</p>
           <p>USD: 10314220566</p>
           <p>TZS: 10313995564</p>
         </div>

         <div className="border rounded-xl p-5">
           <h2 className="font-bold text-xl mb-4">NMB BANK</h2>
           <p>MarineTraffic Group Limited</p>
           <p>24810035882</p>
         </div>

         <div className="border rounded-xl p-5">
           <h2 className="font-bold text-xl mb-4">
             Yas / Tigo Pesa (Lipa Namba)
           </h2>
           <p className="font-bold text-amber-400">Lipa Namba: 45212958</p>
           <p>MarineTraffic Group Limited</p>
         </div>

       </div>

       <div className="mt-10 mb-6 rounded-xl border border-amber-500/30 bg-slate-900 p-4">
<p className="text-amber-400 font-semibold">
Baada ya kufanya malipo, jaza taarifa hapa chini na bonyeza Submit Payment For Approval.
</p>
</div>

<div className="mt-6 space-y-4">

         <input
           className="w-full rounded p-3 bg-white text-black border border-slate-300"
           placeholder="Transaction Reference"
           value={reference}
           onChange={(e)=>setReference(e.target.value)}
         />

         <input
           className="w-full rounded p-3 bg-white text-black border border-slate-300"
           placeholder="Payer Name"
           value={payerName}
           onChange={(e)=>setPayerName(e.target.value)}
         />

         <input
           className="w-full rounded p-3 bg-white text-black border border-slate-300"
           placeholder="Phone Number"
           value={payerPhone}
           onChange={(e)=>setPayerPhone(e.target.value)}
         />

         <input
type="file"
accept=".jpg,.jpeg,.png,.pdf"
className="w-full rounded p-3 bg-white text-black border border-slate-300"
onChange={(e)=>setProofFile(e.target.files?.[0] || null)}
/>

<button
           onClick={submitPayment}
           className="bg-amber-500 text-black px-8 py-3 rounded font-bold"
         >
           Submit Payment For Approval
         </button>

       </div>

     </div>
   </main>
 );
}
