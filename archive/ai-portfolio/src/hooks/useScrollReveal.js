import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to all .reveal elements inside the ref'd container.
 * Call once after the DOM is ready (post-intro).
 */
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])
}
