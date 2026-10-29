"use client";
// components/ui/DevelopmentNoticeModal.tsx
// Professional notice popup informing visitors that the hospital and web portal are under active development.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { RiCloseLine, RiPhoneFill, RiMapPin2Fill, RiInformationFill, RiArrowRightLine } from "react-icons/ri";
import { CONTACT, ADDRESS, SITE } from "@/lib/constants";

const STORAGE_KEY = "suncare_dev_notice_dismissed";
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function DevelopmentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(true);

  // Check if notice was recently dismissed
  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem(STORAGE_KEY);
      if (dismissedAt) {
        const timeElapsed = Date.now() - parseInt(dismissedAt, 10);
        if (timeElapsed < DISMISS_DURATION_MS) {
          return; // Do not show if dismissed within 24 hours
        }
      }
    } catch {
      // Storage access blocked or unavailable
    }

    // Brief delay so page settles before modal appears smoothly
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (dontShowAgain) {
      try {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
      } catch {
        // Ignore storage errors
      }
    }
  }, [dontShowAgain]);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-all"
    >
      {/* Backdrop click dismiss */}
      <div
        className="absolute inset-0 -z-10"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden transform transition-all duration-200">
        {/* Top Solid Brand Stripe */}
        <div className="h-1.5 w-full bg-brand-green-600" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close notice"
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-ink-900 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-500"
        >
          <RiCloseLine className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          {/* Header with Emblem & Badge */}
          <div className="flex items-start gap-3.5 mb-4">
            <div className="relative w-12 h-12 flex-shrink-0 bg-brand-green-50 rounded-lg p-2 border border-brand-green-100">
              <Image
                src="/onlylogo.png"
                alt={`${SITE.shortName} Logo`}
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-green-100 text-brand-green-700 text-xs font-semibold mb-1">
                <RiInformationFill className="w-3.5 h-3.5 text-brand-green-600" />
                <span>Official Project Notice</span>
              </div>
              <h2
                id="dev-notice-title"
                className="text-lg sm:text-xl font-bold text-ink-900 leading-snug tracking-tight"
              >
                Sun Care Hospital & Diagnostic Center Ltd.
              </h2>
              <p className="text-xs font-medium text-brand-green-700">
                A Project by Sunset Kuakata Hotel & Resort Ltd.
              </p>
            </div>
          </div>

          {/* Description */}
          <div id="dev-notice-desc" className="text-sm text-ink-600 space-y-2.5 leading-relaxed mb-5">
            <p>
              Welcome to our official web portal. Our hospital facility and specialized digital care services at Bosila Garden City, Mohammadpur, Dhaka are currently under <strong className="text-ink-900 font-semibold">active development</strong>.
            </p>
            <p>
              This website provides an interactive preview of our upcoming multi-specialty clinical departments, diagnostic laboratories, and healthcare facilities. Our administration and project helplines are active to assist you.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-surface-50 border border-gray-100 rounded-lg p-3.5 space-y-2 text-xs text-ink-700 mb-5">
            <div className="flex items-center gap-2">
              <RiPhoneFill className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-semibold text-ink-900">Project Hotlines:</span>
                <a
                  href={`tel:${CONTACT.phone1Raw}`}
                  className="text-brand-green-700 hover:text-brand-green-600 font-semibold transition-colors"
                >
                  {CONTACT.phone1}
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={`tel:${CONTACT.phone2Raw}`}
                  className="text-brand-green-700 hover:text-brand-green-600 font-semibold transition-colors"
                >
                  {CONTACT.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-gray-100">
              <RiMapPin2Fill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-ink-900">Facility Location: </span>
                <span>{ADDRESS.full}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore Website Preview</span>
              <RiArrowRightLine className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-brand-green-600 text-brand-green-700 text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
            >
              <RiPhoneFill className="w-4 h-4" />
              <span>Call Hotline</span>
            </a>
          </div>

          {/* Do not show again checkbox */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-ink-500">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-3.5 h-3.5 text-brand-green-600 rounded border-gray-300 focus:ring-brand-green-500 cursor-pointer"
              />
              <span>Do not show this notice again for 24 hours</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
