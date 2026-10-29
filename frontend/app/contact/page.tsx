import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ContactLocation from "@/components/sections/ContactLocation";
import AppointmentForm from "@/components/sections/AppointmentForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Location — Emergency Hotlines & Google Map",
  description:
    "Contact Sun Care Hospital & Diagnostic Center Ltd. in Bosila Garden City, Mohammadpur, Dhaka. Direct emergency hotlines: +880 1967 407 020 / +880 1325 074 535 and online appointment booking.",
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
  openGraph: {
    title: "Contact & Location | Sun Care Hospital & Diagnostic Center Ltd.",
    description:
      "Visit our hospital on Avenue Road (40 Feet), Bosila Garden City, Mohammadpur, Dhaka-1207. 24/7 emergency hotlines and online appointment booking.",
    url: `${SITE.url}/contact`,
    images: [{ url: "/images/hospitalbuildingimage.webp", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="py-8 md:py-12">
        <ContactLocation />
        <AppointmentForm />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
