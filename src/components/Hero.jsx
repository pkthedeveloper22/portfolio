import { motion } from "framer-motion"
import profilePhoto from "../assets/profile.png"

const techStack = ["Python", "Django", "JavaScript", "PostgreSQL", "MySQL", "REST APIs", "Bootstrap"]

export default function Hero() {
  return (
    <section className="hero-section" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "120px 48px 80px",
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
      overflow: "visible",
      gap: 72,
    }}>

      {/* Background blobs */}
      <div style={{
        position: "fixed", width: 700, height: 700, borderRadius: "50%",
        top: "-10%", left: "-5%",
        background: "radial-gradient(ellipse, rgba(124,92,252,0.09) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", width: 500, height: 500, borderRadius: "50%",
        bottom: "0%", right: "0%",
        background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
      }} />

      {/* ── LEFT: Profile Photo ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-photo"
        style={{
          flexShrink: 0,
          width: "clamp(220px, 28vw, 380px)",
          aspectRatio: "1",
          position: "relative",
          zIndex: 1,
        }}>

        {/* Spinning conic gradient border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: -3, borderRadius: "30px",
            background: "conic-gradient(from 0deg, #7c5cfc, #c084fc, #38bdf8, #7c5cfc)",
            zIndex: -1, filter: "blur(1px)",
          }}
        />
        <div style={{
          position: "absolute", inset: 2, borderRadius: "27px",
          background: "#0a0a0f", zIndex: 0,
        }} />

        {/* Photo */}
        <div style={{
          position: "absolute", inset: 4, borderRadius: "24px",
          overflow: "hidden", zIndex: 1, background: "#111",
        }}>
          <img
            src={profilePhoto}
            alt="Subin PK — Python Developer"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 10%",
              filter: "contrast(1.08) brightness(0.96) saturate(0.85)",
              transition: "transform .5s ease, filter .4s ease",
              display: "block",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "scale(1.04)"
              e.target.style.filter = "contrast(1.1) brightness(1.0) saturate(0.9)"
            }}
            onMouseLeave={e => {
              e.target.style.transform = "scale(1)"
              e.target.style.filter = "contrast(1.08) brightness(0.96) saturate(0.85)"
            }}
          />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
            background: "linear-gradient(to top, rgba(10,10,15,0.75) 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(124,92,252,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* Badge — experience */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="hero-badge hero-badge-bottom"
          style={{
            position: "absolute", bottom: -18, right: -28, zIndex: 10,
            background: "rgba(14,14,22,0.95)",
            border: "1px solid rgba(124,92,252,0.3)",
            borderRadius: 14, padding: "11px 16px",
            display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
            backdropFilter: "blur(12px)",
            whiteSpace: "nowrap",
          }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
          }}>🐍</div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: "#f0eefa" }}>1.5+ Years</div>
            <div style={{ fontSize: 11, color: "#5e5b73" }}>Django Developer</div>
          </div>
        </motion.div>

        {/* Badge — projects */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="hero-badge hero-badge-top"
          style={{
            position: "absolute", top: -18, right: -28, zIndex: 10,
            background: "rgba(14,14,22,0.95)",
            border: "1px solid rgba(56,189,248,0.25)",
            borderRadius: 14, padding: "10px 14px",
            display: "flex", alignItems: "center", gap: 8,
            boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
            backdropFilter: "blur(12px)",
            whiteSpace: "nowrap",
          }}>
          <span style={{ fontSize: 17 }}>🚀</span>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#f0eefa" }}>20 Projects</div>
            <div style={{ fontSize: 11, color: "#5e5b73" }}>Shipped</div>
          </div>
        </motion.div>

        {/* Glow behind frame */}
        <div style={{
          position: "absolute", inset: -20, borderRadius: "40px",
          background: "radial-gradient(ellipse, rgba(124,92,252,0.18) 0%, transparent 70%)",
          zIndex: -2, pointerEvents: "none",
        }} />
      </motion.div>

      {/* ── RIGHT: Text ── */}
      <div className="hero-text" style={{
        flex: "1 1 0", minWidth: 0,
        position: "relative", zIndex: 1,
      }}>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 18px", borderRadius: 100,
            border: "1px solid rgba(124,92,252,0.3)",
            background: "rgba(124,92,252,0.1)",
            marginBottom: 28, fontSize: 13, color: "#c084fc",
          }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: "#7c5cfc",
            boxShadow: "0 0 8px #7c5cfc", display: "inline-block",
          }} />
          Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(34px, 5vw, 72px)",
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: "-0.03em", color: "#f0eefa",
            marginBottom: 14,
          }}>
          Hi, I'm{" "}
          <span style={{
            background: "linear-gradient(120deg, #7c5cfc 0%, #c084fc 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", backgroundSize: "200% auto",
            animation: "shimmer 4s linear infinite",
          }}>Subin PK</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(14px, 2vw, 21px)",
            fontWeight: 600, color: "#7a7792",
            marginBottom: 16, letterSpacing: "-0.01em",
          }}>
          Python · Django · Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          style={{
            fontSize: "clamp(14px, 1.6vw, 16px)",
            color: "#5e5b73", lineHeight: 1.8,
            maxWidth: 460, marginBottom: 36,
          }}>
          Building scalable, production-ready web applications with Django.
          1.5+ years turning ideas into live products — from database design to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="hero-ctas"
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>

          <a href="#projects" className="cta-primary" style={{
            padding: "12px 24px", borderRadius: 10,
            background: "linear-gradient(135deg, #7c5cfc, #c084fc)",
            color: "#fff", fontSize: 15, fontWeight: 500,
            boxShadow: "0 0 28px rgba(124,92,252,0.38)", transition: "box-shadow .2s",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 44px rgba(124,92,252,0.6)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 28px rgba(124,92,252,0.38)"}>
            View Projects
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a href="#contact" className="cta-secondary" style={{
            padding: "12px 24px", borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.11)",
            background: "rgba(255,255,255,0.04)",
            color: "#a09db8", fontSize: 15, transition: "all .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(124,92,252,0.45)"; e.currentTarget.style.color="#f0eefa" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.11)"; e.currentTarget.style.color="#a09db8" }}>
            Contact Me
          </a>

          <a href="/Subin_PK_CV.pdf" download className="cta-resume" style={{
            padding: "12px 24px", borderRadius: 10,
            border: "1px solid rgba(56,189,248,0.25)",
            background: "rgba(56,189,248,0.06)",
            color: "#38bdf8", fontSize: 15, transition: "all .2s",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(56,189,248,0.5)"; e.currentTarget.style.background="rgba(56,189,248,0.12)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(56,189,248,0.25)"; e.currentTarget.style.background="rgba(56,189,248,0.06)" }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v13M5 16l7 7 7-7"/><path d="M4 21h16"/>
            </svg>
            Resume
          </a>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {techStack.map(tech => (
            <span key={tech} style={{
              padding: "5px 12px", borderRadius: 100,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.07)",
              fontSize: 12, color: "#5e5b73",
            }}>{tech}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1,
        }}>
        <span style={{ fontSize: 10, color: "#3a3750", letterSpacing: "0.12em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(124,92,252,0.5), transparent)" }} />
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* ── Tablet landscape (≤1024px) ── */
        @media (max-width: 1024px) {
          .hero-section {
            padding: 100px 32px 80px !important;
            gap: 48px !important;
          }
          .hero-photo {
            width: clamp(200px, 32vw, 300px) !important;
          }
        }

        /* ── Tablet portrait (≤768px) ── */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 100px 28px 64px !important;
            gap: 40px !important;
            min-height: auto !important;
          }
          .hero-photo {
            width: clamp(180px, 55vw, 260px) !important;
          }
          .hero-badge-bottom {
            right: -12px !important;
            bottom: -14px !important;
          }
          .hero-badge-top {
            right: -12px !important;
            top: -14px !important;
          }
          .hero-text {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-ctas {
            justify-content: center !important;
          }
          .scroll-indicator {
            display: none !important;
          }
        }

        /* ── Mobile (≤480px) ── */
        @media (max-width: 480px) {
          .hero-section {
            padding: 90px 16px 56px !important;
            gap: 32px !important;
          }
          .hero-photo {
            width: clamp(160px, 70vw, 220px) !important;
          }
          /* Badges smaller on mobile */
          .hero-badge {
            padding: 8px 10px !important;
            gap: 7px !important;
          }
          .hero-badge-bottom {
            right: -8px !important;
            bottom: -10px !important;
          }
          .hero-badge-top {
            right: -8px !important;
            top: -10px !important;
          }
          /* Stack CTAs vertically on mobile */
          .hero-ctas {
            flex-direction: column !important;
            width: 100% !important;
          }
          .cta-primary,
          .cta-secondary,
          .cta-resume {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }

        /* ── Very small (≤360px) ── */
        @media (max-width: 360px) {
          .hero-section {
            padding: 80px 12px 48px !important;
          }
          .hero-photo {
            width: 150px !important;
          }
          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}