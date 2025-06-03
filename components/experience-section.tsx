"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { TextReveal } from "./text-reveal"

const experiences = [
	{
		title: "Frontend Developer (Next.js)",
		company: "Xchange",
		location: "Remote",
		period: "Nov 2024 – Jan 2025",
		website: "https://xchange-2025-new.vercel.app/", // Add this line
		description: [
			"Co-developed a comprehensive web platform using Next.js, creating a robust frontend architecture",
			"Utilized modern frontend libraries including Tailwind CSS for responsive styling, Lucide React for icons, and Framer Motion for smooth animations",
			"Integrated API connections and developed interactive features for the Xchange platform",
		],
		technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
	},
	{
		title: "Contributor Intern",
		company: "GirlScript Summer of Code (GSSoC)",
		location: "Online",
		period: "May 2024 – Aug 2024",
		description: [
			"Contributed to open-source web projects by focusing on bug fixes and feature enhancements",
			"Made 3 pull requests that were successfully merged",
			"Collaborated with global developers on GitHub, adhering to version control best practices",
		],
		technologies: ["Open Source", "Git", "GitHub", "Web Development"],
	},
]

const education = [
	{
		title: "Bachelor of Technology in Computer Science",
		company: "Rajiv Gandhi University of Knowledge Technologies",
		location: "Basar, India",
		period: "Sep 2022 – May 2026",
		description: [
			"Pursuing comprehensive education in computer science fundamentals",
			"Coursework includes DSA, OOP, DBMS, AI, ML, and Generative AI",
			"Active participation in coding competitions and tech events",
		],
		technologies: ["Computer Science", "Algorithms", "AI/ML", "Database Systems"],
	},
	{
		title: "Aspire Leaders Program",
		company: "Leadership Development",
		location: "Online",
		period: "Aug 2024 – Dec 2024",
		description: [
			"Focused on personality development, leadership, and social impact",
			"Earned 3 badges recognizing leadership and social impact contributions",
			"Developed soft skills and leadership capabilities",
		],
		technologies: ["Leadership", "Communication", "Social Impact"],
	},
]

export function ExperienceSection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	}

	return (
		<section id="experience" className="py-20 px-4 relative">
			<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="text-center mb-16">
						<div className="overflow-hidden">
							<TextReveal>
								<h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
									Experience & Education
								</h2>
							</TextReveal>
						</div>
						<div className="overflow-hidden">
							<TextReveal delay={0.1}>
								<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
							</TextReveal>
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Experience */}
						<motion.div variants={itemVariants}>
							<div className="overflow-hidden mb-8">
								<TextReveal delay={0.2}>
									<h3 className="text-2xl font-bold text-white">
										Professional Experience
									</h3>
								</TextReveal>
							</div>
							<div className="space-y-8">
								{experiences.map((exp, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.02, y: -5 }}
										className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
										data-cursor="hover"
										initial={{ opacity: 0, y: 20 }}
										animate={
											isInView
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 20 }
										}
										transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
									>
										<div className="absolute top-6 right-6">
											{exp.website && (
												<a
													href={exp.website}
													target="_blank"
													rel="noopener noreferrer"
													className="text-white/40 hover:text-white/80 transition-colors duration-300"
													data-cursor="hover"
												>
													<ExternalLink className="w-5 h-5" />
												</a>
											)}
										</div>

										<div className="mb-4">
											<h4 className="text-xl font-semibold text-white mb-2">
												{exp.title}
											</h4>
											<p className="text-lg font-medium text-blue-400 mb-2">
												{exp.company}
											</p>
											<div className="flex flex-wrap gap-4 text-sm text-white/60">
												<div className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{exp.period}
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="w-4 h-4" />
													{exp.location}
												</div>
											</div>
										</div>

										<ul className="space-y-2 mb-4">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="text-white/80 text-sm leading-relaxed"
												>
													• {item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech, i) => (
												<span
													key={i}
													className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
												>
													{tech}
												</span>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Education */}
						<motion.div variants={itemVariants}>
							<div className="overflow-hidden mb-8">
								<TextReveal delay={0.2}>
									<h3 className="text-2xl font-bold text-white">
										Education & Certifications
									</h3>
								</TextReveal>
							</div>
							<div className="space-y-8">
								{education.map((edu, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.02, y: -5 }}
										className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
										data-cursor="hover"
										initial={{ opacity: 0, y: 20 }}
										animate={
											isInView
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 20 }
										}
										transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
									>
										<div className="mb-4">
											<h4 className="text-xl font-semibold text-white mb-2">
												{edu.title}
											</h4>
											<p className="text-lg font-medium text-cyan-400 mb-2">
												{edu.company}
											</p>
											<div className="flex flex-wrap gap-4 text-sm text-white/60">
												<div className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{edu.period}
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="w-4 h-4" />
													{edu.location}
												</div>
											</div>
										</div>

										<ul className="space-y-2 mb-4">
											{edu.description.map((item, i) => (
												<li
													key={i}
													className="text-white/80 text-sm leading-relaxed"
												>
													• {item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{edu.technologies.map((tech, i) => (
												<span
													key={i}
													className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
												>
													{tech}
												</span>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
