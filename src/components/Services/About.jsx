import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FiAward, FiTrendingUp, FiPackage } from "react-icons/fi";

const pillars = [
  {
    icon: FiAward,
    title: "Brand Perception",
    desc: "Packaging that signals premium quality before the customer opens the box.",
  },
  {
    icon: FiTrendingUp,
    title: "Sales Conversion",
    desc: "Shelf-ready packaging engineered to convert browsers into buyers.",
  },
  {
    icon: FiPackage,
    title: "Own Manufacturing",
    desc: "Direct accountability from concept to delivery — no middlemen.",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      className="section-pad bg-cream relative overflow-hidden"
      ref={ref}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: visual */}
          <motion.div style={{ y }} className="relative hidden lg:block">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-primary">
              {/* About visual */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <AboutIllustration />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  Re-Engineering Process
                </div>
                <div className="text-white font-display text-xl font-medium">
                  Audit → Design → Manufacture
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-6 top-1/3 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5"
            >
              <div className="font-display text-3xl font-bold text-primary mb-0.5">
                37<span className="text-accent">%</span>
              </div>
              <div className="text-xs text-muted font-medium">
                Avg. Sales Uplift
              </div>
              <div className="text-xs text-muted/60 mt-0.5">
                Post re-engineering
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-tag mb-5"
            >
              <span className="w-4 h-px bg-accent block" />
              About PatchNova
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-section text-primary mb-6"
            >
              Re-Engineering
              <br />
              <span className="italic text-gradient-gold">
                Brand Perception
              </span>
              <br />
              Through Packaging
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted text-sm lg:text-base leading-relaxed mb-6"
            >
              We conduct a comprehensive packaging audit to identify gaps in
              structure, materials, printing finishes, and visual impact. Based
              on these insights, we design and manufacture packaging solutions
              that elevate brand perception and market presence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-muted text-sm leading-relaxed mb-10"
            >
              Unlike agencies that outsource production, we own our
              manufacturing facility. This means direct quality control, faster
              turnaround, and real accountability — from your audit report to
              the box in your hands.
            </motion.p>

            {/* Pillars */}
            <div className="space-y-5 mb-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <p.icon size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-0.5">
                      {p.title}
                    </div>
                    <div className="text-xs text-muted leading-snug">
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <a href="#audit" className="btn-primary group">
                Get Free Audit
                <BsArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={14}
                />
              </a>
              <a href="#categories" className="btn-outline">
                View Catalog
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aboutGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4b97e" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      {/* Audit report */}
      <rect
        x="20"
        y="30"
        width="100"
        height="130"
        rx="8"
        fill="url(#aboutGold)"
        opacity="0.9"
      />
      <rect
        x="30"
        y="50"
        width="80"
        height="4"
        rx="2"
        fill="white"
        opacity="0.3"
      />
      <rect
        x="30"
        y="62"
        width="60"
        height="3"
        rx="1.5"
        fill="white"
        opacity="0.2"
      />
      <rect
        x="30"
        y="72"
        width="70"
        height="3"
        rx="1.5"
        fill="white"
        opacity="0.2"
      />
      <rect
        x="30"
        y="90"
        width="80"
        height="30"
        rx="4"
        fill="white"
        opacity="0.1"
      />
      <text
        x="70"
        y="110"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="serif"
        opacity="0.8"
      >
        AUDIT
      </text>
      <rect
        x="30"
        y="132"
        width="80"
        height="3"
        rx="1.5"
        fill="white"
        opacity="0.15"
      />
      <rect
        x="30"
        y="142"
        width="55"
        height="3"
        rx="1.5"
        fill="white"
        opacity="0.1"
      />

      {/* Arrow */}
      <path
        d="M128 95 L148 95"
        stroke="#c8a96e"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      <path
        d="M144 90 L150 95 L144 100"
        stroke="#c8a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Design/box */}
      <rect x="155" y="40" width="105" height="110" rx="8" fill="#2a1f14" />
      <rect
        x="155"
        y="40"
        width="105"
        height="5"
        rx="2"
        fill="#c8a96e"
        opacity="0.6"
      />
      <rect x="163" y="58" width="89" height="74" rx="4" fill="#1a1209" />
      <rect
        x="171"
        y="66"
        width="73"
        height="58"
        rx="3"
        fill="none"
        stroke="#c8a96e"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <text
        x="207"
        y="98"
        textAnchor="middle"
        fill="#c8a96e"
        fontSize="9"
        fontFamily="serif"
        letterSpacing="2"
        opacity="0.9"
      >
        BRAND
      </text>
      <text
        x="207"
        y="110"
        textAnchor="middle"
        fill="#c8a96e"
        fontSize="9"
        fontFamily="serif"
        letterSpacing="2"
        opacity="0.9"
      >
        FACE
      </text>

      {/* Arrow down */}
      <path
        d="M207 157 L207 175"
        stroke="#c8a96e"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      <path
        d="M202 171 L207 177 L212 171"
        stroke="#c8a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Manufacturing icon */}
      <rect x="170" y="183" width="74" height="60" rx="6" fill="#1a1a1a" />
      <rect x="178" y="195" width="58" height="36" rx="3" fill="#2a2a2a" />
      <rect
        x="185"
        y="203"
        width="12"
        height="20"
        rx="2"
        fill="#c8a96e"
        opacity="0.7"
      />
      <rect
        x="204"
        y="208"
        width="12"
        height="15"
        rx="2"
        fill="#c8a96e"
        opacity="0.5"
      />
      <rect
        x="223"
        y="205"
        width="8"
        height="18"
        rx="1.5"
        fill="#c8a96e"
        opacity="0.6"
      />

      {/* Arrow */}
      <path
        d="M118 180 L128 180"
        stroke="#c8a96e"
        strokeWidth="2"
        strokeDasharray="4 2"
      />

      {/* Delivery box */}
      <rect x="20" y="185" width="92" height="58" rx="6" fill="#1f2a1a" />
      <rect
        x="20"
        y="185"
        width="92"
        height="5"
        rx="2"
        fill="#7ab648"
        opacity="0.6"
      />
      <rect x="30" y="198" width="72" height="38" rx="3" fill="#2a3a1a" />
      <path
        d="M66 208 L66 228"
        stroke="#7ab648"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="214"
        x2="102"
        y2="214"
        stroke="#7ab648"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <text
        x="66"
        y="220"
        textAnchor="middle"
        fill="#7ab648"
        fontSize="8"
        fontFamily="sans-serif"
        opacity="0.8"
      >
        DELIVERED
      </text>
    </svg>
  );
}
