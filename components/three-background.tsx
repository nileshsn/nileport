"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { AnimatedParticles } from "./animated-particles"
import { FloatingGeometry } from "./floating-geometry"

interface ThreeBackgroundProps {
  isDark?: boolean
}

export function ThreeBackground({ isDark = false }: ThreeBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <AnimatedParticles isDark={isDark} />
          <FloatingGeometry isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  )
}
