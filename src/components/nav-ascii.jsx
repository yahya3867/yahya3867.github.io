import { Suspense, useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { useGLTF } from "@react-three/drei"
import { Vector2 } from "three"
import { AsciiEffect } from "./ascii-effect"

function RotatingMesh() {
	const groupRef = useRef()
	const { scene } = useGLTF("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/glTF-Binary/Duck.glb")

	useFrame((_, delta) => {
		if (groupRef.current) {
			groupRef.current.rotation.y += delta * 0.7
		}
	})
	return <primitive ref={groupRef} object={scene} scale={1.4} position={[0, -1.1, 0]} />
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
				camera={{ position: [0, 0, 3.5], fov: 50 }}
				gl={{ antialias: false, alpha: true }}
				dpr={1}
				style={{ background: "transparent" }}
			>
				<hemisphereLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={2} />
				<Suspense fallback={null}>
					<RotatingMesh />
				</Suspense>
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
