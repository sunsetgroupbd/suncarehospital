"use client";
// components/sections/ContactLocation.tsx
import Image from "next/image";
import { RiMapPin2Fill, RiPhoneFill, RiCompass3Fill, RiFacebookCircleFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { CONTACT, ADDRESS } from "@/lib/constants";

export default function ContactLocation() {
  const { t, lang } = useLanguage();
  const mapsDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.mapQuery)}`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-surface-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <SectionTag>{t.contact.tag}</SectionTag>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 max-w-2xl tracking-tight"
          >
            {t.contact.headline}
          </h2>
          <p className="text-ink-600 text-base max-w-2xl leading-relaxed">
            {t.contact.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-subtle">
              <h3 className="text-xs font-bold text-ink-600 uppercase tracking-widest mb-3">
                {t.contact.addressLabel}
              </h3>
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                  <RiMapPin2Fill size={20} aria-hidden="true" />
                </div>
                <address className="not-italic text-ink-900 text-sm leading-relaxed">
                  <strong>{ADDRESS.line1}</strong>
                  <br />
                  {ADDRESS.line2},
                  <br />
                  {ADDRESS.city}, {ADDRESS.country}
                </address>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  href={mapsDirections}
                  external
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  <RiCompass3Fill size={16} aria-hidden="true" />
                  <span>{t.contact.directionsBtn}</span>
                </Button>
              </div>
            </div>

            {/* Phone lines card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-subtle flex flex-col gap-4">
              <h3 className="text-xs font-bold text-ink-600 uppercase tracking-widest">
                {t.contact.phoneLabel}
              </h3>
              
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-lg bg-brand-green-50 border border-brand-green-100">
                <div className="flex items-center gap-3">
                  <RiPhoneFill size={18} className="text-brand-green-700 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs text-brand-green-800 font-medium">Primary Hotline (24/7)</div>
                    <div className="text-sm font-bold text-ink-900">{CONTACT.phone1}</div>
                  </div>
                </div>
                <Button href={`tel:${CONTACT.phone1Raw}`} size="sm">
                  {t.contact.callBtn}
                </Button>
              </div>

              <div className="flex items-center justify-between gap-4 p-3.5 rounded-lg bg-surface-50 border border-gray-100">
                <div className="flex items-center gap-3">
                  <RiPhoneFill size={18} className="text-ink-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs text-ink-600 font-medium">Hospital Reception</div>
                    <div className="text-sm font-bold text-ink-900">{CONTACT.phone2}</div>
                  </div>
                </div>
                <Button
                  href={`tel:${CONTACT.phone2Raw}`}
                  size="sm"
                  variant="outline"
                >
                  {t.contact.callBtn}
                </Button>
              </div>
            </div>

            {/* Social card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-subtle flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                  <RiFacebookCircleFill size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-ink-900">{t.contact.followLabel}</div>
                  <div className="text-xs text-ink-600">fb.com/suncarehospital</div>
                </div>
              </div>
              <Button
                href={CONTACT.facebook}
                external
                size="sm"
                variant="outline"
              >
                Visit Page
              </Button>
            </div>

          </div>

          {/* Right: Interactive Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-subtle">
              <div className="relative w-full h-80 sm:h-96 md:h-[440px] rounded-lg overflow-hidden bg-surface-100">
                <iframe
                  src={ADDRESS.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sun Care Hospital location in Bosila Garden City, Mohammadpur, Dhaka"
                  className="w-full h-full"
                />
              </div>

              {/* Map footer helper */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 text-xs text-ink-600">
                <span>Bosila Garden City, Mohammadpur, Dhaka-1207</span>
                <a
                  href={mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green-700 hover:text-brand-green-800 font-semibold"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Entrance Landmark Preview Card */}
            <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-subtle p-3.5 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900 border border-gray-200">
                <Image
                  src="/images/suncare-hospital-close-view.webp"
                  alt="Sun Care Hospital Front Entrance on 40 Feet Avenue Road"
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green-800 bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
                  {lang === "bn" ? "হাসপাতাল ল্যান্ডমার্ক" : "Facility Landmark"}
                </span>
                <h4 className="text-sm font-bold text-ink-900 mt-1">
                  {lang === "bn" ? "সান কেয়ার হাসপাতাল প্রধান প্রবেশদ্বার ও রিসেপশন" : "Main Hospital Entrance & Reception"}
                </h4>
                <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                  {lang === "bn"
                    ? "৪০ ফিট এভিনিউ রোডে সরাসরি অ্যাম্বুলেন্স প্রবেশমুখ, নান্দনিক অভ্যর্থনা লাউঞ্জ ও নিবেদিত পেশেন্ট ড্রপ-অফ জোন।"
                    : "Direct 40-ft avenue street access with dedicated emergency ambulance ramp and welcoming reception lounge."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
