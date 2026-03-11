"use client";

import { resumeData } from "@/data/resumeData";

/* ── Inline style objects for html2pdf.js reliability ── */
const s = {
  wrapper: {
    position: "fixed" as const,
    left: -9999,
    top: 0,
    width: 794,
    zIndex: -1,
    overflow: "hidden" as const,
  },
  root: {
    width: 794,
    padding: "36pt 36pt 40pt",
    fontFamily: '"Inter","Segoe UI",Arial,Helvetica,sans-serif',
    fontSize: "8.5pt",
    lineHeight: 1.4,
    color: "#1e1e1e",
    background: "#fff",
    boxSizing: "border-box" as const,
  },
  header: {
    textAlign: "center" as const,
    paddingBottom: "10pt",
    borderBottom: "1.5pt solid #111",
    marginBottom: "14pt",
  },
  name: {
    fontSize: "22pt",
    fontWeight: 700,
    letterSpacing: "-0.3pt",
    margin: 0,
    lineHeight: 1.15,
    color: "#111",
  },
  title: {
    fontSize: "9.5pt",
    fontWeight: 400,
    color: "#555",
    margin: "3pt 0 0",
    letterSpacing: "0.5pt",
    textTransform: "uppercase" as const,
  },
  contactBar: {
    display: "flex" as const,
    justifyContent: "center" as const,
    flexWrap: "wrap" as const,
    gap: "4pt 0",
    marginTop: "8pt",
    fontSize: "7.5pt",
    color: "#444",
    lineHeight: 1.4,
  },
  contactItem: {
    whiteSpace: "nowrap" as const,
  },
  contactSep: {
    margin: "0 5pt",
    color: "#ccc",
  },
  contactLabel: {
    fontWeight: 600,
    color: "#333",
  },
  contactLink: {
    color: "#2563eb",
    textDecoration: "none" as const,
  },
  heading: {
    fontSize: "8pt",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "2pt",
    color: "#111",
    margin: "0 0 7pt",
    paddingBottom: "4pt",
    borderBottom: "0.75pt solid #ccc",
    pageBreakAfter: "avoid" as const,
  },
  headingSub: {
    fontSize: "8pt",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "2pt",
    color: "#111",
    margin: "10pt 0 7pt",
    paddingBottom: "4pt",
    borderBottom: "0.75pt solid #ccc",
  },
  section: { marginBottom: "14pt" },
  summary: { fontSize: "8pt", color: "#444", margin: 0, lineHeight: 1.45 },
  exp: { marginBottom: "7pt", pageBreakInside: "avoid" as const },
  expTop: {
    display: "flex" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    gap: "6pt",
  },
  expLeft: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "4pt",
    minWidth: 0,
  },
  logo: {
    width: "13pt",
    height: "13pt",
    objectFit: "contain" as const,
    flexShrink: 0,
    borderRadius: "2pt",
  },
  expRole: { fontSize: "8.5pt", fontWeight: 700, color: "#111" },
  expSep: { fontSize: "8pt", color: "#aaa", margin: "0 1pt" },
  expCompany: { fontSize: "8pt", fontWeight: 500, color: "#333" },
  expDate: {
    fontSize: "7pt",
    color: "#888",
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
  },
  expBullets: {
    margin: "2pt 0 0 14pt",
    padding: 0,
    fontSize: "7.5pt",
    color: "#333",
    lineHeight: 1.4,
  },
  cols: {
    display: "flex" as const,
    gap: "20pt",
    marginBottom: "14pt",
    pageBreakInside: "avoid" as const,
  },
  colLeft: { flex: "1.1" },
  colRight: { flex: "0.9" },
  skillGroup: { marginBottom: "2pt", fontSize: "7.5pt", lineHeight: 1.4 },
  skillCat: { fontWeight: 700, color: "#111" },
  skillItems: { color: "#555" },
  eduDegree: { fontSize: "8pt", fontWeight: 600, color: "#111", margin: 0 },
  eduSchool: { fontSize: "7.5pt", color: "#555", margin: 0 },
  eduDate: { color: "#888" },
  certName: { fontWeight: 600, color: "#111" },
  certIssuer: { color: "#888" },
  projects: { columns: 2, columnGap: "16pt" },
  project: {
    fontSize: "7.5pt",
    marginBottom: "2pt",
    breakInside: "avoid" as const,
  },
  projectName: { fontWeight: 700, color: "#111" },
  projectDesc: { color: "#555" },
};

