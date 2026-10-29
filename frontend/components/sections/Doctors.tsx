"use client";
// components/sections/Doctors.tsx
import { RiUser3Fill, RiCalendarFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { DOCTORS } from "@/lib/constants";

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

        {/* Doctor Cards with rounded-xl */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Medical specialists"
        >
          {DOCTORS.map((doc) => (
            <Card
              key={doc.id}
              className="flex flex-col items-center text-center p-7 bg-white"
              hover
            >
              {/* Doctor Avatar */}
              <div
                className="w-16 h-16 rounded-xl bg-brand-green-100 flex items-center justify-center text-brand-green-700 mb-4"
                aria-hidden="true"
              >
                <RiUser3Fill size={36} />
              </div>

              <h3 className="font-bold text-ink-900 text-lg mb-1 leading-snug">
                {lang === "bn" ? "বিশেষজ্ঞ কনসালটেন্ট" : doc.name}
              </h3>
              <p className="text-xs font-semibold text-brand-green-700 mb-2">
                {doc.specialty}
              </p>
              <p className="text-xs text-ink-600 mb-6 leading-relaxed">
                {doc.qualification}
              </p>

              <Button
                href="#appointment"
                size="sm"
                variant="outline"
                className="w-full mt-auto"
              >
                <RiCalendarFill size={15} aria-hidden="true" />
                <span>{lang === "bn" ? "বুকিং দিন" : "Book Visit"}</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
