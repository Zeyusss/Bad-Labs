import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.135 78 / 0.12) 0%, transparent 60%)",
        mixBlendMode: "screen",
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
      }}
    />
  );
}
