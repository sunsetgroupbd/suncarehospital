// components/sections/About.tsx
import Image from "next/image";
import { RiHeartPulseFill, RiHospitalFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import StatCounter from "@/components/ui/StatCounter";
import { t } from "@/lib/content";
import { STATS, SITE } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Solid architectural frame with official logo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-surface-50 rounded-xl p-8 border border-gray-100 shadow-subtle flex flex-col items-center gap-6">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 bg-white rounded-lg p-4 border border-gray-100 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt={`${SITE.name} emblem`}
                    fill
                    sizes="(max-width: 640px) 176px, 192px"
                    className="object-contain p-2"
                  />
                </div>
                
                {/* Reassurance text */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-md border border-gray-100 shadow-subtle">
                  <RiHeartPulseFill size={16} className="text-brand-green-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-ink-900 tracking-wider uppercase">
                    Patient-First Healthcare
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-xs text-brand-green-800 font-semibold">
                    {SITE.parentCompany}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hospital Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex">
              <SectionTag>{t.about.tag}</SectionTag>
            </div>
            
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight tracking-tight"
            >
              {t.about.headline}
            </h2>

            <p className="text-ink-600 text-base sm:text-lg leading-relaxed">
              {t.about.body1}
            </p>

            <p className="text-ink-600 text-base leading-relaxed">
              {t.about.body2}
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-brand-green-50 rounded-lg border border-brand-green-200/60 w-fit">
              <RiHospitalFill
                size={18}
                className="text-brand-green-700 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-brand-green-800 text-sm font-semibold">
                {t.about.parentNote}
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Stats Bar */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold text-ink-600 uppercase tracking-widest">
              {t.about.statsHeadline}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-50 rounded-xl p-6 border border-gray-100 shadow-subtle text-center flex flex-col items-center justify-center hover:border-brand-green-500 transition-colors"
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
