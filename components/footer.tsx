"use client"

import { motion } from "framer-motion"
import { TextReveal } from "./text-reveal"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="overflow-hidden mb-4">
              <TextReveal>
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-blue-500">N</span>ILESH
                </h3>
              </TextReveal>
            </div>
            <div className="overflow-hidden">
              <TextReveal delay={0.1}>
                <p className="text-white/70">
                  Empowering digital innovation through clean UI design, robust architecture, and AI-driven functionality.
                </p>
              </TextReveal>
            </div>
          </div>

          <div>
            <div className="overflow-hidden mb-4">
              <TextReveal delay={0.2}>
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              </TextReveal>
            </div>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <TextReveal delay={0.3 + i * 0.05}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-white/70 hover:text-blue-500 transition-colors duration-200"
                      data-cursor="hover"
                    >
                      {item}
                    </a>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden mb-4">
              <TextReveal delay={0.2}>
                <h4 className="text-lg font-semibold text-white">Contact</h4>
              </TextReveal>
            </div>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "nileshenugandhula@gmail.com", href: "mailto:nileshenugandhula@gmail.com" },
                { icon: Phone, text: "+91 8143119364", href: "tel:+918143119364" },
                { icon: Github, text: "github.com/nileshsn", href: "https://github.com/nileshsn" },
                {
                  icon: Linkedin,
                  text: "linkedin.com/in/enugandhula-nilesh",
                  href: "https://www.linkedin.com/in/enugandhula-nilesh-400a14226/",
                },
              ].map((item, i) => (
                <div key={i} className="overflow-hidden">
                  <TextReveal delay={0.3 + i * 0.05}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/70 hover:text-blue-500 transition-colors duration-200"
                      data-cursor="hover"
                    >
                      <item.icon size={16} className="mr-2" />
                      <span>{item.text}</span>
                    </a>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/50 text-sm"
          >
            © {currentYear} Enugandhula Nilesh. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
