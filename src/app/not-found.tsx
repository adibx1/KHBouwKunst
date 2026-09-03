import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pad-xl not-found">
      <p className="kicker">404</p>
      <h1 className="title-page">Deze pagina bestaat niet</h1>
      <p className="lede">
        De pagina die u zoekt is verplaatst of bestaat niet meer. Bekijk onze diensten of neem
        contact op, dan helpen we u verder.
      </p>
      <div className="chip-row">
        <Link href="/" className="chip">
          Naar de homepage
        </Link>
        <Link href="/diensten" className="chip">
          Diensten
        </Link>
        <Link href="/contact" className="chip">
          Contact
        </Link>
      </div>
    </section>
  );
}
