import { useEffect, useRef } from 'react'

const POINTS = 150

function line(x1, y1, x2, y2, count) {
  return Array.from({ length: count }, (_, index) => {
    const progress = count === 1 ? 0 : index / (count - 1)
    return { x: x1 + (x2 - x1) * progress, y: y1 + (y2 - y1) * progress }
  })
}

function circle(cx, cy, radius, count, start = 0, end = Math.PI * 2) {
  return Array.from({ length: count }, (_, index) => {
    const angle = start + (end - start) * (index / count)
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }
  })
}

function rectangle(x, y, width, height, count = 36) {
  const side = Math.floor(count / 4)
  return [
    ...line(x, y, x + width, y, side),
    ...line(x + width, y, x + width, y + height, side),
    ...line(x + width, y + height, x, y + height, side),
    ...line(x, y + height, x, y, side),
  ]
}

function createShape(symbol, width, height) {
  const cx = width / 2
  const cy = height / 2
  const size = Math.min(width, height) * 0.25
  let points

  if (symbol === 'search') {
    points = [...circle(cx - size * 0.2, cy - size * 0.2, size * 0.72, 110), ...line(cx + size * 0.3, cy + size * 0.3, cx + size, cy + size, 40)]
  } else if (symbol === 'compass') {
    points = [
      ...circle(cx, cy, size, 90),
      ...line(cx, cy - size * 0.82, cx + size * 0.28, cy + size * 0.22, 30),
      ...line(cx + size * 0.28, cy + size * 0.22, cx, cy + size * 0.08, 15),
      ...line(cx, cy + size * 0.08, cx, cy - size * 0.82, 15),
    ]
  } else if (symbol === 'blueprint') {
    points = [
      ...rectangle(cx - size, cy - size * 0.72, size * 2, size * 1.44, 72),
      ...line(cx - size, cy, cx + size, cy, 26),
      ...line(cx, cy - size * 0.72, cx, cy + size * 0.72, 26),
      ...line(cx - size * 0.55, cy - size * 0.72, cx - size * 0.55, cy + size * 0.72, 26),
    ]
  } else if (symbol === 'modules') {
    points = [
      ...rectangle(cx - size, cy - size * 0.8, size * 0.88, size * 0.7),
      ...rectangle(cx + size * 0.12, cy - size * 0.8, size * 0.88, size * 0.7),
      ...rectangle(cx - size, cy + size * 0.1, size * 0.88, size * 0.7),
      ...rectangle(cx + size * 0.12, cy + size * 0.1, size * 0.88, size * 0.7),
      ...line(cx - size * 0.12, cy, cx + size * 0.12, cy, 6),
    ]
  } else {
    points = [
      ...circle(cx, cy, size, 120, Math.PI * 0.18, Math.PI * 1.85),
      ...line(cx + size * 0.9, cy - size * 0.25, cx + size * 0.42, cy - size * 0.48, 15),
      ...line(cx + size * 0.9, cy - size * 0.25, cx + size * 0.72, cy + size * 0.2, 15),
    ]
  }

  return Array.from({ length: POINTS }, (_, index) => points[index % points.length])
}

export default function MethodParticles({ symbol }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({ particles: [], target: [] })

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    let frame
    let width = 0
    let height = 0
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      stateRef.current.target = createShape(symbol, width, height)
      if (!stateRef.current.particles.length) {
        stateRef.current.particles = stateRef.current.target.map(() => ({ x: Math.random() * width, y: Math.random() * height }))
      }
    }

    const draw = () => {
      const styles = getComputedStyle(document.documentElement)
      const accent = styles.getPropertyValue('--nexus-accent-primary').trim() || '#e8720c'
      context.clearRect(0, 0, width, height)
      context.fillStyle = accent
      stateRef.current.particles.forEach((particle, index) => {
        const target = stateRef.current.target[index]
        if (!target) return
        const ease = reducedMotion ? 1 : 0.075
        particle.x += (target.x - particle.x) * ease
        particle.y += (target.y - particle.y) * ease
        context.globalAlpha = 0.38 + (index % 5) * 0.12
        context.fillRect(particle.x, particle.y, index % 7 === 0 ? 3 : 2, index % 7 === 0 ? 3 : 2)
      })
      context.globalAlpha = 1
      if (!reducedMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [symbol])

  return <canvas ref={canvasRef} className="method-particles" aria-hidden="true" />
}
