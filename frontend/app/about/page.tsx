import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Mission & Clinical Standards",
  description:
    "Learn about Sun Care Hospital & Diagnostic Center Ltd., our patient-first healthcare mission, clinical values, and multi-specialty facility in Bosila Garden City, Mohammadpur, Dhaka.",
  alternates: {
    canonical: `${SITE.url}/about`,
  },
  openGraph: {
    title: "About Sun Care Hospital & Diagnostic Center Ltd.",
    description:
      "Patient-first healthcare, advanced diagnostics, and dedicated medical specialists in Mohammadpur, Dhaka.",
    url: `${SITE.url}/about`,
    images: [{ url: "/images/Sun Care Hospital Exterior.webp", width: 993, height: 1584 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="py-8 md:py-12">
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
