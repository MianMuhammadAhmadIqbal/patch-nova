import { motion } from "framer-motion";
import {
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsTelephone,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Contact", href: "#contact" },
  ],
  Categories: [
    { label: "Rigid Boxes", href: "#rigid_boxes" },
    { label: "Corrugated Boxes", href: "#corrugated_boxes" },
    { label: "Custom Pouches", href: "#custom_pouches" },
    { label: "Carry Bags", href: "#carry_bags" },
    { label: "Kraft Boxes", href: "#kraft_boxes" },
    { label: "Labels & Tags", href: "#labels_tags" },
  ],
  Services: [
    { label: "Free Packaging Audit", href: "#audit" },
    { label: "Design & Re-Engineering", href: "#design" },
    { label: "In-House Manufacturing", href: "#manufacturing" },
    { label: "View Catalog", href: "#catalog" },
    { label: "3D Mockup Studio", href: "#studio" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      {/* Top section */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">
                  BF
                </span>
              </div>
              <span className="font-display font-semibold text-lg text-cream tracking-tight">
                Patch<span className="text-gradient-gold">Nova</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Packaging re-engineering and manufacturing firm helping Patch
              transform their packaging into a powerful sales asset.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="tel:+16038250565"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-cream transition-colors group"
              >
                <BsTelephone size={14} className="text-accent" />
                +92 314 96 71114
              </a>
              <a
                href="https://wa.me/+923149671114"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-cream transition-colors group"
              >
                <BsWhatsapp size={14} className="text-green-500" />
                WhatsApp Us
              </a>
              <a
                href="mailto:hello@PatchNova.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-cream transition-colors group"
              >
                <HiOutlineMail size={14} className="text-accent" />
                hello@PatchNova.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { Icon: BsInstagram, href: "#", label: "Instagram" },
                { Icon: BsLinkedin, href: "#", label: "LinkedIn" },
                { Icon: BsTwitterX, href: "#", label: "Twitter" },
                {
                  Icon: BsWhatsapp,
                  href: "https://wa.me/+923149671114",
                  label: "WhatsApp",
                },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent flex items-center justify-center text-white/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5">
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} PatchNova. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
