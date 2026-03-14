import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Languages",
    accent: "#3b82f6",
    skills: [
      { name: "Python",     level: 90, color: "#3b82f6",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12zM12 12.24c6.094 0 5.715 2.657 5.715 2.657l-.007 2.752H11.893v.826h8.12s3.9-.445 3.9-6.625c0-6.18-3.402-5.961-3.402-5.961H18.48v2.867s.109 3.403-3.35 3.403H9.36s-3.24-.052-3.24 3.13v5.371S5.632 24 12 24c6.093 0 5.714-2.656 5.714-2.656l.007-2.752H11.9v-.827h8.12s3.9.446 3.9-5.734c0-6.18-3.402-5.96-3.402-5.96H18.48v2.866s.11 3.403-3.35 3.403H9.362s-3.24-.052-3.24 3.13v5.37S5.636 24 12 24"/></svg> },
      { name: "JavaScript", level: 72, color: "#facc15",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg> },
    ],
  },
  {
    category: "Frameworks",
    accent: "#22c55e",
    skills: [
      { name: "Django",      level: 88, color: "#22c55e",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v11.082c0 3.85-.28 5.695-1.096 7.284-.764 1.54-1.783 2.52-3.876 3.596l-3.645-1.724c2.093-1.02 3.112-1.928 3.75-3.315.662-1.413.891-3.01.891-7.157V6.06h3.976zM17.338 0h3.976v4.011h-3.976z"/></svg> },
      { name: "Django REST", level: 80, color: "#4ade80",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v11.082c0 3.85-.28 5.695-1.096 7.284-.764 1.54-1.783 2.52-3.876 3.596l-3.645-1.724c2.093-1.02 3.112-1.928 3.75-3.315.662-1.413.891-3.01.891-7.157V6.06h3.976zM17.338 0h3.976v4.011h-3.976z"/></svg> },
    ],
  },
  {
    category: "Frontend",
    accent: "#f97316",
    skills: [
      { name: "HTML5", level: 85, color: "#f97316",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
      { name: "CSS3", level: 83, color: "#38bdf8",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg> },
      { name: "Bootstrap", level: 82, color: "#818cf8",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.646 2.232-1.685 0-.993-.795-1.663-2.325-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186C2.603 3.637 3.616 2.438 4.985 2.438H19.017c1.37 0 2.382 1.199 2.338 2.498-.044 1.249.012 2.867.419 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.557v-.034c1.157-.285 1.942-1.2 1.942-2.22 0-1.568-1.322-2.644-3.Registry-2.644H8.074v10.77h3.954c2.224 0 4.045-1.024 4.045-3.315z"/></svg> },
    ],
  },
  {
    category: "Databases",
    accent: "#06b6d4",
    skills: [
      { name: "PostgreSQL", level: 80, color: "#06b6d4",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.128 0a10.134 10.134 0 0 0-2.755.403C13.325.826 12.605 1.5 12 1.5c-.605 0-1.325-.674-2.373-1.097A10.134 10.134 0 0 0 6.872 0C3.308 0 0 2.656 0 7.508c0 2.911.528 5.198 1.555 6.81.763 1.2 1.786 1.954 2.933 2.07.73.072 1.402-.114 2.024-.435.308-.159.6-.34.882-.523.284-.185.553-.37.82-.524.236-.137.49-.25.786-.25.296 0 .55.113.786.25.267.155.536.34.82.524.281.183.573.364.882.523.622.32 1.293.507 2.024.435 1.147-.116 2.17-.87 2.933-2.07 1.027-1.612 1.555-3.9 1.555-6.81 0-4.852-3.308-7.508-6.872-7.508zM12 3.878c.493.468 1.15.907 2.127 1.174a9.771 9.771 0 0 0 2.488.32c.14 0 .278-.007.415-.014.056.386.084.795.084 1.25 0 2.456-.476 4.358-1.263 5.58-.594.932-1.261 1.38-1.889 1.38-.277 0-.598-.1-.944-.31a11.498 11.498 0 0 1-.883-.597 7.373 7.373 0 0 0-.907-.588A3.432 3.432 0 0 0 9.5 11.75c-.506 0-.985.12-1.228.323a7.373 7.373 0 0 0-.907.588c-.307.21-.608.418-.883.596-.346.21-.667.311-.944.311-.628 0-1.295-.448-1.889-1.38C2.862 10.966 2.386 9.064 2.386 6.608c0-.455.028-.864.084-1.25.137.007.274.014.415.014a9.771 9.771 0 0 0 2.488-.32C6.35 4.785 7.007 4.346 7.5 3.878a4.474 4.474 0 0 0 2.25.622c.82 0 1.59-.223 2.25-.622z"/></svg> },
      { name: "MySQL", level: 82, color: "#f59e0b",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.127-.04-.067-.126-.1-.182-.164zm5.265 15.725c-.094-.063-.192-.12-.296-.176a3.32 3.32 0 0 1-.466-.407 2.785 2.785 0 0 1-.274-.452c.154.007.322.02.475.04.18.02.36.02.55.02.18 0 .36-.007.55-.02.18-.013.36-.04.54-.07v-.12c-.18-.013-.36-.02-.55-.02-.18 0-.36.007-.55.02-.18.013-.36.04-.54.07v.12c.18.013.36.02.55.02.18 0 .36-.007.55-.02a5.19 5.19 0 0 0 .54-.07v-.12c-.18-.013-.36-.02-.55-.02-.18 0-.36.007-.55.02-.18.013-.36.04-.54.07v.12c.075-.013.15-.02.228-.027.094 0 .187.007.28.02.1.014.2.027.3.04a1.7 1.7 0 0 1 .274.08c.08.04.16.08.235.127.074.04.148.094.208.147.048.047.1.1.14.154.04.054.067.113.08.18.014.066.02.14.014.207 0 .073-.014.14-.04.2a.567.567 0 0 1-.094.167.62.62 0 0 1-.147.12c-.06.034-.12.054-.18.067a.897.897 0 0 1-.207.013.997.997 0 0 1-.208-.02 1.03 1.03 0 0 1-.194-.06 1.155 1.155 0 0 1-.174-.1 1.312 1.312 0 0 1-.154-.133 1.432 1.432 0 0 1-.127-.167 1.37 1.37 0 0 1-.094-.2 1.513 1.513 0 0 1-.054-.22 1.49 1.49 0 0 1-.013-.234c0-.08.007-.16.02-.234a1.44 1.44 0 0 1 .06-.214 1.396 1.396 0 0 1 .1-.2 1.48 1.48 0 0 1 .133-.174zM0 17.764v.5h23.912v-.5zm0-1.765v.5h23.912v-.5zM0 5.5v.5h23.912V5.5zm0-1.5v.5h23.912V4zM0 6.5v.5h23.912V6.5zm0 5.5v.5h23.912V12zm0 1.5v.5h23.912V13.5zm0-9v.5h23.912V4.5z"/></svg> },
    ],
  },
  {
    category: "Backend Concepts",
    accent: "#a855f7",
    skills: [
      { name: "MVT Architecture", level: 90, color: "#a855f7",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
      { name: "Auth & Authorization", level: 85, color: "#ec4899",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    ],
  },
  {
    category: "Tools",
    accent: "#f43f5e",
    skills: [
      { name: "Git", level: 80, color: "#f43f5e",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg> },
      { name: "GitHub", level: 82, color: "#e2e0ea",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
      { name: "VS Code", level: 90, color: "#38bdf8",
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.986V4.014a1.5 1.5 0 0 0-.85-1.427zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      background: "#0d0d14",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div className="section">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Technical Skills</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            What I <span className="grad">work with</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            My go-to stack for building reliable, scalable web applications.
          </p>
        </div>

        {/* Icon cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: 12,
            marginBottom: 52,
            padding: "28px 32px",
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
          }}>
          {skillGroups.flatMap(g => g.skills).map((skill, i) => (
            <motion.div
              key={skill.name + i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.1 }}
              title={skill.name}
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 7,
                padding: "14px 12px", borderRadius: 14,
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}28`,
                cursor: "default", minWidth: 70,
                transition: "all .2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${skill.color}22`
                e.currentTarget.style.borderColor = `${skill.color}55`
                e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}30`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${skill.color}12`
                e.currentTarget.style.borderColor = `${skill.color}28`
                e.currentTarget.style.boxShadow = "none"
              }}>
              <span style={{
                width: 28, height: 28, color: skill.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                filter: `drop-shadow(0 0 5px ${skill.color}70)`,
              }}>
                {skill.svg}
              </span>
              <span style={{ fontSize: 10, color: "#5e5b73", whiteSpace: "nowrap", fontWeight: 500 }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: 18,
        }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "24px 26px",
                position: "relative", overflow: "hidden",
                transition: "border-color .25s",
              }}
              whileHover={{ y: -3 }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${group.accent}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>

              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 100, height: 100, borderRadius: "50%",
                background: `radial-gradient(circle, ${group.accent}18, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Category label */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: 22 }}>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 11, fontWeight: 700,
                  color: group.accent,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>{group.category}</span>
                <div style={{
                  height: 1, flex: 1, marginLeft: 12,
                  background: `linear-gradient(90deg, ${group.accent}35, transparent)`,
                }} />
              </div>

              {/* Skills rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", marginBottom: 8,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                        <span style={{
                          width: 20, height: 20, color: skill.color,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          filter: `drop-shadow(0 0 4px ${skill.color}60)`,
                          flexShrink: 0,
                        }}>
                          {skill.svg}
                        </span>
                        <span style={{ fontSize: 14, color: "#c8c4de", fontWeight: 500 }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: skill.color,
                        background: `${skill.color}15`,
                        padding: "2px 8px", borderRadius: 100,
                        border: `1px solid ${skill.color}25`,
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      height: 5, background: "rgba(255,255,255,0.05)",
                      borderRadius: 100, overflow: "hidden",
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: si * 0.1 + 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{
                          height: "100%", borderRadius: 100,
                          background: `linear-gradient(90deg, ${skill.color}bb, ${skill.color})`,
                          boxShadow: `0 0 10px ${skill.color}55`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}