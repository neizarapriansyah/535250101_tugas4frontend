import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Tentang Kami" };

const NILAI: { ikon: IconName; judul: string; teks: string }[] = [
  { ikon: "check", judul: "Integritas", teks: "Transparan dalam setiap rekomendasi dan biaya." },
  { ikon: "zap", judul: "Responsif", teks: "Tim siap membantu dengan waktu tanggap yang jelas." },
  { ikon: "target", judul: "Berdampak", teks: "Solusi dipilih berdasarkan hasil nyata bagi bisnis." },
];

export default function Tentang() {
  return (
    <>
      <PageHeader judul="Tentang Garuda Byte" sub="Mengenal siapa kami dan apa yang kami perjuangkan." />

      <section className="container section two-col">
        <div>
          <h2>Cerita Kami</h2>
          <p>
            Garuda Byte lahir dari keyakinan bahwa setiap bisnis, besar maupun kecil, berhak atas teknologi yang andal dan aman. Kami memulai sebagai tim kecil yang membantu usaha lokal menata infrastruktur IT-nya.
          </p>
          <p>
            Kini kami melayani berbagai industri dengan layanan terkelola, cloud, dan keamanan siber, dengan pendekatan yang sama: mendengarkan dulu, baru merancang solusi.
          </p>
        </div>
        <div className="panel">
          <h3>Visi</h3>
          <p>Menjadi mitra IT tepercaya yang membuat teknologi mudah bagi setiap bisnis di Indonesia.</p>
          <h3>Misi</h3>
          <p>Menyediakan layanan IT yang andal, aman, dan terjangkau, didukung tim yang peduli.</p>
        </div>
      </section>

      <section className="container section">
        <SectionTitle judul="Nilai Kami" />
        <div className="grid">
          {NILAI.map((n) => (
            <article className="card" key={n.judul}>
              <Icon name={n.ikon} />
              <h3>{n.judul}</h3>
              <p className="muted">{n.teks}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
