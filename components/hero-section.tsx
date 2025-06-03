"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { RollingText } from "@/components/rolling-text"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay to wait for loading screen
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const roles = ["Web Developer", "AI/ML Enthusiast", "Generative AI"]

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-blue-500/50 shadow-2xl">
            <img src="/images/profile.jpg" alt="Enugandhula Nilesh" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Greeting */}
        <div className="mb-6 overflow-hidden">
          <TextReveal delay={0.4}>
            <span className="text-xl text-white/70 font-medium">Hello, I'm</span>
          </TextReveal>
        </div>

        {/* Name */}
        <div className="overflow-hidden mb-8">
          <TextReveal delay={0.6}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter">
              ENUGANDHULA
              <br />
              NILESH
            </h1>
          </TextReveal>
        </div>

        {/* Rolling Text - Fixed to show properly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12 h-16 flex items-center justify-center w-full"
        >
          <RollingText items={roles} delay={1.2} />
        </motion.div>

        {/* Description */}
        <div className="overflow-hidden mb-16">
          <TextReveal delay={1.4}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web experiences with modern technologies. Specializing in React,
              Next.js, and AI-powered applications that shape the future of technology.
            </p>
          </TextReveal>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            data-cursor="hover"
            onClick={() => window.open('/files/nilesh_resume.pdf', '_blank')}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold transition-all duration-300"
            data-cursor="hover"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/nileshsn", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/enugandhula-nilesh", label: "LinkedIn" },
            { icon: Phone, href: "tel:+918143119364", label: "Phone" },
            { icon: Mail, href: "mailto:nileshenugandhula@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 text-white/80 hover:text-blue-500 hover:border-blue-500/50 hover:bg-white/10"
              data-cursor="hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.9 + i * 0.1, duration: 0.5 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Adjusted Position */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-[50%] transform -translate-x-1/2 z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          data-cursor="hover"
        >
          <ArrowDown className="text-white/50" size={20} />
        </motion.div>
      </motion.div> */}
    </section>
  )
}
