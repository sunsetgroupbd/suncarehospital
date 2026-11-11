"use client";
// components/sections/About.tsx
import { useState } from "react";
import Image from "next/image";
import {
  RiHeartPulseFill,
  RiHospitalFill,
  RiBuilding4Fill,
  RiDoorOpenFill,
  RiHammerFill,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import StatCounter from "@/components/ui/StatCounter";
import { useLanguage } from "@/lib/LanguageContext";
import { SITE } from "@/lib/constants";

export default function About() {
  const { t, lang } = useLanguage();

  const [activeTab, setActiveTab] = useState<"vision" | "entrance" | "construction">("vision");

  const views = {
    vision: {
      src: "/images/sun-care-hospital.webp",
      alt: `${SITE.name} 10-Story Architectural Vision`,
      title: lang === "bn" ? "পূর্ণাঙ্গ ভবন" : "Full Vision",
      caption: lang === "bn" ? "১০+ তলা আধুনিক মাল্টি-স্পেশালিটি হাসপাতাল কমপ্লেক্স" : "10+ Story Modern Multi-Specialty Hospital Complex",
    },
    entrance: {
      src: "/images/suncare-hospital-close-view.webp",
      alt: `${SITE.name} Main Entrance & Reception`,
      title: lang === "bn" ? "প্রবেশদ্বার" : "Main Entrance",
      caption: lang === "bn" ? "গ্রাউন্ড রিসেপশন, জরুরি ড্রাইভওয়ে ও আধুনিক এন্ট্রান্স" : "Ground Reception, Emergency Driveway & Modern Entrance",
    },
    construction: {
      src: "/images/hospital-view.webp",
      alt: `${SITE.name} Physical Building Construction Site at Mohammadpur`,
      title: lang === "bn" ? "বাস্তব নির্মাণ" : "Construction",
      caption: lang === "bn" ? "বসিলা গার্ডেন সিটিতে নিজস্ব জমিতে দ্রুত নির্মাণ কাজ চলমান" : "Rapid on-site construction progressing at Bosila Garden City",
    },
  };

  const current = views[activeTab];

  const stats = [
    { value: "100+", label: lang === "bn" ? "আধুনিক হাসপাতাল শয্যা" : "Modern Hospital Beds" },
    { value: "12+", label: lang === "bn" ? "বিশেষায়িত চিকিৎসা বিভাগ" : "Specialized Departments" },
    { value: "35+", label: lang === "bn" ? "অভিজ্ঞ বিশেষজ্ঞ ডাক্তার" : "Consultant Specialists" },
    { value: "24/7", label: lang === "bn" ? "জরুরি ও আইসিইউ সেবা" : "Emergency & Critical Care" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Hospital Infrastructure & Multi-View Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg flex flex-col gap-3">
              
              {/* Tab selector */}
              <div className="flex items-center justify-between p-1 bg-surface-50 rounded-xl border border-gray-200 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("vision")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "vision"
                      ? "bg-brand-green-600 text-white shadow-xs"
                      : "text-ink-600 hover:text-ink-900 hover:bg-white"
                  }`}
                >
                  <RiBuilding4Fill size={14} />
                  <span>{views.vision.title}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("entrance")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "entrance"
                      ? "bg-brand-green-600 text-white shadow-xs"
                      : "text-ink-600 hover:text-ink-900 hover:bg-white"
                  }`}
                >
                  <RiDoorOpenFill size={14} />
                  <span>{views.entrance.title}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("construction")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "construction"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "text-ink-600 hover:text-ink-900 hover:bg-white"
                  }`}
                >
                  <RiHammerFill size={14} />
                  <span>{views.construction.title}</span>
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-slate-900 shadow-elevated">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-opacity duration-300"
                  priority
                />

                {/* Status watermark */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-gray-100 shadow-xs flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${activeTab === "construction" ? "bg-amber-500 animate-pulse" : "bg-brand-green-600"}`} />
                  <span className="text-[11px] font-bold text-ink-900">{current.title}</span>
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white">
                  <p className="text-xs font-medium leading-snug drop-shadow-sm">
                    {current.caption}
                  </p>
                </div>
              </div>
              
              {/* Reassurance text */}
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-surface-50 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <RiHeartPulseFill size={18} className="text-brand-green-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-ink-900 tracking-wider uppercase">
                    {lang === "bn" ? "রোগী-বান্ধব আধুনিক স্বাস্থ্যসেবা" : "Patient-First Modern Healthcare"}
                  </span>
                </div>
                <span className="text-xs font-semibold text-brand-green-800 bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
                  {lang === "bn" ? "২৪/৭ সার্বক্ষণিক" : "24/7 Active"}
                </span>
              </div>

              <div className="text-center pt-0.5">
                <a
                  href={SITE.parentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-green-800 hover:text-brand-green-600 font-semibold transition-colors no-underline"
                >
                  {SITE.parentCompany}
                </a>
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

            <a
              href={SITE.parentCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-brand-green-50 hover:bg-brand-green-100 rounded-lg border border-brand-green-200/60 w-fit transition-colors group cursor-pointer no-underline"
            >
              <RiHospitalFill
                size={18}
                className="text-brand-green-700 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-brand-green-800 group-hover:text-brand-green-900 text-sm font-semibold no-underline">
                {t.about.parentNote}
              </span>
            </a>
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
            {stats.map((stat) => (
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
