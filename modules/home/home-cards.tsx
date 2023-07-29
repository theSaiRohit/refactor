import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { homeCardsData } from "./home-data";

export default function HomeCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const observerOptions = useRef({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  const cardArray = useRef<Element[]>([]);
  const lastElem = useRef<Element | null>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries, obv) => {
      entries.forEach((card) => {
        if (card.isIntersecting) {
          const target = card.target;
          target.classList.add("roll-in");
          obv.unobserve(target);
          if (target === lastElem.current) {
            obv.disconnect();
          }
        }
      });
    },
    []
  );

  const cardObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    cardObserver.current = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );

    if (containerRef.current) {
      cardArray.current = Array.from(
        containerRef.current?.querySelectorAll(".info-card") ?? []
      );
      cardArray.current.forEach((child, index: number) => {
        cardObserver.current?.observe(child);
        if (index === cardArray.current.length - 1) {
          lastElem.current = child;
        }
      });
      return () => {
        cardObserver.current?.disconnect?.();
        cardArray.current = [];
        cardObserver.current = null;
        lastElem.current = null;
      };
    }
    return () => {
      cardObserver.current = null;
    };
  }, [observerCallback]);

  return (
    <section className="home-cards" ref={containerRef}>
      {homeCardsData.map((data, index: number) => {
        return (
          <div className="info-card" key={index}>
            <div className="cards-img-container img-container">
              <Image
                src={data.imgSrc}
                alt={data.alt}
                fill
                sizes="100%"
                className="cards-img"
              />
            </div>
            <div className="text-container">
              <h3 className="info-card-header">{data.heading}</h3>
              <p className="info-para">{data.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
