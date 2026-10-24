"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [pesan, setPesan] = useState<{ teks: string; ok: boolean } | null>(null);

  const kirim = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const nama = String(data.get("nama") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const isi = String(data.get("isi") ?? "").trim();

    if (!nama || !email || !isi) return setPesan({ teks: "Mohon lengkapi semua kolom.", ok: false });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setPesan({ teks: "Format email belum benar.", ok: false });

    setPesan({ teks: `Terima kasih, ${nama}! Tim kami akan segera menghubungi Anda.`, ok: true });
    f.reset();
  };

  return (
    <form className="form" onSubmit={kirim} noValidate>
      <label>Nama<input name="nama" type="text" placeholder="Nama lengkap" /></label>
      <label>Email<input name="email" type="email" placeholder="nama@perusahaan.com" /></label>
      <label>Pesan<textarea name="isi" rows={5} placeholder="Ceritakan kebutuhan IT Anda"></textarea></label>
      <button type="submit" className="btn btn-primary">Kirim Pesan</button>
      {pesan && <p className={`alert ${pesan.ok ? "ok" : "err"}`} role="alert">{pesan.teks}</p>}
    </form>
  );
}
