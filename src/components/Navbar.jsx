import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["About", "Skills", "Projects", "Contact"]

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all .3s ease",
      background: scrolled ? "rgba(10,10,15,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 700, color: "#fff",
            fontFamily: "'Syne', sans-serif",
            boxShadow: "0 0 16px rgba(124,92,252,0.4)",
          }}>S</div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: 17, color: "#f0eefa",
            letterSpacing: "-0.02em",
          }}>Subin PK</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}
             className="desktop-nav">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: 14, fontWeight: 400, color: "#a09db8",
              padding: "8px 16px", borderRadius: 8,
              transition: "all .2s",
            }}
            onMouseEnter={e => {
              e.target.style.color = "#f0eefa"
              e.target.style.background = "rgba(255,255,255,0.05)"
            }}
            onMouseLeave={e => {
              e.target.style.color = "#a09db8"
              e.target.style.background = "transparent"
            }}>
              {link}
            </a>
          ))}
          <a href="mailto:subinsuresh8088@gmail.com" style={{
            marginLeft: 8, padding: "9px 20px", borderRadius: 8,
            background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
            color: "#fff", fontSize: 14, fontWeight: 500,
            boxShadow: "0 0 20px rgba(124,92,252,0.35)",
            transition: "all .2s",
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 28px rgba(124,92,252,0.55)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(124,92,252,0.35)"}>
            Hire Me
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}