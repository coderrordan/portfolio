import { useEffect, useRef } from 'react'

const COUNT = 43
const LINK_D = 140

export default function ParticlesCanvas({ visible }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    let scrollY = 0
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Initialise particles with random normalised positions + tiny random velocity
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      r: Math.random() * 1.8 + 0.5,
      amber: Math.random() < 0.6,
    }))

    let rafId

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const off = scrollY * 0.17   // parallax: particles move slower than page scroll

      // Update positions (pure drift, bounce at edges)
      pts.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) { p.vx *= -1; p.x = Math.max(0, Math.min(1, p.x)) }
        if (p.y < 0 || p.y > 1) { p.vy *= -1; p.y = Math.max(0, Math.min(1, p.y)) }

        const px = p.x * canvas.width
        const py = p.y * canvas.height - off

        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.amber
          ? 'rgba(245,158,11,0.75)'
          : 'rgba(232,114,12,0.75)'
        ctx.fill()
      })

      // Draw connection lines between nearby particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dx = (a.x - b.x) * canvas.width
          const dy = (a.y - b.y) * canvas.height
          const dist = Math.hypot(dx, dy)

          if (dist < LINK_D) {
            const alpha = 0.15 - dist / 1100
            if (alpha <= 0) continue
            ctx.beginPath()
            ctx.strokeStyle = `rgba(103,232,249,${alpha})`
            ctx.lineWidth = 1
            ctx.moveTo(a.x * canvas.width, a.y * canvas.height - off)
            ctx.lineTo(b.x * canvas.width, b.y * canvas.height - off)
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.5s ease',
      }}
    />
  )
}
