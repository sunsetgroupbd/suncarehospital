import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Departments from "@/components/sections/Departments";
import Facilities from "@/components/sections/Facilities";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Specialties & Diagnostic Facilities",
  description:
    "Explore our specialized medical departments, automated pathology lab, digital radiology, ICU, and inpatient care at Sun Care Hospital & Diagnostic Center Ltd. in Mohammadpur, Dhaka.",
  alternates: {
    canonical: `${SITE.url}/departments`,
  },
  openGraph: {
    title: "Specialties & Facilities | Sun Care Hospital & Diagnostic Center Ltd.",
    description:
      "General Medicine, Cardiology, Gynecology, Pediatrics, Orthopedics, Neurology, ENT, automated pathology lab, and 24/7 ICU in Mohammadpur, Dhaka.",
    url: `${SITE.url}/departments`,
    images: [{ url: "/images/hospitalbuildingimage.webp", width: 1200, height: 630 }],
  },
};

export default function DepartmentsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Departments />
        <Facilities />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
