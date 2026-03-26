import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <h1>Syllabus Guide</h1>
        <p>
          A template and reference to help build an equity-aligned syllabus.
        </p>
      </div>

      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>5 principles for inclusive teaching</h2>
          <p>Short, actionable principles you can apply immediately.</p>
          <Link className="button button-ink" href="/guide#principles">
            View principles
          </Link>
        </div>

        <div className="panel panel-lav">
          <h2>Checklist</h2>
          <p>A quick checklist to review your syllabus structure + tone.</p>
          <Link className="button button-ink" href="/guide#checklist">
            View checklist
          </Link>
        </div>
      </div>
    </main>
  );
}
