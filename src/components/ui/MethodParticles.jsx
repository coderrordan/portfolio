import { useEffect, useRef } from 'react'

const POINTS = 1000

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

function ring(cx, cy, radius, thickness, count, start = 0, end = Math.PI * 2, salt = 0) {
  return Array.from({ length: count }, (_, index) => {
    const angle = start + (end - start) * seeded(index, salt)
    const offset = (seeded(index, salt + 1) - 0.5) * thickness
    return { x: cx + Math.cos(angle) * (radius + offset), y: cy + Math.sin(angle) * (radius + offset) }
  })
}

function glyphStroke(glyph, cx, cy, size, count) {
  const resolution = 320
  const surface = document.createElement('canvas')
  surface.width = resolution
  surface.height = resolution
  const context = surface.getContext('2d')
  context.strokeStyle = '#000'
  context.lineWidth = 18
  context.lineJoin = 'round'
  context.font = '900 260px Arial Black, Arial, sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.strokeText(glyph, resolution / 2, resolution * 0.47)

  const pixels = []
  const data = context.getImageData(0, 0, resolution, resolution).data
  for (let y = 0; y < resolution; y += 2) {
    for (let x = 0; x < resolution; x += 2) {
      if (data[(y * resolution + x) * 4 + 3] > 80) pixels.push({ x, y })
    }
  }

  const scale = size / 260
  return Array.from({ length: count }, (_, index) => {
    const point = pixels[Math.floor((index / count) * pixels.length)]
    return { x: cx + (point.x - resolution / 2) * scale, y: cy + (point.y - resolution / 2) * scale }
  })
}

function quadraticStroke(start, control, end, thickness, count, salt = 0) {
  return Array.from({ length: count }, (_, index) => {
    const t = seeded(index, salt)
    const inverse = 1 - t
    const x = inverse * inverse * start.x + 2 * inverse * t * control.x + t * t * end.x
    const y = inverse * inverse * start.y + 2 * inverse * t * control.y + t * t * end.y
    const dx = 2 * inverse * (control.x - start.x) + 2 * t * (end.x - control.x)
    const dy = 2 * inverse * (control.y - start.y) + 2 * t * (end.y - control.y)
    const length = Math.hypot(dx, dy) || 1
    const offset = (seeded(index, salt + 1) - 0.5) * thickness
    return { x: x - (dy / length) * offset, y: y + (dx / length) * offset }
  })
}

function outline(vertices, thickness, count, salt = 0, closed = true) {
  const sides = closed ? vertices.length : vertices.length - 1
  const perSide = Math.ceil(count / sides)
  return Array.from({ length: sides }, (_, index) => {
    const next = vertices[(index + 1) % vertices.length]
    return thickLine(vertices[index].x, vertices[index].y, next.x, next.y, thickness, perSide, salt + index)
  }).flat()
}

function normalize(points) {
  return Array.from({ length: POINTS }, (_, index) => points[Math.floor((index / POINTS) * points.length)])
}

function amazonShape(width, height) {
  const scale = Math.min(width, height)
  const cx = width * 0.56
  const stroke = scale * 0.035
  const smileY = height * 0.7
  return [
    ...glyphStroke('a', cx, height * 0.34, scale * 0.56, 620),
    ...quadraticStroke(
      { x: cx - scale * 0.25, y: smileY },
      { x: cx, y: height * 0.84 },
      { x: cx + scale * 0.27, y: smileY },
      stroke * 0.82,
      280,
      7,
    ),
    ...thickLine(cx + scale * 0.18, smileY - scale * 0.045, cx + scale * 0.3, smileY - scale * 0.035, stroke, 50, 9),
    ...thickLine(cx + scale * 0.3, smileY - scale * 0.035, cx + scale * 0.27, smileY + scale * 0.085, stroke, 50, 11),
  ]
}

function compassShape(cx, cy, size, stroke) {
  const outer = size * 0.9
  const diagonal = Math.SQRT1_2
  const direction = { x: diagonal, y: -diagonal }
  const normal = { x: diagonal, y: diagonal }
  const needleLength = size * 0.72
  const needleWidth = size * 0.2
  const needleOuter = [
    { x: cx + direction.x * needleLength, y: cy + direction.y * needleLength },
    { x: cx + normal.x * needleWidth, y: cy + normal.y * needleWidth },
    { x: cx - direction.x * needleLength, y: cy - direction.y * needleLength },
    { x: cx - normal.x * needleWidth, y: cy - normal.y * needleWidth },
  ]
  const holeLength = size * 0.36
  const holeWidth = size * 0.075
  const needleInner = [
    { x: cx + direction.x * size * 0.09, y: cy + direction.y * size * 0.09 },
    { x: cx - direction.x * holeLength + normal.x * holeWidth, y: cy - direction.y * holeLength + normal.y * holeWidth },
    { x: cx - direction.x * holeLength - normal.x * holeWidth, y: cy - direction.y * holeLength - normal.y * holeWidth },
  ]
  const ticks = [
    [cx, cy - outer, cx, cy - outer * 0.76],
    [cx + outer, cy, cx + outer * 0.76, cy],
    [cx, cy + outer, cx, cy + outer * 0.76],
    [cx - outer, cy, cx - outer * 0.76, cy],
  ]
  return [
    ...ring(cx, cy, outer, stroke, 460, 0, Math.PI * 2, 12),
    ...ticks.flatMap((tick, index) => thickLine(...tick, stroke * 1.15, 45, 18 + index)),
    ...outline(needleOuter, stroke, 300, 24),
    ...outline(needleInner, stroke * 0.72, 180, 30),
  ]
}

