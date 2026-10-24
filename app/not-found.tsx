import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="container section center">
      <h1>404</h1>
      <p className="muted">Halaman yang Anda cari tidak ditemukan.</p>
      <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
    </section>
  );
}
