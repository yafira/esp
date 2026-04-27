import Image from "next/image";

export default function ResearchServicePage() {
  return (
    <main className="page container">
      <div className="page-header research-service-header">
        <div className="research-service-title-row">
          <Image
            src="/archive.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="research-service-icon"
          />
          <div>
            <a href="mailto:esp@itp.nyu.edu" className="button button-mint">
              Request research service ↗
            </a>
            <p>
              Get help expanding readings and identifying equity gaps in course
              material.
            </p>
          </div>
        </div>
      </div>
      <div className="page-cards">
        <div className="panel panel-cream">
          <a href="mailto:esp@itp.nyu.edu" className="button button-ink">
            Learn about the workshop ↗
          </a>
          <p>
            Share your syllabus and our team will recommend resources aligned
            with your goals.
          </p>
          <button className="button button-mint" type="button">
            Request research service
          </button>
        </div>
        <div className="panel panel-blue">
          <h2>Syllabus Review Workshop</h2>
          <p>
            Collaborative sessions to rework a syllabus with equity-aligned
            practice.
          </p>
          <button className="button button-ink" type="button">
            Learn about the workshop
          </button>
        </div>
      </div>
    </main>
  );
}
