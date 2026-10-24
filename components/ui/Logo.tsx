import Image from "next/image";
import Link from "next/link";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" onClick={onClick} aria-label="Garuda Byte - Beranda">
      <Image src="/images/logo-garuda.png" alt="" width={404} height={291} className="brand-icon" />
      <span>
        Garuda<em>Byte</em>
      </span>
    </Link>
  );
}
