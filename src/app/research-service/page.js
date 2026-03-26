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
            <h1>Research Service</h1>
            <p>
              Get help expanding readings and identifying equity gaps in course
              material.
            </p>
          </div>
        </div>
      </div>
      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>Research Assistance</h2>
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
