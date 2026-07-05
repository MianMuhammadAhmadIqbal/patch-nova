import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

export const useLenis = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    let rafId
    let stopped = false

    function raf(time) {
      if (stopped) return
      lenisInstance.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      stopped = true
      cancelAnimationFrame(rafId)
      lenisInstance.destroy()
      lenisInstance = null
    }
  }, [])

  return lenisInstance
}

export default useLenis
