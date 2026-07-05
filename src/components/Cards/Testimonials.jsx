import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { BsQuote } from 'react-icons/bs'
import { testimonials } from '../../data/siteData'

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-border h-full flex flex-col">
      {/* Quote icon */}
      <div className="mb-5">
        <BsQuote size={32} className="text-accent opacity-40" />
      </div>

      {/* Quote */}
      <p className="text-primary/80 text-sm leading-relaxed flex-1 mb-6 font-medium italic">
        "{t.quote}"
      </p>

      {/* Uplift badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 self-start"
        style={{ backgroundColor: `${t.color}15` }}
      >
        <span className="font-display font-bold text-lg" style={{ color: t.color }}>{t.uplift}</span>
        <span className="text-xs font-medium text-muted">{t.upliftLabel}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-border">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-primary">{t.name}</div>
          <div className="text-xs text-muted">{t.brand} · {t.category}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-cream-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tag justify-center mb-5"
          >
            <span className="w-4 h-px bg-accent block" />
            Client Results
            <span className="w-4 h-px bg-accent block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-section text-primary"
          >
            Brands That Grew
            <br />
            <span className="italic text-gradient-gold">Through Packaging</span>
          </motion.h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-10"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
