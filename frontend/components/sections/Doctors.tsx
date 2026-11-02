"use client";
// components/sections/Doctors.tsx
import {
  RiStethoscopeFill,
  RiHeartPulseFill,
  RiParentFill,
  RiUserHeartFill,
  RiCalendarFill,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { DOCTORS } from "@/lib/constants";

const panelIconMap: Record<string, React.ElementType> = {
  Medicine: RiStethoscopeFill,
  Cardiology: RiHeartPulseFill,
  Gynecology: RiUserHeartFill,
  Pediatrics: RiParentFill,
};

export default function Doctors() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="doctors"
      className="py-20 md:py-28 bg-surface-50"
      aria-labelledby="doctors-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag>{t.doctors.tag}</SectionTag>
          <h2
            id="doctors-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.doctors.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.doctors.sub}
          </p>
        </div>

        {/* Clinical Consultant Panel Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Medical specialist consultant panels"
        >
          {DOCTORS.map((doc) => {
            const Icon = panelIconMap[doc.department] ?? RiStethoscopeFill;
            const title = lang === "bn" ? doc.titleBn : doc.title;
            const specialty = lang === "bn" ? doc.specialtyBn : doc.specialty;
            const qualification =
              lang === "bn" ? doc.qualificationBn : doc.qualification;

            return (
              <Card
                key={doc.id}
                className="flex flex-col items-center text-center p-6 sm:p-7 bg-white border border-gray-100 hover:border-brand-green-500 transition-all duration-200"
                hover
              >
                {/* Panel Icon */}
                <div
                  className="w-14 h-14 rounded-2xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-700 mb-4 shadow-subtle"
                  aria-hidden="true"
                >
                  <Icon size={26} />
                </div>

                <div className="mb-2">
                  <span className="inline-block text-[11px] font-bold text-brand-green-700 bg-brand-green-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {lang === "bn" ? "বিশেষজ্ঞ প্যানেল" : "Specialist Faculty"}
                  </span>
                </div>

                <h3 className="font-bold text-ink-900 text-lg mb-1 leading-snug">
                  {specialty}
                </h3>

                <p className="text-xs font-semibold text-ink-700 mb-2">
                  {title}
                </p>

                <p className="text-xs text-ink-600 mb-6 leading-relaxed flex-1">
                  {qualification}
                </p>

                <div className="w-full pt-3 border-t border-gray-100 mt-auto">
                  <Button
                    href="#appointment"
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    <RiCalendarFill size={15} aria-hidden="true" />
                    <span>
                      {lang === "bn"
                        ? "পরামর্শের জন্য যোগাযোগ"
                        : "Book Consultation"}
                    </span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
