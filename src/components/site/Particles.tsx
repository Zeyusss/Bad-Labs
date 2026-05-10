import { useMemo } from "react";

export function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
}
