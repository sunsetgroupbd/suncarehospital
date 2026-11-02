"use client";
// components/ui/HalalIncomePromoModal.tsx
// Minimalist promotional ad popup modal for "১ বিনিয়োগে ৪ হালাল আয়ের উৎস"
// Solid colors: green, white, black. Zero gradients, clean typography, minimal icon usage.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  RiCloseLine,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { CONTACT, SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function HalalIncomePromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for global custom event to open the promo modal
  useEffect(() => {
    const onOpen = () => handleOpen();
    window.addEventListener("open-halal-promo", onOpen);
    return () => window.removeEventListener("open-halal-promo", onOpen);
  }, [handleOpen]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock background body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isBn = lang === "bn";
  const whatsappUrl = `https://wa.me/8801967407020?text=${encodeURIComponent(
    isBn
      ? "আসসালামু আলাইকুম, আমি ১ বিনিয়োগে ৪ হালাল আয়ের উৎস এবং সান কেয়ার হাসপাতালের শেয়ার অফার সম্পর্কে জানতে চাই।"
      : "Hello, I would like to know more about the 1 Investment, 4 Halal Income Streams offer."
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="halal-promo-title"
      style={{ zIndex: 9999999 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain animate-fadeIn"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card - Solid White & Clean Minimalist Container */}
      <div className="relative w-full max-w-4xl my-auto bg-white text-ink-900 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)]">
        {/* Top Solid Green Stripe */}
        <div className="h-1.5 w-full bg-brand-green-600 flex-shrink-0" />

        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-gray-200 bg-white flex-shrink-0">
          <div>
            <span className="text-xs font-bold text-brand-green-800 uppercase tracking-wider">
              {isBn ? "মেগা ইনভেস্টমেন্ট অফার" : "Mega Investment Opportunity"}
            </span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close offer"
            className="w-8 h-8 flex items-center justify-center text-ink-500 hover:text-ink-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
          >
            <RiCloseLine className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-7 overscroll-contain">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Authentic Promotional Poster Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[340px] rounded-xl overflow-hidden border border-gray-200 bg-surface-50 shadow-sm">
                <Image
                  src="/images/shareposterpoup.webp"
                  alt="1 বিনিয়োগে 4 হালাল আয়ের উৎস - সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিঃ"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-[11px] text-ink-500 mt-2 text-center">
                {isBn
                  ? "সানসেট গ্রুপের অফিসিয়াল বিনিয়োগ অফার পোস্টার"
                  : "Official Sunset Group Investment Offer"}
              </p>
            </div>

            {/* Right Column: Structured Value & 4 Halal Income Sources */}
            <div className="md:col-span-7 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-green-50 text-brand-green-800 text-xs font-semibold border border-brand-green-200 mb-2">
                  {isBn ? "বিশেষ মেগা অফার" : "Special Mega Offer"}
                </span>

                <h2
                  id="halal-promo-title"
                  className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight leading-snug"
                >
                  {isBn ? "১ বিনিয়োগে ৪ হালাল আয়ের উৎস" : "1 Investment, 4 Halal Income Streams"}
                </h2>
                <p className="text-xs sm:text-sm text-ink-600 mt-1 leading-relaxed">
                  {isBn
                    ? "এককালীন আজীবন মেম্বারশিপে ৪টি বৃহৎ খাতে নিশ্চিত হালাল আয় ও পারিবারিক বিশেষ সুবিধা:"
                    : "Lifetime membership securing guaranteed halal earnings and family privileges across 4 ventures:"}
                </p>
              </div>

              {/* 4 Pillars List - Clean & Minimalist */}
              <div className="space-y-2.5 mb-6">
                {/* 1. Dhaka Fantasy Island */}
                <div className="p-3 rounded-xl bg-surface-50 border border-gray-200/80">
                  <h3 className="font-bold text-ink-900 text-sm">
                    {isBn
                      ? "১. ঢাকা ফ্যান্টাসি আইল্যান্ড"
                      : "1. Dhaka Fantasy Island"}
                    <span className="font-normal text-xs text-brand-green-700 ml-1.5">
                      {isBn ? "(ইকো হোটেল ও রিসোর্ট)" : "(Eco Hotel & Resort)"}
                    </span>
                  </h3>
                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                    {isBn
                      ? "মোহাম্মদপুরের হোটেল এন্ড রিসোর্ট থাকা ও অতিথির হালাল আয়ের সুবিধা।"
                      : "Mohammadpur hotel & eco-resort stay accommodations along with guest halal revenue share."}
                  </p>
                </div>

                {/* 2. Sun Care Hospital */}
                <div className="p-3 rounded-xl bg-surface-50 border border-gray-200/80">
                  <h3 className="font-bold text-ink-900 text-sm">
                    {isBn
                      ? "২. সান কেয়ার হাসপাতাল"
                      : "2. Sun Care Hospital"}
                    <span className="font-normal text-xs text-brand-green-700 ml-1.5">
                      {isBn ? "ও ডায়াগনস্টিক সেন্টার লিমিটেড" : "& Diagnostic Center Ltd."}
                    </span>
                  </h3>
                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                    {isBn
                      ? "হাসপাতালের সকল প্রকার সার্ভিস ও ডায়াগনস্টিক খরচে প্রতি খরচের ন্যূনতম ২০% ছাড়ের সুযোগ।"
                      : "Guaranteed minimum 20% discount on all hospital services and diagnostic tests."}
                  </p>
                </div>

                {/* 3. Sunset Hotel & Resort */}
                <div className="p-3 rounded-xl bg-surface-50 border border-gray-200/80">
                  <h3 className="font-bold text-ink-900 text-sm">
                    {isBn
                      ? "৩. সানসেট হোটেল ও রিসোর্ট"
                      : "3. Sunset Hotel & Resort"}
                    <span className="font-normal text-xs text-brand-green-700 ml-1.5">
                      {isBn ? "(কুয়াকাটা)" : "(Kuakata)"}
                    </span>
                  </h3>
                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                    {isBn
                      ? "একই সাথে কুয়াকাটার দুটি হোটেল থাকা ও হালাল আয়ের সুবিধা।"
                      : "Dual-hotel accommodations in Kuakata paired with ongoing halal dividends."}
                  </p>
                </div>

                {/* 4. Mangrove Eco Resort */}
                <div className="p-3 rounded-xl bg-surface-50 border border-gray-200/80">
                  <h3 className="font-bold text-ink-900 text-sm">
                    {isBn
                      ? "৪. ম্যানগ্রোভ ইকো রিসোর্ট"
                      : "4. Mangrove Eco Resort"}
                    <span className="font-normal text-xs text-brand-green-700 ml-1.5">
                      {isBn ? "(ইকো রিসোর্ট)" : "(Eco Resort)"}
                    </span>
                  </h3>
                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                    {isBn
                      ? "প্রকৃতির মাঝে ইকো রিসোর্ট থাকায় ও হালাল আয়ের সুবিধা।"
                      : "Immersive nature eco-resort stays and continuous halal dividend returns."}
                  </p>
                </div>
              </div>

              {/* Footer Company Identity & Action Buttons */}
              <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-ink-700 text-center sm:text-left">
                  <span className="font-medium text-ink-500">{isBn ? "ফুটার: " : "Parent Group: "}</span>
                  <a
                    href={SITE.parentCompanyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-green-800 hover:text-brand-green-900 hover:underline"
                  >
                    {isBn
                      ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড"
                      : "Sunset Kuakata Hotel & Resort Ltd."}
                  </a>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${CONTACT.phone1Raw}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-xs transition-colors"
                  >
                    <RiPhoneFill size={14} />
                    <span>{isBn ? "কল করুন" : "Call Now"}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-black hover:bg-ink-900 text-white font-semibold text-xs transition-colors"
                  >
                    <RiWhatsappFill size={15} />
                    <span>{isBn ? "হোয়াটসঅ্যাপ" : "WhatsApp"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
