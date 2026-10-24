import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Kontak" };

export default function Kontak() {
  return (
    <>
      <PageHeader judul="Hubungi Kami" sub="Ceritakan kebutuhan Anda, kami siap membantu." />
      <section className="container section two-col">
        <div>
          <h2>Informasi Kontak</h2>
          <p><strong>Alamat:</strong> Jl. Garuda No. 10, Jakarta Selatan</p>
          <p><strong>Email:</strong> hello@garudabyte.com</p>
          <p><strong>Telepon:</strong> 021-0000-0000</p>
          <p><strong>Jam kerja:</strong> Senin-Jumat, 09.00-17.00 WIB</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
