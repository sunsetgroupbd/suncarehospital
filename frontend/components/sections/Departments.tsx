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
      className="py-20 md:py-28 bg-surface-50"
      aria-labelledby="departments-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16 flex flex-col items-center gap-3">
          <SectionTag>{t.departments.tag}</SectionTag>
          <h2
            id="departments-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.departments.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.departments.sub}
          </p>
        </div>

        {/* 8 Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => {
            const Icon = iconMap[dept.icon] || RiStethoscopeFill;
            const name = lang === "bn" && "nameBn" in dept ? dept.nameBn : dept.name;
            const desc = lang === "bn" && "descriptionBn" in dept ? dept.descriptionBn : dept.description;

            return (
              <Card
                key={dept.id}
                hover
                className="flex flex-col gap-4 p-6 bg-white border border-gray-100 shadow-subtle"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-700 flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2 leading-snug">
                    {name}
                  </h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
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
