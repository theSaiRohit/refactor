import Image from "next/image";
import { useRef } from "react";

export default function RegisterHeading() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <section className="register-heading" ref={sectionRef}>
      <div className="img-container bg-img-container">
        <Image
          loading="eager"
          src="/assets/images/home-bg.webp"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="bg-img"
          role="img"
          placeholder="empty"
        />
      </div>
      <div className="main">
        <h1 className="company-heading" ref={headingRef}>
          Register
        </h1>
      </div>
    </section>
  );
}
