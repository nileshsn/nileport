"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Code, Brain } from "lucide-react"
import { TextReveal } from "./text-reveal"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="overflow-hidden">
              <TextReveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">About Me</h2>
              </TextReveal>
            </div>
            <div className="overflow-hidden">
              <TextReveal delay={0.1}>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              </TextReveal>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="overflow-hidden">
                <TextReveal delay={0.2}>
                  <p className="text-lg text-white/80 leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                    I enjoy turning ideas into interactive, intelligent applications from building sleek frontends to integrating smart AI features that enhance user experience.
                  </p>
                </TextReveal>
              </div>
              <div className="overflow-hidden">
                <TextReveal delay={0.3}>
                  <p className="text-lg text-white/80 leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                    I’ve worked with frameworks like React, Next.js, and AI tools including LangChain and Hugging Face, crafting digital experiences that are both intuitive and intelligent.
                  </p>
                </TextReveal>
              </div>
              <div className="overflow-hidden">
                <TextReveal delay={0.4}>
                  <p className="text-lg text-white/80 leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                    When I’m not coding, you’ll find me following the latest in Generative AI, contributing to open-source, or helping others grow in the tech community.
                  </p>
                </TextReveal>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  description: "B.Tech in Computer Science",
                  detail: "RGUKT Basar (2022-2026)",
                },
                {
                  icon: Code,
                  title: "Experience",
                  description: "Frontend Developer",
                  detail: "Xchange & Open Source",
                },
                {
                  icon: Brain,
                  title: "Specialization",
                  description: "AI & Web Development",
                  detail: "Generative AI & LLMs",
                },
                {
                  icon: Award,
                  title: "Achievements",
                  description: "GSSoC Contributor",
                  detail: "3 Merged PRs",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  data-cursor="hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <div className="mb-6">
                    <item.icon className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-white/70 mb-2">{item.description}</p>
                  <p className="text-xs text-white/50">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
