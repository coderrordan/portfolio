import { useEffect } from 'react'

/**
 * Reveals declarative content once as it enters the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const root = document.documentElement
    const elements = document.querySelectorAll('[data-reveal]')
    root.classList.add('reveal-ready')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-revealed', 'true')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((element) => obs.observe(element))

    return () => {
      obs.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
