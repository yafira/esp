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
              Following the 5 Principles for Inclusive Teaching outlined by the
              Guide for Inclusive Teaching at Columbia, the ESP research team
              compiled these tips and suggestions for crafting inclusive and
              thoughtful syllabi.
            </p>
          </div>
        </div>
      </div>

      <div className="page-cards">
        <div className="panel panel-cream">
          <h2>5 Principles for Inclusive Teaching</h2>
          <p>
            Actionable principles and strategies for crafting inclusive syllabi.
          </p>
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
            <h2>Sample Statements</h2>
          </div>
          <p>
            Ready-to-use language for participation, extensions, attendance, and
            more.
          </p>
          <a className="button button-ink" href="#statements">
            View statements
          </a>
        </div>
        <div className="panel panel-cream">
          <h2>Required Syllabus Statements</h2>
          <p>
            NYU/Tisch required statements on accessibility, wellness, Title IX,
            and more.
          </p>
          <a className="button button-ink" href="#required">
            View required
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
        {/* 5 PRINCIPLES */}
        <section id="principles" className="guide-section">
          <h2 className="guide-section-title">
            5 Principles for Inclusive Teaching
          </h2>
          <p className="guide-section-intro">
            Compiled by Blair Simmons, Mimi Yin, Chaski No, and Sophia Edwards
            of the ESP research team, based on the Guide for Inclusive Teaching
            at Columbia.
          </p>
          <div className="guide-principles">
            {[
              {
                n: "01",
                title:
                  "Establish and support a class climate that fosters belonging for all students",
                body: [
                  "Use welcoming language to build teacher-student rapport — create invitations, not commands.",
                  "Create open channels to facilitate students' communication regarding their needs to maximize learning potential.",
                  "Present participation as being present in class (in whatever forms feel comfortable to students).",
                ],
              },
              {
                n: "02",
                title: "Set explicit student expectations",
                body: [
                  "Set clear expectations as to what kinds of prior knowledge or skills are needed for a student to succeed.",
                  "Articulate evaluation criteria transparently and specifically.",
                  "Encourage student agency by providing multiple assessment options.",
                ],
              },
              {
                n: "03",
                title:
                  "Select course content that recognizes diversity and acknowledges barriers to inclusion",
                body: [
                  "Incorporate course components that provide flexibility for different learning styles and abilities.",
                  "Provide diverse examples of exemplary work.",
                ],
              },
              {
                n: "04",
                title: "Design all course elements for accessibility",
                body: [
                  "Make course materials easily accessible (not behind paywalls or requiring students to go through multiple hoops).",
                  "Provide supportive scaffolding by emphasizing process and outlining steps toward achieving syllabus goals.",
                  "Offer consistent and timely goal-oriented feedback.",
                ],
              },
              {
                n: "05",
                title:
                  "Reflect on one's beliefs about teaching to maximize self-awareness and commitment to inclusion",
                body: [
                  "Emphasize the importance of collaboration between teachers and students in creating a healthy learning environment.",
                  "Acknowledge that students bring different styles and methods of understanding into the classroom.",
                ],
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="guide-principle-card">
                <div className="guide-principle-n">{n}</div>
                <div>
                  <h3 className="guide-principle-title">{title}</h3>
                  <ul className="guide-principle-list">
                    {body.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SAMPLE STATEMENTS */}
        <section id="statements" className="guide-section">
          <h2 className="guide-section-title">Sample Statements</h2>
          <p className="guide-section-intro">
            Ready-to-adapt language for common syllabus sections. Copy and
            modify to fit your course.
          </p>
          <div className="guide-language-grid">
            {[
              {
                label: "Diverse Perspectives & Learning Modes",
                text: "Your success in this class is important to me. We all learn differently and require different kinds of accommodations. If there are aspects of this course that prevent you from learning or exclude you in any way, I invite you to communicate this with me. Together we'll develop strategies to meet both your needs and the requirements of the course.",
              },
              {
                label: "Participation",
                text: "I am committed to facilitating the fullest possible participation of all my students. Acknowledging that being present is a form of participation in itself, and that engaged listening is not a passive form of participation either, I welcome my students to communicate with me what kinds of engagement are best for them. Examples of participation: asking questions, office hours, emails, group discussion, arriving on time, taking notes, listening to peers, submitting anonymous responses, active listening.",
              },
              {
                label: "Open Office Hours",
                text: "You all enter this classroom with different sets of skills. I open my office to you as an extension of the classroom. There's no incorrect way to approach office hours, and they can be as formal or informal as you would like. I welcome you to contact me outside of class and office hours — you may email me, call me, or schedule an appointment.",
              },
              {
                label: "Extensions",
                text: "An assignment extension may be granted upon request. If you request an extension, your grade will not be affected. However, if you do not request an extension, the grading rules above apply.",
              },
              {
                label: "Communication",
                text: "You must check your email (or other stated class form of communication) for important updates about class.",
              },
              {
                label: "Incompletes",
                text: "Incomplete grades may only be given to students who have completed more than half of the class assignments. Incomplete grades are given at the discretion of the professor since managing incomplete grades is often additional uncompensated labor for the instructor.",
              },
              {
                label: "Attendance",
                text: "There are no excused absences and unexcused absences. There are only absences. You can have X amount of absences without your grade being affected. A passing grade requires at least 50% attendance. 2 late arrivals (more than 10 minutes after start time) will count as 1 absence.",
              },
            ].map(({ label, text }) => (
              <div key={label} className="guide-language-card">
                <div className="guide-language-label">{label}</div>
                <p className="guide-language-text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REQUIRED STATEMENTS */}
        <section id="required" className="guide-section">
          <h2 className="guide-section-title">Required Syllabus Statements</h2>
          <p className="guide-section-intro">
            The following statements are required by NYU/Tisch and should be
            included in all syllabi.
          </p>
          <div className="guide-template">
            {[
              {
                heading: "Academic Integrity",
                placeholder:
                  "Plagiarism is presenting someone else's work as though it were your own. Collaboration is highly valued and often necessary to produce great work. Students build their own work on that of other people and giving credit to the creator of the work you are incorporating into your own work is an act of integrity. Plagiarism, on the other hand, is a form of fraud. Proper acknowledgment and correct citation constitute the difference.",
              },
              {
                heading: "Accessibility",
                placeholder:
                  "It's crucial for our community to create and uphold learning environments that empower students of all abilities. We are committed to creating an environment that enables open dialogue about the various temporary and long-term needs of students and participants for their academic success. We encourage all students to discuss with faculty and staff possible accommodations that would best support their learning. Students may also contact the Moses Center for Student Accessibility (212-998-4980) for resources and support.",
              },
              {
                heading: "Counseling and Wellness",
                placeholder:
                  "Your health and safety are a priority at NYU. Students are encouraged to utilize the resources and support services available to them 24 hours a day, 7 days a week via the NYU Wellness Exchange Hotline at 212-443-9999. Additional support is available over email at wellness.exchange@nyu.edu and within the NYU Wellness Exchange app.",
              },
              {
                heading: "Use of Electronic Devices",
                placeholder:
                  "Laptops and other electronic devices are essential tools for learning and interaction in classrooms. However, they can create distractions that hinder students' ability to actively participate and engage. Please be mindful of the ways in which these devices can affect the learning environment.",
              },
              {
                heading: "Title IX",
                placeholder:
                  "Tisch School of the Arts is dedicated to providing its students with a learning environment that is rigorous, respectful, supportive and nurturing. Tisch is committed to enforcing University policies prohibiting all forms of sexual misconduct as well as discrimination on the basis of sex and gender. Detailed information regarding these policies and the resources available to students can be found through the NYU Title IX Office.",
              },
              {
                heading: "Statement of Principle",
                placeholder:
                  "Teachers and students work together to create a supportive learning environment. The educational experience in the classroom is one that is enhanced by integrating varying perspectives and learning modes brought by students.",
              },
            ].map(({ heading, placeholder }) => (
              <div key={heading} className="guide-template-section">
                <h3 className="guide-template-heading">{heading}</h3>
                <p className="guide-template-placeholder">{placeholder}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EQUITY LANGUAGE BANK */}
        <section id="language" className="guide-section">
          <h2 className="guide-section-title">Equity Language Bank</h2>
          <p className="guide-section-intro">
            Additional copy-paste ready statements you can adapt for your own
            syllabus.
          </p>
          <div className="guide-language-grid">
            {[
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

        {/* LAND ACKNOWLEDGMENT */}
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
