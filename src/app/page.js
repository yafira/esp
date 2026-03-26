import Link from "next/link";

function DoodleSquiggle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 20 C14 8, 24 32, 34 20 C44 8, 54 32, 64 20 C74 8, 84 32, 94 20 C104 8, 114 32, 120 20"
        stroke="#a8d5b5"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="home3">
      <section className="hero3" aria-labelledby="hero-title">
        <div className="hero3-paper">
          {/* DOODLE DECORATIONS */}
          <DoodleSquiggle className="doodle doodle--squiggle-b" />

          <img
            src="/paper.png"
            alt=""
            aria-hidden="true"
            className="doodle doodle--paper"
          />
          <img
            src="/star.png"
            alt=""
            aria-hidden="true"
            className="doodle doodle--star-img"
          />

          {/* NOTEBOOK IMAGE */}
          <img
            src="/paper.png"
            alt=""
            aria-hidden="true"
            className="doodle doodle--paper"
          />

          <div className="hero3-body">
            <div className="hero3-eyebrow" aria-hidden="true">
              <span className="dot3" />
              for itp / ima instructors
            </div>

            <h1 className="hero3-title" id="hero-title">
              Equitable
              <br />
              Syllabus
              <br />
              Project
            </h1>

            <p className="hero3-subheadline">
              Build a syllabus that feels like an invitation.
            </p>

            <p className="hero3-lede">
              Practical frameworks, example language, and a searchable research
              database to help you align course structure with equity, clarity,
              and care.
            </p>

            <div className="hero3-actions">
              <Link className="cta3 cta3-primary" href="/database">
                Explore the database <span aria-hidden="true">↗</span>
              </Link>
              <Link className="cta3 cta3-ghost" href="/guide">
                Open the guide <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero3-meta" role="list" aria-label="Quick facts">
            <div className="meta3" role="listitem">
              <div className="meta3-k">Use it for</div>
              <div className="meta3-v">
                readings, policies, assignments, access
              </div>
            </div>
            <div className="meta3" role="listitem">
              <div className="meta3-k">Includes</div>
              <div className="meta3-v">
                templates, statements, research links
              </div>
            </div>
            <div className="meta3" role="listitem">
              <div className="meta3-k">Support</div>
              <div className="meta3-v">workshops + research assistance</div>
            </div>
          </div>

          <div className="hero3-deck">
            <Link className="card3" href="/guide">
              <div className="card3-top">
                <span className="pill3 pill3-guide">guide</span>
                <span className="pill3 pill3-muted">
                  frameworks + templates
                </span>
              </div>
              <h2>Syllabus Guide</h2>
              <p>
                Clear, equity-aligned structure with example language you can
                adapt.
              </p>
              <div className="card3-go" aria-hidden="true">
                open →
              </div>
            </Link>

            <Link className="card3" href="/database">
              <div className="card3-top">
                <span className="pill3 pill3-database">database</span>
                <span className="pill3 pill3-muted">search + filter</span>
              </div>
              <h2>Research Database</h2>
              <p>
                Articles, books, tools, and media — organized for teaching
                contexts.
              </p>
              <div className="card3-go" aria-hidden="true">
                browse →
              </div>
            </Link>

            <Link className="card3" href="/research-service">
              <div className="card3-top">
                <span className="pill3 pill3-service">service</span>
                <span className="pill3 pill3-muted">request support</span>
              </div>
              <h2>Research Service</h2>
              <p>
                Help identifying gaps and broadening readings aligned with your
                goals.
              </p>
              <div className="card3-go" aria-hidden="true">
                request →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
