import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-title">Equitable Syllabus Project</div>
          <div className="footer-muted">Built for ITP/IMA</div>
        </div>

        <div className="footer-col">
          <div className="footer-label">Explore</div>
          <Link href="/database">Research Database</Link>
          <Link href="/guide">Syllabus Guide</Link>
          <Link href="/research-service">Research Service</Link>
          <Link href="/team">Meet the Team</Link>
          <Link href="/contribute">Contribute</Link>
        </div>

        <div className="footer-col">
          <div className="footer-label">Contact</div>
          <a href="mailto:esp@nyu.edu">esp@nyu.edu</a>
        </div>
      </div>
    </footer>
  );
}
