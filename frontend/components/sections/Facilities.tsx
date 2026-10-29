"use client";
// components/sections/Facilities.tsx
import {
  RiTestTubeFill,
  RiScan2Fill,
  RiCapsuleFill,
  RiHeartPulseFill,
  RiHotelBedFill,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import SectionTag from "@/components/ui/SectionTag";
import { useLanguage } from "@/lib/LanguageContext";
import { FACILITIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical: RiTestTubeFill,
  ScanLine: RiScan2Fill,
  Pill: RiCapsuleFill,
  Ambulance: FaAmbulance,
  Activity: RiHeartPulseFill,
  BedDouble: RiHotelBedFill,
};

export default function Facilities() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="facilities"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag>{t.facilities.tag}</SectionTag>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.facilities.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.facilities.sub}
          </p>
        </div>

        {/* Alternating feature layout with rounded-xl */}
        <div className="space-y-12 md:space-y-16">
          {FACILITIES.map((facility, index) => {
            const Icon = iconMap[facility.icon] ?? RiHeartPulseFill;
            const isEven = index % 2 === 0;
            const title = lang === "bn" && "titleBn" in facility ? facility.titleBn : facility.title;
            const desc = lang === "bn" && "descriptionBn" in facility ? facility.descriptionBn : facility.description;

            return (
              <div
                key={facility.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual block */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/9] rounded-xl bg-surface-50 border border-gray-100 flex items-center justify-center overflow-hidden shadow-subtle group">
                    <div className="w-20 h-20 rounded-xl bg-white border border-gray-100 shadow-subtle flex items-center justify-center text-brand-green-700 transition-transform duration-200 group-hover:scale-105">
                      <Icon size={40} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-green-100 flex items-center justify-center text-brand-green-700">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 leading-tight">
                    {title}
                  </h3>
                  <p className="text-ink-600 text-base sm:text-lg leading-relaxed">
                    {desc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors"
                    >
                      <span>{lang === "bn" ? "বিস্তারিত জানতে যোগাযোগ করুন" : "Inquire about facility"}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
