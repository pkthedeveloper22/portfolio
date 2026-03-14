import { motion } from "framer-motion"

const ExternalIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const projects = [
  {
    title: "College Information System",
    desc: "A comprehensive Django-based platform to manage students, staff, courses, and attendance — with secure authentication and role-based admin dashboards.",
    tags: ["Django", "Python", "MySQL", "Bootstrap", "Auth"],
    accent: "#7c5cfc",
    icon: "🎓",
    highlights: ["CRUD Operations", "Admin Dashboard", "MySQL Integration"],
    github: "https://github.com/subinpk8088-pydj",
    live: "https://developer-project-hub.onrender.com/",
  },
  {
    title: "E-commerce Platform",
    desc: "Full-featured online store built with Django. Product listings, cart management, order tracking, and secure authentication with database-backed transactions.",
    tags: ["Django", "PostgreSQL", "JavaScript", "CSS3"],
    accent: "#38bdf8",
    icon: "🛒",
    highlights: ["Cart & Orders", "Authentication", "Payment Flow"],
    github: "https://github.com/subinpk8088-pydj",
    live: "https://developer-project-hub.onrender.com/",
  },
  {
    title: "Insurance Policy System",
    desc: "Web portal for managing insurance policies, users, and premium details. Built with Django ORM and PostgreSQL for robust, reliable backend data handling.",
    tags: ["Django", "PostgreSQL", "Django ORM", "Python"],
    accent: "#c084fc",
    icon: "🛡",
    highlights: ["Policy Management", "User Portal", "PostgreSQL"],
    github: "https://github.com/subinpk8088-pydj",
    live: "https://developer-project-hub.onrender.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Portfolio</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Projects I've <span className="grad">built</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
          Real-world applications built from scratch — design to deployment.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            viewport={{ once: true }}
            className="project-card"
            style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: "28px 28px",
              position: "relative",
              overflow: "hidden",
              transition: "border-color .25s, transform .25s",
            }}
            whileHover={{ y: -3 }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${p.accent}40`}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>

            {/* Glows */}
            <div style={{
              position: "absolute", top: -60, left: -40,
              width: 220, height: 220, borderRadius: "50%",
              background: `radial-gradient(circle, ${p.accent}12, transparent 70%)`,
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: -40,
              width: 160, height: 160, borderRadius: "50%",
              background: `radial-gradient(circle, ${p.accent}08, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Card inner: left content + right buttons */}
            <div className="project-inner" style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 24,
              alignItems: "start",
            }}>

              {/* Left: content */}
              <div>
                {/* Title row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    background: `${p.accent}18`,
                    border: `1px solid ${p.accent}35`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                  }}>{p.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(16px, 2.5vw, 20px)",
                      fontWeight: 700, color: "#f0eefa", marginBottom: 3,
                    }}>{p.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "#22d3a5", boxShadow: "0 0 6px #22d3a5",
                        display: "inline-block", flexShrink: 0,
                      }} />
                      <span style={{ fontSize: 11, color: "#22d3a5", letterSpacing: "0.04em" }}>
                        Live on Render
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  color: "#6e6a83", lineHeight: 1.75, marginBottom: 16,
                }}>{p.desc}</p>

                {/* Highlights */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  {p.highlights.map(h => (
                    <span key={h} style={{
                      fontSize: 12, color: "#5e5b73",
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <span style={{ color: p.accent, fontSize: 9 }}>✦</span>{h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: 100,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#7a7792",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right: buttons — desktop only via CSS */}
              <div className="project-btns-desktop" style={{
                display: "flex", flexDirection: "column", gap: 10,
                flexShrink: 0, minWidth: 120,
              }}>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="btn-live"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                    padding: "11px 18px", borderRadius: 10,
                    background: `linear-gradient(135deg, ${p.accent}cc, ${p.accent})`,
                    color: "#fff", fontSize: 13, fontWeight: 600,
                    boxShadow: `0 0 16px ${p.accent}40`,
                    transition: "all .2s", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 28px ${p.accent}70`
                    e.currentTarget.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = `0 0 16px ${p.accent}40`
                    e.currentTarget.style.transform = "translateY(0)"
                  }}>
                  <ExternalIcon /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                    padding: "11px 18px", borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 13, color: "#a09db8",
                    transition: "all .2s", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
                    e.currentTarget.style.color = "#f0eefa"
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                    e.currentTarget.style.color = "#a09db8"
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                  }}>
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>

            {/* Mobile buttons row — shown only on small screens */}
            <div className="project-btns-mobile" style={{
              display: "none",
              gap: 10, marginTop: 20,
            }}>
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  padding: "12px", borderRadius: 10,
                  background: `linear-gradient(135deg, ${p.accent}cc, ${p.accent})`,
                  color: "#fff", fontSize: 13, fontWeight: 600,
                  boxShadow: `0 0 16px ${p.accent}40`,
                }}>
                <ExternalIcon /> Live Demo
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  padding: "12px", borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 13, color: "#a09db8",
                }}>
                <GithubIcon /> GitHub
              </a>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{ textAlign: "center", marginTop: 48 }}>
        <a
          href="https://developer-project-hub.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 32px", borderRadius: 12,
            border: "1px solid rgba(124,92,252,0.3)",
            background: "rgba(124,92,252,0.08)",
            color: "#c084fc", fontSize: 15, fontWeight: 500,
            transition: "all .25s",
            fontFamily: "'Syne', sans-serif",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(124,92,252,0.16)"
            e.currentTarget.style.borderColor = "rgba(124,92,252,0.55)"
            e.currentTarget.style.boxShadow = "0 0 28px rgba(124,92,252,0.2)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(124,92,252,0.08)"
            e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)"
            e.currentTarget.style.boxShadow = "none"
          }}>
          <ExternalIcon />
          View All Projects on Project Hub
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <p style={{ fontSize: 13, color: "#3d3a52", marginTop: 12 }}>
          More projects hosted at developer-project-hub.onrender.com
        </p>
      </motion.div>

      <style>{`
        /* Tablet: stack buttons inside card */
        @media (max-width: 700px) {
          .project-inner {
            grid-template-columns: 1fr !important;
          }
          .project-btns-desktop {
            display: none !important;
          }
          .project-btns-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  )
}