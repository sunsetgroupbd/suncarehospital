"use client";
// components/layout/TopBar.tsx
import { RiPhoneFill, RiMapPin2Fill, RiFacebookCircleFill } from "react-icons/ri";
import { CONTACT } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function TopBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className="bg-[#0B2518] text-white text-xs py-2 px-4 border-b border-white/10"
      role="banner"
      aria-label="Contact information bar"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left — phones */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={`tel:${CONTACT.phone1Raw}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            aria-label={`Call ${CONTACT.phone1}`}
          >
            <RiPhoneFill size={13} className="text-emerald-400" aria-hidden="true" />
            <span>{CONTACT.phone1}</span>
          </a>
          <span className="hidden sm:inline-block text-white/20" aria-hidden="true">
            |
          </span>
          <a
            href={`tel:${CONTACT.phone2Raw}`}
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            aria-label={`Call ${CONTACT.phone2}`}
          >
            <RiPhoneFill size={13} className="text-emerald-400" aria-hidden="true" />
            <span>{CONTACT.phone2}</span>
          </a>
        </div>

        {/* Center — address */}
        <div className="hidden md:flex items-center gap-1.5 text-slate-300">
          <RiMapPin2Fill size={13} className="text-emerald-400" aria-hidden="true" />
          <span>{t.topBar.address}</span>
        </div>

        {/* Right — Language Switcher + Facebook */}
        <div className="flex items-center gap-3.5">
          {/* Interactive Language Toggle */}
          <div className="inline-flex items-center bg-white/10 rounded-md p-0.5 border border-white/15">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                lang === "en"
                  ? "bg-brand-green-600 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("bn")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                lang === "bn"
                  ? "bg-brand-green-600 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              বাংলা
            </button>
          </div>

          <span className="hidden sm:inline-block text-white/20">|</span>

          {/* Facebook Link */}
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            aria-label="Follow us on Facebook (opens in new tab)"
          >
            <RiFacebookCircleFill size={14} className="text-emerald-400" aria-hidden="true" />
            <span className="hidden sm:inline font-medium">{t.topBar.followUs}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
