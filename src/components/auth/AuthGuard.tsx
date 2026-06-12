"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function AuthGuard({
  children,
}:{
  children: React.ReactNode;
}) {

  const router = useRouter();
  const [ready,setReady] = useState(false);

  useEffect(() => {
    async function check() {

      const {
        data: { session }
      } = await supabaseBrowser.auth.getSession();

      if(!session){
        router.replace("/portal/login");
        return;
      }

      setReady(true);
    }

    check();
  }, [router]);

  if(!ready){
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