function executionShape(cx, cy, size, stroke) {
  return [
    ...ring(cx, cy, size * 0.88, stroke, 600, 0, Math.PI * 2, 75),
    ...outline([
      { x: cx - size * 0.26, y: cy - size * 0.48 },
      { x: cx + size * 0.48, y: cy },
      { x: cx - size * 0.26, y: cy + size * 0.48 },
    ], stroke, 420, 78),
  ]
}

function optimizationShape(cx, cy, size, stroke) {
  const rows = [
    { y: cy - size * 0.56, knob: cx - size * 0.35 },
    { y: cy, knob: cx + size * 0.38 },
    { y: cy + size * 0.56, knob: cx - size * 0.05 },
  ]
  return rows.flatMap((row, index) => [
    ...thickLine(cx - size * 0.92, row.y, cx + size * 0.92, row.y, stroke, 185, 84 + index * 5),
    ...ring(row.knob, row.y, size * 0.16, stroke, 150, 0, Math.PI * 2, 87 + index * 5),
  ])
}

function createShape(symbol, width, height) {
  const cx = width * 0.56
  const cy = height * 0.42
  const size = Math.min(width, height) * 0.43
  const stroke = Math.max(10, size * 0.075)
  let points

  if (symbol === 'amazon') {
    points = amazonShape(width, height)
  } else if (symbol === 'search') {
    const radius = size * 0.62
    const lensX = cx - size * 0.22
    const lensY = cy - size * 0.2
    points = [
      ...ring(lensX, lensY, radius, stroke, 650, 0, Math.PI * 2, 8),
      ...thickLine(lensX + radius * 0.72, lensY + radius * 0.72, cx + size * 0.85, cy + size * 0.9, stroke * 1.15, 370, 10),
    ]
  } else if (symbol === 'compass') {
    points = compassShape(cx, cy, size, stroke)
  } else if (symbol === 'blueprint') {
    const left = cx - size * 0.72
    const right = cx + size * 0.72
    const top = cy - size * 0.86
    const bottom = cy + size * 0.86
    points = [
      ...outline([{ x: left, y: top }, { x: right, y: top }, { x: right, y: bottom }, { x: left, y: bottom }], stroke, 300, 24),
      ...thickLine(left + size * 0.48, top + size * 0.48, right - size * 0.18, top + size * 0.48, stroke * 0.72, 130, 29),
      ...thickLine(left + size * 0.48, cy, right - size * 0.18, cy, stroke * 0.72, 130, 31),
      ...thickLine(left + size * 0.48, bottom - size * 0.48, right - size * 0.18, bottom - size * 0.48, stroke * 0.72, 130, 33),
      ...outline([{ x: left + size * 0.14, y: top + size * 0.46 }, { x: left + size * 0.22, y: top + size * 0.55 }, { x: left + size * 0.38, y: top + size * 0.35 }], stroke * 0.72, 110, 35, false),
      ...outline([{ x: left + size * 0.14, y: cy - size * 0.02 }, { x: left + size * 0.22, y: cy + size * 0.07 }, { x: left + size * 0.38, y: cy - size * 0.13 }], stroke * 0.72, 110, 38, false),
      ...outline([{ x: left + size * 0.14, y: bottom - size * 0.5 }, { x: left + size * 0.22, y: bottom - size * 0.41 }, { x: left + size * 0.38, y: bottom - size * 0.61 }], stroke * 0.72, 110, 41, false),
    ]
  } else if (symbol === 'modules') {
    points = executionShape(cx, cy, size, stroke)
  } else {
    points = optimizationShape(cx, cy, size, stroke)
  }

  return normalize(points)
}

export default function MethodParticles({ symbol, visible }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({ particles: [], target: [] })
  const visibleRef = useRef(visible)
  const syncRef = useRef(() => {})

  useEffect(() => {
    visibleRef.current = visible
    syncRef.current()
  }, [visible])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    let frame
    let width = 0
    let height = 0
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = mediaQuery.matches
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--nexus-accent-primary').trim() || '#e8720c'

    const render = () => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = accent
      let moving = false
      stateRef.current.particles.forEach((particle, index) => {
        const target = stateRef.current.target[index]
        if (!target) return
        if (Math.hypot(target.x - particle.x, target.y - particle.y) > 0.15) moving = true
        const ease = reducedMotion ? 1 : 0.09
        particle.x += (target.x - particle.x) * ease
        particle.y += (target.y - particle.y) * ease
        context.globalAlpha = 0.72 + (index % 4) * 0.07
        context.beginPath()
        context.arc(particle.x, particle.y, index % 11 === 0 ? 1.9 : 1.35, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
      return moving
    }

    const tick = () => {
      const moving = render()
      if (visibleRef.current && moving) frame = requestAnimationFrame(tick)
    }

    const syncAnimation = () => {
      cancelAnimationFrame(frame)
      const moving = render()
      if (!reducedMotion && visibleRef.current && moving) frame = requestAnimationFrame(tick)
    }
    syncRef.current = syncAnimation

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
        stateRef.current.particles = stateRef.current.target.map((point) => ({ ...point }))
      }
      syncAnimation()
    }

    const handleMotionChange = (event) => {
      reducedMotion = event.matches
      syncAnimation()
    }

    resize()
    mediaQuery.addEventListener('change', handleMotionChange)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('resize', resize)
    }
  }, [symbol])

  return <canvas ref={canvasRef} className="method-particles" aria-hidden="true" />
}
