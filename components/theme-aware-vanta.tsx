"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { VantaBackground } from "./vanta-background"

export function ThemeAwareVanta() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return <VantaBackground isDark={isDark} />
}
