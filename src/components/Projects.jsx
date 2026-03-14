import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "College Information System",
    desc: "A comprehensive Django-based platform to manage students, staff, courses, and attendance — complete with secure authentication and role-based admin dashboards.",
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

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            viewport={{ once: true }}
            style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: "32px 36px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              transition: "border-color .25s",
            }}
            whileHover={{ y: -4 }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${p.accent}40`}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>

            {/* Accent glow */}
            <div style={{
              position: "absolute", top: -60, left: -40,
              width: 220, height: 220, borderRadius: "50%",
              background: `radial-gradient(circle, ${p.accent}15, transparent 70%)`,
              pointerEvents: "none",
            }} />
            {/* Right glow too */}
            <div style={{
              position: "absolute", bottom: -40, right: -40,
              width: 160, height: 160, borderRadius: "50%",
              background: `radial-gradient(circle, ${p.accent}0a, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Left: content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 13,
                  background: `${p.accent}18`,
                  border: `1px solid ${p.accent}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 21, flexShrink: 0,
                }}>{p.icon}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20, fontWeight: 700, color: "#f0eefa",
                    marginBottom: 2,
                  }}>{p.title}</h3>
                  {/* Live indicator */}
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#22d3a5",
                      boxShadow: "0 0 6px #22d3a5",
                      display: "inline-block",
                    }} />
                    <span style={{ fontSize: 11, color: "#22d3a5", letterSpacing: "0.04em" }}>
                      Live on Render
                    </span>
                  </div>
                </div>
              </div>

              <p style={{
                fontSize: 15, color: "#6e6a83", lineHeight: 1.75,
                maxWidth: 600, marginBottom: 20,
              }}>{p.desc}</p>

              {/* Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
                {p.highlights.map(h => (
                  <span key={h} style={{
                    fontSize: 12, color: "#5e5b73",
                    display: "flex", alignItems: "center", gap: 5,
                  }}>
                    <span style={{ color: p.accent, fontSize: 10 }}>✦</span>
                    {h}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 12, padding: "4px 12px", borderRadius: 100,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#7a7792",
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Right: action buttons */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 10,
              flexShrink: 0, minWidth: 130,
            }}>

              {/* Live Demo — primary */}
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "11px 20px", borderRadius: 10,
                  background: `linear-gradient(135deg, ${p.accent}cc, ${p.accent})`,
                  color: "#fff", fontSize: 13, fontWeight: 600,
                  boxShadow: `0 0 18px ${p.accent}40`,
                  transition: "all .2s",
                  border: "none",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 28px ${p.accent}70`
                  e.currentTarget.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 0 18px ${p.accent}40`
                  e.currentTarget.style.transform = "translateY(0)"
                }}>
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>

              {/* GitHub — secondary */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "11px 20px", borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  fontSize: 13, color: "#a09db8",
                  transition: "all .2s",
                  letterSpacing: "0.01em",
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
                <FaGithub size={14} />
                GitHub
              </a>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA — view all on hub */}
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
          <FaExternalLinkAlt size={13} />
          View All Projects on Project Hub
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2"
            viewBox="0 0 24 24" style={{ marginLeft: 2 }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <p style={{ fontSize: 13, color: "#3d3a52", marginTop: 12 }}>
          More projects hosted at developer-project-hub.onrender.com
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          #projects .section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}