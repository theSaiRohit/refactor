import Link from "next/link";
import { ctaDescription, ctaHeader } from "./home-data";

export default function HomeCta() {
  return (
    <section className="home-cta">
      <h2 className="cta-heading">{ctaHeader}</h2>
      <p className="cta-para">{ctaDescription}</p>
      <Link href="/" className="cta-btn">
        Sign Up Now
      </Link>
    </section>
  );
}
