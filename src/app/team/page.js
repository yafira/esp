"use client";

const TEAM = [
  {
    name: "Blair Simmons",
    role: "Project Lead",
    bio: null,
    avatar: null,
    photo: null,
  },
  {
    name: "Kayley Chery",
    role: "Research Lead",
    bio: null,
    avatar: null,
    photo: null,
  },
  {
    name: "Liyan Abraham",
    role: "Project Manager",
    bio: null,
    avatar: null,
    photo: null,
  },
  {
    name: "Audrey Oh",
    role: "Research Specialist",
    bio: "Audrey Oh (Korean, b. 1996) is a new media artist who repurposes technology as a vessel for ritual, tradition, and collective meaning-making. With a background in race and ethnic studies and visual arts, her work draws on performance, cultural storytelling, and non-traditional research methodologies to explore the gaps where science and technology leave a vacuum. She is currently a second-year student in NYU's Interactive Telecommunications Program (ITP).",
    avatar: "/assets/audrey1.png",
    photo: "/assets/audrey2.png",
  },
  {
    name: "Sophia Collender",
    role: "Research Specialist",
    bio: "Sophia Collender is a New York-based artist and researcher focused on investigating the systems that underpin daily life. Through microscopic and time-bending film, web development, and experiments in human computer interaction, Sophia uses materiality as a tool to explore the various scales of activity at work in our world.",
    avatar: "/assets/sophia1.png",
    photo: "/assets/sophia2.jpg",
  },
  {
    name: "Yafira Martinez",
    role: "Lead Web Developer",
    bio: "Yafira Martinez (electrocute ✿) is a computer programmer, designer, and maker building at the intersection of software, hardware, and design. She creates web, UI, and physical interfaces that blend code, craft, and aesthetics into human-centered technologies — from e-textiles and soft circuits to tools for everyday makers. Currently an NYU ITP graduate student, her practice spans interaction design, physical computing, fabrication, and creative experimentation, with a particular interest in calm and soft computing. She is passionate about open source and deeply committed to building tools that make making more accessible.",
    avatar: "/assets/yafira1.png",
    photo: "/assets/yafira2.jpg",
  },
  {
    name: "Christina Tran",
    role: null,
    bio: "Christina, also known as tunapee, is a Vietnamese-American creative technologist. She is a first year ITP student with a background in data science, physics, and industrial design. Her work explores how technology as a creative tool produces emergent and unexpected outcomes, and how whimsy and absurdity can serve as a critical lens to ask what our motivations are for building the things that we do. She makes silly videos to share her fabrication and web art work online.",
    avatar: "/assets/christina1.png",
    photo: "/assets/christina2.png",
  },
  {
    name: "Nava Daniel",
    role: null,
    bio: "Hi! I'm Nava. I just finished my first year at ITP and I'm excited for thesis in my second year! I'm very passionate about ludomusicology — game/system theory + ethnomusicology and instrument design — as a lens for critical geography and legal philosophy. Lately, I've been studying French fin de siècle and deconstructionist thought, depopulation theory, and Latinx American disruption. The way I work through all these heavy reading projects is by baking them into the instruments I make (and journaling constantly)!",
    avatar: "/assets/nava1.png",
    photo: "/assets/nava2.png",
  },
];

const PAST_AND_CONTRIBUTORS = [
  "Rashida Kamal",
  "Chaski No",
  "Divya Mehra",
  "Sophia Edwards",
  "Jenna Han",
  "Melika Panbehchi",
  "Spencer Ratanavanh",
  "Polina Kolesnikova",
];

function MemberCard({ member }) {
  const hasAvatar = !!member.avatar;
  const hasBack = !!(member.photo && member.avatar);

  return (
    <article
      className="team-card"
      aria-label={`${member.name}${member.role ? `, ${member.role}` : ""}`}
    >
      <div className={`team-card-inner ${!hasBack ? "no-flip" : ""}`}>
        {/* front: avatar */}
        <div className="team-card-front">
          <div className="team-avatar">
            {hasAvatar ? (
              <img src={member.avatar} alt="" className="team-avatar-img" />
            ) : (
              <div className="team-avatar-placeholder" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="18" r="9" fill="rgba(30,27,24,0.18)" />
                  <path
                    d="M6 42 C6 30 42 30 42 42"
                    fill="rgba(30,27,24,0.18)"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="team-card-info">
            <h3 className="team-card-name">{member.name}</h3>
            {member.role && <p className="team-card-role">{member.role}</p>}
          </div>
        </div>

        {hasBack && (
          <div className="team-card-back" aria-hidden="false">
            <img
              src={member.photo}
              alt={`Photo of ${member.name}`}
              className="team-photo-img"
            />
            <div className="team-card-back-info">
              <p className="team-card-name" aria-hidden="true">
                {member.name}
              </p>
              {member.role && (
                <p className="team-card-role" aria-hidden="true">
                  {member.role}
                </p>
              )}
              {member.bio && <p className="team-card-bio">{member.bio}</p>}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <main className="page" id="main-content">
        <div className="container">
          <div className="page-header">
            <div className="research-service-title-row">
              <img
                src="/teamwork.png"
                alt=""
                aria-hidden="true"
                className="research-service-icon"
              />
              <h1>Meet the Team</h1>
            </div>
            <p>
              Researchers and collaborators supporting equity-aligned teaching.
            </p>
          </div>

          <div className="team-grid" role="list" aria-label="Team members">
            {TEAM.map((m, i) => (
              <div role="listitem" key={i}>
                <MemberCard member={m} />
              </div>
            ))}
          </div>

          <section className="team-past" aria-labelledby="past-members-title">
            <h2 className="team-past-title" id="past-members-title">
              Past Members &amp; Contributors
            </h2>
            <ul
              className="team-past-list"
              aria-label="Past members and contributors"
            >
              {PAST_AND_CONTRIBUTORS.map((name, i) => (
                <li key={i} style={{ display: "inline" }}>
                  {name}
                  {i < PAST_AND_CONTRIBUTORS.length - 1 && (
                    <span className="team-dot" aria-hidden="true">
                      {" "}
                      ·{" "}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
