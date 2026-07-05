import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { stats } from '../../data/siteData'

export default function Statistics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-cream relative overflow-hidden" id="stats">
      {/* Decorative */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-30" />

      <div className="container-custom" ref={ref}>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label-tag mb-12 justify-center"
        >
          <span className="w-4 h-px bg-accent block" />
          Results That Speak
          <span className="w-4 h-px bg-accent block" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`flex flex-col items-center text-center px-8 py-6 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''
              }`}
            >
              <div className="font-display font-bold text-5xl lg:text-6xl text-primary mb-2 leading-none">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={i * 0.15}
                    separator=","
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-xs text-muted leading-snug max-w-[140px]">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-primary rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="font-display text-2xl lg:text-3xl font-semibold text-cream mb-2">
              Ready to see your packaging <span className="italic text-gradient-gold">work harder?</span>
            </div>
            <p className="text-white/50 text-sm">Start with a free audit — no commitment, just clarity.</p>
          </div>
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex-shrink-0"
          >
            Get Free Audit
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
