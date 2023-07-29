import Link from "next/link";
import useHeaderRef from "@/hooks/use-header-ref";

export default function Header() {
  const headerRef = useHeaderRef();
  return (
    <header className={`header`} ref={headerRef}>
      <nav className="nav">
        <Link href="/" className="nav-links">
          Home
        </Link>
        <Link href="/events" className="nav-links">
          Events
        </Link>
      </nav>
    </header>
  );
}
