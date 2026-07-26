import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Diagnosis from './components/sections/Diagnosis'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import CaseStudies from './components/sections/CaseStudies'
import SkalebidOS from './components/sections/SkalebidOS'
import CtaSection from './components/sections/CtaSection'
import Footer from './components/sections/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function AppContent() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main id="main-content" className="site-main">
        <Hero />
        <Diagnosis />
        <About />
        <Services />
        <Process />
        <CaseStudies />
        <SkalebidOS />
        <CtaSection />
      </main>
      <div className="site-main"><Footer /></div>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
