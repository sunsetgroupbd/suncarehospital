"use client";
// components/sections/Testimonials.tsx
import { RiStarFill, RiShieldCheckFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag>{t.testimonials.tag}</SectionTag>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-3xl tracking-tight"
          >
            {t.testimonials.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.testimonials.sub}
          </p>
        </div>

        {/* Shareholder Testimonial Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Shareholder reviews"
        >
          {TESTIMONIALS.map((review) => {
            const isBn = lang === "bn";
            const text = isBn ? review.textBn : review.text;
            const name = isBn ? review.nameBn : review.name;
            const role = isBn ? review.roleBn : review.role;
            const location = isBn ? review.locationBn : review.location;

            return (
              <Card
                key={review.id}
                hover
                className="flex flex-col gap-4 p-7 bg-surface-50 border border-gray-100 shadow-subtle hover:border-brand-green-200 transition-all duration-300"
              >
                {/* Header: Rating & Package Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex gap-1 text-amber-400"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <RiStarFill key={i} size={17} aria-hidden="true" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
                    <RiShieldCheckFill className="text-brand-green-600" size={13} />
                    {review.package} {isBn ? "মেম্বার" : "Member"}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote className="text-ink-800 text-sm leading-relaxed italic">
                  &ldquo;{text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto pt-4 border-t border-gray-200/80">
                  <div className="font-bold text-ink-900 text-sm">
                    {name}
                  </div>
                  <div className="text-xs text-brand-green-700 font-medium mt-0.5">
                    {role}
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5">
                    {location}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
