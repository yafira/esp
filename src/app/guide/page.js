import Image from "next/image";
import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <div className="research-service-title-row">
          <Image
            src="/guide.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="research-service-icon"
          />
          <div>
            <h1>Syllabus Guide</h1>
            <p>
              A template and reference to help build an equity-aligned syllabus.
            </p>
          </div>
        </div>
      </div>
      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>5 principles for inclusive teaching</h2>
          <p>Short, actionable principles you can apply immediately.</p>
          <Link className="button button-ink" href="/guide#principles">
            View principles
          </Link>
        </div>
        <div className="panel panel-cream">
          <div className="panel-title-row">
            <Image
              src="/check.png"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
            />
            <h2>Checklist</h2>
          </div>
          <p>A quick checklist to review your syllabus structure + tone.</p>
          <Link className="button button-ink" href="/guide#checklist">
            View checklist
          </Link>
        </div>
        <div className="panel panel-cream">
          <h2>Equity Language Bank</h2>
          <p>
            Copy-paste ready statements for accessibility, late work, AI policy,
            pronouns, and more.
          </p>
          <Link className="button button-ink" href="/guide#language">
            Browse language
          </Link>
        </div>
        <div className="panel panel-cream">
          <h2>Syllabus Template</h2>
          <p>
            A starter template with equity-aligned structure and example
            language you can adapt.
          </p>
          <Link className="button button-ink" href="/guide#template">
            View template
          </Link>
        </div>
        <div className="panel panel-cream">
          <h2>Land Acknowledgment Guide</h2>
          <p>
            How to write a land acknowledgment that is meaningful, not
            performative.
          </p>
          <Link className="button button-ink" href="/guide#land">
            Read the guide
          </Link>
        </div>
      </div>
    </main>
  );
}
