import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import { SERVICES, getService } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

// dynamic route: satu file ini melayani /layanan/managed-it, /layanan/cloud-solutions, dst
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getService(slug)?.nama ?? "Layanan" };
}

export default async function DetailLayanan({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const lainnya = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader judul={service.nama} sub={service.ringkas} />

      <section className="container section two-col">
        <div>
          <h2>Tentang Layanan</h2>
          <p>{service.deskripsi}</p>
          <h3>Yang Anda dapatkan</h3>
          <ul className="checklist">
            {service.fitur.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <ButtonLink href="/kontak">Konsultasi Layanan Ini</ButtonLink>
        </div>

        <aside className="panel">
          <h3>Layanan Lainnya</h3>
          <ul className="plain">
            {lainnya.map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan/${s.slug}`}>{s.nama}</Link>
              </li>
            ))}
          </ul>
          <Link href="/layanan" className="card-link">&larr; Semua layanan</Link>
        </aside>
      </section>
    </>
  );
}
