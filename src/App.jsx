import { useState, useEffect } from 'react'
import IntroOverlay     from './components/sections/IntroOverlay'
import Navbar           from './components/sections/Navbar'
import Hero             from './components/sections/Hero'
import Marquee          from './components/sections/Marquee'
import About            from './components/sections/About'
import Services         from './components/sections/Services'
import Process          from './components/sections/Process'
import CtaSection       from './components/sections/CtaSection'
import Newsletter       from './components/sections/Newsletter'
import Footer           from './components/sections/Footer'
import GridCanvas       from './components/canvas/GridCanvas'
import ParticlesCanvas  from './components/canvas/ParticlesCanvas'
import CustomCursor     from './components/ui/CustomCursor'
import { useScrollReveal }  from './hooks/useScrollReveal'
import { useCustomCursor }  from './hooks/useCustomCursor'

export default function App() {
  const [introVisible, setIntroVisible] = useState(true)
  const [ready, setReady]               = useState(false)

  // Called when intro animation finishes
  const handleIntroComplete = () => {
    setReady(true)
    setTimeout(() => setIntroVisible(false), 100)
  }

  // Activate scroll reveal and cursor after intro
  useScrollReveal()
  useCustomCursor()

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Intro overlay — unmounted after fade */}
      {introVisible && <IntroOverlay onComplete={handleIntroComplete} />}

      {/* Fixed background layers (below all content, above nothing) */}
      <GridCanvas visible={ready} />
      <ParticlesCanvas />

      {/* Navigation */}
      <Navbar visible={ready} />

      {/* Page sections */}
      <main>
        <Hero    ready={ready} />
        <Marquee />
        <About />
        <Services />
        <Process />
        <CtaSection />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
