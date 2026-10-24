import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = { title: "Layanan" };

export default function Layanan() {
  return (
    <>
      <PageHeader judul="Layanan Kami" sub="Pilih layanan untuk melihat detailnya." />
      <section className="container section">
        <div className="grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
