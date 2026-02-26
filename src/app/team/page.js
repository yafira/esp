export default function TeamPage() {
  return (
    <main className="page container">
      <div className="page-header">
        <h1>Meet the Team</h1>
        <p>Researchers and collaborators supporting equity-aligned teaching.</p>
      </div>

      <div className="team-grid">
        {[
          "ESP Researcher",
          "Faculty Advisor",
          "Student Researcher",
          "Collaborator",
        ].map((role) => (
          <div className="panel panel-cream" key={role}>
            <h2>{role}</h2>
            <p className="muted">Add names + bios here.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
