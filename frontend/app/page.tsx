// app/page.tsx — Sun Care Hospital & Diagnostic Center Ltd. Landing Page
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Hero from "@/components/sections/Hero";
import QuickAccess from "@/components/sections/QuickAccess";
import About from "@/components/sections/About";
import Departments from "@/components/sections/Departments";
import Facilities from "@/components/sections/Facilities";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Doctors from "@/components/sections/Doctors";
import AppointmentForm from "@/components/sections/AppointmentForm";
import Testimonials from "@/components/sections/Testimonials";
import ContactLocation from "@/components/sections/ContactLocation";

export default function HomePage() {
  return (
    <>
      {/* Top info bar */}
      <TopBar />

      {/* Sticky navbar */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Quick access strip */}
        <QuickAccess />

        {/* 3. About */}
        <About />

        {/* 4. Departments */}
        <Departments />

        {/* 5. Facilities */}
        <Facilities />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Doctors */}
        <Doctors />

        {/* 8. Appointment Form */}
        <AppointmentForm />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Contact & Location */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating action buttons */}
      <FloatingButtons />
    </>
  );
}
