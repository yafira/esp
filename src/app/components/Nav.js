import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          equitable syllabus project
        </Link>

        <div className="nav-links">
          <Link href="/team">Meet the Team</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/research-service">Research Service</Link>
          <Link href="/database" className="nav-cta">
            Research Database
          </Link>
        </div>
      </div>
    </nav>
  );
}
