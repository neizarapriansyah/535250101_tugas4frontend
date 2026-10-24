import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card">
      <Icon name={service.ikon} />
      <h3>{service.nama}</h3>
      <p className="muted">{service.ringkas}</p>
      {/* dynamic route: /layanan/[slug] */}
      <Link href={`/layanan/${service.slug}`} className="card-link">
        Selengkapnya &rarr;
      </Link>
    </article>
  );
}
