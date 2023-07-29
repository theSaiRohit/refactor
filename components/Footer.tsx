import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { footerText } from "@/common-data";
import useHeaderRef from "@/hooks/use-header-ref";

export default function Footer() {
  const headerRef = useHeaderRef();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const observerOptions = useRef<IntersectionObserverInit>({
    root: null,
    threshold: 0.275
  });
  const changeHeaderPos = useCallback(() => {
    if (headerRef.current) {
      const docHeight = document.body.scrollHeight;
      const num = footerRef.current?.clientHeight;
      const diff = docHeight - (num ?? 0) + 80;
      headerRef.current.style.setProperty("position", "absolute");
      headerRef.current.style.setProperty("top", `${diff}px`);
    }
  }, [headerRef]);
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const intersecting = entries[0]?.isIntersecting;
      if (intersecting) {
        changeHeaderPos();
      } else {
        if (headerRef.current) {
          headerRef.current.style.top = "calc(90vh - var(--header-height))";
          headerRef.current.style.setProperty("position", "fixed");
          headerRef.current.style.transform = "translate(-50%,0)";
        }
      }
    },
    [changeHeaderPos, headerRef]
  );
  useEffect(() => {
    const footerObserver = new IntersectionObserver(observerCallback, observerOptions.current);
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
      return () => {
        footerObserver.disconnect();
      };
    }
    return;
  }, [observerCallback]);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="img-container footer-img-container">
        <Image src="/assets/images/bg.png" alt="3D Swirl" fill sizes="100%" className="footer-img" />
      </div>
      <span className="year-span">{footerText}</span>
      <nav className="footer-links">
        <a href="https://twitter.com" title="The Bunch Ai | Twitter">
          <BsTwitter />
        </a>
        <a href="https://instagram.com" title="The Bunch Ai | Instagram">
          <BsInstagram />
        </a>
        <a href="https://discord.com" title="The Bunch Ai | Discord">
          <BsDiscord />
        </a>
      </nav>
    </footer>
  );
}
