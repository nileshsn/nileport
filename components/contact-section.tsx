"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TextReveal } from "./text-reveal"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="text-center mb-16">
            <div className="overflow-hidden">
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
              </TextReveal>
            </div>
            <div className="overflow-hidden">
              <TextReveal delay={0.1}>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
              </TextReveal>
            </div>
            <div className="overflow-hidden mt-6">
              <TextReveal delay={0.2}>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
                </p>
              </TextReveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <div className="overflow-hidden">
                  <TextReveal delay={0.3}>
                    <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  </TextReveal>
                </div>
                <div className="overflow-hidden">
                  <TextReveal delay={0.4}>
                    <p className="text-white/70 mb-8 leading-relaxed">
                      I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                      technology and innovation. Feel free to reach out!
                    </p>
                  </TextReveal>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "heynilesh05@gmail.com",
                    href: "mailto:heynilesh05@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 8143119364",
                    href: "tel:+918143119364",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Basar, India",
                    href: "#",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                    data-cursor="hover"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/60">{contact.label}</p>
                      <p className="text-lg font-semibold text-white">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-6">
                <div className="overflow-hidden">
                  <TextReveal delay={0.8}>
                    <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                  </TextReveal>
                </div>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/nileshsn", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/enugandhula-nilesh-400a14226/", label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 text-white/80 hover:text-blue-500 border border-white/20"
                      data-cursor="hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    data-cursor="hover"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
