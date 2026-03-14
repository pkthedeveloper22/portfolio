import { motion } from "framer-motion"
import { useState } from "react"

const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)
const LocationIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

// ── Config ──────────────────────────────────────────
const EMAIL    = "subinsuresh8088@gmail.com"
const WA_NUM   = "919496313744"   // country code + number, no + or spaces
// ────────────────────────────────────────────────────

// Pre-filled message when recruiter clicks the WhatsApp card directly
const WA_CARD_MSG = encodeURIComponent(
  "Hi Subin! \uD83D\uDC4B\n\n" +
  "I came across your portfolio and I\u2019m really impressed by your Django and Python work.\n\n" +
  "I\u2019d love to connect and discuss a potential opportunity that might interest you."
)

const contactLinks = [
  { icon: <EnvelopeIcon />, label: "Email",     value: EMAIL,
    href: `mailto:${EMAIL}?subject=${encodeURIComponent("[Portfolio] Job Opportunity — Reaching Out")}&body=${encodeURIComponent("Hi Subin,\n\nI came across your portfolio and I\u2019m really impressed by your Django and Python work.\n\nI\u2019d love to discuss a potential opportunity that I think would be a great fit for your skills.\n\nLooking forward to hearing from you!\n\nBest regards,")}`,
    accent: "#7c5cfc" },
  { icon: <WhatsAppIcon />, label: "WhatsApp",  value: "+91 9496313744",               href: `https://wa.me/${WA_NUM}?text=${WA_CARD_MSG}`,          accent: "#22c55e", badge: "Tap to message" },
  { icon: <LinkedInIcon />, label: "LinkedIn",  value: "linkedin.com/in/subin-pk",    href: "https://linkedin.com/in/subin-pk",                     accent: "#0ea5e9" },
  { icon: <GitHubIcon />,   label: "GitHub",    value: "github.com/subinpk8088-pydj", href: "https://github.com/subinpk8088-pydj",                  accent: "#c084fc" },
]

const subjects = [
  "💼 Job Opportunity",
  "🤝 Freelance Project",
  "🐍 Django / Python Work",
  "💬 Just Saying Hi",
  "🔍 Other",
]

// Pre-written recruiter message templates for WhatsApp
const waTemplates = [
  {
    label: "Job Opportunity",
    icon: "💼",
    subject: "💼 Job Opportunity",
    preview: "Python/Django role...",
    msg: "I found your portfolio and I am impressed with your Django and Python work. We have an exciting opportunity that matches your skill set perfectly. Would you be open to a quick call to discuss the role and compensation details?"
  },
  {
    label: "Freelance Project",
    icon: "🤝",
    subject: "🤝 Freelance Project",
    preview: "Short-term Django work...",
    msg: "We have a Django project that needs an experienced developer. The scope is well-defined and the timeline is flexible. I would love to discuss the details and see if we can work together."
  },
  {
    label: "Technical Interview",
    icon: "🎯",
    subject: "💼 Job Opportunity",
    preview: "Interview invitation...",
    msg: "We reviewed your portfolio and would like to invite you for a technical interview for a Python Developer position at our company. Please let me know your availability for a 30-minute call this week."
  },
  {
    label: "Quick Question",
    icon: "💬",
    subject: "💬 Just Saying Hi",
    preview: "Reaching out...",
    msg: "Hi Subin, I came across your portfolio and I am really impressed by your work on Django projects. I would love to connect and learn more about your experience."
  },
]

const availability = [
  { label: "Full-time Role",     open: true  },
  { label: "Freelance Projects", open: true  },
  { label: "Remote Work",        open: true  },
  { label: "On-site (Kerala)",   open: true  },
  { label: "Part-time",          open: false },
  { label: "Internship",         open: false },
]

// Which channel to send through
const TABS = [
  { id: "email",    label: "Email",     icon: <EnvelopeIcon />, color: "#7c5cfc" },
  { id: "whatsapp", label: "WhatsApp",  icon: <WhatsAppIcon />, color: "#22c55e" },
]

