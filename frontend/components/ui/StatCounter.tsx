"use client";
// components/ui/StatCounter.tsx
// Animated counter — client component for scroll-triggered number animation

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  placeholder?: boolean;
}

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export default function StatCounter({
  value,
  label,
  placeholder = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={[
        "flex flex-col items-center text-center p-6",
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      <span
        className="text-4xl md:text-5xl font-bold text-brand-green-600 mb-2"
        aria-label={`${value} ${label}`}
      >
        {value}
        {placeholder && (
          <span
            className="sr-only"
            aria-label="placeholder value — to be updated"
          />
        )}
      </span>
      <span className="text-sm font-medium text-ink-600 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

