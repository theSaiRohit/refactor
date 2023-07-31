import Image from "next/image";
import { useRef } from "react";

export default function EventHeading() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <section className="event-heading" ref={sectionRef}>
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
      <div className="main">
        <h1 className="company-heading" ref={headingRef}>
          Events
        </h1>
      </div>
    </section>
  );
}
