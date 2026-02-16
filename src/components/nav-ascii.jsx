import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { Vector2 } from "three"
import { AsciiEffect } from "./ascii-effect"

function RotatingMesh() {
	const meshRef = useRef()
	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta * 0.5
			meshRef.current.rotation.y += delta * 0.7
		}
	})
	return (
		<mesh ref={meshRef} scale={1}>
			<torusKnotGeometry args={[0.6, 0.25, 64, 12]} />
			<meshStandardMaterial color="#ea580c" roughness={0.3} metalness={0.1} />
		</mesh>
	)
}

export function NavAscii({ theme }) {
	const containerRef = useRef(null)
	const [resolution, setResolution] = useState(new Vector2(40, 40))

	useEffect(() => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect()
			setResolution(new Vector2(rect.width, rect.height))
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className="nav-ascii"
		>
			<Canvas
				camera={{ position: [0, 0, 3], fov: 50 }}
				gl={{ antialias: false, alpha: true }}
				dpr={1}
				style={{ background: "transparent" }}
			>
				<hemisphereLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={2} />
				<RotatingMesh />
				<EffectComposer>
					<AsciiEffect
						style="standard"
						cellSize={2}
						invert={false}
						color={true}
						resolution={resolution}
						mousePos={new Vector2(0, 0)}
						postfx={{
							scanlineIntensity: 0,
							scanlineCount: 200,
							targetFPS: 0,
							jitterIntensity: 0,
							jitterSpeed: 1,
							mouseGlowEnabled: false,
							mouseGlowRadius: 200,
							mouseGlowIntensity: 1.5,
							vignetteIntensity: 0,
							vignetteRadius: 0.8,
							colorPalette: 0,
							curvature: 0,
							aberrationStrength: 0,
							noiseIntensity: 0,
							noiseScale: 1,
							noiseSpeed: 1,
							waveAmplitude: 0,
							waveFrequency: 10,
							waveSpeed: 1,
							glitchIntensity: 0,
							glitchFrequency: 0,
							brightnessAdjust: 0,
							contrastAdjust: 1,
						}}
					/>
				</EffectComposer>
			</Canvas>
		</div>
	)
}
