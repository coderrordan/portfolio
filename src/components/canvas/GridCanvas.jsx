import { useEffect, useRef } from 'react'

const CELL = 60

export default function GridCanvas({ visible }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const gc  = canvasRef.current
    const ctx = gc.getContext('2d')

    const draw = () => {
      gc.width  = window.innerWidth
      gc.height = window.innerHeight

      const cols = Math.ceil(gc.width  / CELL) + 1
      const rows = Math.ceil(gc.height / CELL) + 1

      ctx.strokeStyle = 'rgba(232,114,12,0.07)'
      ctx.lineWidth   = 0.5

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
      // Intersection dots
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          ctx.beginPath()
          ctx.arc(c * CELL, r * CELL, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(232,114,12,0.35)'
          ctx.fill()
        }
      }
    }

    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    />
  )
}