export default function PrintResume() {
  const { contact } = resumeData;

  return (
    <div style={s.wrapper}>
      <div id="print-resume" style={s.root}>
        {/* ── Header ── */}
        <header style={s.header}>
          <h1 style={s.name}>{resumeData.name}</h1>
          <p style={s.title}>{resumeData.title}</p>
          <div style={s.contactBar}>
            {contact.location && (
              <span style={s.contactItem}><span style={s.contactLabel}>Location:</span> {contact.location}</span>
            )}
            {contact.birthYear && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}>{contact.birthYear}</span></>
            )}
            {contact.email && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}><span style={s.contactLabel}>Email:</span> <a href={`mailto:${contact.email}`} style={s.contactLink}>{contact.email}</a></span></>
            )}
            {contact.website && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}><span style={s.contactLabel}>Web:</span> <a href={`https://${contact.website}`} style={s.contactLink}>{contact.website}</a></span></>
            )}
            {contact.linkedin && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}><span style={s.contactLabel}>LinkedIn:</span> <a href={contact.linkedin} style={s.contactLink}>{contact.linkedin.replace("https://www.", "")}</a></span></>
            )}
            {contact.github && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}><span style={s.contactLabel}>GitHub:</span> <a href={contact.github} style={s.contactLink}>{contact.github.replace("https://", "")}</a></span></>
            )}
            {contact.telegram && (
              <><span style={s.contactSep}>|</span><span style={s.contactItem}><span style={s.contactLabel}>Telegram:</span> <a href={contact.telegram} style={s.contactLink}>{contact.telegram.replace("https://", "")}</a></span></>
            )}
          </div>
        </header>

        {/* ── Summary ── */}
        <section style={s.section}>
          <h2 style={s.heading}>Profile</h2>
          <p style={s.summary}>{resumeData.summary}</p>
        </section>

        {/* ── Two-column: Skills + Education/Certs ── */}
        <div style={s.cols}>
          <section style={s.colLeft}>
            <h2 style={s.heading}>Skills</h2>
            {resumeData.skills.map((group, i) => (
              <div key={i} style={s.skillGroup}>
                <span style={s.skillCat}>{group.category}: </span>
                <span style={s.skillItems}>
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </section>

          <section style={s.colRight}>
            <h2 style={s.heading}>Education</h2>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "3pt" }}>
                <p style={s.eduDegree}>{edu.degree}</p>
                <p style={s.eduSchool}>
                  {edu.institution}
                  <span style={s.eduDate}>
                    {" "}· {edu.startDate}–{edu.endDate}
                  </span>
                </p>
              </div>
            ))}

            {resumeData.certifications.length > 0 && (
              <>
                <h2 style={s.headingSub}>Certifications</h2>
                {resumeData.certifications.map((cert, i) => (
                  <div
                    key={i}
                    style={{ fontSize: "7.5pt", marginBottom: "1pt" }}
                  >
                    <span style={s.certName}>{cert.name}</span>
                    <span style={s.certIssuer}>
                      {" "}— {cert.issuer}, {cert.date}
                    </span>
                  </div>
                ))}
              </>
            )}
          </section>
        </div>

        {/* ── Projects ── */}
        {resumeData.projects.length > 0 && (
          <section style={s.section}>
            <h2 style={s.heading}>Key Projects</h2>
            <div style={s.projects}>
              {resumeData.projects.map((p, i) => (
                <div key={i} style={s.project}>
                  <span style={s.projectName}>{p.name}</span>
                  <span style={s.projectDesc}> — {p.description}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Experience ── */}
        <section style={s.section}>
          <h2 style={s.heading}>Experience</h2>
          {resumeData.experience.map((exp, i) => (
            <div key={i} style={s.exp}>
              <div style={s.expTop}>
                <div style={s.expLeft}>
                  <div>
                    <span style={s.expRole}>{exp.role}</span>
                    <span style={s.expSep}> | </span>
                    <span style={s.expCompany}>{exp.company}</span>
                  </div>
                </div>
                <span style={s.expDate}>
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              {exp.bullets.length > 0 && (
                <ul style={s.expBullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: "0.5pt" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
