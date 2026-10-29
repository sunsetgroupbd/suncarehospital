"use client";
// components/layout/Navbar.tsx
// Sticky navbar: transparent on top, solid white with very subtle bottom border on scroll.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiPhoneFill, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NAV_LINKS, CONTACT, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-subtle"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100/60",
        ].join(" ")}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo: /onlylogo.png (heart-hands logo mark without text) */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              aria-label={`${SITE.name} — Home`}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
                <Image
                  src="/onlylogo.png"
                  alt={`${SITE.shortName} mark`}
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-brand-green-700 font-bold text-base sm:text-lg leading-tight tracking-tight">
                  Sun Care Hospital
                </span>
                <span className="text-ink-600 text-[11px] sm:text-xs font-medium leading-tight">
                  & Diagnostic Center Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-ink-700 hover:text-brand-green-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CONTACT.phone1Raw}`}
                className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-green-600 transition-colors"
                aria-label={`Call ${CONTACT.phone1}`}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-green-100 flex items-center justify-center text-brand-green-700">
                  <RiPhoneFill size={15} aria-hidden="true" />
                </div>
                <span className="hidden xl:inline">{CONTACT.phone1}</span>
              </a>
              <Button href="#appointment" size="sm">
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-ink-900 hover:bg-surface-100 transition-colors"
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3.5 py-2.5 rounded-lg text-ink-900 font-medium hover:bg-brand-green-100 hover:text-brand-green-800 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-5 border-t border-gray-100 space-y-3">
          <a
            href={`tel:${CONTACT.phone1Raw}`}
            className="flex items-center gap-2.5 text-ink-900 hover:text-brand-green-600 font-semibold text-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-green-100 flex items-center justify-center text-brand-green-700">
              <RiPhoneFill size={15} aria-hidden="true" />
            </div>
            {CONTACT.phone1}
          </a>
          <Button href="#appointment" className="w-full" size="sm">
            Book Appointment
          </Button>
        </div>
      </div>
    </>
  );
}
