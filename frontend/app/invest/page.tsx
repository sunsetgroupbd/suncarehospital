import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Ownership from "@/components/sections/Ownership";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactLocation from "@/components/sections/ContactLocation";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hospital Share & Ownership Investment — Sun Care Hospital",
  description:
    "Become a perpetual co-owner of Sun Care Hospital & Diagnostic Center Ltd. at Bosila Garden City, Mohammadpur, Dhaka. Enjoy at-cost medical services for 20 family members, guaranteed annual dividends, and deed-registered Saf-Kabala lifetime ownership.",
  keywords: [
    "Sun Care Hospital share investment",
    "hospital ownership Dhaka",
    "hospital share sale Bangladesh",
    "medical investment Mohammadpur",
    "hospital share Mohammadpur",
    "Saf-Kabala hospital ownership",
    "healthcare investment Bangladesh",
  ],
  alternates: {
    canonical: `${SITE.url}/invest`,
  },
  openGraph: {
    title: "Hospital Share & Ownership Investment | Sun Care Hospital & Diagnostic Center Ltd.",
    description:
      "Prestigious healthcare ownership with Saf-Kabala registration, annual dividend profit sharing, and at-cost treatment for 20 family members.",
    url: `${SITE.url}/invest`,
    images: [{ url: "/images/ownership-packages.png", width: 806, height: 349 }],
  },
};

export default function InvestPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="py-8 md:py-12">
        <Ownership />
        <WhyChooseUs />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
