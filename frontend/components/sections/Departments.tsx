"use client";
// components/sections/Departments.tsx
import {
  RiStethoscopeFill,
  RiHeartPulseFill,
  RiParentFill,
  RiGroupFill,
  RiMentalHealthFill,
  RiAlertFill,
  RiMedicineBottleFill,
  RiHeartFill,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";
import { DEPARTMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope: RiStethoscopeFill,
  Heart: RiHeartFill,
  Baby: RiParentFill,
  Users: RiGroupFill,
  Bone: RiHeartPulseFill,
  Brain: RiMentalHealthFill,
  Ear: RiMedicineBottleFill,
  AlertCircle: RiAlertFill,
};

export default function Departments() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="departments"
      className="py-16 md:py-28 bg-surface-50"
      aria-labelledby="departments-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center gap-3">
          <SectionTag>{t.departments.tag}</SectionTag>
          <h2
            id="departments-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.departments.headline}
          </h2>
          <p className="text-ink-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t.departments.sub}
          </p>
        </div>

        {/* 8 Departments Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {DEPARTMENTS.map((dept) => {
            const Icon = iconMap[dept.icon] || RiStethoscopeFill;
            const name = lang === "bn" && "nameBn" in dept ? dept.nameBn : dept.name;
            const desc = lang === "bn" && "descriptionBn" in dept ? dept.descriptionBn : dept.description;

            return (
              <Card
                key={dept.id}
                hover
                className="flex flex-col gap-2.5 sm:gap-4 p-3.5 sm:p-6 bg-white border border-gray-100 shadow-subtle hover:border-brand-green-500 transition-all duration-200"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-700 flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon className="text-lg sm:text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 text-sm sm:text-lg mb-1 sm:mb-2 leading-snug">
                    {name}
                  </h3>
                  <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
