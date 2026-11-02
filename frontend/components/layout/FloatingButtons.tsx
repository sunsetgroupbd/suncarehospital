"use client";
// components/layout/FloatingButtons.tsx
// Floating action buttons for mobile: Share & Invest + Emergency Call + Back-to-top

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { RiPhoneFill, RiArrowUpLine, RiShieldCheckFill } from "react-icons/ri";
import { CONTACT } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function FloatingButtons() {
  const { lang } = useLanguage();
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
      className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5 items-end"
      role="complementary"
      aria-label="Floating action buttons"
    >
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={[
          "w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 shadow-md",
          "flex items-center justify-center text-ink-900",
          "hover:bg-brand-green-600 hover:text-white hover:border-brand-green-600",
          "transition-all duration-150 cursor-pointer",
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
        aria-label="Back to top"
      >
        <RiArrowUpLine size={17} aria-hidden="true" />
      </button>

      {/* Share & Investment pill — mobile only */}
      <Link
        href="/#ownership"
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 font-bold text-xs shadow-lg hover:bg-slate-800 active:scale-95 transition-all md:hidden"
        aria-label={lang === "bn" ? "শেয়ার ও বিনিয়োগ" : "Share & Invest"}
      >
        <RiShieldCheckFill className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
        <span>{lang === "bn" ? "শেয়ার ও বিনিয়োগ" : "Share & Invest"}</span>
      </Link>

      {/* Emergency Call pill — mobile only */}
      <a
        href={`tel:${CONTACT.phone1Raw}`}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-brand-red-500 text-white font-bold text-xs shadow-lg hover:bg-brand-red-600 active:scale-95 transition-all md:hidden"
        aria-label={`Emergency Call: ${CONTACT.phone1}`}
      >
        <RiPhoneFill size={15} aria-hidden="true" />
        <span>{lang === "bn" ? "জরুরি কল" : "Emergency Call"}</span>
      </a>
    </div>
  );
}
