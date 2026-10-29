// components/layout/TopBar.tsx
import { RiPhoneFill, RiMapPin2Fill, RiFacebookCircleFill } from "react-icons/ri";
import { CONTACT } from "@/lib/constants";
import { t } from "@/lib/content";

export default function TopBar() {
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

        {/* Right — Facebook */}
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
  );
}