export default function Contact() {
  const [tab,        setTab]        = useState("email")
  const [name,       setName]       = useState("")
  const [email,      setEmail]      = useState("")
  const [subject,    setSubject]    = useState("")
  const [customSubj, setCustomSubj] = useState("")
  const [message,    setMessage]    = useState("")
  const [sent,       setSent]       = useState(false)
  const [focused,    setFocused]    = useState("")
  const [activeWaTpl,setActiveWaTpl]= useState(null)

  const applyWaTemplate = (tpl) => {
    setActiveWaTpl(tpl.label)
    setSubject(tpl.subject)
    setMessage(tpl.msg)
  }

  const finalSubject = subject === "🔍 Other" ? customSubj : subject
  const isEmail = tab === "email"
  const accentColor = isEmail ? "#7c5cfc" : "#22c55e"

  const handleSend = () => {
    if (!name || !finalSubject || !message) return

    if (isEmail) {
      if (!email) return
      const mailto =
        `mailto:${EMAIL}` +
        `?subject=${encodeURIComponent(`[Portfolio] ${finalSubject} — from ${name}`)}` +
        `&body=${encodeURIComponent(`Hi Subin,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`)}`
      window.location.href = mailto
    } else {
      const waText = [
        `👋 Hi Subin, I am ${name}.`,
        ``,
        `*${finalSubject}*`,
        ``,
        message,
      ].join("\n")
      window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(waText)}`, "_blank")
    }

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = (field) => ({
    width: "100%", padding: "13px 16px",
    background: focused === field ? `${accentColor}10` : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? `${accentColor}50` : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10, color: "#e2e0ea", fontSize: 14,
    outline: "none", transition: "all .2s",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif",
  })

  return (
    <section id="contact" style={{
      background: "#0d0d14",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div className="section">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Let's <span className="grad">work together</span>
          </h2>
          <p style={{ fontSize: 17, color: "#6e6a83", lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Open to full-time roles, freelance projects, or just a chat about Python and Django.
            Reach out via email or WhatsApp — I respond fast.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}
             className="contact-layout">

          {/* ── LEFT ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* 2×2 contact cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                 className="contact-cards">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  style={{
                    display: "flex", flexDirection: "column", gap: 10,
                    padding: "18px", borderRadius: 14,
                    background: "#111118",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    transition: "border-color .25s, background .25s",
                    position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${item.accent}45`
                    e.currentTarget.style.background  = `${item.accent}09`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.background  = "#111118"
                  }}>
                  <div style={{
                    position: "absolute", top: -16, left: -16,
                    width: 64, height: 64, borderRadius: "50%",
                    background: `radial-gradient(circle, ${item.accent}20, transparent 70%)`,
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: item.accent,
                    filter: `drop-shadow(0 0 5px ${item.accent}50)`,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#4a4760", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                      {item.label}
                      {item.label === "WhatsApp" && (
                        <span style={{ color: "#22c55e" }}>● Online</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: "#a09db8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {item.value}
                    </div>
                    {/* Email card: show message preview */}
                    {item.label === "Email" && (
                      <div style={{
                        marginTop: 8,
                        padding: "8px 10px",
                        borderRadius: 8,
                        background: "rgba(124,92,252,0.07)",
                        border: "1px solid rgba(124,92,252,0.18)",
                      }}>
                        <div style={{ fontSize: 10, color: "#c084fc", fontWeight: 600, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                          <span>✦</span> Email preview
                        </div>
                        <div style={{ fontSize: 11, color: "#6e5a8a", lineHeight: 1.5 }}>
                          "Subject: [Portfolio] Job Opportunity — Hi Subin, I reviewed your portfolio and would like to discuss an exciting Python/Django role..."
                        </div>
                        <div style={{
                          marginTop: 6, fontSize: 10, color: "#c084fc",
                          display: "flex", alignItems: "center", gap: 4, fontWeight: 600,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                          </svg>
                          Click to open in Mail
                        </div>
                      </div>
                    )}

                    {/* WhatsApp card: show message preview */}
                    {item.label === "WhatsApp" && (
                      <div style={{
                        marginTop: 8,
                        padding: "8px 10px",
                        borderRadius: 8,
                        background: "rgba(34,197,94,0.07)",
                        border: "1px solid rgba(34,197,94,0.18)",
                      }}>
                        <div style={{ fontSize: 10, color: "#22c55e", fontWeight: 600, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                          <span>✦</span> Message preview
                        </div>
                        <div style={{ fontSize: 11, color: "#4a7a54", lineHeight: 1.5 }}>
                          "Hi Subin! 👋 I came across your portfolio and I'm impressed by your Django work. I'd love to discuss a potential opportunity..."
                        </div>
                        <div style={{
                          marginTop: 6, fontSize: 10, color: "#22c55e",
                          display: "flex", alignItems: "center", gap: 4, fontWeight: 600,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                          </svg>
                          Click to open in WhatsApp
                        </div>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "16px 20px", borderRadius: 14,
              background: "#111118", border: "1px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "rgba(250,204,21,0.1)",
                border: "1px solid rgba(250,204,21,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#facc15",
              }}><LocationIcon /></div>
              <div>
                <div style={{ fontSize: 10, color: "#4a4760", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2, fontWeight: 600 }}>Location</div>
                <div style={{ fontSize: 13, color: "#a09db8" }}>Kerala, India · Open to Remote</div>
              </div>
              <div style={{
                marginLeft: "auto",
                width: 8, height: 8, borderRadius: "50%",
                background: "#22d3a5", boxShadow: "0 0 8px #22d3a5",
              }} />
            </div>

            {/* Availability */}
            <div style={{
              background: "#111118", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14, padding: "20px 22px",
            }}>
              <div style={{ fontSize: 11, color: "#4a4760", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 14 }}>
                Availability
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {availability.map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, color: "#7a7792" }}>{item.label}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      padding: "3px 10px", borderRadius: 100,
                      background: item.open ? "rgba(34,211,165,0.1)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${item.open ? "rgba(34,211,165,0.25)" : "rgba(255,255,255,0.07)"}`,
                      color: item.open ? "#22d3a5" : "#4a4760",
                    }}>
                      {item.open ? "✓ Open" : "✗ Closed"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast responder */}
            <div style={{
              background: "rgba(124,92,252,0.07)",
              border: "1px solid rgba(124,92,252,0.18)",
              borderRadius: 14, padding: "16px 20px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 22 }}>⚡</span>
              <div>
                <div style={{ fontSize: 13, color: "#c8c4de", fontWeight: 600, marginBottom: 2 }}>Fast Responder</div>
                <div style={{ fontSize: 12, color: "#5e5b73" }}>Average reply under 24 hrs via Email · instant on WhatsApp</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "32px 28px",
              position: "relative", overflow: "hidden",
            }}>

            <div style={{
              position: "absolute", top: -60, right: -60, width: 200, height: 200,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${accentColor}12, transparent 70%)`,
              pointerEvents: "none", transition: "background .3s",
            }} />

            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#f0eefa", marginBottom: 6 }}>
              Send a Message
            </div>
            <p style={{ fontSize: 13, color: "#4a4760", marginBottom: 22 }}>
              Choose how you want to reach me.
            </p>

            {/* Email / WhatsApp tab switcher */}
            <div style={{
              display: "flex", gap: 8, marginBottom: 24,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: 5,
            }}>
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setTab(t.id); setSent(false) }}
                  style={{
                    flex: 1, padding: "10px 0",
                    borderRadius: 9,
                    border: tab === t.id ? `1px solid ${t.color}40` : "1px solid transparent",
                    background: tab === t.id
                      ? `linear-gradient(135deg, ${t.color}30, ${t.color}18)`
                      : "transparent",
                    color: tab === t.id ? t.color : "#5e5b73",
                    fontSize: 13, fontWeight: 600, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                    transition: "all .2s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                  <span style={{ display: "flex", alignItems: "center" }}>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* WhatsApp quick-template picker */}
              {!isEmail && (
                <div>
                  <label style={{ fontSize: 11, color: "#5e5b73", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    ⚡ Quick Templates — click to auto-fill
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {waTemplates.map(tpl => (
                      <button
                        key={tpl.label}
                        onClick={() => applyWaTemplate(tpl)}
                        style={{
                          padding: "10px 12px", borderRadius: 10, cursor: "pointer",
                          border: activeWaTpl === tpl.label ? "1px solid rgba(34,197,94,0.55)" : "1px solid rgba(255,255,255,0.07)",
                          background: activeWaTpl === tpl.label ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.03)",
                          transition: "all .2s", textAlign: "left",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={e => {
                          if (activeWaTpl !== tpl.label) {
                            e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"
                            e.currentTarget.style.background = "rgba(34,197,94,0.06)"
                          }
                        }}
                        onMouseLeave={e => {
                          if (activeWaTpl !== tpl.label) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                          }
                        }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                          <span style={{ fontSize: 14 }}>{tpl.icon}</span>
                          <span style={{ fontSize: 12, fontWeight: 600, color: activeWaTpl === tpl.label ? "#4ade80" : "#c8c4de" }}>
                            {tpl.label}
                          </span>
                          {activeWaTpl === tpl.label && (
                            <span style={{ marginLeft: "auto", fontSize: 10, color: "#22c55e", fontWeight: 700 }}>✓ Applied</span>
                          )}
                        </div>
                        <div style={{ fontSize: 11, color: "#4a4760", paddingLeft: 20 }}>{tpl.preview}</div>
                      </button>
                    ))}
                  </div>
                  <div style={{
                    marginTop: 10, padding: "10px 14px", borderRadius: 8,
                    background: "rgba(34,197,94,0.05)",
                    border: "1px solid rgba(34,197,94,0.12)",
                    fontSize: 11, color: "#4a4760",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ fontSize: 13 }}>💡</span>
                    Click a template to auto-fill subject &amp; message, then personalise before sending.
                  </div>
                </div>
              )}

              {/* Name + Email row (email only shows email field) */}
              <div style={{ display: "grid", gridTemplateColumns: isEmail ? "1fr 1fr" : "1fr", gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, color: "#5e5b73", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Name *</label>
                  <input type="text" placeholder="John Doe"
                    value={name} onChange={e => setName(e.target.value)}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    style={inputStyle("name")} />
                </div>
                {isEmail && (
                  <div>
                    <label style={{ fontSize: 11, color: "#5e5b73", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Email *</label>
                    <input type="email" placeholder="you@example.com"
                      value={email} onChange={e => setEmail(e.target.value)}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                      style={inputStyle("email")} />
                  </div>
                )}
              </div>

              {/* Subject pills */}
              <div>
                <label style={{ fontSize: 11, color: "#5e5b73", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>Subject *</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {subjects.map(s => (
                    <button key={s} onClick={() => setSubject(s)} style={{
                      padding: "7px 14px", borderRadius: 100,
                      border: `1px solid ${subject === s ? `${accentColor}60` : "rgba(255,255,255,0.08)"}`,
                      background: subject === s ? `${accentColor}18` : "rgba(255,255,255,0.03)",
                      color: subject === s ? accentColor === "#22c55e" ? "#4ade80" : "#c084fc" : "#5e5b73",
                      fontSize: 12, cursor: "pointer",
                      transition: "all .2s", fontFamily: "'DM Sans', sans-serif",
                    }}>{s}</button>
                  ))}
                </div>
                {subject === "🔍 Other" && (
                  <input type="text" placeholder="Type your subject..."
                    value={customSubj} onChange={e => setCustomSubj(e.target.value)}
                    onFocus={() => setFocused("customSubj")} onBlur={() => setFocused("")}
                    style={{ ...inputStyle("customSubj"), marginTop: 10 }} />
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{ fontSize: 11, color: "#5e5b73", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.08em" }}>Message *</label>
                <textarea rows={5}
                  placeholder={isEmail ? "Hi Subin, I'd like to discuss..." : "Hi Subin 👋, I'd like to..."}
                  value={message} onChange={e => setMessage(e.target.value)}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 120 }} />
              </div>

              {/* Send button */}
              <motion.button
                onClick={handleSend}
                whileHover={!sent ? { scale: 1.02 } : {}}
                whileTap={!sent ? { scale: 0.97 } : {}}
                style={{
                  width: "100%", padding: "14px",
                  borderRadius: 10, border: "none",
                  background: sent
                    ? "linear-gradient(135deg, #22d3a5, #16a34a)"
                    : isEmail
                      ? "linear-gradient(135deg, #7c5cfc, #c084fc)"
                      : "linear-gradient(135deg, #16a34a, #22c55e)",
                  color: "#fff", fontSize: 15, fontWeight: 600,
                  cursor: sent ? "default" : "pointer",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 9,
                  boxShadow: sent
                    ? "0 0 24px rgba(34,211,165,0.35)"
                    : isEmail
                      ? "0 0 24px rgba(124,92,252,0.35)"
                      : "0 0 24px rgba(34,197,94,0.35)",
                  transition: "background .3s, box-shadow .3s",
                  fontFamily: "'Syne', sans-serif",
                }}>
                {sent ? (
                  <><CheckIcon /> {isEmail ? "Email Client Opened!" : "Opening WhatsApp!"}</>
                ) : (
                  <>
                    {isEmail ? <SendIcon /> : <WhatsAppIcon />}
                    {isEmail ? "Send via Email" : "Send via WhatsApp"}
                  </>
                )}
              </motion.button>

              <p style={{ fontSize: 11, color: "#3a3750", textAlign: "center" }}>
                {isEmail
                  ? "Opens your default email app · No data stored"
                  : "Opens WhatsApp with your message pre-filled · No data stored"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .contact-cards { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #3a3750; }
        input, textarea, button { font-family: 'DM Sans', sans-serif; }
        textarea { resize: vertical; }
      `}</style>
    </section>
  )
}