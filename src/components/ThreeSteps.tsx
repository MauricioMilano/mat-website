import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Step = {
  key: string;
  title: string;
  subtitle: string;
  color: string;
  geometry: "box" | "sphere" | "torus" | "cone" | "cylinder";
};

const defaultSteps: Step[] = [
  { key: "step1", title: "Escolha", subtitle: "Escolha o plano", color: "#10b981", geometry: "box" },
  { key: "step2", title: "Simule", subtitle: "Simule e defina", color: "#06b6d4", geometry: "sphere" },
  { key: "step3", title: "Contrate", subtitle: "Contrate pelo WhatsApp", color: "#f59e0b", geometry: "torus" },
  { key: "step4", title: "Participe", subtitle: "Participe das assembleias", color: "#ef4444", geometry: "cone" },
  { key: "step5", title: "Receba", subtitle: "Receba a carta", color: "#8b5cf6", geometry: "cylinder" },
];

function useIsWebGLAvailable() {
  const [available, setAvailable] = useState<boolean>(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setAvailable(!!gl);
    } catch (e) {
      setAvailable(false);
    }
  }, []);
  return available;
}

function AnimatedMesh({ i, step, mobileFallback }: { i: number; step: Step; mobileFallback?: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // slow rotation and float
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = 0.2 * t + i * 0.1;
    ref.current.position.y = Math.sin(t + i) * 0.08;
    // subtle scale on hover
    const target = hovered ? 1.08 : 1.0;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.06);
  });

  const commonProps = {
    ref,
    onPointerOver: () => setHovered(true),
    onPointerOut: () => setHovered(false),
    onPointerDown: () => setHovered(true),
    onPointerUp: () => setHovered(false),
  } as any;

  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: step.color, metalness: 0.2, roughness: 0.4 }), [step.color]);

  // Low-poly geometries
  switch (step.geometry) {
    case "box":
      return (
        <mesh {...commonProps} material={material}>
          <boxBufferGeometry args={[0.9, 0.9, 0.9]} />
        </mesh>
      );
    case "sphere":
      return (
        <mesh {...commonProps} material={material}>
          <sphereBufferGeometry args={[0.55, 16, 12]} />
        </mesh>
      );
    case "torus":
      return (
        <mesh {...commonProps} material={material}>
          <torusBufferGeometry args={[0.45, 0.15, 12, 48]} />
        </mesh>
      );
    case "cone":
      return (
        <mesh {...commonProps} material={material}>
          <coneBufferGeometry args={[0.6, 1, 12]} />
        </mesh>
      );
    case "cylinder":
      return (
        <mesh {...commonProps} material={material}>
          <cylinderBufferGeometry args={[0.45, 0.45, 0.9, 12]} />
        </mesh>
      );
    default:
      return null;
  }
}

export const ThreeStepsCanvas: React.FC<{ steps?: Step[] }> = ({ steps = defaultSteps }) => {
  const isWebGL = useIsWebGLAvailable();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (!isWebGL) {
    // simple fallback: static cards grid
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.key} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2 text-center">
            <div style={{ width: 48, height: 48, margin: "0 auto", background: s.color, borderRadius: 8 }} />
            <div className="font-semibold">{s.title}</div>
            <div className="text-xs text-slate-500">{s.subtitle}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ height: 260, width: "100%" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <group position={[-3.6, 0, 0]}>
          {steps.map((s, i) => (
            <group key={s.key} position={[i * 1.8, 0, 0]}>
              <AnimatedMesh i={i} step={s} mobileFallback={isTouch} />
            </group>
          ))}
        </group>
      </Canvas>

      {/* labels below canvas as accessible fallback */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.key} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="font-semibold text-sm">{s.title}</div>
            <div className="text-xs text-slate-500 mt-1">{s.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStepsCanvas;
