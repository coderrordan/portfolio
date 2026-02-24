import { useEffect, useRef } from 'react'

const CELL = 60

export default function GridCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const gc = canvasRef.current
    const ctx = gc.getContext('2d')
    let animationFrameId
    const startTime = performance.now()

    const render = (time) => {
      // Calculate elapsed time
      const elapsed = time - startTime

      gc.width = window.innerWidth
      gc.height = window.innerHeight

      const cols = Math.ceil(gc.width / CELL) + 1
      const rows = Math.ceil(gc.height / CELL) + 1

      // Animation timeline:
      // 0-400ms: nothing
      // 400-1400ms: dots fade in (stronger accent)
      // 1400-2400ms: lines fade in (stronger accent)
      // 2400-3400ms: transition into steady background state

      // Dots opacity: peak at 0.6, then settle to 0.25 (same color as lines)
      let dotsAlpha = 0
      if (elapsed > 400 && elapsed <= 2400) {
        dotsAlpha = Math.min((elapsed - 400) / 1000, 1) * 0.6
      } else if (elapsed > 2400) {
        // Transition from 0.6 to 0.15 over 1000ms
        dotsAlpha = 0.6 - (Math.min((elapsed - 2400) / 1000, 1) * 0.45)
      }

      // Lines opacity: starts at 1400ms, peaks at 0.3, settles to 0.15
      let linesAlpha = 0
      if (elapsed > 1400 && elapsed <= 2400) {
        linesAlpha = Math.min((elapsed - 1400) / 1000, 1) * 0.3
      } else if (elapsed > 2400) {
        // Transition from 0.3 to 0.15 over 1000ms
        linesAlpha = 0.3 - (Math.min((elapsed - 2400) / 1000, 1) * 0.15)
      }

      // Draw lines
      ctx.strokeStyle = `rgba(232,114,12,${linesAlpha})`
      ctx.lineWidth = 0.5

      for (let c = 0; c <= cols; c++) {
        ctx.beginPath()
        ctx.moveTo(c * CELL, 0)
        ctx.lineTo(c * CELL, gc.height)
        ctx.stroke()
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath()
        ctx.moveTo(0, r * CELL)
        ctx.lineTo(gc.width, r * CELL)
        ctx.stroke()
      }

      // Draw dots
      ctx.fillStyle = `rgba(232,114,12,${dotsAlpha})`
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          ctx.beginPath()
          ctx.arc(c * CELL, r * CELL, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Continue animating until 4000ms
      if (elapsed < 4000) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    animationFrameId = requestAnimationFrame(render)

    // Maintain grid on window resize after animation finishes
    const handleResize = () => {
      const t = performance.now()
      if ((t - startTime) > 4000) {
        render(startTime + 5000) // Force final steady state
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
