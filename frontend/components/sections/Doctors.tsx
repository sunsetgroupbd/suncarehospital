// components/sections/Doctors.tsx
import { RiUser3Fill, RiCalendarFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { t } from "@/lib/content";
import { DOCTORS } from "@/lib/constants";

export default function Doctors() {
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

              {/* Info */}
              <h3 className="text-ink-900 font-bold text-base mb-1">
                {doc.name}
              </h3>
              
              <div className="text-brand-green-700 text-xs font-semibold mb-2 px-2.5 py-1 bg-brand-green-50 rounded-md border border-brand-green-200/60">
                {doc.specialty}
              </div>
              
              <p className="text-ink-600 text-xs leading-relaxed mb-6">
                {doc.qualification}
              </p>

              <div className="w-full mt-auto">
                <Button href="#appointment" size="sm" variant="outline" className="w-full text-xs">
                  <RiCalendarFill size={14} aria-hidden="true" />
                  <span>Book Visit</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
