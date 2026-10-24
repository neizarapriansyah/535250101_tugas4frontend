interface Props {
  judul: string;
  sub?: string;
}

export default function PageHeader({ judul, sub }: Props) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{judul}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
