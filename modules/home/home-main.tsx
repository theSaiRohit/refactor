import Image from "next/image";
import { useRef } from "react";

export default function HomeMain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <section className="home-heading" ref={sectionRef}>
      <div className="img-container bg-img-container">
        <Image
          loading="eager"
          src="/assets/images/home-bg.webp"
          alt="3D Swirl"
          fill
          sizes="100%"
          className="bg-img"
          role="img"
          placeholder="empty"
        />
      </div>
      <main className="main">
        <h1 className="company-heading" ref={headingRef}>
          The Bunch
        </h1>
      </main>
    </section>
  );
}
