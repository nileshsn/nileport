"use client"

import type React from "react"

import { createContext, useContext, useRef, useEffect, useState } from "react"
import { useScroll, motion } from "framer-motion"
import { useTransform } from "framer-motion" // Import useTransform here

interface SmoothScrollContextType {
  scrollYProgress: any
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollYProgress: null,
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    // Wait for hydration
    setIsReady(true)
  }, [])

  // Move useTransform outside the conditional rendering
  const y = useTransform(scrollYProgress, [0, 1], [0, -window.innerHeight * 4])

  return (
    <SmoothScrollContext.Provider value={{ scrollYProgress }}>
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden" ref={containerRef}>
        {isReady && (
          <motion.div
            style={{
              y: y,
            }}
            className="will-change-transform"
          >
            {children}
          </motion.div>
        )}
      </div>
    </SmoothScrollContext.Provider>
  )
}
