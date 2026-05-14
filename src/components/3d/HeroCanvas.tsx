import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Suspense } from "react";

/* ── Particle field ── */
function ParticleField({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00d9c0");
    const lime = new THREE.Color("#8ddd4a");
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const c = Math.random() > 0.7 ? lime : cyan;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.025;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Connection lines ── */
function NetworkLines({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.LineSegments>(null!);

  const geometry = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < count; i++) {
      const ax = (Math.random() - 0.5) * 16;
      const ay = (Math.random() - 0.5) * 10;
      const az = (Math.random() - 0.5) * 8;
      const bx = ax + (Math.random() - 0.5) * 3;
      const by = ay + (Math.random() - 0.5) * 3;
      const bz = az + (Math.random() - 0.5) * 3;
      pts.push(ax, ay, az, bx, by, bz);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color="#00d9c0"
        transparent
        opacity={0.12}
        depthWrite={false}
      />
    </lineSegments>
  );
}

/* ── Floating wireframe polyhedra ── */
function FloatingShape({
  geometry,
  position,
  speed = 0.4,
  color = "#00d9c0",
}: {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  speed?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const t = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    t.current += delta * speed;
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.y += delta * speed * 0.5;
    ref.current.position.y = position[1] + Math.sin(t.current) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

/* ── Camera parallax on mouse ── */
function CameraRig() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Scene ── */
function Scene() {
  const { viewport } = useThree();

  const icosaGeo = useMemo(() => new THREE.IcosahedronGeometry(1.1, 0), []);
  const dodecaGeo = useMemo(() => new THREE.DodecahedronGeometry(0.75, 0), []);
  const octaGeo = useMemo(() => new THREE.OctahedronGeometry(0.6, 0), []);

  const rx = viewport.width / 10;

  return (
    <>
      <ambientLight intensity={0.1} />
      <ParticleField count={700} />
      <NetworkLines count={80} />
      <FloatingShape geometry={icosaGeo} position={[rx * 1.5, 0.2, -2]} speed={0.25} color="#00d9c0" />
      <FloatingShape geometry={dodecaGeo} position={[-rx * 2, 1.2, -3]} speed={0.35} color="#8ddd4a" />
      <FloatingShape geometry={octaGeo} position={[rx * 0.4, -1.8, -1]} speed={0.5} color="#00d9c0" />
      <FloatingShape geometry={icosaGeo} position={[-rx, -0.8, -4]} speed={0.2} color="#8ddd4a" />
      <CameraRig />
    </>
  );
}

/* ── Export ── */
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
