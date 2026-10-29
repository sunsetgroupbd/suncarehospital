"use client";
// components/sections/WhyChooseUs.tsx
import {
  RiTimeFill,
  RiUserFollowFill,
  RiMicroscopeFill,
  RiHeartPulseFill,
  RiMapPin2Fill,
  RiShieldCheckFill,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import { useLanguage } from "@/lib/LanguageContext";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Clock: RiTimeFill,
  Sparkles: RiMicroscopeFill,
  Award: RiUserFollowFill,
  ShieldCheck: RiShieldCheckFill,
  HeartHandshake: RiHeartPulseFill,
  MapPin: RiMapPin2Fill,
};

export default function WhyChooseUs() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-[#0B2518] text-white"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag light>{t.whyUs.tag}</SectionTag>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl tracking-tight"
          >
            {t.whyUs.headline}
          </h2>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            {t.whyUs.sub}
          </p>
        </div>

        {/* Benefits Grid with rounded-xl */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Why choose Sun Care Hospital"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] ?? RiShieldCheckFill;
            const title = lang === "bn" && "titleBn" in item ? item.titleBn : item.title;
            const desc = lang === "bn" && "descriptionBn" in item ? item.descriptionBn : item.description;

            return (
              <div
                key={item.title}
                role="listitem"
                className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 hover:bg-white/8 transition-colors duration-150"
              >
                <div
                  className="w-11 h-11 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
