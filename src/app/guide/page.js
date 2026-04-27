import Image from "next/image";

export default function GuidePage() {
  return (
    <main className="page container">
      <div className="page-header">
        <div className="research-service-title-row">
          <Image
            src="/guide.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="research-service-icon"
          />
          <div>
            <h1>Syllabus Guide</h1>
            <p>
              A template and reference to help build an equity-aligned syllabus.
            </p>
          </div>
        </div>
      </div>

      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>5 principles for inclusive teaching</h2>
          <p>Short, actionable principles you can apply immediately.</p>
          <a className="button button-ink" href="#principles">
            View principles
          </a>
        </div>
        <div className="panel panel-cream">
          <div className="panel-title-row">
            <Image
              src="/check.png"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
            />
            <h2>Checklist</h2>
          </div>
          <p>A quick checklist to review your syllabus structure + tone.</p>
          <a className="button button-ink" href="#checklist">
            View checklist
          </a>
        </div>
        <div className="panel panel-cream">
          <h2>Equity Language Bank</h2>
          <p>
            Copy-paste ready statements for accessibility, late work, AI policy,
            pronouns, and more.
          </p>
          <a className="button button-ink" href="#language">
            Browse language
          </a>
        </div>
        <div className="panel panel-cream">
          <h2>Syllabus Template</h2>
          <p>
            A starter template with equity-aligned structure and example
            language you can adapt.
          </p>
          <a className="button button-ink" href="#template">
            View template
          </a>
        </div>
        <div className="panel panel-cream">
          <h2>Land Acknowledgment Guide</h2>
          <p>
            How to write a land acknowledgment that is meaningful, not
            performative.
          </p>
          <a className="button button-ink" href="#land">
            Read the guide
          </a>
        </div>
      </div>

      <div className="guide-sections">
        <section id="principles" className="guide-section">
          <h2 className="guide-section-title">
            5 Principles for Inclusive Teaching
          </h2>
          <p className="guide-section-intro">
            Short, actionable principles you can apply immediately to make your
            syllabus more welcoming and equitable.
          </p>
          <div className="guide-principles">
            {[
              {
                n: "01",
                title: "Center access from the start",
                body: "Build accessibility into your syllabus structure rather than treating it as an accommodation. Include clear information about materials, tools, and support resources on day one.",
              },
              {
                n: "02",
                title: "Name your assumptions",
                body: "Every course embeds assumptions about prior knowledge, identity, and belonging. Making these explicit helps students understand what is expected and why.",
              },
              {
                n: "03",
                title: "Diversify your readings",
                body: "Review who is represented in your reading list across gender, race, geography, and discipline. Aim for breadth that reflects the actual diversity of your field.",
              },
              {
                n: "04",
                title: "Make policies human",
                body: "Late work, attendance, and grading policies communicate your values. Write them in plain language and explain the reasoning behind each one.",
              },
              {
                n: "05",
                title: "Invite feedback early",
                body: "Build in structured moments for students to tell you what is and isn't working — a mid-semester check-in or anonymous form can surface issues before they escalate.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="guide-principle-card">
                <div className="guide-principle-n">{n}</div>
                <div>
                  <h3 className="guide-principle-title">{title}</h3>
                  <p className="guide-principle-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="checklist" className="guide-section">
          <h2 className="guide-section-title">Checklist</h2>
          <p className="guide-section-intro">
            A quick review of your syllabus structure and tone before the
            semester starts.
          </p>
          <div className="guide-checklist">
            {[
              "Does your syllabus include an accessibility statement?",
              "Is your late work policy written in plain, non-punitive language?",
              "Have you listed support resources (counseling, disability services, writing center)?",
              "Is your reading list diverse in authorship — gender, race, geography?",
              "Have you named the tools and platforms students will need and their costs?",
              "Does your grading rubric explain criteria clearly?",
              "Is there a land acknowledgment or statement of values?",
              "Have you included your pronouns and invited students to share theirs?",
              "Is there a clear communication policy (email response time, office hours)?",
              "Does the course description use welcoming, inclusive language?",
            ].map((item, i) => (
              <label key={i} className="guide-checklist-item">
                <input type="checkbox" className="guide-checklist-check" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section id="language" className="guide-section">
          <h2 className="guide-section-title">Equity Language Bank</h2>
          <p className="guide-section-intro">
            Copy-paste ready statements you can adapt for your own syllabus.
          </p>
          <div className="guide-language-grid">
            {[
              {
                label: "Accessibility",
                text: "I am committed to making this course accessible to all students. If you have a documented disability or anticipate needing accommodations, please contact the Moses Center for Student Accessibility and reach out to me as early as possible.",
              },
              {
                label: "Pronouns",
                text: "I use [pronouns] and welcome you to share your own pronouns with me at any time. I will do my best to use them consistently and ask that we all extend that courtesy to one another.",
              },
              {
                label: "Late Work",
                text: "Life happens. If you are struggling to meet a deadline, please reach out before it passes rather than after. Extensions are available — I just need to know.",
              },
              {
                label: "AI Policy",
                text: "The use of generative AI tools in this course is [permitted / not permitted / permitted with citation]. Whatever your approach, your thinking and your voice should be present in your work.",
              },
              {
                label: "Land Acknowledgment",
                text: "This course takes place on the unceded land of the Lenape people. We acknowledge their continued presence and sovereignty, and commit to learning in a way that honors that history.",
              },
              {
                label: "Trigger Warning",
                text: "Some course materials address themes that may be challenging, including [topics]. I will flag these materials in advance. If you need to step away during class, you may do so without explanation.",
              },
            ].map(({ label, text }) => (
              <div key={label} className="guide-language-card">
                <div className="guide-language-label">{label}</div>
                <p className="guide-language-text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="template" className="guide-section">
          <h2 className="guide-section-title">Syllabus Template</h2>
          <p className="guide-section-intro">
            A starter structure with equity-aligned sections and example
            language you can adapt.
          </p>
          <div className="guide-template">
            {[
              {
                heading: "Course Description",
                placeholder:
                  "Write 2–3 sentences describing the course, its goals, and who it is for. Use welcoming, plain language.",
              },
              {
                heading: "Instructor Info & Office Hours",
                placeholder:
                  "Name, pronouns, email, and when/where students can find you. Include your response time for emails.",
              },
              {
                heading: "Learning Objectives",
                placeholder:
                  "List 3–5 things students will be able to do by the end of the course. Use action verbs.",
              },
              {
                heading: "Materials & Tools",
                placeholder:
                  "List required and recommended materials. Note which are free, which cost money, and where to access them.",
              },
              {
                heading: "Accessibility Statement",
                placeholder:
                  "Copy from the language bank above, or write your own commitment to access.",
              },
              {
                heading: "Grading & Assessment",
                placeholder:
                  "Describe how work will be evaluated. Include rubric criteria or link to them.",
              },
              {
                heading: "Attendance & Participation",
                placeholder:
                  "Explain your expectations in plain language. Note any flexibility and what to do if students need to miss class.",
              },
              {
                heading: "Late Work Policy",
                placeholder:
                  "State your policy clearly and humanely. Explain the reasoning.",
              },
              {
                heading: "Schedule",
                placeholder:
                  "Week-by-week overview of topics, readings, and assignments.",
              },
              {
                heading: "Support Resources",
                placeholder:
                  "List campus resources: writing center, counseling, disability services, financial aid, etc.",
              },
            ].map(({ heading, placeholder }) => (
              <div key={heading} className="guide-template-section">
                <h3 className="guide-template-heading">{heading}</h3>
                <p className="guide-template-placeholder">{placeholder}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="land" className="guide-section">
          <h2 className="guide-section-title">Land Acknowledgment Guide</h2>
          <p className="guide-section-intro">
            How to write a land acknowledgment that is meaningful, not
            performative.
          </p>
          <div className="guide-land">
            <div className="guide-land-block">
              <h3>What is a land acknowledgment?</h3>
              <p>
                A land acknowledgment is a formal statement that recognizes the
                Indigenous peoples who are the original stewards of the land on
                which we live, work, and study. NYU is located on the unceded
                territory of the Lenape people.
              </p>
            </div>
            <div className="guide-land-block">
              <h3>What makes one meaningful?</h3>
              <p>
                A meaningful acknowledgment goes beyond a boilerplate statement.
                It names specific nations, uses present tense to affirm their
                continued presence, and connects to action — how does your
                teaching, your course, or your institution support Indigenous
                communities?
              </p>
            </div>
            <div className="guide-land-block">
              <h3>What to avoid</h3>
              <p>
                Avoid copy-pasting without context. Avoid past tense. Avoid
                statements that feel like a checkbox. If you include one, be
                prepared to explain why and what it means for your course.
              </p>
            </div>
            <div className="guide-land-block">
              <h3>Example statement</h3>
              <p className="guide-land-example">
                &ldquo;This course takes place on the unceded land of the Lenape
                people, who have stewarded this region since time immemorial. We
                acknowledge their continued sovereignty and presence, and commit
                to engaging with this history honestly in our work.&rdquo;
              </p>
            </div>
            <div className="guide-land-block">
              <h3>Further reading</h3>
              <p>
                <a
                  href="https://nativegov.org/news/a-guide-to-indigenous-land-acknowledgment/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guide to Indigenous Land Acknowledgment — Native Governance
                  Center ↗
                </a>
                <br />
                <a
                  href="https://usdac.us/nativeland"
                  target="_blank"
                  rel="noreferrer"
                >
                  Why Land Acknowledgments Matter — USDAC ↗
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
