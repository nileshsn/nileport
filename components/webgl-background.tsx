"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglFailed, setWebglFailed] = useState(false)

  const render = useCallback(
    (
      gl: WebGLRenderingContext,
      program: WebGLProgram,
      timeLocation: WebGLUniformLocation,
      resolutionLocation: WebGLUniformLocation,
      startTime: number,
      canvasWidth: number,
      canvasHeight: number,
    ) => {
      const currentTime = (Date.now() - startTime) / 1000

      gl.useProgram(program)
      gl.uniform1f(timeLocation, currentTime)
      gl.uniform2f(resolutionLocation, canvasWidth, canvasHeight)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    },
    [],
  )

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const gl = canvas.getContext("webgl")

    if (!gl) {
      console.warn("WebGL not supported, using CSS fallback")
      setWebglFailed(true)
      return
    }

    try {
      // Set canvas size
      const setCanvasSize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        gl.viewport(0, 0, canvas.width, canvas.height)
      }

      setCanvasSize()
      window.addEventListener("resize", setCanvasSize)

      // Vertex shader
      const vertexShaderSource = `
        attribute vec2 a_position;
        void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `

      // Simplified fragment shader
      const fragmentShaderSource = `
        precision mediump float;
        uniform float u_time;
        uniform vec2 u_resolution;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution;
          
          // Create animated noise
          float noise = random(st + u_time * 0.1);
          
          // Blue gradient colors
          vec3 color1 = vec3(0.05, 0.05, 0.15); // Dark blue
          vec3 color2 = vec3(0.1, 0.2, 0.4);   // Medium blue
          vec3 color3 = vec3(0.2, 0.4, 0.8);   // Bright blue
          
          // Create gradient based on position and noise
          float gradient = length(st - 0.5) + noise * 0.1;
          vec3 finalColor = mix(color1, mix(color2, color3, st.y), gradient);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `

      // Create shaders
      const createShader = (type: number, source: string) => {
        const shader = gl.createShader(type)
        if (!shader) return null

        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error("Shader compilation error:", gl.getShaderInfoLog(shader))
          return null
        }
        return shader
      }

      const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
      const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

      if (!vertexShader || !fragmentShader) {
        throw new Error("Failed to create shaders")
      }

      // Create program
      const program = gl.createProgram()
      if (!program) throw new Error("Failed to create program")

      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error("Failed to link program")
      }

      // Create buffer
      const positionBuffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

      // Get locations
      const positionLocation = gl.getAttribLocation(program, "a_position")
      const timeLocation = gl.getUniformLocation(program, "u_time")
      const resolutionLocation = gl.getUniformLocation(program, "u_resolution")

      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      // Animation loop
      const startTime = Date.now()
      let animationId: number

      const animate = () => {
        render(gl, program, timeLocation, resolutionLocation, startTime, canvas.width, canvas.height)
        animationId = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        window.removeEventListener("resize", setCanvasSize)
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }
    } catch (error) {
      console.error("WebGL error:", error)
      setWebglFailed(true)
    }
  }, [render])

  return (
    <>
      {!webglFailed && <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />}
      {/* Always show CSS fallback as backup */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 ${
          !webglFailed ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)",
        }}
      />
    </>
  )
}
