"use client";
// components/layout/Navbar.tsx
// Clean, uncluttered executive navbar for Sun Care Hospital & Diagnostic Center Ltd.
// Smooth sticky behavior without overlapping TopBar; balanced layout across all desktop widths.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={[
          "sticky top-0 z-40 w-full transition-all duration-200",
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-subtle"
            : "bg-white border-b border-gray-100",
        ].join(" ")}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label={`${SITE.name} — Home`}
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/onlylogo.png"
                  alt={`${SITE.shortName} emblem`}
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-brand-green-700 group-hover:text-brand-green-600 font-bold text-base sm:text-lg leading-tight tracking-tight transition-colors">
                  Sun Care Hospital
                </span>
                <span className="text-ink-600 text-[11px] sm:text-xs font-medium leading-tight">
                  & Diagnostic Center Ltd.
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (Properly spaced without clutter) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {NAV_LINKS.map((link) => {
                const label = lang === "bn" && "labelBn" in link ? link.labelBn : link.label;
                const isOwnership = link.href === "#ownership";

                if (isOwnership) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-50 text-brand-green-700 border border-brand-green-200/80 text-xs xl:text-sm font-bold hover:bg-brand-green-100 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600" />
                      <span>{label}</span>
                    </a>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] xl:text-sm font-semibold text-ink-700 hover:text-brand-green-600 transition-colors py-1 whitespace-nowrap"
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            {/* Right: Primary Call to Action */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="#appointment" size="sm">
                {t.nav.bookAppointment}
              </Button>
            </div>

            {/* Mobile Controls (Menu toggle & Quick language pill) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                className="px-2 py-1 rounded-md bg-gray-100 border border-gray-200 text-xs font-bold text-brand-green-700 cursor-pointer"
              >
                {lang === "en" ? "বাংলা" : "EN"}
              </button>

              <button
                className="p-2 rounded-lg text-ink-900 hover:bg-surface-100 transition-colors cursor-pointer"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {menuOpen ? (
                  <RiCloseLine size={24} aria-hidden="true" />
                ) : (
                  <RiMenuLine size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-900/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col lg:hidden border-l border-gray-100",
          "transition-transform duration-200 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/onlylogo.png"
                alt={SITE.shortName}
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className="text-brand-green-700 font-bold text-sm leading-tight">
              Sun Care Hospital
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-md text-ink-600 hover:bg-surface-100 transition-colors"
            aria-label="Close navigation menu"
          >
            <RiCloseLine size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 p-5 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const label = lang === "bn" && "labelBn" in link ? link.labelBn : link.label;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3.5 py-2.5 rounded-lg text-ink-900 font-medium hover:bg-brand-green-100 hover:text-brand-green-800 transition-colors text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Drawer Language Switcher */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="text-xs font-semibold text-ink-500 mb-2">
              {lang === "bn" ? "ভাষা পরিবর্তন করুন" : "Select Language"}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`py-2 text-xs font-bold rounded-lg border text-center transition-colors cursor-pointer ${
                  lang === "en"
                    ? "bg-brand-green-600 text-white border-brand-green-600"
                    : "bg-gray-50 text-ink-700 border-gray-200"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`py-2 text-xs font-bold rounded-lg border text-center transition-colors cursor-pointer ${
                  lang === "bn"
                    ? "bg-brand-green-600 text-white border-brand-green-600"
                    : "bg-gray-50 text-ink-700 border-gray-200"
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </nav>

        <div className="p-5 border-t border-gray-100">
          <Button href="#appointment" className="w-full" size="sm">
            {t.nav.bookAppointment}
          </Button>
        </div>
      </div>
    </>
  );
}
