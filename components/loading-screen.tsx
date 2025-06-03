"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <div className="w-full max-w-3xl px-4">
            <div className="flex justify-between items-center mb-2 text-sm font-light tracking-wider">
              <span>{progress} - 100</span>
              <span className="text-blue-500">{progress}%</span>
            </div>

            <div className="relative h-[1px] w-full bg-neutral-800 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <motion.div
              className="mt-16 md:mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter">
                VERIFIED. 
                <br />
                RENDERING 
                <br />
                INTERACTIVE CONTENT <span className="font-thin italic">NOW</span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-16 text-sm text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Please wait
              <br />a few seconds.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
