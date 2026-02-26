export default function ResearchServicePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <h1>Research Service</h1>
        <p>
          Get help expanding readings and identifying equity gaps in course
          material.
        </p>
      </div>

      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>Research Assistance</h2>
          <p>
            Share your syllabus and we’ll recommend resources aligned with your
            goals.
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
