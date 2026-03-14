import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "32px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
      maxWidth: 1100, margin: "0 auto",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "#fff",
          fontFamily: "'Syne', sans-serif",
        }}>S</div>
        <span style={{ fontSize: 13, color: "#4a4760" }}>
          © 2026 Subin PK — Python & Django Developer
        </span>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {[
          { icon: <FaGithub size={16} />, href: "https://github.com/subinpk8088-pydj" },
          { icon: <FaLinkedin size={16} />, href: "https://linkedin.com/in/subin-pk" },
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
            style={{
              width: 34, height: 34, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#4a4760", transition: "all .2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(124,92,252,0.4)"
              e.currentTarget.style.color = "#c084fc"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
              e.currentTarget.style.color = "#4a4760"
            }}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}