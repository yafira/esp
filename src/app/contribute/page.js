export default function ContributePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <h1>Contribute</h1>
        <p>Suggest resources, frameworks, or updates to the database.</p>
      </div>

      <div className="panel panel-cream">
        <h2>Suggest a resource</h2>
        <p>
          Add a link, creator info, keywords, and any context you think is
          helpful.
        </p>
        <p className="muted">
          next step: we’ll wire this to a form (google form or a simple next.js
          form).
        </p>
      </div>
    </main>
  );
}
