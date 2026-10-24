import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function ButtonLink({ href, children, variant = "primary" }: Props) {
  return (
    <Link href={href} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}
