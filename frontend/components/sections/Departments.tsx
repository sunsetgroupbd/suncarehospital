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
import { t } from "@/lib/content";
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

        {/* Departments Grid with rounded-xl */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          role="list"
          aria-label="Clinical departments"
        >
          {DEPARTMENTS.map((dept) => {
            const Icon = iconMap[dept.icon] ?? RiStethoscopeFill;
            return (
              <Card
                key={dept.id}
                className="flex flex-col gap-4 bg-white"
                hover
              >
                <div
                  className="w-11 h-11 rounded-lg bg-brand-green-100 flex items-center justify-center flex-shrink-0 text-brand-green-700"
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-ink-900 font-bold text-base mb-1.5">
                    {dept.name}
                  </h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {dept.description}
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
