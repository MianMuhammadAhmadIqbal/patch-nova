import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs'
import { FiSearch, FiLayers, FiSettings } from 'react-icons/fi'
import { services } from '../../data/siteData'

const icons = [FiSearch, FiLayers, FiSettings]

const badgeColors = {
  Free: 'bg-green-100 text-green-700',
  Popular: 'bg-accent/20 text-accent-dark',
  Premium: 'bg-primary/10 text-primary',
}

const features = [
  ['Competitor packaging analysis', 'Material quality review', 'Print & finish audit'],
  ['Structural re-engineering', 'Graphic identity design', 'Digital 3D preview'],
  ['Own manufacturing plant', 'Direct quality control', 'On-time delivery'],
]

export default function Services() {
  const ref = useRef(null)

  return (
    <section id="services" className="section-pad bg-cream-dark relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label-tag justify-center mb-5"
          >
            <span className="w-4 h-px bg-accent block" />
            What We Do
            <span className="w-4 h-px bg-accent block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-section text-primary mx-auto max-w-3xl"
          >
            End-to-End Packaging
            <br />
            <span className="italic text-gradient-gold">Intelligence</span>
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                {/* Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-accent/15' : i === 1 ? 'bg-primary/5' : 'bg-green-50'}`}>
                    <Icon size={22} className={i === 0 ? 'text-accent-dark' : i === 1 ? 'text-primary' : 'text-green-600'} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[svc.badge]}`}>
                    {svc.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-2">
                  <div className="text-xs font-semibold text-muted tracking-wide uppercase mb-1">{svc.subtitle}</div>
                  <h3 className="font-display text-2xl font-semibold text-primary mb-3 group-hover:text-accent-dark transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{svc.description}</p>
                </div>

                {/* Feature list */}
                <ul className="space-y-2 mb-8">
                  {features[i].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-primary/70">
                      <BsCheckCircleFill size={13} className="text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-all duration-300 group/link"
                >
                  {svc.cta}
                  <BsArrowRight className="transition-transform group-hover/link:translate-x-1.5" size={14} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
