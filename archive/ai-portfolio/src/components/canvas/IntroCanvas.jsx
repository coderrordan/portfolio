import { useEffect, useRef } from 'react'

const CELL       = 60
const DOTS_DUR   = 350   // ms
const LINES_DUR  = 300
const HOLD       = 250

/**
 * Intro animation:
 *  1. Intersection dots appear randomly at grid crossings (350ms)
 *  2. Grid lines draw in progressively (300ms)
 *  3. Hold briefly, then call onComplete()
 */
export default function IntroCanvas({ onComplete }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const C   = canvasRef.current
    const ctx = C.getContext('2d')

    C.width  = window.innerWidth
    C.height = window.innerHeight

    const cols = Math.ceil(C.width  / CELL) + 1
    const rows = Math.ceil(C.height / CELL) + 1

    // Build all intersection points and shuffle
    const dots = []
    for (let r = 0; r <= rows; r++)
      for (let c = 0; c <= cols; c++)
        dots.push({ x: c * CELL, y: r * CELL, born: -1 })

    for (let i = dots.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dots[i], dots[j]] = [dots[j], dots[i]]
    }

    let start = null
    let done  = false
    let rafId

    const tick = (ts) => {
      if (!start) start = ts
      const t = ts - start

      ctx.clearRect(0, 0, C.width, C.height)

      // Phase 1 — dots appear one by one
      const dp = Math.min(t / DOTS_DUR, 1)
      const vc = Math.floor(dp * dots.length)
      for (let i = 0; i < vc; i++) {
        if (dots[i].born < 0) dots[i].born = t
        const alpha = Math.min((t - dots[i].born) / 80, 1)
        ctx.beginPath()
        ctx.arc(dots[i].x, dots[i].y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,114,12,${alpha * 0.35})`
        ctx.fill()
      }

      // Phase 2 — grid lines draw in
      if (t > DOTS_DUR) {
        const lp = Math.min((t - DOTS_DUR) / LINES_DUR, 1)
        ctx.strokeStyle = 'rgba(232,114,12,0.07)'
        ctx.lineWidth   = 0.5

        for (let r = 0; r <= rows; r++) {
          ctx.beginPath()
          ctx.moveTo(0, r * CELL)
          ctx.lineTo(lp * cols * CELL, r * CELL)
          ctx.stroke()
        }
        for (let c = 0; c <= cols; c++) {
          ctx.beginPath()
          ctx.moveTo(c * CELL, 0)
          ctx.lineTo(c * CELL, lp * rows * CELL)
          ctx.stroke()
        }
        // Redraw dots on top with final color
        dots.forEach((d) => {
          ctx.beginPath()
          ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(232,114,12,0.35)'
          ctx.fill()
        })
      }

      // Phase 3 — hand off
      if (t > DOTS_DUR + LINES_DUR + HOLD && !done) {
        done = true
        cancelAnimationFrame(rafId)
        onComplete()
        return
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
