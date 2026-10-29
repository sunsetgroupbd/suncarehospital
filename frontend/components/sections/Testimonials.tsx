"use client";
// components/sections/Testimonials.tsx
import { RiStarFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const { t } = useLanguage();

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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.testimonials.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.testimonials.sub}
          </p>
        </div>

        {/* Testimonial Cards with rounded-xl */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Patient testimonials"
        >
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.id}
              hover
              className="flex flex-col gap-4 p-8 bg-surface-50 border border-gray-100 shadow-subtle"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <RiStarFill
                    key={i}
                    size={16}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-ink-800 text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="font-bold text-ink-900 text-sm">
                  {review.name}
                </div>
                <div className="text-xs text-brand-green-700 font-medium">
                  {review.location}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
