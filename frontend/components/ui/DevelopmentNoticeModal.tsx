"use client";
// components/ui/DevelopmentNoticeModal.tsx
// Professional notice popup informing visitors that the hospital and web portal are under active development.
// Bulletproof stacking context (zIndex: 999999), locked body scroll, and pinned header bar.
// Supports both English and Bangla localization.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { RiCloseLine, RiPhoneFill, RiMapPin2Fill, RiInformationFill, RiArrowRightLine } from "react-icons/ri";
import { CONTACT, ADDRESS, SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function DevelopmentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  // Show modal on every fresh page load / refresh
  useEffect(() => {
    try {
      localStorage.removeItem("suncare_dev_notice_dismissed");
    } catch {
      // Ignore storage errors
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Lock background body scroll while the notice is open so page header cannot scroll over or jump
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    // Prevent layout shift from scrollbar disappearing
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

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

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

  if (!isOpen) return null;

  const isBn = lang === "bn";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-notice-title"
      aria-describedby="dev-notice-desc"
      style={{ zIndex: 999999 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg my-auto bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] transform transition-all duration-200">
        {/* Top Solid Brand Stripe */}
        <div className="h-1.5 w-full bg-brand-green-600 flex-shrink-0" />

        {/* Pinned Modal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-gray-100 bg-white flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 bg-brand-green-50 rounded-lg p-1 border border-brand-green-100">
              <Image
                src="/onlylogo.png"
                alt={`${SITE.shortName} Logo`}
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-brand-green-100 text-brand-green-700 text-[11px] font-semibold">
                <RiInformationFill className="w-3.5 h-3.5 text-brand-green-600 flex-shrink-0" />
                <span>{isBn ? "অফিসিয়াল প্রকল্প নোটিশ" : "Official Project Notice"}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            {/* Quick Language Toggle in Modal */}
            <div className="inline-flex items-center bg-gray-100 rounded-md p-0.5 border border-gray-200">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                  !isBn ? "bg-white text-brand-green-700 shadow-xs" : "text-gray-600"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                  isBn ? "bg-white text-brand-green-700 shadow-xs" : "text-gray-600"
                }`}
              >
                বাং
              </button>
            </div>

            {/* Close button with large hit target */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close notice"
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-ink-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500 cursor-pointer"
            >
              <RiCloseLine className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 overscroll-contain space-y-4">
          {/* Title Area */}
          <div>
            <h2
              id="dev-notice-title"
              className="text-base sm:text-lg font-bold text-ink-900 leading-snug tracking-tight"
            >
              {isBn ? "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ" : "Sun Care Hospital & Diagnostic Center Ltd."}
            </h2>
            <p className="text-xs font-medium text-brand-green-700 mt-0.5">
              {isBn ? "সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিঃ-এর একটি সহযোগী প্রতিষ্ঠান" : "A Project by Sunset Kuakata Hotel & Resort Ltd."}
            </p>
          </div>

          {/* Description */}
          <div id="dev-notice-desc" className="text-xs sm:text-sm text-ink-600 space-y-2 leading-relaxed">
            {isBn ? (
              <>
                <p>
                  আমাদের অফিসিয়াল ওয়েব পোর্টালে আপনাকে স্বাগতম। ঢাকার মোহাম্মদপুর বসিলা গার্ডেন সিটিতে অবস্থিত আমাদের আধুনিক হাসপাতাল ও ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম বর্তমানে <strong className="text-ink-900 font-semibold">নির্মাণ ও সম্প্রসারণাধীন</strong> রয়েছে।
                </p>
                <p>
                  এই ওয়েবসাইটটি আমাদের আসন্ন বিশেষায়িত চিকিৎসা বিভাগ, ডায়াগনস্টিক ল্যাব, ক্রিটিক্যাল কেয়ার এবং শেয়ার ওনারশিপ বিনিয়োগ সুবিধার একটি ইন্টারঅ্যাক্টিভ প্রিভিউ। যেকোনো তথ্য ও বুকিংয়ের জন্য আমাদের হেল্পলাইন সার্বক্ষণিক উন্মুক্ত।
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to our official web portal. Our hospital facility and specialized digital care services at Bosila Garden City, Mohammadpur, Dhaka are currently under <strong className="text-ink-900 font-semibold">active development</strong>.
                </p>
                <p>
                  This website provides an interactive preview of our upcoming multi-specialty clinical departments, diagnostic laboratories, healthcare facilities, and prestigious share ownership opportunities. Our helplines are active to assist you.
                </p>
              </>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="bg-surface-50 border border-gray-100 rounded-lg p-3 sm:p-3.5 space-y-2 text-xs text-ink-700">
            <div className="flex items-start gap-2">
              <RiPhoneFill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-ink-900">{isBn ? "হটলাইন:" : "Hotlines:"}</span>
                <a
                  href={`tel:${CONTACT.phone1Raw}`}
                  className="text-brand-green-700 hover:text-brand-green-600 font-semibold transition-colors"
                >
                  {CONTACT.phone1}
                </a>
                <span className="text-gray-300 hidden xs:inline">|</span>
                <a
                  href={`tel:${CONTACT.phone2Raw}`}
                  className="text-brand-green-700 hover:text-brand-green-600 font-semibold transition-colors"
                >
                  {CONTACT.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1.5 border-t border-gray-100">
              <RiMapPin2Fill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-semibold text-ink-900">{isBn ? "হাসপাতালের অবস্থান: " : "Facility Location: "}</span>
                <span>{ADDRESS.full}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
            <button
              type="button"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs sm:text-sm font-semibold py-2.5 px-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>{isBn ? "ওয়েবসাইট প্রিভিউ দেখুন" : "Explore Website Preview"}</span>
              <RiArrowRightLine className="w-4 h-4 flex-shrink-0" />
            </button>

            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-brand-green-600 text-brand-green-700 text-xs sm:text-sm font-semibold py-2.5 px-3.5 rounded-lg transition-colors"
            >
              <RiPhoneFill className="w-4 h-4 flex-shrink-0" />
              <span>{isBn ? "হটলাইনে কল করুন" : "Call Hotline"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
