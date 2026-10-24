import Image from "next/image";

export type IconName =
  | "server" | "cloud" | "shield" | "lightbulb" | "link"
  | "chart" | "check" | "zap" | "target";

export default function Icon({ name }: { name: IconName }) {
  return <Image src={`/images/icons/${name}.png`} alt="" width={56} height={56} className="icon-img" />;
}
