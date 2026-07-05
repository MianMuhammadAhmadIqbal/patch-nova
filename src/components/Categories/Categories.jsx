import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { BsArrowRight } from 'react-icons/bs'
import { categories } from '../../data/siteData'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function CategoryCard({ cat, index }) {
  return (
    <motion.a
      href={`#${cat.id}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: `linear-gradient(135deg, ${cat.color} 0%, #111 100%)` }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cat.accent}, transparent 70%)` }}
      />

      {/* Accent bar top */}
      <div className="h-1 w-full" style={{ background: cat.accent }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Emoji */}
        <div className="text-4xl mb-4">{cat.emoji}</div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-white mb-2 group-hover:text-white/90 transition-colors">
          {cat.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
          {cat.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cat.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border text-white/60 border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Products */}
        <div className="flex flex-wrap gap-1 mb-5">
          {cat.products.map((p) => (
            <span
              key={p}
              className="text-xs px-2 py-0.5 rounded text-white/40"
              style={{ backgroundColor: `${cat.accent}18` }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4"
          style={{ color: cat.accent }}
        >
          Explore <BsArrowRight size={14} />
        </div>
      </div>
    </motion.a>
  )
}

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="categories" className="section-pad bg-primary relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-tag mb-5"
            >
              <span className="w-4 h-px bg-accent block" />
              Packaging Categories
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-section text-cream max-w-xl"
            >
              Every Format.
              <br />
              <span className="italic text-gradient-gold">Premium Quality.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-sm lg:text-right"
          >
            From luxury rigid boxes to flexible pouches — every format engineered for your brand's specific market position.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-10"
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={cat.id}>
                <CategoryCard cat={cat} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a href="#" className="btn-outline border-white/20 text-white/70 hover:bg-white hover:text-primary">
            View All Categories
            <BsArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
