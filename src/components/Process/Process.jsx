import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { process as processSteps } from '../../data/siteData'
import { BsArrowRight } from 'react-icons/bs'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1,
            },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="section-pad bg-cream relative overflow-hidden" ref={sectionRef}>
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-tag mb-5"
            >
              <span className="w-4 h-px bg-accent block" />
              How It Works
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-section text-primary max-w-lg"
            >
              From Audit to
              <br />
              <span className="italic text-gradient-gold">Your Door</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted text-sm leading-relaxed max-w-xs"
          >
            A battle-tested 5-step process refined across 250+ brand packaging projects.
          </motion.p>
        </div>

        {/* Steps — desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical line */}
          <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-border">
            <div ref={lineRef} className="w-full h-full bg-accent/60 origin-top" />
          </div>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative flex gap-12 group"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 w-[6.5rem] flex flex-col items-center pt-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white border-2 border-border group-hover:border-accent flex items-center justify-center text-sm font-bold text-muted group-hover:text-accent transition-all duration-300 z-10 shadow-sm"
                  >
                    {i + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-16 last:pb-0">
                  <div className="bg-white rounded-2xl p-8 border border-border group-hover:border-accent/30 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-2xl mb-3">{step.icon}</div>
                        <h3 className="font-display text-2xl font-semibold text-primary group-hover:text-accent-dark transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted font-medium">Timeline</div>
                        <div className="text-sm font-semibold text-primary">{step.duration}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <div className="text-xl">{step.icon}</div>
                <div className="ml-auto text-xs text-muted">{step.duration}</div>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#audit" className="btn-primary inline-flex group mx-auto">
            Start Your Packaging Journey
            <BsArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
