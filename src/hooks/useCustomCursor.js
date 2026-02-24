import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mX = 0, mY = 0, rX = 0, rY = 0
    let rafId

    const onMove = (e) => {
      mX = e.clientX
      mY = e.clientY
      dot.style.left = mX + 'px'
      dot.style.top  = mY + 'px'
    }

    const tick = () => {
      rX += (mX - rX) * 0.12
      rY += (mY - rY) * 0.12
      ring.style.left = rX + 'px'
      ring.style.top  = rY + 'px'
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll(
      'a, button, .service-card, .process-step, .about-social-btn'
    )
    const onEnter = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(2.2)'
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
      ring.style.opacity   = '0.85'
    }
    const onLeave = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)'
      ring.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.opacity   = '0.5'
    }
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}
