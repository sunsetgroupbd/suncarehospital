"use client";
// components/sections/Ownership.tsx
// Hospital Share & Ownership Investment Section
// Features Platinum, Gold, Silver, Bronze Packages, At-Cost benefits for 20 nominees, Saf-Kabala deed ownership, and profit sharing.

import { useState } from "react";
import Image from "next/image";
import {
  RiShieldCheckFill,
  RiCoinsFill,
  RiBuilding4Fill,
  RiUserSharedFill,
  RiPhoneFill,
  RiCheckboxCircleFill,
  RiEyeLine,
  RiCloseLine,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";
import { CONTACT, SITE, ADDRESS } from "@/lib/constants";

export default function Ownership() {
  const { t, lang } = useLanguage();
  const ownership = t.ownership;
  const [leafletOpen, setLeafletOpen] = useState(false);

  return (
    <section
      id="ownership"
      className="py-16 sm:py-20 lg:py-24 bg-surface-50 relative overflow-hidden"
      aria-labelledby="ownership-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionTag className="mx-auto mb-3">
            <RiShieldCheckFill className="w-3.5 h-3.5 text-brand-green-600" />
            <span>{ownership.tag}</span>
          </SectionTag>

          <h2
            id="ownership-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight leading-snug mb-4"
          >
            {ownership.headline}
          </h2>

          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            {ownership.subheadline}
          </p>
        </div>

        {/* 3 Core Investor Value Pillars */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-ink-900 text-center mb-6">
            {ownership.whyInvestTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: At-Cost Healthcare */}
            <Card hover className="p-6 bg-white border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-600 mb-4">
                  <RiUserSharedFill className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-ink-900 mb-2 leading-snug">
                  {ownership.benefits.atCostTitle}
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  {ownership.benefits.atCostDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-green-700">
                <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                <span>{lang === "bn" ? "আজীবন ২০ জন মনোনীত সদস্য" : "Lifetime for 20 Nominees"}</span>
              </div>
            </Card>

            {/* Pillar 2: Annual Profit Sharing */}
            <Card hover className="p-6 bg-white border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-600 mb-4">
                  <RiCoinsFill className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-ink-900 mb-2 leading-snug">
                  {ownership.benefits.profitTitle}
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  {ownership.benefits.profitDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-green-700">
                <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                <span>{lang === "bn" ? "সেলস ও সার্ভিস থেকে লভ্যাংশ" : "Hospital Sales & Service Dividend"}</span>
              </div>
            </Card>

            {/* Pillar 3: Saf-Kabala Deed Ownership */}
            <Card hover className="p-6 bg-white border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-600 mb-4">
                  <RiBuilding4Fill className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-ink-900 mb-2 leading-snug">
                  {ownership.benefits.deedTitle}
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  {ownership.benefits.deedDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-green-700">
                <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                <span>{lang === "bn" ? "নির্ধারিত বর্গফুট সাফ-কবলা দলিল" : "Registered Deed per Square Foot"}</span>
              </div>
            </Card>
          </div>
        </div>

        {/* 4 Share Ownership Packages Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">
              {ownership.packagesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-ink-600">
              {ownership.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownership.packages.map((pkg) => {
              const isPlatinum = pkg.id === "platinum";

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-xl bg-white border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                    isPlatinum
                      ? "border-brand-green-600 shadow-elevated ring-1 ring-brand-green-600"
                      : "border-gray-100 hover:border-gray-200 shadow-subtle hover:shadow-md"
                  }`}
                >
                  {/* Top Popular Badge for Platinum */}
                  {isPlatinum && (
                    <div className="bg-brand-green-600 text-white text-[11px] font-bold text-center py-1 tracking-wider uppercase">
                      {lang === "bn" ? "সর্বোচ্চ সুবিধা ও অগ্রাধিকার" : "Most Popular & Complete"}
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Card Mockup Graphic */}
                    <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden mb-4 bg-gray-50 flex items-center justify-center border border-gray-100">
                      <Image
                        src={pkg.cardImg}
                        alt={pkg.cardName}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-contain p-2 hover:scale-105 transition-transform duration-200"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-ink-900 mb-1">
                      {lang === "bn" ? pkg.nameBn : pkg.name}
                    </h4>

                    {/* Space Allocation */}
                    <div className="inline-block text-xs font-semibold text-brand-green-700 bg-brand-green-50 px-2 py-0.5 rounded mb-4">
                      {pkg.space}
                    </div>

                    {/* Price and Booking Breakdown */}
                    <div className="space-y-2 py-3 border-y border-gray-100 text-xs mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-ink-600 font-medium">
                          {lang === "bn" ? "মূল্য (Price):" : "Total Price:"}
                        </span>
                        <span className="text-sm font-bold text-ink-900">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-600 font-medium">
                          {lang === "bn" ? "বুকিং মানি:" : "Booking Money:"}
                        </span>
                        <span className="font-semibold text-brand-green-700">
                          {pkg.booking}
                        </span>
                      </div>
                    </div>

                    {/* Quick Features */}
                    <ul className="text-xs text-ink-700 space-y-2 mb-6 flex-1">
                      <li className="flex items-center gap-1.5">
                        <RiCheckboxCircleFill className="w-3.5 h-3.5 text-brand-green-600 flex-shrink-0" />
                        <span>{lang === "bn" ? "২০ জনের খরচ মূল্যে চিকিৎসা" : "At-cost care for 20 nominees"}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <RiCheckboxCircleFill className="w-3.5 h-3.5 text-brand-green-600 flex-shrink-0" />
                        <span>{lang === "bn" ? "বাৎসরিক লভ্যাংশ অংশীদারিত্ব" : "Annual dividend profit share"}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <RiCheckboxCircleFill className="w-3.5 h-3.5 text-brand-green-600 flex-shrink-0" />
                        <span>{lang === "bn" ? "সাফ-কবলা আজীবন দলিল" : "Saf-Kabala deed registration"}</span>
                      </li>
                    </ul>

                    {/* Booking CTA Button */}
                    <a
                      href={`tel:${CONTACT.phone1Raw}`}
                      className={`w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        isPlatinum
                          ? "bg-brand-green-600 hover:bg-brand-green-700 text-white"
                          : "bg-surface-100 hover:bg-surface-200 text-ink-900 border border-gray-200"
                      }`}
                    >
                      <RiPhoneFill className="w-3.5 h-3.5" />
                      <span>{lang === "bn" ? "বুকিং নিশ্চিত করুন" : "Book This Package"}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guaranteed Services Strip */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 mb-12 shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-1">
                {ownership.servicesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600">
                {lang === "bn"
                  ? "সান কেয়ার হাসপাতালে বিনিয়োগকারী এবং সাধারণ রোগীদের জন্য নিশ্চিত আধুনিক সুযোগ-সুবিধা"
                  : "State-of-the-art medical services guaranteed at Sun Care Hospital & Diagnostic Center Ltd."}
              </p>
            </div>

            {/* View Official Leaflet Button */}
            <button
              type="button"
              onClick={() => setLeafletOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-xs sm:text-sm font-semibold text-ink-900 transition-colors border border-gray-200 cursor-pointer flex-shrink-0"
            >
              <RiEyeLine className="w-4 h-4 text-brand-green-600" />
              <span>{ownership.viewLeaflet}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ownership.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-50 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-green-100 flex items-center justify-center text-brand-green-700 flex-shrink-0">
                  <RiCheckboxCircleFill className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-ink-900">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Call Banner */}
        <div className="rounded-xl bg-[#0B2518] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {ownership.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {ownership.ctaDesc}
            </p>
            <div className="mt-2 text-xs text-emerald-400 font-medium">
              📍 {ADDRESS.full}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-sm font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <RiPhoneFill className="w-4 h-4" />
              <span>{CONTACT.phone1}</span>
            </a>
            <a
              href={`tel:${CONTACT.phone2Raw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-3 px-5 rounded-lg border border-white/20 transition-colors"
            >
              <RiPhoneFill className="w-4 h-4 text-emerald-400" />
              <span>{CONTACT.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Leaflet Modal / Lightbox */}
      {leafletOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ zIndex: 9999999 }}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setLeafletOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-white">
              <h4 className="text-sm sm:text-base font-bold text-ink-900">
                {ownership.leafletTitle} — {SITE.name}
              </h4>
              <button
                type="button"
                onClick={() => setLeafletOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close brochure"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 flex items-center justify-center bg-gray-50">
              <div className="relative w-full max-w-4xl aspect-[1909/824]">
                <Image
                  src="/images/Sun Care Hospital Membership Packages.webp"
                  alt="Sun Care Hospital Official Membership Packages Leaflet"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-ink-600">
                {lang === "bn"
                  ? "সাফ-কবলা দলিলের মাধ্যমে আজীবন মালিকানা ও ২০ জনের চিকিৎসা সুবিধা।"
                  : "Saf-Kabala registered permanent deed ownership with at-cost medical privileges."}
              </span>
              <a
                href={`tel:${CONTACT.phone1Raw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <RiPhoneFill className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "ইনভেস্টমেন্ট ডেস্কে কল করুন" : "Call Investment Desk"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
