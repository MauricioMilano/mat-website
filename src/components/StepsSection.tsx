import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface StepData {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

interface StepsSectionProps {
  steps: StepData[];
}

// ---------------------------------------------------------------------------
// Three.js: Floating coins / circles rising upward
// Symbolises monthly contributions accumulating over time — the core concept
// of consórcio. Gold (#f59e0b) and emerald (#10b981) circles float gently
// from bottom to top, very low opacity so they're purely decorative.
// ---------------------------------------------------------------------------
const COIN_COUNT = 35;
const GOLD_COLOR = new THREE.Color(0xf59e0b);
const EMERALD_COLOR = new THREE.Color(0x10b981);

interface CoinData {
  mesh: THREE.Mesh;
  speed: number;       // upward speed in world units/frame
  drift: number;       // horizontal sine amplitude
  driftFreq: number;   // sine frequency
  driftPhase: number;  // sine phase offset
  baseX: number;       // horizontal anchor position
  resetY: number;      // y position to reset from (bottom)
  topY: number;        // y threshold to wrap (top)
}

function useFloatingCoins(containerRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.clientWidth || 1280;
    const H = container.clientHeight || 700;

    // ---- Renderer (transparent background) ----
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    // ---- Scene & orthographic camera (1 unit = 1 px) ----
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -W / 2, W / 2,
      H / 2, -H / 2,
      0.1, 1000
    );
    camera.position.z = 100;

    // ---- Coins ----
    const coins: CoinData[] = [];

    for (let i = 0; i < COIN_COUNT; i++) {
      // Vary radii: small (8–18) and larger accent coins (20–42)
      const isLarge = Math.random() < 0.3;
      const radius = isLarge
        ? 20 + Math.random() * 22
        : 8 + Math.random() * 10;

      // Alternate gold and emerald, slightly weighted toward gold
      const isGold = Math.random() < 0.6;
      const color = isGold ? GOLD_COLOR : EMERALD_COLOR;

      // Very subtle opacity
      const opacity = 0.08 + Math.random() * 0.14; // 0.08 → 0.22

      const geo = new THREE.CircleGeometry(radius, 32);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Spread coins across full width, start at random vertical positions
      const baseX = (Math.random() - 0.5) * W;
      const startY = (Math.random() - 0.5) * H; // random initial y

      mesh.position.set(baseX, startY, 0);
      scene.add(mesh);

      coins.push({
        mesh,
        speed: 0.25 + Math.random() * 0.45,   // 0.25–0.70 px/frame upward
        drift: 12 + Math.random() * 20,         // horizontal wobble amplitude
        driftFreq: 0.4 + Math.random() * 0.8,  // wobble frequency
        driftPhase: Math.random() * Math.PI * 2,
        baseX,
        resetY: -H / 2 - 60,                    // spawn just below visible area
        topY: H / 2 + 60,                        // exit threshold at top
      });
    }

    // ---- Animation loop ----
    let animId: number;
    let currentW = W;
    let currentH = H;
    let frame = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      frame++;

      const t = frame * 0.016; // approx time in seconds at 60fps

      for (const coin of coins) {
        // Float upward
        coin.mesh.position.y += coin.speed;

        // Gentle horizontal sine drift
        coin.mesh.position.x =
          coin.baseX + Math.sin(t * coin.driftFreq + coin.driftPhase) * coin.drift;

        // Wrap: when coin exits the top, reset to bottom
        if (coin.mesh.position.y > currentH / 2 + 60) {
          coin.mesh.position.y = -currentH / 2 - 60;
          // Randomise base X on re-entry for variety
          coin.baseX = (Math.random() - 0.5) * currentW;
          coin.mesh.position.x = coin.baseX;
        }
      }

      renderer.render(scene, camera);
    }

    animId = requestAnimationFrame(animate);

    // ---- Resize handler ----
    function handleResize() {
      if (!container) return;
      const nW = container.clientWidth;
      const nH = container.clientHeight;
      currentW = nW;
      currentH = nH;

      renderer.setSize(nW, nH);
      camera.left = -nW / 2;
      camera.right = nW / 2;
      camera.top = nH / 2;
      camera.bottom = -nH / 2;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", handleResize);

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      // Dispose all coin geometries and materials
      for (const coin of coins) {
        (coin.mesh.geometry as THREE.CircleGeometry).dispose();
        (coin.mesh.material as THREE.MeshBasicMaterial).dispose();
      }
      renderer.dispose();
    };
  }, [containerRef]);
}

// ---------------------------------------------------------------------------
// StepCard — left-aligned vertical stepper card
// ---------------------------------------------------------------------------
interface StepCardProps {
  step: StepData;
  index: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  const num = String(index + 1).padStart(2, "0"); // "01", "02", …

  return (
    <div className="relative flex gap-5 sm:gap-7">
      {/* ---- Left column: number circle + vertical connector ---- */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Step number circle */}
        <div
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-extrabold text-white shadow-lg flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            boxShadow:
              "0 0 0 3px rgba(16,185,129,0.18), 0 4px 14px rgba(16,185,129,0.35)",
          }}
        >
          {num}
        </div>

        {/* Vertical connector line below circle (hidden on last step) */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              minHeight: 40,
              background:
                "linear-gradient(to bottom, #10b981 0%, rgba(16,185,129,0.15) 100%)",
            }}
          />
        )}
      </div>

      {/* ---- Right column: content card ---- */}
      <div
        className={`flex-1 rounded-2xl border bg-white/80 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 shadow-sm hover:shadow-md transition-shadow duration-300 ${
          !isLast ? "mb-6 sm:mb-8" : ""
        }`}
        style={{ borderColor: "rgba(16,185,129,0.15)" }}
      >
        {/* Icon + title row */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-600"
            style={{ background: "rgba(16,185,129,0.10)" }}
          >
            {step.icon}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-[0.9rem] text-slate-600 leading-relaxed mb-2">
          {step.description}
        </p>

        {/* Detail — previously hidden, now shown in a subtle callout */}
        <p className="text-xs sm:text-[0.8rem] text-slate-400 leading-relaxed border-l-2 border-emerald-200 pl-3 italic">
          {step.detail}
        </p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// StepsSection — main exported component
// ---------------------------------------------------------------------------
const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useFloatingCoins(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 sm:py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f0fdf4 50%, #f8fafc 100%)",
      }}
    >
      {/* Three.js canvas is injected above the content */}

      {/* Subtle radial glow in the upper-center for warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content sits above canvas (z-10) */}
      <div className="relative max-w-2xl mx-auto" style={{ zIndex: 10 }}>
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
