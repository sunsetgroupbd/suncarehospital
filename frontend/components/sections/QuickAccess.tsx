// components/sections/QuickAccess.tsx
import {
  RiCalendarFill,
  RiUserHeartFill,
  RiHeartPulseFill,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

const cards = [
  {
    icon: FaAmbulance,
    title: "24/7 Emergency",
    sub: "Immediate trauma dispatch",
    href: `tel:${CONTACT.phone1Raw}`,
    bgClass: "bg-brand-red-500 text-white hover:bg-brand-red-600 border-transparent",
    iconBgClass: "bg-white/20 text-white",
  },
  {
    icon: RiCalendarFill,
    title: "Book Appointment",
    sub: "Schedule specialist doctor",
    href: "#appointment",
    bgClass: "bg-brand-green-600 text-white hover:bg-brand-green-700 border-transparent",
    iconBgClass: "bg-white/20 text-white",
  },
  {
    icon: RiUserHeartFill,
    title: "Specialist Doctors",
    sub: "Senior consultant faculty",
    href: "#doctors",
    bgClass: "bg-white text-ink-900 hover:bg-surface-50 border-gray-100 shadow-subtle",
    iconBgClass: "bg-brand-green-100 text-brand-green-700",
  },
  {
    icon: RiHeartPulseFill,
    title: "Diagnostic Reports",
    sub: "Automated lab & imaging",
    href: "#facilities",
    bgClass: "bg-white text-ink-900 hover:bg-surface-50 border-gray-100 shadow-subtle",
    iconBgClass: "bg-surface-100 text-ink-700",
  },
] as const;

export default function QuickAccess() {
  return (
    <section
      className="relative z-20 -mt-8 sm:-mt-10"
      aria-label="Quick access medical services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className={[
                  "flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 rounded-xl",
                  "border transition-colors duration-150",
                  card.bgClass,
                ].join(" ")}
                aria-label={`${card.title} — ${card.sub}`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3.5 flex-shrink-0 ${card.iconBgClass}`}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="text-base font-bold leading-tight mb-1">
                  {card.title}
                </div>
                <div className="text-xs opacity-85 leading-snug">
                  {card.sub}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
