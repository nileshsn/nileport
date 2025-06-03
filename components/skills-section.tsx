"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TextReveal } from "./text-reveal"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Generative AI", level: 85 },
      { name: "Hugging Face", level: 75 },
      { name: "LangChain", level: 80 },
      { name: "Streamlit", level: 90 },
      { name: "Computer Vision", level: 60 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Google Cloud", level: 65 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="overflow-hidden">
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
              </TextReveal>
            </div>
            <div className="overflow-hidden">
              <TextReveal delay={0.1}>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              </TextReveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                data-cursor="hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white/80">{skill.name}</span>
                        <span className="text-xs text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
