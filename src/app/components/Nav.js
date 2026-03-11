"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setTimeout(() => setMenuOpen(false), 0);
  }, [pathname]);

  const links = [
    { href: "/guide", label: "Syllabus Guide" },
    { href: "/research-service", label: "Research Service" },
    { href: "/team", label: "Meet the Team" },
    { href: "/contribute", label: "Contribute" },
  ];

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav-inner">
        {/* wordmark */}
        <Link
          href="/"
          className="nav-logo"
          aria-label="Equitable Syllabus Project — home"
        >
          <span className="nav-logo-dot" aria-hidden="true" />
          esp
        </Link>

        {/* desktop links */}
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? " nav-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/database"
            className={`nav-cta${pathname === "/database" ? " nav-cta--active" : ""}`}
          >
            Research Database ↗
          </Link>
        </nav>

        {/* mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`ham-bar${menuOpen ? " open" : ""}`} />
          <span className={`ham-bar${menuOpen ? " open" : ""}`} />
          <span className={`ham-bar${menuOpen ? " open" : ""}`} />
        </button>
      </div>

      {/* mobile drawer */}
      <nav
        id="mobile-menu"
        className={`nav-mobile${menuOpen ? " nav-mobile--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-mobile-link${pathname === href ? " nav-mobile-link--active" : ""}`}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/database"
          className="nav-mobile-cta"
          tabIndex={menuOpen ? 0 : -1}
        >
          Research Database ↗
        </Link>
      </nav>
    </header>
  );
}
