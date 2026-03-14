import { motion } from "framer-motion"

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "20+",   label: "Projects Built" },
  { value: "2",    label: "Companies" },
  { value: "100%", label: "Dedication" },
]

const timeline = [
  {
    year: "2024–2025",
    role: "Python Developer",
    company: "Altos Technologies",
    desc: "Built and maintained scalable Django apps. Implemented role-based access, optimised MySQL/PostgreSQL schemas, and delivered responsive UIs.",
  },
  {
    year: "2023–2024",
    role: "Python Full Stack Intern",
    company: "STC Technologies",
    desc: "Developed CRUD-based web apps with Django. Integrated databases, implemented Django ORM, and built responsive frontend-backend systems.",
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="divider" style={{ marginBottom: 80 }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
           className="about-grid">

        {/* Left: text */}
        <div>
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Crafting web apps that<br/>
            <span className="grad">scale & perform</span>
          </h2>
          <p style={{ fontSize: 16, color: "#7a7792", lineHeight: 1.8, marginBottom: 24 }}>
            I'm a Python and Django developer based in Kerala, India with hands-on experience
            building full-stack web platforms — from database architecture to user-facing interfaces.
          </p>
          <p style={{ fontSize: 16, color: "#7a7792", lineHeight: 1.8, marginBottom: 36 }}>
            I thrive in MVT architecture, love clean database design, and care deeply about
            writing maintainable, well-tested code. Every project I ship is something I'm proud to put my name on.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "📍", label: "Kerala, India" },
              { icon: "✉️", label: "subinsuresh8088@gmail.com" },
              { icon: "💼", label: "linkedin.com/in/subin-pk" },
            ].map(item => (
              <div key={item.label} style={{
                display: "flex", alignItems: "center", gap: 12,
                fontSize: 14, color: "#6e6a83",
              }}>
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: stats + timeline */}
        <div>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: "#111118",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14, padding: "24px 20px",
                  transition: "border-color .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,92,252,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 32, fontWeight: 800,
                  background: "linear-gradient(120deg, #7c5cfc, #c084fc)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: 6,
                }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#5e5b73" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, paddingBottom: i < timeline.length - 1 ? 28 : 0 }}>
                {/* Line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
                    boxShadow: "0 0 10px rgba(124,92,252,0.5)",
                    marginTop: 4,
                  }} />
                  {i < timeline.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: "rgba(255,255,255,0.07)", marginTop: 6 }} />
                  )}
                </div>
                {/* Content */}
                <div>
                  <span style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: "0.08em",
                    color: "#7c5cfc", textTransform: "uppercase", marginBottom: 6, display: "block",
                  }}>{item.year}</span>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 15, fontWeight: 600, color: "#e2e0ea", marginBottom: 2,
                  }}>{item.role}</div>
                  <div style={{ fontSize: 13, color: "#7c5cfc", marginBottom: 8 }}>{item.company}</div>
                  <p style={{ fontSize: 14, color: "#5e5b73", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}