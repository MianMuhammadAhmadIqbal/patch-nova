import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Animations/Marquee'
import About from './components/Services/About'
import Services from './components/Services/Services'
import Categories from './components/Categories/Categories'
import Statistics from './components/Statistics/Statistics'
import Process from './components/Process/Process'
import Testimonials from './components/Cards/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

export default function App() {
  useLenis()

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Categories />
        <Statistics />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
