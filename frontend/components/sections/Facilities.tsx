// components/sections/Facilities.tsx
import {
  RiTestTubeFill,
  RiScan2Fill,
  RiCapsuleFill,
  RiHeartPulseFill,
  RiHotelBedFill,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import SectionTag from "@/components/ui/SectionTag";
import { t } from "@/lib/content";
import { FACILITIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical: RiTestTubeFill,
  ScanLine: RiScan2Fill,
  Pill: RiCapsuleFill,
  Ambulance: FaAmbulance,
  Activity: RiHeartPulseFill,
  BedDouble: RiHotelBedFill,
};

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag>{t.facilities.tag}</SectionTag>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.facilities.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.facilities.sub}
          </p>
        </div>

        {/* Alternating feature layout with rounded-xl */}
        <div className="space-y-12 md:space-y-16">
          {FACILITIES.map((facility, index) => {
            const Icon = iconMap[facility.icon] ?? RiHeartPulseFill;
            const isEven = index % 2 === 0;

            return (
              <div
                key={facility.id}
                className={[
                  "flex flex-col md:flex-row items-center gap-8 lg:gap-14",
                  !isEven ? "md:flex-row-reverse" : "",
                ].join(" ")}
              >
                {/* Icon Showcase with rounded-xl */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className="w-full max-w-md aspect-[16/10] rounded-xl flex flex-col items-center justify-center gap-4 bg-surface-50 border border-gray-100 shadow-subtle p-8"
                    aria-hidden="true"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 shadow-subtle flex items-center justify-center text-brand-green-600">
                      <Icon size={32} />
                    </div>
                    <span className="text-ink-900 font-bold text-base tracking-tight text-center">
                      {facility.title}
                    </span>
                  </div>
                </div>

                {/* Text details */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-green-100 flex items-center justify-center text-brand-green-700 flex-shrink-0">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
                      {facility.title}
                    </h3>
                  </div>
                  
                  <p className="text-ink-600 leading-relaxed text-base">
                    {facility.description}
                  </p>

                  <div className="w-10 h-1 bg-brand-green-600 rounded-full mt-2" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
