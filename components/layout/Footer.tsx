import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted">Mitra teknologi informasi untuk bisnis yang ingin tumbuh dan tetap aman.</p>
        </div>
        <div>
          <h4>Layanan</h4>
          <ul>
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan/${s.slug}`}>{s.nama}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Perusahaan</h4>
          <ul>
            <li><Link href="/tentang">Tentang Kami</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; 2026 Garuda Byte. Tugas Front-End Programming</p>
    </footer>
  );
}
