import { useEffect, useRef } from 'react'

const POINTS = 320

const seeded = (index, salt = 0) => {
  const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

function thickLine(x1, y1, x2, y2, thickness, count, salt = 0) {
  const dx = x2 - x1
  const dy = y2 - y1
  const length = Math.hypot(dx, dy) || 1
  return Array.from({ length: count }, (_, index) => {
    const progress = seeded(index, salt)
    const offset = (seeded(index, salt + 1) - 0.5) * thickness
    return {
      x: x1 + dx * progress - (dy / length) * offset,
      y: y1 + dy * progress + (dx / length) * offset,
    }
  })
}

function ring(cx, cy, innerRadius, outerRadius, count, start = 0, end = Math.PI * 2, salt = 0) {
  return Array.from({ length: count }, (_, index) => {
    const angle = start + (end - start) * seeded(index, salt)
    const radius = Math.sqrt(innerRadius ** 2 + seeded(index, salt + 1) * (outerRadius ** 2 - innerRadius ** 2))
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }
  })
}

function ellipse(cx, cy, radiusX, radiusY, count, salt = 0) {
  return Array.from({ length: count }, (_, index) => {
    const angle = seeded(index, salt) * Math.PI * 2
    const radius = Math.sqrt(seeded(index, salt + 1))
    return { x: cx + Math.cos(angle) * radiusX * radius, y: cy + Math.sin(angle) * radiusY * radius }
  })
}

function polygon(vertices, count, salt = 0) {
  const minX = Math.min(...vertices.map(({ x }) => x))
  const maxX = Math.max(...vertices.map(({ x }) => x))
  const minY = Math.min(...vertices.map(({ y }) => y))
  const maxY = Math.max(...vertices.map(({ y }) => y))
  const result = []
  let attempt = 0

  while (result.length < count && attempt < count * 20) {
    const point = {
      x: minX + seeded(attempt, salt) * (maxX - minX),
      y: minY + seeded(attempt, salt + 1) * (maxY - minY),
    }
    let inside = false
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const a = vertices[i]
      const b = vertices[j]
      if ((a.y > point.y) !== (b.y > point.y) && point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x) inside = !inside
    }
    if (inside) result.push(point)
    attempt += 1
  }
  return result
}

function outline(vertices, thickness, count, salt = 0) {
  const perSide = Math.ceil(count / vertices.length)
  return vertices.flatMap((point, index) => {
    const next = vertices[(index + 1) % vertices.length]
    return thickLine(point.x, point.y, next.x, next.y, thickness, perSide, salt + index)
  })
}

function gear(cx, cy, radius, count, salt) {
  const points = [
    ...ring(cx, cy, radius * 0.55, radius * 0.76, Math.round(count * 0.52), 0, Math.PI * 2, salt),
    ...ring(cx, cy, radius * 0.12, radius * 0.28, Math.round(count * 0.18), 0, Math.PI * 2, salt + 2),
  ]
  const teeth = 10
  for (let index = 0; index < teeth; index += 1) {
    const angle = (index / teeth) * Math.PI * 2
    points.push(...thickLine(
      cx + Math.cos(angle) * radius * 0.68,
      cy + Math.sin(angle) * radius * 0.68,
      cx + Math.cos(angle) * radius,
      cy + Math.sin(angle) * radius,
      radius * 0.16,
      Math.ceil(count * 0.03),
      salt + index + 4,
    ))
  }
  return points
}

function normalize(points) {
  return Array.from({ length: POINTS }, (_, index) => points[Math.floor((index / POINTS) * points.length)] || points[index % points.length])
}

