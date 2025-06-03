"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Plane } from "@react-three/drei"
import * as THREE from "three"

interface FogEffectProps {
  isDark?: boolean
}

export function FogEffect({ isDark = false }: FogEffectProps) {
  const fogRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (fogRef.current && fogRef.current.material) {
      const material = fogRef.current.material as THREE.ShaderMaterial
      if (material.uniforms) {
        material.uniforms.time.value = state.clock.elapsedTime
      }
    }
  })

  const fogShader = {
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(isDark ? "#1e40af" : "#3b82f6") },
      color2: { value: new THREE.Color(isDark ? "#7c3aed" : "#8b5cf6") },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        vec2 uv = vUv;
        float n = noise(uv * 10.0 + time * 0.5);
        vec3 color = mix(color1, color2, n);
        gl_FragColor = vec4(color, 0.1);
      }
    `,
  }

  return (
    <Plane ref={fogRef} args={[20, 20]} position={[0, 0, -5]}>
      <shaderMaterial attach="material" {...fogShader} transparent />
    </Plane>
  )
}
