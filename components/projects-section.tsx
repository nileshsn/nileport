"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Zap, ShoppingCart, Leaf, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "./text-reveal"

const projects = [
	{
		title: "E-Commerce Frontend",
		description:
			"Built a fully functional e-commerce website with intuitive navigation and seamless checkout. Integrated dynamic features like product filters and cart management using React.js.",
		icon: ShoppingCart,
		technologies: ["React.js", "JavaScript", "CSS", "Netlify"],
		features: [
			"Product filtering and search",
			"Shopping cart management",
			"Responsive design",
			"Seamless checkout process",
		],
		github: "https://github.com/nileshsn/E-Commerce",
		demo: "https://ecommerce-nile.netlify.app/",
		gradient: "from-blue-400 to-cyan-500",
	},
	{
		title: "EcoLabel",
		description:
			"Developed a platform offering insights into product sustainability using Python, Streamlit, and LLMs. Created personalized sustainability reports with interactive user experience.",
		icon: Leaf,
		technologies: ["Python", "Streamlit", "LLMs", "Data Analysis"],
		features: ["Sustainability analysis", "Personalized reports", "Interactive dashboard", "AI-powered insights"],
		github: "https://github.com/nileshsn/EcoLabel",
		demo: "https://ecolabel-na.streamlit.app/",
		gradient: "from-cyan-400 to-blue-500",
	},
	{
		title: "Conversational Bot with Chat History",
		description:
			"Built an intelligent chatbot using Streamlit, LangChain, and Groq for interactive PDF-based Q&A. Integrated chat history for contextual continuity.",
		icon: MessageCircle,
		technologies: ["Streamlit", "LangChain", "Groq", "Hugging Face"],
		features: ["PDF-based Q&A", "Chat history persistence", "Contextual responses", "Document embeddings"],
		github: "https://github.com/nileshsn/Conversational-Bot-Chat-history",
		demo: "https://conversational-bot-chat-history-nile.streamlit.app/",
		gradient: "from-indigo-400 to-blue-500",
	},
	{
		title: "Next Word Prediction with LSTM",
		description:
			"Developed a machine learning model to predict the next word in a given sentence using deep learning. This project applies natural language processing and LSTM networks to understand and generate human-like text.",
		icon: Zap,
		technologies: ["Python", "TensorFlow / Keras", "NumPy & Matplotlib", "NLP"],
		features: ["LSTM-based next-word prediction", "NLP preprocessing and tokenization", "Trained on sequential word data", "TensorFlow/Keras model architecture"],
		github: "https://github.com/nileshsn/Next-Word-Prediction-With-LSTM",
		demo: "https://next-word-prediction-with-lstm-6md5nr6g2jaffp2db2rrft.streamlit.app/",
		gradient: "from-blue-500 to-indigo-500",
	},
]

export function ProjectsSection() {
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
		<section id="projects" className="py-20 px-4 relative">
			<div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
					<div className="text-center mb-16">
						<div className="overflow-hidden">
							<TextReveal>
								<h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
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
									A showcase of my recent work in web development, AI applications, and innovative solutions
								</p>
							</TextReveal>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ y: -10, scale: 1.02 }}
								className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden"
								data-cursor="hover"
							>
								{/* Background Gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								{/* Icon */}
								<div className="relative mb-6">
									<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-4 shadow-lg`}>
										<project.icon className="w-full h-full text-white" />
									</div>
								</div>

								{/* Content */}
								<div className="relative">
									<h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
										{project.title}
									</h3>

									<p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>

									{/* Features */}
									<div className="mb-6">
										<h4 className="text-sm font-semibold text-white/80 mb-3">Key Features:</h4>
										<ul className="space-y-1">
											{project.features.map((feature, i) => (
												<li key={i} className="text-sm text-white/60 flex items-center">
													<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
													{feature}
												</li>
											))}
										</ul>
									</div>

									{/* Technologies */}
									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, i) => (
												<span
													key={i}
													className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Actions */}
									<div className="flex gap-3">
										<Button
											variant="outline"
											size="sm"
											className="flex-1 group/btn border-white/20 text-white hover:bg-white/10"
											data-cursor="hover"
											onClick={() => window.open(project.github, '_blank')}
										>
											<Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
											Code
										</Button>
										<Button
											size="sm"
											className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300`}
											data-cursor="hover"
											onClick={() => window.open(project.demo, '_blank')}
										>
											<ExternalLink className="w-4 h-4 mr-2" />
											Demo
										</Button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
