/**
 * lib/content.ts
 * Clean, authoritative copy structured for English and future Bangla localization.
 */

type Lang = "en";

interface ContentShape {
  topBar: {
    hotline: string;
    address: string;
    followUs: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustChips: string[];
    floatingCard: string;
    floatingCardSub: string;
  };
  quickAccess: {
    emergency: { title: string; sub: string };
    appointment: { title: string; sub: string };
    findDoctor: { title: string; sub: string };
    reports: { title: string; sub: string };
  };
  about: {
    tag: string;
    headline: string;
    body1: string;
    body2: string;
    parentNote: string;
    statsHeadline: string;
  };
  departments: {
    tag: string;
    headline: string;
    sub: string;
  };
  facilities: {
    tag: string;
    headline: string;
    sub: string;
  };
  whyUs: {
    tag: string;
    headline: string;
    sub: string;
  };
  doctors: {
    tag: string;
    headline: string;
    sub: string;
  };
  appointment: {
    tag: string;
    headline: string;
    sub: string;
    fields: {
      name: string;
      phone: string;
      department: string;
      date: string;
      message: string;
    };
    submit: string;
    successTitle: string;
    successBody: string;
    departments: string[];
  };
  testimonials: {
    tag: string;
    headline: string;
    sub: string;
  };
  contact: {
    tag: string;
    headline: string;
    sub: string;
    addressLabel: string;
    phoneLabel: string;
    followLabel: string;
    directionsBtn: string;
    callBtn: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    copyright: string;
  };
}

const en: ContentShape = {
  topBar: {
    hotline: "24/7 Hotline",
    address: "H#03, BL#A, Avenue Road (40 Feet), Bosila Garden City, Mohammadpur",
    followUs: "Follow on Facebook",
  },
  hero: {
    badge: "Multi-Specialty Hospital & Diagnostic Center",
    headline: "Excellence in Healthcare,\nCompassion in Every Touch",
    subheadline:
      "Sun Care Hospital & Diagnostic Center Ltd. provides world-class clinical care, 24/7 emergency response, and modern diagnostic technology in Mohammadpur, Dhaka.",
    ctaPrimary: "Book an Appointment",
    ctaSecondary: "Emergency Hotline",
    trustChips: [
      "24/7 Emergency Care",
      "Modern Diagnostic Center",
      "Experienced Specialists",
      "ICU & Critical Care",
    ],
    floatingCard: "Accredited Diagnostic Care",
    floatingCardSub: "Accurate & Reliable Health Reports",
  },
  quickAccess: {
    emergency: {
      title: "24/7 Emergency",
      sub: "Immediate trauma response",
    },
    appointment: {
      title: "Book Appointment",
      sub: "Schedule specialist visit",
    },
    findDoctor: {
      title: "Specialist Doctors",
      sub: "Senior clinical consultants",
    },
    reports: {
      title: "Diagnostic Reports",
      sub: "Fast computerized lab results",
    },
  },
  about: {
    tag: "About Our Hospital",
    headline: "Compassionate Healthcare Built on Trust & Modern Science",
    body1:
      "Sun Care Hospital & Diagnostic Center Ltd. is established to provide accessible, patient-first healthcare of the highest clinical standards. We combine seasoned medical specialists with modern diagnostics and advanced patient-care infrastructure.",
    body2:
      "From round-the-clock emergency care and intensive therapy to fully automated pathology and digital imaging, our multidisciplinary teams work collaboratively to ensure every patient receives prompt, accurate, and empathetic medical attention.",
    parentNote: "A Project by Sunset Kuakata Hotel & Resort Ltd.",
    statsHeadline: "Clinical Capacity at a Glance",
  },
  departments: {
    tag: "Clinical Specialties",
    headline: "Specialized Medical Departments",
    sub: "Our dedicated clinical units deliver evidence-based outpatient and inpatient care backed by leading consultants.",
  },
  facilities: {
    tag: "Hospital Infrastructure",
    headline: "Modern Medical Infrastructure & Diagnostic Facilities",
    sub: "Integrated hospital services ensuring seamless patient transitions from triage and testing to clinical recovery.",
  },
  whyUs: {
    tag: "Why Choose Sun Care",
    headline: "Patient-Centered Clinical Excellence",
    sub: "Discover why families in Mohammadpur and greater Dhaka rely on Sun Care for their essential medical and diagnostic needs.",
  },
  doctors: {
    tag: "Medical Faculty",
    headline: "Consultant Specialists & Department Heads",
    sub: "Our senior medical practitioners are committed to precision diagnosis and attentive bedside clinical care.",
  },
  appointment: {
    tag: "Online Booking",
    headline: "Request a Specialist Appointment",
    sub: "Select your preferred clinical department and date. Our appointment coordinator will call you to confirm your schedule.",
    fields: {
      name: "Patient Full Name",
      phone: "Contact Phone Number",
      department: "Clinical Department",
      date: "Preferred Appointment Date",
      message: "Brief Medical Concern (optional)",
    },
    submit: "Confirm Appointment Request",
    successTitle: "Appointment Request Submitted",
    successBody:
      "Thank you. Your appointment request has been received. Our clinical coordinator will contact your phone number shortly to verify your schedule.",
    departments: [
      "General Medicine",
      "Cardiology",
      "Gynecology & Obstetrics",
      "Pediatrics & Neonatology",
      "Orthopedics & Trauma",
      "Neurology & Neuro-Medicine",
      "ENT & Head-Neck Surgery",
      "Emergency & ICU",
      "Diagnostic & Pathology Lab",
    ],
  },
  testimonials: {
    tag: "Patient Experiences",
    headline: "Trusted by Patients & Families",
    sub: "Real testimonials reflecting our standard of care, patient hygiene, and diagnostic precision.",
  },
  contact: {
    tag: "Hospital Location",
    headline: "Visit Our Hospital & Diagnostic Center",
    sub: "Easily reachable on the 40-Feet Avenue Road in Bosila Garden City, Mohammadpur, Dhaka.",
    addressLabel: "Hospital Address",
    phoneLabel: "Emergency Hotlines",
    followLabel: "Connect Online",
    directionsBtn: "Open in Google Maps",
    callBtn: "Call Emergency Line",
  },
  footer: {
    description:
      "A premier multi-specialty hospital and comprehensive diagnostic center committed to compassionate, standardized clinical healthcare in Mohammadpur, Dhaka.",
    quickLinks: "Departments",
    contactInfo: "Contact & Location",
    followUs: "Follow Us",
    copyright: "© 2026 Sun Care Hospital & Diagnostic Center Ltd. All rights reserved.",
  },
};

export const content: Record<Lang, ContentShape> = { en };
export const t = content["en"];
