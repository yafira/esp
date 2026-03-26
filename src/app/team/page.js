"use client";

const TEAM = [
  {
    name: "Member Name",
    role: "Research Lead",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Database Design",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Curriculum Research",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Outreach",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Web Development",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Content Strategy",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Community Engagement",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "UX Research",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Accessibility",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Member Name",
    role: "Equity Frameworks",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const PAST_AND_CONTRIBUTORS = [
  "Past Member Name",
  "Past Member Name",
  "Past Member Name",
  "Past Member Name",
  "Contributor Name",
  "Contributor Name",
  "Contributor Name",
  "Contributor Name",
  "Past Member Name",
];

function MemberCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-avatar">
        <div className="team-avatar-placeholder">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="24" cy="18" r="9" fill="rgba(30,27,24,0.18)" />
            <path d="M6 42 C6 30 42 30 42 42" fill="rgba(30,27,24,0.18)" />
          </svg>
        </div>
        <div className="team-bio-overlay">
          <p>{member.bio}</p>
        </div>
      </div>
      <div className="team-card-info">
        <div className="team-card-name">{member.name}</div>
        <div className="team-card-role">{member.role}</div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>Meet the Team</h1>
          <p>
            Researchers and collaborators supporting equity-aligned teaching.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>

        <section className="team-past">
          <h2 className="team-past-title">Past Members & Contributors</h2>
          <p className="team-past-list">
            {PAST_AND_CONTRIBUTORS.map((name, i) => (
              <span key={i}>
                {name}
                {i < PAST_AND_CONTRIBUTORS.length - 1 && (
                  <span className="team-dot"> · </span>
                )}
              </span>
            ))}
          </p>
        </section>
      </div>
    </main>
  );
}
