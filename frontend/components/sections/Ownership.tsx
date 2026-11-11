"use client";
// components/sections/Ownership.tsx
// Hospital Share & Ownership Investment Section
// Features Platinum, Gold, Silver, Bronze Packages, At-Cost benefits for 20 nominees, Saf-Kabala deed ownership, and profit sharing.

import { useState } from "react";
import Image from "next/image";
import {
  RiShieldCheckFill,
  RiBuilding4Fill,
  RiUserSharedFill,
  RiPhoneFill,
  RiCheckboxCircleFill,
  RiEyeLine,
  RiCloseLine,
  RiMapPin2Fill,
  RiWhatsappFill,
  RiHammerFill,
  RiDoorOpenFill,
  RiDownload2Fill,
  RiFilePdfFill,
} from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
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

          {/* Always-Visible Official Membership Packages Flyer Graphic */}
          <div className="mb-10 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-elevated p-3 sm:p-5 max-w-5xl mx-auto">
            <div
              onClick={() => setLeafletOpen(true)}
              className="relative w-full aspect-[1909/824] rounded-xl overflow-hidden bg-gray-50 cursor-pointer group"
              title={lang === "bn" ? "পূর্ণ স্ক্রিনে দেখতে ক্লিক করুন" : "Click to view full size"}
            >
              <Image
                src="/images/Sun Care Hospital Membership Packages.webp"
                alt="Sun Care Hospital Official Membership Packages - Platinum, Gold, Silver, Bronze"
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-contain group-hover:scale-[1.01] transition-transform duration-300"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-ink-600 px-1 pt-1 border-t border-gray-100">
              <span className="font-medium">
                {lang === "bn"
                  ? "সান কেয়ার হাসপাতাল অনুমোদিত মেম্বারশিপ কার্ড ও শেয়ার প্যাকেজসমূহ"
                  : "Official Sun Care Hospital Membership Smart Cards & Share Structure"}
              </span>
              <button
                type="button"
                onClick={() => setLeafletOpen(true)}
                className="inline-flex items-center gap-1.5 text-brand-green-700 hover:text-brand-green-800 font-semibold cursor-pointer"
              >
                <RiEyeLine className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "বড় করে দেখুন" : "View Fullscreen"}</span>
              </button>
            </div>
          </div>

          {/* Package Details Cards - Text & Specifications Only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownership.packages.map((pkg) => {
              const isPlatinum = pkg.id === "platinum";
              const isGold = pkg.id === "gold";
              const isSilver = pkg.id === "silver";

              const tierBadgeClass = isPlatinum
                ? "bg-slate-900 text-amber-300 border-slate-700"
                : isGold
                ? "bg-amber-500 text-white border-amber-600"
                : isSilver
                ? "bg-slate-600 text-white border-slate-700"
                : "bg-[#8C532B] text-white border-[#734321]";

              const cardBorderClass = isPlatinum
                ? "border-slate-800 shadow-elevated ring-1 ring-slate-900/10"
                : isGold
                ? "border-amber-300 shadow-subtle hover:border-amber-400"
                : isSilver
                ? "border-slate-200 shadow-subtle hover:border-slate-400"
                : "border-amber-900/20 shadow-subtle hover:border-amber-900/40";

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-xl bg-white border transition-all duration-200 flex flex-col justify-between overflow-hidden ${cardBorderClass}`}
                >
                  {/* Top Popular Badge for Platinum */}
                  {isPlatinum && (
                    <div className="bg-slate-900 text-amber-300 text-[11px] font-bold text-center py-1.5 tracking-wider uppercase border-b border-slate-800">
                      ★ {lang === "bn" ? "সর্বোচ্চ সুবিধা ও অগ্রাধিকার" : "Most Popular & Complete"}
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Tier Badge & Space Allocation */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${tierBadgeClass}`}
                      >
                        {pkg.id}
                      </span>
                      <span className="text-xs font-semibold text-brand-green-700 bg-brand-green-50 px-2 py-0.5 rounded">
                        {pkg.space}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-ink-900 mb-4 leading-snug">
                      {lang === "bn" ? pkg.nameBn : pkg.name}
                    </h4>

                    {/* Price and Booking Breakdown */}
                    <div className="space-y-2 py-3 px-3.5 bg-surface-50 rounded-lg border border-gray-100 text-xs mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-ink-600 font-medium">
                          {lang === "bn" ? "মূল্য (Price):" : "Total Price:"}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-ink-900">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-1.5 border-t border-gray-200/60">
                        <span className="text-ink-600 font-medium">
                          {lang === "bn" ? "বুকিং মানি:" : "Booking Money:"}
                        </span>
                        <span className="font-semibold text-brand-green-700">
                          {pkg.booking}
                        </span>
                      </div>
                    </div>

                    {/* Quick Features */}
                    <ul className="text-xs text-ink-700 space-y-2.5 mb-6 flex-1">
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                        <span>{lang === "bn" ? "২০ জনের খরচ মূল্যে চিকিৎসা" : "At-cost care for 20 nominees"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                        <span>{lang === "bn" ? "বাৎসরিক লভ্যাংশ অংশীদারিত্ব" : "Annual dividend profit share"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RiCheckboxCircleFill className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                        <span>{lang === "bn" ? "সাফ-কবলা আজীবন দলিল" : "Saf-Kabala deed registration"}</span>
                      </li>
                    </ul>

                    {/* Booking CTA Button */}
                    <a
                      href={`tel:${CONTACT.phone1Raw}`}
                      className={`w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        isPlatinum
                          ? "bg-slate-900 hover:bg-slate-800 text-amber-300"
                          : "bg-brand-green-600 hover:bg-brand-green-700 text-white"
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

        {/* Mega Offer Showcase: 1 Investment, 4 Halal Income Sources */}
        <div id="halal-investment" className="mb-14 scroll-mt-24">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-subtle text-ink-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Image Poster Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => window.dispatchEvent(new CustomEvent("open-halal-promo"))}
                  className="relative w-full aspect-square max-w-[380px] rounded-xl overflow-hidden border border-gray-200 bg-surface-50 cursor-pointer group"
                  title={lang === "bn" ? "পূর্ণ স্ক্রিনে পোস্টারটি দেখতে ক্লিক করুন" : "Click to view full size"}
                >
                  <Image
                    src="/images/shareposterpoup.webp"
                    alt="1 বিনিয়োগে 4 হালাল আয়ের উৎস"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  {/* Subtle Hover Hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center gap-2 text-white font-semibold text-xs sm:text-sm">
                    <RiEyeLine size={18} />
                    <span>{lang === "bn" ? "বড় করে দেখুন" : "View Full Size"}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between w-full max-w-[380px] px-1 text-xs">
                  <span className="text-ink-600 font-medium">
                    {lang === "bn" ? "অফিসিয়াল মেম্বারশিপ অফার পোস্টার" : "Official Membership Offer Poster"}
                  </span>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("open-halal-promo"))}
                    className="inline-flex items-center gap-1 text-brand-green-700 hover:text-brand-green-800 font-semibold cursor-pointer"
                  >
                    <RiEyeLine size={14} />
                    <span>{lang === "bn" ? "বড় করে দেখুন" : "View Fullscreen"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Minimalist Content & 4 Halal Pillars */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="mb-6">
                  {/* Minimalist Text Badge (No icon) */}
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-green-50 text-brand-green-800 text-xs font-semibold border border-brand-green-200 mb-3">
                    {lang === "bn" ? "বিশেষ মেগা অফার" : "Special Mega Offer"}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight leading-snug">
                    {lang === "bn" ? "১ বিনিয়োগে ৪ হালাল আয়ের উৎস" : "1 Investment, 4 Halal Income Streams"}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 mt-2 leading-relaxed">
                    {lang === "bn"
                      ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিঃ-এর সহযোগী প্রতিষ্ঠানে এককালীন মেম্বারশিপে ৪টি বৃহৎ খাতে আজীবন হালাল আয় ও বিশেষ সুবিধাপ্রাপ্তি:"
                      : "A single prestigious investment securing lifelong halal returns and family privileges across 4 thriving ventures:"}
                  </p>
                </div>

                {/* 4 Projects Grid - Minimalist without icon clutter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {/* 1. Dhaka Fantasy Island */}
                  <div className="p-4 rounded-xl bg-surface-50 border border-gray-200/80">
                    <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1">
                      {lang === "bn"
                        ? "১. ঢাকা ফ্যান্টাসি আইল্যান্ড"
                        : "1. Dhaka Fantasy Island"}
                      <span className="block text-xs font-normal text-brand-green-700 mt-0.5">
                        {lang === "bn" ? "(ইকো হোটেল ও রিসোর্ট)" : "(Eco Hotel & Resort)"}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mt-1">
                      {lang === "bn"
                        ? "মোহাম্মদপুরের হোটেল এন্ড রিসোর্ট থাকা ও অতিথির হালাল আয়ের সুবিধা।"
                        : "Mohammadpur hotel & resort stay accommodations and guest halal earnings."}
                    </p>
                  </div>

                  {/* 2. Sun Care Hospital */}
                  <div className="p-4 rounded-xl bg-surface-50 border border-gray-200/80">
                    <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1">
                      {lang === "bn"
                        ? "২. সান কেয়ার হাসপাতাল"
                        : "2. Sun Care Hospital"}
                      <span className="block text-xs font-normal text-brand-green-700 mt-0.5">
                        {lang === "bn" ? "ও ডায়াগনস্টিক সেন্টার লিমিটেড" : "& Diagnostic Center Ltd."}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mt-1">
                      {lang === "bn"
                        ? "হাসপাতালের সকল প্রকার সার্ভিস ও ডায়াগনস্টিক খরচে প্রতি খরচের ন্যূনতম ২০% ছাড়ের সুযোগ।"
                        : "Minimum 20% discount on all hospital services and diagnostic tests."}
                    </p>
                  </div>

                  {/* 3. Sunset Hotel & Resort */}
                  <div className="p-4 rounded-xl bg-surface-50 border border-gray-200/80">
                    <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1">
                      {lang === "bn"
                        ? "৩. সানসেট হোটেল ও রিসোর্ট"
                        : "3. Sunset Hotel & Resort"}
                      <span className="block text-xs font-normal text-brand-green-700 mt-0.5">
                        {lang === "bn" ? "(কুয়াকাটা)" : "(Kuakata)"}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mt-1">
                      {lang === "bn"
                        ? "একই সাথে কুয়াকাটার দুটি হোটেল থাকা ও হালাল আয়ের সুবিধা।"
                        : "Dual-hotel accommodations in Kuakata with halal profit dividends."}
                    </p>
                  </div>

                  {/* 4. Mangrove Eco Resort */}
                  <div className="p-4 rounded-xl bg-surface-50 border border-gray-200/80">
                    <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1">
                      {lang === "bn"
                        ? "৪. ম্যানগ্রোভ ইকো রিসোর্ট"
                        : "4. Mangrove Eco Resort"}
                      <span className="block text-xs font-normal text-brand-green-700 mt-0.5">
                        {lang === "bn" ? "(ইকো রিসোর্ট)" : "(Eco Resort)"}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mt-1">
                      {lang === "bn"
                        ? "প্রকৃতির মাঝে ইকো রিসোর্ট থাকায় ও হালাল আয়ের সুবিধা।"
                        : "Nature eco-resort stays and continuous halal dividend returns."}
                    </p>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-ink-700 text-center sm:text-left">
                    <span className="font-medium text-ink-500">{lang === "bn" ? "ফুটার: " : "Parent Group: "}</span>
                    <a
                      href={SITE.parentCompanyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-green-800 hover:text-brand-green-900 hover:underline"
                    >
                      {lang === "bn" ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড" : "Sunset Kuakata Hotel & Resort Ltd."}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <a
                      href={`tel:${CONTACT.phone1Raw}`}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-xs transition-colors"
                    >
                      <RiPhoneFill size={14} />
                      <span>{lang === "bn" ? "বুকিংয়ের জন্য কল করুন" : "Call for Booking"}</span>
                    </a>

                    <a
                      href={`https://wa.me/8801967407020?text=${encodeURIComponent(
                        lang === "bn"
                          ? "আমি ১ বিনিয়োগে ৪ হালাল আয়ের উৎস এবং সান কেয়ার হাসপাতালের শেয়ার অফার সম্পর্কে বিস্তারিত জানতে চাই।"
                          : "I want to know details about the 1 Investment, 4 Halal Income Streams offer."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-black hover:bg-ink-900 text-white font-semibold text-xs transition-colors"
                    >
                      <RiWhatsappFill size={15} />
                      <span>{lang === "bn" ? "হোয়াটসঅ্যাপ" : "WhatsApp"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <TbCurrencyTaka className="w-7 h-7 stroke-[2.2]" />
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

        {/* Tangible Real Estate & Rapid Construction Progress Showcase */}
        <div className="mb-14 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-subtle">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-50 text-brand-green-800 text-xs font-bold border border-brand-green-200 mb-2.5">
              <RiHammerFill className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === "bn" ? "বাস্তব অবকাঠামো ও নির্মাণ অগ্রগতি" : "Tangible Asset & On-Site Construction"}</span>
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ink-900 tracking-tight">
              {lang === "bn"
                ? "কাগজে-কলমে নয়, বাস্তবে দৃশ্যমান ১০+ তলা আধুনিক নিজস্ব হাসপাতাল"
                : "Not Just Paperwork: A Tangible 10+ Story Hospital Rising on Own Land"}
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 mt-2 leading-relaxed">
              {lang === "bn"
                ? "মোহাম্মদপুর বসিলা গার্ডেন সিটির ৪০ ফিট এভিনিউ রোডে সান কেয়ার হাসপাতালের বহুতল ভবনের নির্মাণ কাজ পুরোদমে এগিয়ে চলেছে। সাফ-কবলা রেজিস্ট্রি দলিলের মাধ্যমে নিশ্চিত করুন আপনার আজীবন স্থায়ী সম্পদ।"
                : "Active multi-story concrete superstructure advancing at Bosila Garden City, Mohammadpur. Saf-Kabala deed registration secures your perpetual real-estate healthcare asset."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Completed Architectural Vision */}
            <div className="group rounded-xl overflow-hidden border border-gray-200 bg-surface-50 flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/sun-care-hospital.webp"
                  alt="Sun Care Hospital 10-Story Architectural Building Vision"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <RiBuilding4Fill className="w-3.5 h-3.5 text-brand-green-400" />
                  <span>{lang === "bn" ? "পূর্ণাঙ্গ ভবন মডেল" : "Architectural Vision"}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-ink-900 text-sm mb-1">
                    {lang === "bn" ? "১০+ তলা আধুনিক টাওয়ার" : "10+ Story Modern Tower"}
                  </h4>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {lang === "bn"
                      ? "আধুনিক কাঁচের ফেসাড, রুফটপ গার্ডেন এবং ১০০+ শয্যা বিশিষ্ট আন্তর্জাতিক মানের হাসপাতাল।"
                      : "Modern glass curtain facade, rooftop canopy, and 100+ hospital beds."}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Main Entrance & Reception */}
            <div className="group rounded-xl overflow-hidden border border-gray-200 bg-surface-50 flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/suncare-hospital-close-view.webp"
                  alt="Sun Care Hospital Main Entrance and Reception Facade"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <RiDoorOpenFill className="w-3.5 h-3.5 text-brand-green-400" />
                  <span>{lang === "bn" ? "প্রধান প্রবেশদ্বার" : "Main Entrance"}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-ink-900 text-sm mb-1">
                    {lang === "bn" ? "রিসেপশন ও জরুরি ড্রাইভওয়ে" : "Reception & Driveway"}
                  </h4>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {lang === "bn"
                      ? "৪০ ফুট এভিনিউ রোডে সরাসরি অ্যাম্বুলেন্স র‌্যাম্প ও নান্দনিক ড্রাইভওয়ে প্রবেশমুখ।"
                      : "40-ft avenue road access with direct emergency ambulance ramp and grand reception."}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Live On-Site Construction Milestone */}
            <div className="group rounded-xl overflow-hidden border border-amber-200 bg-amber-50/30 flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/hospital-view.webp"
                  alt="Sun Care Hospital Live Construction Site at Mohammadpur Dhaka"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{lang === "bn" ? "বাস্তব সাইট ছবি" : "Live Site Photo"}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-ink-900 text-sm mb-1">
                    {lang === "bn" ? "দৃশ্যমান বাস্তব নির্মাণ অগ্রগতি" : "Physical Construction in Progress"}
                  </h4>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {lang === "bn"
                      ? "বসিলা গার্ডেন সিটিতে দ্রুততম গতিতে নিজস্ব ভবনের স্ট্রাকচারাল নির্মাণ সম্পন্ন হচ্ছে।"
                      : "Multi-story reinforced superstructure actively rising on verified hospital land."}
                  </p>
                </div>
              </div>
            </div>
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

            {/* View Official Leaflet and Download Brochure Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="/sun-care-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green-600 hover:bg-brand-green-700 text-xs sm:text-sm font-semibold text-white transition-colors shadow-xs cursor-pointer flex-shrink-0"
                title={lang === "bn" ? "অফিসিয়াল ব্রোশিওর দেখুন (PDF)" : "View Official Brochure (PDF)"}
              >
                <RiFilePdfFill className="w-4 h-4 text-red-300" />
                <span>{lang === "bn" ? "ব্রোশিওর দেখুন (PDF)" : "View Brochure (PDF)"}</span>
              </a>

              <button
                type="button"
                onClick={() => setLeafletOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-xs sm:text-sm font-semibold text-ink-900 transition-colors border border-gray-200 cursor-pointer flex-shrink-0"
              >
                <RiEyeLine className="w-4 h-4 text-brand-green-600" />
                <span>{ownership.viewLeaflet}</span>
              </button>
            </div>
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
            <div className="mt-2 text-xs text-emerald-400 font-medium flex items-center gap-1.5 justify-center md:justify-start">
              <RiMapPin2Fill className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>{ADDRESS.full}</span>
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
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="/sun-care-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <RiFilePdfFill className="w-3.5 h-3.5 text-amber-300" />
                  <span>{lang === "bn" ? "পিডিএফ ব্রোশিওর দেখুন" : "View PDF Brochure"}</span>
                </a>
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
        </div>
      )}
    </section>
  );
}
