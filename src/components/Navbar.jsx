import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["About", "Skills", "Projects", "Contact"]

  const handleNav = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all .3s ease",
        background: scrolled || menuOpen ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 66,
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
              flexShrink: 0,
            }}>S</div>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700, fontSize: 17, color: "#f0eefa",
              letterSpacing: "-0.02em",
            }}>Subin PK</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: 14, color: "#a09db8",
                  padding: "8px 14px", borderRadius: 8,
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
            <a href="mailto:subinsuresh8088@gmail.com"
              style={{
                marginLeft: 8, padding: "9px 20px", borderRadius: 8,
                background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
                color: "#fff", fontSize: 14, fontWeight: 500,
                boxShadow: "0 0 20px rgba(124,92,252,0.35)",
                transition: "box-shadow .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 28px rgba(124,92,252,0.55)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(124,92,252,0.35)"}>
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              display: "none",
              background: "transparent", border: "none",
              cursor: "pointer", padding: 8, color: "#f0eefa",
              flexDirection: "column", gap: 5,
            }}>
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0eefa", borderRadius: 2,
              transition: "all .25s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0eefa", borderRadius: 2,
              transition: "all .25s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0eefa", borderRadius: 2,
              transition: "all .25s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className="nav-mobile-menu" style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "12px 24px 24px",
          gap: 4,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={handleNav}
              style={{
                fontSize: 16, color: "#a09db8",
                padding: "14px 12px", borderRadius: 10,
                transition: "all .2s", fontWeight: 400,
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
              onMouseEnter={e => {
                e.target.style.color = "#f0eefa"
                e.target.style.background = "rgba(255,255,255,0.04)"
              }}
              onMouseLeave={e => {
                e.target.style.color = "#a09db8"
                e.target.style.background = "transparent"
              }}>
              {link}
            </a>
          ))}
          <a href="mailto:subinsuresh8088@gmail.com"
            onClick={handleNav}
            style={{
              marginTop: 8, padding: "14px", borderRadius: 10, textAlign: "center",
              background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
              color: "#fff", fontSize: 15, fontWeight: 500,
              boxShadow: "0 0 20px rgba(124,92,252,0.3)",
            }}>
            Hire Me
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 641px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  )
}