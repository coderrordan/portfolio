import { useState } from 'react'
import IntroCanvas from '../canvas/IntroCanvas'

export default function IntroOverlay({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false)

  const handleComplete = () => {
    setFadingOut(true)
    // Let CSS transition finish before unmounting
    setTimeout(onComplete, 550)
  }

  return (
    <div
      className="fixed inset-0"
      style={{
        zIndex: 9000,
        background: '#0a0a0a',
        pointerEvents: fadingOut ? 'none' : 'all',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <IntroCanvas onComplete={handleComplete} />
    </div>
  )
}
