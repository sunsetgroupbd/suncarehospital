"use client";
// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { RiPhoneFill, RiMapPin2Fill, RiHospitalFill, RiFacebookCircleFill } from "react-icons/ri";
import { SITE, CONTACT, ADDRESS, NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const year = SITE.copyrightYear;
  const { t, lang } = useLanguage();

  return (
    <footer
      className="bg-[#0B2518] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-5" aria-label={`${SITE.name} home`}>
              <div className="relative w-10 h-10 bg-white rounded-lg p-1.5 flex-shrink-0">
                <Image
                  src="/onlylogo.png"
                  alt={`${SITE.shortName} mark`}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">
                  Sun Care Hospital
                </div>
                <div className="text-emerald-400 text-xs font-semibold leading-tight">
                  & Diagnostic Center Ltd.
                </div>
              </div>
            </Link>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
              {t.footer.description}
            </p>
            
            <a
              href={SITE.parentCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-emerald-300 hover:text-emerald-200 text-xs font-medium border border-white/15 transition-colors"
            >
              <RiHospitalFill size={15} className="text-emerald-400" aria-hidden="true" />
              <span className="underline underline-offset-2">{SITE.parentCompany}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => {
                const label = lang === "bn" && "labelBn" in link ? link.labelBn : link.label;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-300 text-sm hover:text-emerald-400 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#appointment"
                  className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors"
                >
                  {t.nav.bookAppointment}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-slate-200 text-sm">
                <RiMapPin2Fill
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">
                  {ADDRESS.full}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone1Raw}`}
                  className="flex items-center gap-2.5 text-slate-200 text-sm hover:text-emerald-400 transition-colors font-semibold"
                  aria-label={`Call ${CONTACT.phone1}`}
                >
                  <RiPhoneFill size={16} className="text-emerald-400" aria-hidden="true" />
                  <span>{CONTACT.phone1} (24/7)</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone2Raw}`}
                  className="flex items-center gap-2.5 text-slate-200 text-sm hover:text-emerald-400 transition-colors"
                  aria-label={`Call ${CONTACT.phone2}`}
                >
                  <RiPhoneFill size={16} className="text-emerald-400" aria-hidden="true" />
                  <span>{CONTACT.phone2}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Facebook */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              {t.footer.followUs}
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed font-normal">
              {lang === "bn"
                ? "আমাদের অফিসিয়াল ফেসবুক পেজ ফলো করে স্বাস্থ্য পরামর্শ ও সর্বশেষ নোটিশ জানুন।"
                : "Follow our official Facebook page for health guidelines and clinic announcements."}
            </p>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors"
              aria-label="Follow Sun Care Hospital on Facebook (opens in new tab)"
            >
              <RiFacebookCircleFill size={18} className="text-emerald-400" />
              <span>facebook.com/suncarehospital</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{lang === "bn" ? "ক্লিনিক্যাল সেবা ও ডায়াগনস্টিক" : "Clinical Care & Diagnostics"}</span>
            <span>{lang === "bn" ? "২৪/৭ জরুরি হটলাইন" : "24/7 Emergency Line"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
