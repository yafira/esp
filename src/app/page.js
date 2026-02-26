import Link from "next/link";

function Doodles() {
  return (
    <>
      <div className="doodle doodle-star" aria-hidden="true">
        ✦
      </div>
      <div className="doodle doodle-squiggle" aria-hidden="true">
        ~~~
      </div>
      <div className="doodle doodle-flower" aria-hidden="true">
        ❁
      </div>
      <div className="tape tape-left" aria-hidden="true" />
      <div className="tape tape-right" aria-hidden="true" />
    </>
  );
}

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <Doodles />

        <div className="hero-inner">
          <div className="hero-badge">built for ITP/IMA professors</div>

          <h1 className="hero-title">Making Education More Inclusive</h1>

          <p className="hero-subtitle">
            Free tools and frameworks to help you create an equity-aligned
            syllabus.
          </p>

          <div className="hero-actions">
            <Link className="button button-blue" href="/guide">
              Syllabus Guide
            </Link>
            <Link className="button button-pink" href="/database">
              Research Database
            </Link>
          </div>

          <p className="hero-note">
            A syllabus is more than a contract. It is a collaboration.
          </p>

          <div className="hero-learn">
            <Link href="/about" className="learn-link">
              learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="home-grid container">
        <div className="panel panel-cream">
          <h2>Syllabus Improvement Services</h2>
          <p>
            Request support reviewing a syllabus, identifying gaps, and
            expanding readings with equity-aligned resources.
          </p>
          <Link className="button button-mint" href="/research-service">
            Get Research Service
          </Link>
        </div>

        <div className="panel panel-lav">
          <h2>Contribute</h2>
          <p>
            Suggest resources, share frameworks, and help grow the research
            database.
          </p>
          <Link className="button button-ink" href="/contribute">
            Suggest Resources
          </Link>
        </div>

        <div className="panel panel-blue">
          <h2>Meet the Team</h2>
          <p>
            Learn about the researchers, collaborators, and values behind ESP.
          </p>
          <Link className="button button-ink" href="/team">
            Meet the Team
          </Link>
        </div>
      </section>
    </main>
  );
}
