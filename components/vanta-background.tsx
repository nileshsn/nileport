"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

interface VantaBackgroundProps {
  isDark?: boolean
}

export function VantaBackground({ isDark = false }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if scripts are loaded
    const checkScripts = () => {
      if (window.VANTA && window.THREE) {
        setIsLoaded(true)
      } else {
        setTimeout(checkScripts, 100)
      }
    }
    checkScripts()
  }, [])

  useEffect(() => {
    if (!isLoaded || !vantaRef.current || !window.VANTA) return

    // Destroy existing effect
    if (vantaEffect.current) {
      vantaEffect.current.destroy()
    }

    try {
      // Create new effect with theme-appropriate colors
      vantaEffect.current = window.VANTA.CELLS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color1: isDark ? 0x1e40af : 0x3b82f6, // Blue
        color2: isDark ? 0x7c3aed : 0x8b5cf6, // Purple
        size: 1.5,
        speed: 1.0,
      })
    } catch (error) {
      console.error("Error initializing Vanta:", error)
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy()
        } catch (error) {
          console.error("Error destroying Vanta:", error)
        }
      }
    }
  }, [isDark, isLoaded])

  return (
    <>
      <div
        ref={vantaRef}
        className="fixed inset-0 z-0"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      {/* Fallback gradient background */}
      {!isLoaded && (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950" />
      )}
    </>
  )
}
