import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-white pt-20 pb-10"
    >
      <Container>

        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <Image
              src="/images/logo-full.png"
              alt="MarineTraffic Group"
              width={180}
              height={55}
              className="mb-6"
            />

            <p className="text-slate-300 leading-8">
              Where Local Meets Global
            </p>

            <p className="mt-4 text-slate-400">
              Customs Clearance • Freight Forwarding •
              Trade Compliance • Warehousing • Transport
            </p>

            <a
              href="https://wa.me/255655594986"
              target="_blank"
              className="inline-block mt-6 rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-900 hover:bg-amber-400 transition"
            >
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Quick Links
            </h3>

            <div className="space-y-3 text-slate-300">
              <Link href="/">Home</Link><br />
              <Link href="/about">About</Link><br />
              <Link href="/services">Services</Link><br />
              <Link href="/contact">Contact</Link><br />
              <Link href="/quote">Request Quote</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Services
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>Customs Clearance</p>
              <p>Ocean Freight</p>
              <p>Air Freight</p>
              <p>Road Transport</p>
              <p>Import & Export Permits</p>
              <p>Trade Compliance</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>+255 742 716 932</p>
              <p>+255 655 594 986</p>
              <p>+255 717 009989</p>

              <p>info@marinetraffic.co.tz</p>

              <p>
                One Stop Center Tower,
                
                Sokoine Drive,
                Dar es Salaam
              </p>

              <a
                href="https://instagram.com/faithfulyabba"
                target="_blank"
                className="text-amber-400 font-semibold"
              >
                @faithfulyabba
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MarineTraffic Group.
            All Rights Reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Customs • Logistics • Trade Compliance • East Africa
          </p>

        </div>

      </Container>
    </footer>
  );
}
