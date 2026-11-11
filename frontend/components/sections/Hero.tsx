"use client";
// components/sections/Hero.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  RiCalendarFill,
  RiPhoneFill,
  RiCheckboxCircleFill,
  RiFilePdfFill,
} from "react-icons/ri";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { CONTACT, SITE } from "@/lib/constants";

export default function Hero() {
  const { t, lang } = useLanguage();
  const trustChips = t.hero.trustChips;
  const headlineLines = t.hero.headline.split("\n");

  const slides = [
    {
      src: "/images/sun-care-hospital.webp",
      alt: `${SITE.name} 10+ Story Hospital Architectural Vision`,
      badge: lang === "bn" ? "১০+ তলা আধুনিক ভবন" : "10+ Story Modern Tower",
    },
    {
      src: "/images/suncare-hospital-close-view.webp",
      alt: `${SITE.name} Ground Entrance & Reception View`,
      badge: lang === "bn" ? "রিসেপশন ও ড্রাইভওয়ে" : "Reception & Driveway",
    },
    {
      src: "/images/hospital-view.webp",
      alt: `${SITE.name} Live Construction Site at Bosila Garden City`,
      badge: lang === "bn" ? "বাস্তব নির্মাণ সাইট" : "On-Site Construction",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3.8s, pausing on user hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      id="home"
      className="relative bg-surface-50 py-10 lg:py-20"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Right Column (5 cols on desktop, FIRST on mobile via order-1) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-lg flex flex-col gap-3">
              
              {/* Auto-Slide Building Image Container (No clunky buttons) */}
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-elevated bg-slate-900 group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Cross-fade stacked slides */}
                {slides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Minimal slide indicator dots at bottom */}
                <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-auto">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column (7 cols on desktop, SECOND on mobile via order-2) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6">
            
            {/* Clean category label */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green-700">
              <span className="w-2 h-2 rounded-full bg-brand-green-600 inline-block" aria-hidden="true" />
              <span>Sun Care Hospital & Diagnostic Center</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.14] tracking-tight"
            >
              {headlineLines.map((line, i) => (
                <span
                  key={i}
                  className={i === 1 ? "text-brand-green-600 block mt-1" : "block"}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p className="text-ink-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* CTAs including Official Brochure Download */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <Button href="#appointment" size="lg" variant="primary">
                <RiCalendarFill size={18} aria-hidden="true" />
                <span>{t.hero.ctaPrimary}</span>
              </Button>
              <Button
                href={`tel:${CONTACT.phone1Raw}`}
                size="lg"
                variant="outline"
              >
                <RiPhoneFill size={18} aria-hidden="true" />
                <span>{t.hero.ctaSecondary}</span>
              </Button>
              <a
                href="/sun-care-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sun-Care-Hospital-Brochure.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-ink-800 hover:text-brand-green-700 hover:border-brand-green-300 text-sm font-semibold transition-all shadow-subtle group"
                title={lang === "bn" ? "অফিসিয়াল ব্রোশিওর ডাউনলোড করুন (PDF)" : "Download Official Hospital Brochure (PDF)"}
              >
                <RiFilePdfFill size={18} className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>{lang === "bn" ? "ব্রোশিওর ডাউনলোড" : "Brochure (PDF)"}</span>
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {trustChips.map((chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg text-xs font-semibold text-ink-900 border border-gray-100 shadow-subtle"
                >
                  <RiCheckboxCircleFill
                    size={15}
                    className="text-brand-green-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
