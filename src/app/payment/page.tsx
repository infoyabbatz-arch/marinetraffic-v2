"use client";

import { useEffect, useState } from "react";

export default function PaymentPage() {

 const [reference,setReference] = useState("");
 const [payerName,setPayerName] = useState("");
 const [payerPhone,setPayerPhone] = useState("");
const [companyId,setCompanyId] = useState("");

useEffect(()=>{
  const id = localStorage.getItem("companyId") || "";
  setCompanyId(id);
},[]);


 async function submitPayment() {

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
       proofUrl:null
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
             Yas / Tigo Pesa
           </h2>
           <p>+255770806822</p>
           <p>MarineTraffic Group Limited</p>
         </div>

       </div>

       <div className="mt-10 space-y-4">

         <input
           className="w-full text-black rounded p-3"
           placeholder="Transaction Reference"
           value={reference}
           onChange={(e)=>setReference(e.target.value)}
         />

         <input
           className="w-full text-black rounded p-3"
           placeholder="Payer Name"
           value={payerName}
           onChange={(e)=>setPayerName(e.target.value)}
         />

         <input
           className="w-full text-black rounded p-3"
           placeholder="Phone Number"
           value={payerPhone}
           onChange={(e)=>setPayerPhone(e.target.value)}
         />

         <button
           onClick={submitPayment}
           className="bg-amber-500 text-black px-8 py-3 rounded font-bold"
         >
           Submit Payment
         </button>

       </div>

     </div>
   </main>
 );
}
