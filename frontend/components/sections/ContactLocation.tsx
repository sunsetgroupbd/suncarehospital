// components/sections/ContactLocation.tsx
import { RiMapPin2Fill, RiPhoneFill, RiCompass3Fill, RiFacebookCircleFill } from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { t } from "@/lib/content";
import { CONTACT, ADDRESS } from "@/lib/constants";

export default function ContactLocation() {
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
                  {ADDRESS.city}, Bangladesh
                </address>
              </div>
              <div className="mt-5">
                <Button
                  href={mapsDirections}
                  external
                  variant="outline"
                  size="sm"
                >
                  <RiCompass3Fill size={16} aria-hidden="true" />
                  <span>{t.contact.directionsBtn}</span>
                </Button>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-subtle">
              <h3 className="text-xs font-bold text-ink-600 uppercase tracking-widest mb-4">
                {t.contact.phoneLabel}
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT.phone1Raw}`}
                  className="flex items-center gap-3.5 text-ink-900 hover:text-brand-green-600 transition-colors group"
                  aria-label={`Primary phone: ${CONTACT.phone1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green-100 group-hover:bg-brand-green-200 text-brand-green-700 flex items-center justify-center transition-colors">
                    <RiPhoneFill size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{CONTACT.phone1}</div>
                    <div className="text-xs text-brand-green-700 font-semibold">24/7 Primary Emergency Line</div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT.phone2Raw}`}
                  className="flex items-center gap-3.5 text-ink-900 hover:text-brand-green-600 transition-colors group"
                  aria-label={`Secondary phone: ${CONTACT.phone2}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-100 group-hover:bg-brand-green-100 text-ink-700 group-hover:text-brand-green-700 flex items-center justify-center transition-colors">
                    <RiPhoneFill size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{CONTACT.phone2}</div>
                    <div className="text-xs text-ink-600">Administrative Line</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-subtle">
              <h3 className="text-xs font-bold text-ink-600 uppercase tracking-widest mb-3">
                {t.contact.followLabel}
              </h3>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#0F2A1D] hover:bg-[#137A3B] text-white text-sm font-semibold transition-colors"
                aria-label="Follow Sun Care Hospital on Facebook (opens in new tab)"
              >
                <RiFacebookCircleFill size={18} />
                <span>facebook.com/suncarehospital</span>
              </a>
            </div>
          </div>

          {/* Right: Map Embed (7 cols) with rounded-xl */}
          <div className="lg:col-span-7 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-subtle">
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-ink-900 flex items-center gap-2">
                <RiMapPin2Fill size={18} className="text-brand-green-600" aria-hidden="true" />
                <span>Bosila Garden City, Mohammadpur, Dhaka 1207</span>
              </h3>
              <a
                href={mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-green-700 hover:text-brand-green-800 font-bold transition-colors"
              >
                Open Google Maps →
              </a>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[16/11]">
              <iframe
                src={ADDRESS.mapEmbed}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sun Care Hospital location map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
