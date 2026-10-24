import ButtonLink from "@/components/ui/ButtonLink";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";

const STATS = [
  { angka: "50+", label: "Klien dilayani" },
  { angka: "24/7", label: "Pemantauan sistem" },
  { angka: "99,9%", label: "Target uptime" },
];

export default function Beranda() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Mitra Teknologi Informasi Anda</p>
          <h1>Infrastruktur IT yang andal untuk bisnis yang terus bertumbuh</h1>
          <p className="hero-sub">
            Garuda Byte membantu perusahaan mengelola, mengamankan, dan mengembangkan teknologinya, sehingga Anda bisa fokus pada hal yang paling penting.
          </p>
          <div className="btn-row">
            <ButtonLink href="/layanan">Lihat Layanan</ButtonLink>
            <ButtonLink href="/kontak" variant="outline">Hubungi Kami</ButtonLink>
          </div>
        </div>
      </section>

      <section className="container stats">
        {STATS.map((s) => (
          <div key={s.label}>
            <strong>{s.angka}</strong>
            <span className="muted">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="container section">
        <SectionTitle judul="Layanan Unggulan" sub="Solusi IT yang kami siapkan untuk berbagai kebutuhan bisnis." />
        <div className="grid">
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="center">
          <ButtonLink href="/layanan" variant="outline">Semua Layanan</ButtonLink>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Siap meningkatkan IT perusahaan Anda?</h2>
          <p>Konsultasikan kebutuhan Anda dengan tim kami, tanpa biaya.</p>
          <ButtonLink href="/kontak">Mulai Konsultasi</ButtonLink>
        </div>
      </section>
    </>
  );
}
