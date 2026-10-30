"use client";
// components/sections/Facilities.tsx
// High-impact visual showcase of Sun Care Hospital's diagnostic and clinical facilities.
// Alternating feature layout with curated high-resolution medical photography.

import Image from "next/image";
import {
  RiTestTubeFill,
  RiScan2Fill,
  RiCapsuleFill,
  RiHeartPulseFill,
  RiHotelBedFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import SectionTag from "@/components/ui/SectionTag";
import { useLanguage } from "@/lib/LanguageContext";
import { FACILITIES } from "@/lib/constants";

import labImg from "@/public/images/facilities/lab.jpg";
import radiologyImg from "@/public/images/facilities/radiology.jpg";
import pharmacyImg from "@/public/images/facilities/pharmacy.jpg";
import ambulanceImg from "@/public/images/SUN CARE Ambulance at Hospital Entrance.webp";
import icuImg from "@/public/images/facilities/icu.jpg";
import cabinImg from "@/public/images/facilities/cabin.jpg";

const facilityImageMap: Record<string, typeof ambulanceImg> = {
  pathology: labImg,
  imaging: radiologyImg,
  pharmacy: pharmacyImg,
  ambulance: ambulanceImg,
  icu: icuImg,
  rooms: cabinImg,
};

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

        {/* Alternating feature layout with real medical photography */}
        <div className="space-y-14 md:space-y-20">
          {FACILITIES.map((facility, index) => {
            const Icon = iconMap[facility.icon] ?? RiHeartPulseFill;
            const isEven = index % 2 === 0;
            const title = lang === "bn" && "titleBn" in facility ? facility.titleBn : facility.title;
            const desc = lang === "bn" && "descriptionBn" in facility ? facility.descriptionBn : facility.description;
            const imageSrc = facilityImageMap[facility.id] ?? facility.image;

            return (
              <div
                key={facility.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual block with photography */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-surface-100 border border-gray-100 overflow-hidden shadow-elevated group">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Floating badge over image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-100 shadow-subtle text-xs font-bold text-ink-900 truncate">
                        <div className="w-5 h-5 rounded-md bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                          <Icon size={13} aria-hidden="true" />
                        </div>
                        <span className="truncate">{title}</span>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-brand-green-600/90 backdrop-blur-sm text-white text-[11px] font-semibold flex-shrink-0">
                        {lang === "bn" ? "আধুনিক মান" : "Standard Care"}
                      </span>
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
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors group"
                    >
                      <span>{lang === "bn" ? "বিস্তারিত জানতে যোগাযোগ করুন" : "Inquire about facility"}</span>
                      <RiArrowRightLine className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
