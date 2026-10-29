"use client";
// components/sections/QuickAccess.tsx
import {
  RiCalendarFill,
  RiUserHeartFill,
  RiHeartPulseFill,
} from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuickAccess() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: FaAmbulance,
      title: t.quickAccess.emergency.title,
      sub: t.quickAccess.emergency.sub,
      href: `tel:${CONTACT.phone1Raw}`,
      bgClass: "bg-brand-red-500 text-white hover:bg-brand-red-600 border-transparent",
      iconBgClass: "bg-white/20 text-white",
    },
    {
      icon: RiCalendarFill,
      title: t.quickAccess.appointment.title,
      sub: t.quickAccess.appointment.sub,
      href: "#appointment",
      bgClass: "bg-brand-green-600 text-white hover:bg-brand-green-700 border-transparent",
      iconBgClass: "bg-white/20 text-white",
    },
    {
      icon: RiUserHeartFill,
      title: t.quickAccess.findDoctor.title,
      sub: t.quickAccess.findDoctor.sub,
      href: "#doctors",
      bgClass: "bg-white text-ink-900 hover:bg-surface-50 border-gray-100 shadow-subtle",
      iconBgClass: "bg-brand-green-100 text-brand-green-700",
    },
    {
      icon: RiHeartPulseFill,
      title: t.quickAccess.reports.title,
      sub: t.quickAccess.reports.sub,
      href: "#facilities",
      bgClass: "bg-white text-ink-900 hover:bg-surface-50 border-gray-100 shadow-subtle",
      iconBgClass: "bg-surface-100 text-ink-700",
    },
  ];

  return (
    <section
      className="relative z-20 -mt-8 sm:-mt-10"
      aria-label="Quick access medical services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className={[
                  "flex items-center gap-4 p-4 rounded-xl border transition-all duration-150",
                  "focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:ring-offset-2",
                  card.bgClass,
                ].join(" ")}
              >
                <div
                  className={[
                    "w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    card.iconBgClass,
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold leading-tight truncate">
                    {card.title}
                  </div>
                  <div className="text-xs opacity-85 leading-tight mt-0.5 truncate">
                    {card.sub}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
