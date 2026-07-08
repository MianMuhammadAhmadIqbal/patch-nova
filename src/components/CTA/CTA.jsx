import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { FiPackage, FiCheckCircle } from "react-icons/fi";

const auditItems = [
  "Structural & material analysis",
  "Competitor packaging benchmark",
  "Print & finish quality review",
  "Visual impact assessment",
  "Actionable improvement report",
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="audit"
      className="section-pad bg-primary relative overflow-hidden"
      ref={ref}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tag justify-center mb-6"
          >
            <span className="w-4 h-px bg-accent block" />
            Free Packaging Audit
            <span className="w-4 h-px bg-accent block" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-section text-cream text-center mb-4"
          >
            Is Your Packaging
            <br />
            <span className="italic text-gradient-gold">
              Costing You Sales?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-center text-sm lg:text-base leading-relaxed mb-12 max-w-xl mx-auto"
          >
            Get a comprehensive audit of your current packaging — free, with no
            obligation. We identify what's holding your brand back and show you
            exactly how to fix it.
          </motion.p>

          {/* Two column */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Audit checklist */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-cream/60 text-sm font-semibold uppercase tracking-widest mb-5">
                What's Included
              </div>
              <ul className="space-y-3.5">
                {auditItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 text-white/70 text-sm"
                  >
                    <FiCheckCircle
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-xl border border-accent/20 bg-accent/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPackage size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-cream text-sm font-semibold">
                      In-house manufacturing
                    </div>
                    <div className="text-white/40 text-xs">
                      Design → Sample → Production → Delivery
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-cream rounded-2xl p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                Get Your Free Audit
              </h3>
              <p className="text-muted text-sm mb-6">
                Fill out a quick form and our packaging strategist will review
                your current packaging within 3 business days.
              </p>

              {/* Simple form UI */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-semibold text-primary/60 uppercase tracking-wider block mb-1.5">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your brand name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-primary/60 uppercase tracking-wider block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-primary/60 uppercase tracking-wider block mb-1.5">
                    Product Category
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="">Select category</option>
                    <option>Beauty & Skincare</option>
                    <option>Food & Beverage</option>
                    <option>Jewelry & Accessories</option>
                    <option>Electronics</option>
                    <option>Apparel</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full justify-center group"
              >
                Request Free Audit
                <BsArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </motion.button>

              <div className="mt-4 flex items-center justify-center gap-2">
                <BsWhatsapp size={14} className="text-green-500" />
                <span className="text-xs text-muted">
                  Or chat directly on{" "}
                  <a
                    href="https://wa.me/+923149671114"
                    className="text-primary font-semibold hover:text-accent transition-colors"
                  >
                    WhatsApp
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