function createShape(symbol, width, height) {
  const cx = width * 0.54
  const cy = height * 0.34
  const size = Math.min(width, height) * 0.32
  let points = []

  if (symbol === 'scatter') {
    points = Array.from({ length: POINTS }, (_, index) => ({
      x: width * (0.06 + seeded(index, 31) * 0.88),
      y: height * (0.08 + seeded(index, 32) * 0.84),
    }))
  } else if (symbol === 'search') {
    const lensX = cx - size * 0.18
    const lensY = cy - size * 0.16
    points = [
      ...ring(lensX, lensY, size * 0.55, size * 0.76, 180, 0, Math.PI * 2, 2),
      ...ellipse(lensX, lensY, size * 0.48, size * 0.48, 48, 3),
      ...ring(lensX, lensY, size * 0.36, size * 0.43, 38, Math.PI * 1.08, Math.PI * 1.46, 4),
      ...thickLine(cx + size * 0.28, cy + size * 0.28, cx + size * 0.98, cy + size * 0.98, size * 0.2, 86, 5),
    ]
  } else if (symbol === 'compass') {
    const north = [{ x: cx, y: cy - size * 0.88 }, { x: cx + size * 0.2, y: cy + size * 0.12 }, { x: cx, y: cy - size * 0.02 }]
    const south = [{ x: cx, y: cy + size * 0.88 }, { x: cx - size * 0.2, y: cy - size * 0.12 }, { x: cx, y: cy + size * 0.02 }]
    points = [
      ...ring(cx, cy, size * 0.78, size, 120, 0, Math.PI * 2, 7),
      ...ring(cx, cy, size * 0.48, size * 0.6, 60, 0, Math.PI * 2, 8),
      ...polygon(north, 62, 9),
      ...polygon(south, 62, 10),
      ...ring(cx, cy, 0, size * 0.12, 20, 0, Math.PI * 2, 11),
      ...thickLine(cx - size, cy, cx - size * 0.78, cy, size * 0.08, 10, 12),
      ...thickLine(cx + size * 0.78, cy, cx + size, cy, size * 0.08, 10, 13),
    ]
  } else if (symbol === 'blueprint') {
    const left = [{ x: cx - size, y: cy - size * 0.68 }, { x: cx - size * 0.34, y: cy - size * 0.84 }, { x: cx - size * 0.34, y: cy + size * 0.72 }, { x: cx - size, y: cy + size * 0.88 }]
    const middle = [{ x: cx - size * 0.34, y: cy - size * 0.84 }, { x: cx + size * 0.34, y: cy - size * 0.68 }, { x: cx + size * 0.34, y: cy + size * 0.88 }, { x: cx - size * 0.34, y: cy + size * 0.72 }]
    const right = [{ x: cx + size * 0.34, y: cy - size * 0.68 }, { x: cx + size, y: cy - size * 0.84 }, { x: cx + size, y: cy + size * 0.72 }, { x: cx + size * 0.34, y: cy + size * 0.88 }]
    points = [
      ...polygon(left, 42, 14), ...polygon(middle, 42, 15), ...polygon(right, 42, 16),
      ...outline(left, size * 0.06, 44, 17), ...outline(middle, size * 0.06, 44, 18), ...outline(right, size * 0.06, 44, 19),
      ...thickLine(cx - size * 0.75, cy + size * 0.42, cx - size * 0.12, cy - size * 0.12, size * 0.07, 25, 20),
      ...thickLine(cx - size * 0.12, cy - size * 0.12, cx + size * 0.72, cy + size * 0.28, size * 0.07, 30, 21),
      ...ring(cx - size * 0.75, cy + size * 0.42, 0, size * 0.12, 12, 0, Math.PI * 2, 22),
      ...ring(cx + size * 0.72, cy + size * 0.28, 0, size * 0.14, 14, 0, Math.PI * 2, 23),
    ]
  } else if (symbol === 'modules') {
    points = [
      ...gear(cx - size * 0.42, cy - size * 0.18, size * 0.62, 145, 24),
      ...gear(cx + size * 0.48, cy + size * 0.32, size * 0.52, 120, 39),
      ...gear(cx + size * 0.48, cy - size * 0.58, size * 0.32, 70, 54),
    ]
  } else {
    const bars = [
      { x: cx - size * 0.46, y: cy + size * 0.18, h: size * 0.34 },
      { x: cx - size * 0.12, y: cy - size * 0.05, h: size * 0.57 },
      { x: cx + size * 0.22, y: cy - size * 0.35, h: size * 0.87 },
    ]
    points = [
      ...ring(cx, cy, size * 0.72, size * 0.94, 170, Math.PI * 0.12, Math.PI * 1.78, 65),
      ...polygon([{ x: cx + size * 0.92, y: cy - size * 0.38 }, { x: cx + size * 0.48, y: cy - size * 0.48 }, { x: cx + size * 0.72, y: cy - size * 0.08 }], 38, 67),
      ...bars.flatMap((bar, index) => polygon([
        { x: bar.x, y: cy + size * 0.52 - bar.h },
        { x: bar.x + size * 0.22, y: cy + size * 0.52 - bar.h },
        { x: bar.x + size * 0.22, y: cy + size * 0.52 },
        { x: bar.x, y: cy + size * 0.52 },
      ], 38, 70 + index)),
    ]
  }

  return normalize(points)
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
    let visible = false
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = mediaQuery.matches
    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--nexus-accent-primary').trim() || '#e8720c'

    const render = () => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = accent
      context.shadowColor = accent
      context.shadowBlur = 7
      stateRef.current.particles.forEach((particle, index) => {
        const target = stateRef.current.target[index]
        if (!target) return
        const ease = reducedMotion ? 1 : 0.075
        particle.x += (target.x - particle.x) * ease
        particle.y += (target.y - particle.y) * ease
        context.globalAlpha = 0.58 + (index % 5) * 0.08
        context.beginPath()
        context.arc(particle.x, particle.y, index % 9 === 0 ? 2.5 : 1.7, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
      context.shadowBlur = 0
    }

    const tick = () => {
      render()
      frame = requestAnimationFrame(tick)
    }

    const syncAnimation = () => {
      cancelAnimationFrame(frame)
      render()
      if (!reducedMotion && visible) frame = requestAnimationFrame(tick)
    }

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
      syncAnimation()
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      syncAnimation()
    }, { rootMargin: '150px' })
    const handleMotionChange = (event) => {
      reducedMotion = event.matches
      syncAnimation()
    }

    resize()
    observer.observe(canvas)
    mediaQuery.addEventListener('change', handleMotionChange)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('resize', resize)
    }
  }, [symbol])

  return <canvas ref={canvasRef} className="method-particles" aria-hidden="true" />
}
