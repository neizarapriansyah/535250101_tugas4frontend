interface Props {
  judul: string;
  sub?: string;
}

export default function SectionTitle({ judul, sub }: Props) {
  return (
    <div className="section-title">
      <h2>{judul}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}
