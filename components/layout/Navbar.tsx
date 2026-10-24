"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";

const LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // "/" aktif hanya di beranda; menu lain tetap aktif pada sub-halamannya (mis. /layanan/cloud-solutions)
  const aktif = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo onClick={() => setOpen(false)} />

        <button
          className="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${aktif(l.href) ? " active" : ""}`}
              aria-current={aktif(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
