import { useEffect, useRef } from "react";

export function SiteMeshBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty("--mesh-x", `${x * 28}px`);
      root.style.setProperty("--mesh-y", `${y * 22}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={rootRef} className="site-mesh-root" aria-hidden>
      <div className="site-mesh-base" />
      <div className="site-mesh-orb site-mesh-orb-hero" />
      <div className="site-mesh-orb site-mesh-orb-mid" />
      <div className="site-mesh-orb site-mesh-orb-projects" />
    </div>
  );
}
