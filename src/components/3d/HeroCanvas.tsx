import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 150 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const bright = 0.5 + Math.random() * 0.5;
      col[i * 3] = 0;
      col[i * 3 + 1] = bright;
      col[i * 3 + 2] = bright * 0.8;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function FloatingShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.y = t * 0.18;
    mesh.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <mesh ref={mesh} position={[3.5, 0.5, -3]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Particles count={150} />
      <FloatingShape />
      <gridHelper args={[40, 40, "#003322", "#001a11"]} position={[0, -4, 0]} />
      <ambientLight intensity={0.2} color="#00ffcc" />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  );
}
