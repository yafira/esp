import Image from "next/image";

export default function ContributePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <div className="research-service-title-row">
          <Image
            src="/puzzlepiece.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="research-service-icon"
          />
          <div>
            <h1>Contribute</h1>
            <p>Suggest resources, frameworks, or updates to the database.</p>
          </div>
        </div>
      </div>
      <div className="panel panel-cream">
        <h2>Suggest a resource</h2>
        <p>
          Add a link, creator info, keywords, and any context you think is
          helpful.
        </p>
        <p className="muted">
          next step: wiring this to a Google Form for resource submissions.
        </p>
      </div>
    </main>
  );
}
