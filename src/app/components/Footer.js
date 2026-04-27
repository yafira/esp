import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-title">
            <span className="nav-logo-dot" style={{ marginRight: "8px" }} />
            Equitable Syllabus Project
          </div>
          <div className="footer-muted">
            Built for ITP / IMA instructors at NYU.
          </div>
          <div className="footer-muted" style={{ marginTop: "8px" }}>
            Because every syllabus is a statement of values.
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} ESP</div>
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
          <div className="footer-label">NYU Diversity Resources</div>
          <a
            href="https://tisch.nyu.edu/diversity"
            target="_blank"
            rel="noreferrer"
          >
            Tisch Office of Diversity ↗
          </a>
          <a
            href="https://tisch.nyu.edu/diversity/IDBEA_Commitments"
            target="_blank"
            rel="noreferrer"
          >
            Tisch Commitments to Diversity ↗
          </a>
          <a
            href="https://www.nyu.edu/life/global-inclusion-and-diversity.html"
            target="_blank"
            rel="noreferrer"
          >
            NYU Global Inclusion and Diversity ↗
          </a>
          <a
            href="https://www.nyu.edu/about/policies-guidelines-compliance/equal-opportunity/bias-response/report-a-bias-incident.html"
            target="_blank"
            rel="noreferrer"
          >
            NYU Bias Response Line ↗
          </a>
        </div>
        <div className="footer-col">
          <div className="footer-label">Contact</div>
          <a href="mailto:esp@nyu.edu">esp@nyu.edu</a>
          <div className="footer-label" style={{ marginTop: "20px" }}>
            Suggest a Resource
          </div>
          <a
            href="https://forms.gle/gmWGFsHdtZoXxxR8A"
            target="_blank"
            rel="noreferrer"
          >
            Submit via Google Form ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
