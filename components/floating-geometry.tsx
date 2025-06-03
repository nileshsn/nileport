"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

interface FloatingGeometryProps {
  isDark?: boolean
}

export function FloatingGeometry({ isDark = false }: FloatingGeometryProps) {
  const group = useRef<THREE.Group>(null)
  const sphere1 = useRef<THREE.Mesh>(null)
  const sphere2 = useRef<THREE.Mesh>(null)
  const box1 = useRef<THREE.Mesh>(null)
  const oct1 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (group.current) {
      group.current.rotation.y = time * 0.1
    }

    if (sphere1.current) {
      sphere1.current.position.x = Math.sin(time * 0.5) * 3
      sphere1.current.position.y = Math.cos(time * 0.3) * 2
      sphere1.current.rotation.x = time * 0.2
    }

    if (sphere2.current) {
      sphere2.current.position.x = Math.cos(time * 0.4) * 4
      sphere2.current.position.z = Math.sin(time * 0.6) * 3
      sphere2.current.rotation.y = time * 0.3
    }

    if (box1.current) {
      box1.current.position.y = Math.sin(time * 0.7) * 2
      box1.current.position.z = Math.cos(time * 0.5) * 2
      box1.current.rotation.x = time * 0.4
      box1.current.rotation.z = time * 0.2
    }

    if (oct1.current) {
      oct1.current.position.x = Math.sin(time * 0.3) * 2
      oct1.current.position.y = Math.cos(time * 0.8) * 3
      oct1.current.rotation.y = time * 0.5
    }
  })

  const primaryColor = isDark ? "#3b82f6" : "#6366f1"
  const secondaryColor = isDark ? "#8b5cf6" : "#a855f7"

  return (
    <group ref={group}>
      {/* Floating Spheres */}
      <Sphere ref={sphere1} args={[0.3, 32, 32]} position={[2, 1, -2]}>
        <meshStandardMaterial color={primaryColor} transparent opacity={0.3} wireframe={false} />
      </Sphere>

      <Sphere ref={sphere2} args={[0.2, 32, 32]} position={[-3, -1, 1]}>
        <meshStandardMaterial color={secondaryColor} transparent opacity={0.4} wireframe={true} />
      </Sphere>

      {/* Floating Box */}
      <Box ref={box1} args={[0.4, 0.4, 0.4]} position={[-2, 2, -1]}>
        <meshStandardMaterial color={primaryColor} transparent opacity={0.2} wireframe={true} />
      </Box>

      {/* Floating Octahedron */}
      <Octahedron ref={oct1} args={[0.3]} position={[1, -2, 2]}>
        <meshStandardMaterial color={secondaryColor} transparent opacity={0.35} wireframe={false} />
      </Octahedron>

      {/* Additional smaller elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.05, 16, 16]}
          position={[Math.sin(i * 0.8) * 6, Math.cos(i * 0.6) * 4, Math.sin(i * 1.2) * 3]}
        >
          <meshStandardMaterial color={i % 2 === 0 ? primaryColor : secondaryColor} transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}
