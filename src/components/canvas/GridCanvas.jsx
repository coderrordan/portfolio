import { useEffect, useRef } from 'react'

const CELL = 60

export default function GridCanvas({ onReady }) {
  const canvasRef = useRef(null)
  const reportedReady = useRef(false)

  useEffect(() => {
    const gc = canvasRef.current
    const ctx = gc.getContext('2d')
    let animationFrameId
    const startTime = performance.now()

    const render = (time) => {
      const elapsed = time - startTime

      gc.width = window.innerWidth
      gc.height = window.innerHeight

      const cols = Math.ceil(gc.width / CELL) + 1
      const rows = Math.ceil(gc.height / CELL) + 1

      // Timeline:
      // 0-400ms: nothing
      // 400-1400ms: dots fade in (orange)
      // 1400-2400ms: lines fade in (orange)
      // 2400-3400ms: Colors transition to white, opacity drops. Trigger UI spawn.

      let r = 232, g = 114, b = 12
      let dotsAlpha = 0
      let linesAlpha = 0

      if (elapsed > 400 && elapsed <= 2400) {
        dotsAlpha = Math.min((elapsed - 400) / 1000, 1) * 0.6
      }
      if (elapsed > 1400 && elapsed <= 2400) {
        linesAlpha = Math.min((elapsed - 1400) / 1000, 1) * 0.3
      }

      if (elapsed > 2400) {
        const t = Math.min((elapsed - 2400) / 1000, 1)

        // Lerp color to white (255, 255, 255)
        r = Math.round(232 + (255 - 232) * t)
        g = Math.round(114 + (255 - 114) * t)
        b = Math.round(12 + (255 - 12) * t)

        dotsAlpha = 0.6 - (0.6 - 0.15) * t
        linesAlpha = 0.3 - (0.3 - 0.05) * t

        // Trigger the rest of the UI to spawn as the fade to white begins
        if (!reportedReady.current && onReady) {
          reportedReady.current = true
          onReady()
        }
      }

      // Draw lines
      ctx.strokeStyle = `rgba(${r},${g},${b},${linesAlpha})`
      ctx.lineWidth = 0.5

      for (let c = 0; c <= cols; c++) {
        ctx.beginPath()
        ctx.moveTo(c * CELL, 0)
        ctx.lineTo(c * CELL, gc.height)
        ctx.stroke()
      }
      for (let r_idx = 0; r_idx <= rows; r_idx++) {
        ctx.beginPath()
        ctx.moveTo(0, r_idx * CELL)
        ctx.lineTo(gc.width, r_idx * CELL)
        ctx.stroke()
      }

      // Draw dots
      ctx.fillStyle = `rgba(${r},${g},${b},${dotsAlpha})`
      for (let r_idx = 0; r_idx <= rows; r_idx++) {
        for (let c = 0; c <= cols; c++) {
          ctx.beginPath()
          ctx.arc(c * CELL, r_idx * CELL, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (elapsed < 4000) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    animationFrameId = requestAnimationFrame(render)

    const handleResize = () => {
      if ((performance.now() - startTime) > 4000) {
        render(startTime + 5000)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [onReady])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
