// src/components/Hero/Hero.jsx
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { categories } from "../../data/siteData";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const orbitRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate orbit rotation - 360 degrees around the center
      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 25,
          ease: "none",
          repeat: -1,
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Get first 5 categories from siteData
  const orbitCards = categories.slice(0, 5).map((cat, index) => ({
    id: cat.id || index,
    name: cat.title,
    icon: cat.emoji || "📦",
    tag: cat.tags?.[0] || "Premium",
    angle: index * 72, // 0, 72, 144, 216, 288
    distance: 160,
    color: `from-${cat.color}/30 to-${cat.color}/10`,
    border: `border-${cat.color}/30`,
    hasTags: index === 1, // Only second card (Art Card) has extra tags
    accent: cat.accent,
    colorHex: cat.color,
  }));

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,169,110,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,110,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <motion.div
        style={{ opacity: opacityFade }}
        className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Free Audit Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
                Free Packaging Audit
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-hero text-white mb-6 leading-[1.04]"
            >
              Patch Nova
              <br />
              <span className="italic text-gradient-gold">
                Re-Engineering Brand
              </span>
              <br />
              <span className="text-white">Perception Through Packaging</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base lg:text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
            >
              We conduct a comprehensive packaging audit to identify gaps in
              structure, materials, printing finishes, and visual impact. Based
              on these insights, we design and manufacture packaging solutions
              that elevate brand perception and market presence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.a
                href="#audit"
                className="btn-primary group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
                <BsArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </motion.a>
              <motion.a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-4 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:border-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Catalog
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={fadeUp} className="flex items-center gap-8">
              <div>
                <div className="font-display font-bold text-3xl text-white">
                  12<span className="text-accent">+</span>
                </div>
                <div className="text-xs text-white/50 font-medium">
                  Box Types
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-display font-bold text-3xl text-white">
                  4
                </div>
                <div className="text-xs text-white/50 font-medium">
                  Finishes
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-display font-bold text-3xl text-accent">
                  3D
                </div>
                <div className="text-xs text-white/50 font-medium">
                  Live Preview
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Orbiting Cards Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Category label - shows first category name */}
              <div className="flex justify-end items-center gap-4 mb-4 pr-2">
                <span className="text-xs font-medium tracking-widest uppercase text-accent/60">
                  {orbitCards[1]?.name || "Categories"}
                </span>
                <span className="text-xs text-white/20 font-mono">
                  {orbitCards[1]?.id || "featured"}
                </span>
              </div>

              {/* Main visual container */}
              <div
                ref={imageRef}
                className="relative rounded-[2.5rem] overflow-hidden bg-[#0d0d0d] aspect-[4/5] p-8 border border-white/5"
              >
                {/* Orbit Container - This rotates */}
                <div
                  ref={orbitRef}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformOrigin: "center center" }}
                >
                  {/* Center glow - subtle */}
                  <div className="absolute w-32 h-32 bg-accent/5 rounded-full blur-xl" />

                  {/* Empty center - concentric rings */}
                  <div className="absolute w-20 h-20 rounded-full border border-white/5" />
                  <div className="absolute w-12 h-12 rounded-full border border-white/5" />
                  <div className="absolute w-6 h-6 rounded-full border border-white/5" />

                  {/* All 5 cards from categories data */}
                  {orbitCards.map((card) => {
                    const rad = (card.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * card.distance;
                    const y = Math.sin(rad) * card.distance;

                    // Determine if this is the "Art Card" (index 1)
                    const isArtCard =
                      card.id === "art_card" || card.name === "Art Card";

                    return (
                      <div
                        key={card.id}
                        className={`absolute w-40 h-56 rounded-xl bg-gradient-to-br ${card.color} border ${card.border} p-4 flex flex-col items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300`}
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(${card.angle}deg)`,
                          transformOrigin: "center center",
                          borderColor: isArtCard
                            ? "#c8a96e"
                            : "rgba(255,255,255,0.1)",
                        }}
                        onClick={() => {
                          // Navigate to category section
                          const element = document.getElementById(card.id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center mb-3"
                          style={{
                            backgroundColor: isArtCard
                              ? "rgba(200,169,110,0.3)"
                              : "rgba(255,255,255,0.1)",
                          }}
                        >
                          <span className="text-3xl">{card.icon}</span>
                        </div>
                        <div className="text-white/80 text-sm font-medium text-center">
                          {card.name}
                        </div>
                        <div
                          className="text-[10px] text-center font-medium"
                          style={{
                            color: isArtCard
                              ? "#c8a96e"
                              : "rgba(255,255,255,0.3)",
                          }}
                        >
                          {card.tag}
                        </div>
                        {isArtCard && (
                          <div className="flex gap-2 mt-3">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[8px] text-white/50 border border-white/5">
                              Foil
                            </span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[8px] text-white/50 border border-white/5">
                              Emboss
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center border-t border-white/5 pt-4 z-30">
                  <div className="text-center">
                    <div className="text-white/30 text-[10px] font-medium tracking-widest uppercase">
                      Box Types
                    </div>
                    <div className="text-white font-display text-2xl font-semibold">
                      12<span className="text-accent">+</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-white/30 text-[10px] font-medium tracking-widest uppercase">
                      Finishes
                    </div>
                    <div className="text-white font-display text-2xl font-semibold">
                      4
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-white/30 text-[10px] font-medium tracking-widest uppercase">
                      Live Preview
                    </div>
                    <div className="text-accent font-display text-2xl font-semibold">
                      3D
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Free Audit Badge */}
              <div
                ref={badgeRef}
                className="absolute -top-4 -right-4 bg-primary rounded-2xl border border-accent/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-4 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center">
                    <FiPackage size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Free Audit
                    </div>
                    <div className="text-[10px] text-white/40">
                      No commitment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 font-medium tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <BsArrowDown size={14} className="text-white/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
