"use client";
// components/layout/FloatingButtons.tsx
// Floating emergency call button (mobile) + back-to-top button

import { useState, useEffect, useCallback } from "react";
import { RiPhoneFill, RiArrowUpLine } from "react-icons/ri";
import { CONTACT } from "@/lib/constants";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowTop(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end"
      role="complementary"
      aria-label="Floating action buttons"
    >
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={[
          "w-10 h-10 rounded-full bg-white border border-gray-100 shadow-subtle",
          "flex items-center justify-center text-ink-900",
          "hover:bg-brand-green-600 hover:text-white hover:border-brand-green-600",
          "transition-all duration-150 cursor-pointer",
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
        aria-label="Back to top"
      >
        <RiArrowUpLine size={18} aria-hidden="true" />
      </button>

      {/* Emergency Call pill — mobile only */}
      <a
        href={`tel:${CONTACT.phone1Raw}`}
        className={[
          "flex items-center gap-2 px-4 py-2.5 rounded-full",
          "bg-brand-red-500 text-white font-bold text-sm",
          "hover:bg-brand-red-600 transition-colors active:scale-95 shadow-subtle",
          "md:hidden",
        ].join(" ")}
        aria-label={`Emergency Call: ${CONTACT.phone1}`}
      >
        <RiPhoneFill size={16} aria-hidden="true" />
        <span>Emergency Call</span>
      </a>
    </div>
  );
}
