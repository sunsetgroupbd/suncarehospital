// components/sections/Testimonials.tsx
import { RiStarFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import { t } from "@/lib/content";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
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
              <p className="text-ink-600 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Patient info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full bg-brand-green-100 text-brand-green-700 flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-ink-900 text-sm font-bold">{review.name}</h3>
                  <p className="text-xs text-ink-600">{review.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
