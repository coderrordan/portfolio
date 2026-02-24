import { useEffect, useRef } from 'react'
import { ABOUT, TERMINAL_LINES, SITE } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'

// ─── SVG social icons ───────────────────────────────
const YTIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)
const IGIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const LIIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// ─── Terminal typewriter ────────────────────────────
function TerminalBox() {
  const bodyRef = useRef(null)

  useEffect(() => {
    const container = bodyRef.current
    if (!container) return

    let lineIdx   = 0
    let charIdx   = 0
    let currentEl = null
    let rawText   = ''
    let timerId

    const CLASS_MAP = { prompt: 't-prompt', ok: 't-ok', warn: 't-warn' }

    function nextLine() {
      if (lineIdx >= TERMINAL_LINES.length) {
        const cur = document.createElement('span')
        cur.className = 't-cursor'
        container.appendChild(cur)
        return
      }

      const { type, text } = TERMINAL_LINES[lineIdx]

      if (type === 'spacer') {
        const sp = document.createElement('span')
        sp.className = 't-spacer'
        container.appendChild(sp)
        lineIdx++
        timerId = setTimeout(nextLine, 60)
        return
      }

      if (type === 'json') {
        const el = document.createElement('span')
        el.className = 't-line t-val'
        el.innerHTML = text
          .replace(/<k>/g,  '<span class="t-key">')
          .replace(/<\/k>/g,'</span>')
          .replace(/<s>/g,  '<span class="t-str">')
          .replace(/<\/s>/g,'</span>')
        container.appendChild(el)
        lineIdx++
        timerId = setTimeout(nextLine, 80)
        return
      }

      // typewriter
      currentEl = document.createElement('span')
      currentEl.className = 't-line ' + (CLASS_MAP[type] || 't-val')
      rawText   = text
      charIdx   = 0
      container.appendChild(currentEl)
      timerId = setTimeout(typeChar, type === 'prompt' ? 28 : 18)
    }

    function typeChar() {
      if (charIdx < rawText.length) {
        currentEl.textContent = rawText.slice(0, charIdx + 1)
        charIdx++
        container.scrollTop = container.scrollHeight
        const { type } = TERMINAL_LINES[lineIdx]
        timerId = setTimeout(typeChar, type === 'prompt' ? 28 : 18)
      } else {
        const { type } = TERMINAL_LINES[lineIdx]
        lineIdx++
        charIdx   = 0
        currentEl = null
        timerId = setTimeout(nextLine, type === 'prompt' ? 120 : 60)
      }
    }

    timerId = setTimeout(nextLine, 400)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div
      className="rounded-lg overflow-hidden font-mono text-[0.78rem] leading-[1.7]"
      style={{ background: '#0d1117', border: '1px solid #30363d' }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: '#161b22', borderColor: '#30363d' }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        <span className="mx-auto text-[0.7rem] tracking-wide" style={{ color: '#8b949e' }}>
          daniele_napolitano.exe
        </span>
      </div>
      {/* Body */}
      <div
        ref={bodyRef}
        className="p-6 flex flex-col gap-[0.35rem] min-h-[320px]"
      />
    </div>
  )
}

// ─── About section ──────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-24 px-16 py-32 border-t border-b border-border relative z-10"
      style={{ background: 'rgba(12,12,12,0.92)', backdropFilter: 'blur(20px)' }}
    >
      {/* LEFT */}
      <div className="about-left">
        <SectionLabel num={ABOUT.label} className="reveal">
          {ABOUT.sectionTitle}
        </SectionLabel>

        <h2
          className="reveal delay-1 font-sans font-black leading-tight tracking-[-0.03em] text-cream mt-5 mb-8"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
        >
          {ABOUT.heading.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        {ABOUT.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`reveal delay-${i + 2} text-base leading-[1.85] text-muted font-light mb-5`}
            dangerouslySetInnerHTML={{
              __html: p
                .replace(/<strong>/g, '<strong class="text-cream font-semibold">')
                .replace(/<a /g, '<a class="text-accent no-underline border-b border-accent/30 hover:border-accent transition-colors" '),
            }}
          />
        ))}

        {/* Social buttons */}
        <div className="reveal delay-4 flex gap-3 mt-10 flex-wrap">
          <a
            href={SITE.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-btn inline-flex items-center gap-2.5 font-mono text-[0.68rem] tracking-widest uppercase px-4 py-2.5 border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 no-underline"
          >
            <YTIcon /> YouTube
          </a>
          <a
            href={SITE.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-btn inline-flex items-center gap-2.5 font-mono text-[0.68rem] tracking-widest uppercase px-4 py-2.5 border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 no-underline"
          >
            <IGIcon /> Instagram
          </a>
          <a
            href={SITE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-btn inline-flex items-center gap-2.5 font-mono text-[0.68rem] tracking-widest uppercase px-4 py-2.5 border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 no-underline"
          >
            <LIIcon /> LinkedIn
          </a>
        </div>
      </div>

      {/* RIGHT — terminal */}
      <div className="reveal delay-2">
        <TerminalBox />
      </div>
    </section>
  )
}
