"use client";
// components/ui/DevelopmentNoticeModal.tsx
// Professional notice popup informing visitors that the hospital and web portal are under active development.
// Fully responsive across all mobile screens (320px+), landscape, and dynamic viewport heights.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { RiCloseLine, RiPhoneFill, RiMapPin2Fill, RiInformationFill, RiArrowRightLine } from "react-icons/ri";
import { CONTACT, ADDRESS, SITE } from "@/lib/constants";

export default function DevelopmentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Show modal on every fresh page load / refresh
  useEffect(() => {
    try {
      localStorage.removeItem("suncare_dev_notice_dismissed");
    } catch {
      // Ignore storage errors
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-notice-title"
      aria-describedby="dev-notice-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm overflow-y-auto overscroll-contain transition-all"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card (my-auto ensures card never pushes above viewport on short screens) */}
      <div className="relative w-full max-w-lg my-auto bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2.5rem)] transform transition-all duration-200">
        {/* Top Solid Brand Stripe */}
        <div className="h-1.5 w-full bg-brand-green-600 flex-shrink-0" />

        {/* Close Button — fixed to top-right with high z-index and safe touch area */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close notice"
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center text-gray-500 hover:text-ink-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500 cursor-pointer"
        >
          <RiCloseLine className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content (prevents content overflow on small height screens) */}
        <div className="overflow-y-auto p-4 sm:p-6 overscroll-contain">
          {/* Header with Emblem & Badge (pr-10 reserves space for the close button on all screen widths) */}
          <div className="flex items-start gap-3 sm:gap-3.5 mb-3.5 pr-10">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-brand-green-50 rounded-lg p-1.5 border border-brand-green-100">
              <Image
                src="/onlylogo.png"
                alt={`${SITE.shortName} Logo`}
                fill
                sizes="44px"
                className="object-contain p-0.5"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-brand-green-100 text-brand-green-700 text-[11px] sm:text-xs font-semibold mb-1">
                <RiInformationFill className="w-3.5 h-3.5 text-brand-green-600 flex-shrink-0" />
                <span>Official Project Notice</span>
              </div>
              <h2
                id="dev-notice-title"
                className="text-base sm:text-lg font-bold text-ink-900 leading-tight tracking-tight break-words"
              >
                Sun Care Hospital & Diagnostic Center Ltd.
              </h2>
              <p className="text-[11px] sm:text-xs font-medium text-brand-green-700 mt-0.5">
                A Project by Sunset Kuakata Hotel & Resort Ltd.
              </p>
            </div>
          </div>

          {/* Description */}
          <div id="dev-notice-desc" className="text-xs sm:text-sm text-ink-600 space-y-2 leading-relaxed mb-4">
            <p>
              Welcome to our official web portal. Our hospital facility and specialized digital care services at Bosila Garden City, Mohammadpur, Dhaka are currently under <strong className="text-ink-900 font-semibold">active development</strong>.
            </p>
            <p>
              This website provides an interactive preview of our upcoming multi-specialty clinical departments, diagnostic laboratories, and healthcare facilities. Our administration and project helplines are active to assist you.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-surface-50 border border-gray-100 rounded-lg p-3 sm:p-3.5 space-y-2 text-xs text-ink-700 mb-4">
            <div className="flex items-start gap-2">
              <RiPhoneFill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-ink-900">Hotlines:</span>
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
                <span className="font-semibold text-ink-900">Facility Location: </span>
                <span>{ADDRESS.full}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs sm:text-sm font-semibold py-2.5 px-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore Website Preview</span>
              <RiArrowRightLine className="w-4 h-4 flex-shrink-0" />
            </button>

            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-brand-green-600 text-brand-green-700 text-xs sm:text-sm font-semibold py-2.5 px-3.5 rounded-lg transition-colors"
            >
              <RiPhoneFill className="w-4 h-4 flex-shrink-0" />
              <span>Call Hotline</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
