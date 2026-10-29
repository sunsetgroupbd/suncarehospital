// components/sections/Hero.tsx
import Image from "next/image";
import {
  RiCalendarFill,
  RiPhoneFill,
  RiCheckboxCircleFill,
  RiMapPin2Fill,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { t } from "@/lib/content";
import { CONTACT, SITE, ADDRESS } from "@/lib/constants";

export default function Hero() {
  const trustChips = t.hero.trustChips;
  const headlineLines = t.hero.headline.split("\n");

  return (
    <section
      id="home"
      className="relative bg-surface-50 pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column (7 cols): Clean, Uncluttered Typography */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Clean category label — NO lines, NO clunky pills */}
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

            {/* CTAs with Flat Solid Buttons (No drop shadows) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
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
            </div>

            {/* Trust chips — NO dividing border line, clean chips */}
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

          {/* Right Column (5 cols): REAL Hospital Building Image Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              
              {/* Architectural Building Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-elevated bg-white">
                <Image
                  src="/images/hospitalbuildingimage.webp"
                  alt={`${SITE.name} building exterior in Mohammadpur`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />

                {/* Top overlay badge: authentic logo mark */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-100 shadow-subtle">
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src="/onlylogo.png"
                      alt={SITE.shortName}
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-ink-900">Sun Care Hospital</span>
                </div>

                {/* Bottom overlay badge: location info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-100 shadow-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-md bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                      <RiMapPin2Fill size={16} aria-hidden="true" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold text-ink-900 truncate">{ADDRESS.line2}</div>
                      <div className="text-[11px] text-ink-600">{ADDRESS.city}</div>
                    </div>
                  </div>

                  <a
                    href={`tel:${CONTACT.phone1Raw}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-red-500 hover:bg-brand-red-600 text-white text-xs font-bold transition-colors flex-shrink-0"
                    aria-label={`Call emergency: ${CONTACT.phone1}`}
                  >
                    <FaAmbulance size={14} aria-hidden="true" />
                    <span>24/7 Hotline</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
