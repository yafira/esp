import Link from "next/link";
import { bp } from "@/lib/basePath";

export default function HomePage() {
  return (
    <main className="home3">
      <section className="hero3" aria-labelledby="hero-title">
        <div className="hero3-paper">
          <img
            src={`${bp}/scribble.png`}
            alt=""
            aria-hidden="true"
            className="doodle doodle--scribble"
          />
          <img
            src={`${bp}/doodle.png`}
            alt=""
            aria-hidden="true"
            className="doodle doodle--flower"
          />
          <img
            src={`${bp}/paper.png`}
            alt=""
            aria-hidden="true"
            className="doodle doodle--paper"
          />
          <img
            src={`${bp}/star.png`}
            alt=""
            aria-hidden="true"
            className="doodle doodle--star-img"
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

          <div className="testimonials">
            <div className="testimonial-blob testimonial-blob--lavender">
              <p className="testimonial-quote">
                &ldquo;Working with Divya was a great experience — the syllabus
                for the class was one which had undergone many iterations over
                the years, with several faculty adding to it, so it was nice to
                have the opportunity to review it with fresh eyes, and
                especially through the lens of equity and inclusion. I came away
                with a few new references to add to the course materials, and
                overall appreciated talking through the underlying assumptions
                of the course.&rdquo;
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">Sarah Rothberg</span>
                <span className="testimonial-role">
                  Assistant Arts Professor
                </span>
              </div>
            </div>
            <div className="testimonial-blob testimonial-blob--pink">
              <p className="testimonial-quote">
                &ldquo;Designing a syllabus can be a lonely process. However, it
                can be different with ESP! I worked with a student researcher to
                find more example projects and readings by underrepresented
                groups to include in my syllabus. On top of practical help from
                the student researcher, it was a good opportunity for me to be
                more intentional and conscious about including diverse voices
                and role models in my course. More than others, I felt supported
                throughout the process!&rdquo;
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">Yeseul Song</span>
                <span className="testimonial-role">
                  Assistant Arts Professor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
