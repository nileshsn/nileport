import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { MouseFollower } from "@/components/mouse-follower"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Nilesh Enugandhula - Frontend Developer & AI Enthusiast",
  description:
    "Portfolio of Nilesh Enugandhula - A passionate frontend developer specializing in React, Next.js, and AI-powered applications.",
  keywords: "frontend developer, react, nextjs, ai, machine learning, web development, portfolio",
  authors: [{ name: "Nilesh Enugandhula" }],
  creator: "Nilesh Enugandhula",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <MouseFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
