/**
 * lib/content.ts
 * Comprehensive bilingual content dictionary for English and Bangla.
 * Includes complete Hospital Share & Ownership Partnership content.
 */

export type Lang = "en" | "bn";

export interface OwnershipPackage {
  id: string;
  name: string;
  nameBn: string;
  price: string;
  booking: string;
  space: string;
  cardImg: string;
  cardName: string;
  featured?: boolean;
}

export interface ContentShape {
  topBar: {
    hotline: string;
    address: string;
    followUs: string;
    langToggle: string;
  };
  nav: {
    home: string;
    about: string;
    departments: string;
    facilities: string;
    doctors: string;
    ownership: string;
    contact: string;
    bookAppointment: string;
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
  ownership: {
    tag: string;
    headline: string;
    subheadline: string;
    whyInvestTitle: string;
    benefits: {
      atCostTitle: string;
      atCostDesc: string;
      profitTitle: string;
      profitDesc: string;
      deedTitle: string;
      deedDesc: string;
    };
    packagesTitle: string;
    packagesSub: string;
    packages: OwnershipPackage[];
    servicesTitle: string;
    services: string[];
    ctaTitle: string;
    ctaDesc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    leafletTitle: string;
    viewLeaflet: string;
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
    langToggle: "বাংলা",
  },
  nav: {
    home: "Home",
    about: "About",
    departments: "Departments",
    facilities: "Facilities",
    doctors: "Doctors",
    ownership: "Share Ownership",
    contact: "Contact",
    bookAppointment: "Book Appointment",
  },
  hero: {
    badge: "Multi-Specialty Hospital & Diagnostic Center",
    headline: "Excellence in Healthcare,\nCompassion in Every Touch",
    subheadline:
      "Sun Care Hospital & Diagnostic Center Ltd. provides world-class clinical care, 24/7 emergency response, modern diagnostic technology, and prestigious ownership investment opportunities in Mohammadpur, Dhaka.",
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
      "Sun Care Hospital & Diagnostic Center Ltd. is established to set a new benchmark in clinical care and precision diagnostics in Mohammadpur, Dhaka. Our patient-centered model ensures high-quality medical services with dignity, transparency, and clinical excellence.",
    body2:
      "Equipped with advanced diagnostic laboratories, digital radiology, dedicated critical care units, and experienced consultant physicians across multiple disciplines, we are committed to serving our community with reliable healthcare 24/7.",
    parentNote: "A Project by Sunset Kuakata Hotel & Resort Ltd.",
    statsHeadline: "Our Healthcare Capacity",
  },
  departments: {
    tag: "Clinical Specialties",
    headline: "Comprehensive Medical Departments",
    sub: "Specialized clinical disciplines staffed by experienced physicians and senior consultants.",
  },
  facilities: {
    tag: "Diagnostic & Support Services",
    headline: "State-of-the-Art Hospital Facilities",
    sub: "Fully automated medical diagnostics and emergency support infrastructure designed for accuracy and speed.",
  },
  ownership: {
    tag: "Hospital Share & Ownership Investment",
    headline: "Secure Your Future with a Prestigious Investment in Healthcare & Service",
    subheadline:
      "A golden opportunity to become a perpetual co-owner of Sun Care Hospital & Diagnostic Center Ltd. at Bosila Garden City, Mohammadpur, Dhaka with guaranteed dividends and family medical privileges.",
    whyInvestTitle: "Why Invest in Sun Care Hospital & Diagnostic Center Ltd.?",
    benefits: {
      atCostTitle: "Direct At-Cost Healthcare Privileges",
      atCostDesc: "You and up to 20 nominated family members will receive all hospital services and diagnostic tests at direct cost price (@ at cost) for a lifetime.",
      profitTitle: "Guaranteed Annual Profit Sharing",
      profitDesc: "Earn annual partnership dividends derived from the overall hospital revenue, patient consultations, surgical procedures, and diagnostic testing.",
      deedTitle: "Saf-Kabala Registered Lifetime Ownership",
      deedDesc: "Legally secured permanent deed registration (সাফ-কবলা দলিল) per square foot, providing lifelong transferable asset ownership.",
    },
    packagesTitle: "Ownership Share Packages",
    packagesSub: "Choose the package tailored to your investment portfolio. Each includes a verified Membership Smart Card and square footage allocation.",
    packages: [
      {
        id: "platinum",
        name: "Platinum Ownership",
        nameBn: "প্লাটিনাম ওনারশিপ",
        price: "Tk. 32,00,000/=",
        booking: "Tk. 8,00,000/=",
        space: "Total 24.64 sft.",
        cardImg: "/images/card-platinum.png",
        cardName: "Platinum Membership Card",
        featured: true,
      },
      {
        id: "gold",
        name: "Gold Ownership",
        nameBn: "গোল্ড ওনারশিপ",
        price: "Tk. 16,50,000/=",
        booking: "Tk. 5,00,000/=",
        space: "Total 12.32 sft.",
        cardImg: "/images/card-gold.png",
        cardName: "Gold Membership Card",
      },
      {
        id: "silver",
        name: "Silver Ownership",
        nameBn: "সিলভার ওনারশিপ",
        price: "Tk. 10,20,000/=",
        booking: "Tk. 3,00,000/=",
        space: "Total 7.392 sft.",
        cardImg: "/images/card-silver.png",
        cardName: "Silver Membership Card",
      },
      {
        id: "bronze",
        name: "Bronze Ownership",
        nameBn: "ব্রোঞ্জ ওনারশিপ",
        price: "Tk. 3,50,000/=",
        booking: "Tk. 1,00,000/=",
        space: "Total 2.464 sft.",
        cardImg: "/images/card-bronze.png",
        cardName: "Bronze Membership Card",
      },
    ],
    servicesTitle: "Guaranteed Hospital Services & Infrastructure",
    services: [
      "24/7 Home Healthcare Services",
      "Specialist Consultant Doctor Care",
      "Advanced Computerized Diagnostic Lab",
      "In-House Pharmacy & Emergency Ambulance",
      "24/7 Emergency & Critical Trauma Care",
      "100% Accurate Diagnostic Results",
    ],
    ctaTitle: "Ready to Become a Hospital Co-Owner?",
    ctaDesc: "Contact our investment desk today to reserve your share deed and get the complete prospectus and registration documentation.",
    ctaPrimary: "Call Investment Desk Now",
    ctaSecondary: "Download Official Prospectus",
    leafletTitle: "Official Ownership Leaflet",
    viewLeaflet: "View Official Share Packages Brochure",
  },
  whyUs: {
    tag: "The Sun Care Standard",
    headline: "Why Patients & Families Trust Us",
    sub: "Built on international medical protocols, cutting-edge technology, and compassionate patient care.",
  },
  doctors: {
    tag: "Medical Experts",
    headline: "Our Senior Medical Consultants",
    sub: "Dedicated medical professionals providing comprehensive clinical care across all specialties.",
  },
  appointment: {
    tag: "Consultation Request",
    headline: "Book a Doctor's Appointment",
    sub: "Fill out the appointment request below. Our scheduling coordinator will confirm your consultation time.",
    fields: {
      name: "Patient Full Name",
      phone: "Contact Phone Number (+880)",
      department: "Select Department",
      date: "Preferred Appointment Date",
      message: "Reason for Visit / Symptoms (Optional)",
    },
    submit: "Request Appointment",
    successTitle: "Appointment Request Received",
    successBody: "Our medical front desk will call you shortly to confirm your doctor consultation.",
    departments: [
      "General Medicine",
      "Cardiology",
      "Gynecology & Obstetrics",
      "Pediatrics & Child Care",
      "Orthopedics",
      "Neurology",
      "ENT (Ear, Nose & Throat)",
      "Emergency & Critical Care",
    ],
  },
  testimonials: {
    tag: "Patient Experiences",
    headline: "Trusted by Families Across Dhaka",
    sub: "Read what patients and families say about our medical care and diagnostic services.",
  },
  contact: {
    tag: "Reach Us",
    headline: "Location & Contact Information",
    sub: "Centrally situated in Bosila Garden City, Mohammadpur, Dhaka for rapid patient access.",
    addressLabel: "Hospital Address",
    phoneLabel: "Phone Lines",
    followLabel: "Connect With Us",
    directionsBtn: "Get Google Directions",
    callBtn: "Call Now",
  },
  footer: {
    description:
      "Sun Care Hospital & Diagnostic Center Ltd. — Delivering world-class clinical care, precision pathology diagnostics, and prestigious healthcare ownership in Mohammadpur, Dhaka.",
    quickLinks: "Quick Navigation",
    contactInfo: "Contact Details",
    followUs: "Follow Us",
    copyright: "Sun Care Hospital & Diagnostic Center Ltd. All rights reserved.",
  },
};

const bn: ContentShape = {
  topBar: {
    hotline: "২৪/৭ জরুরি হটলাইন",
    address: "বাড়ি#০৩, ব্লক#এ, এভিনিউ রোড (৪০ ফিট), বসিলা গার্ডেন সিটি, মোহাম্মদপুর, ঢাকা",
    followUs: "ফেসবুকে যুক্ত থাকুন",
    langToggle: "English",
  },
  nav: {
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    departments: "বিভাগসমূহ",
    facilities: "সেবা ও সুবিধাসমূহ",
    doctors: "ডাক্তারবৃন্দ",
    ownership: "শেয়ার ও বিনিয়োগ",
    contact: "যোগাযোগ",
    bookAppointment: "অ্যাপয়েন্টমেন্ট নিন",
  },
  hero: {
    badge: "মাল্টি-স্পেশালিটি হাসপাতাল ও ডায়াগনস্টিক সেন্টার",
    headline: "স্বাস্থ্য ও সেবায় বিশ্বমানের নির্ভরযোগ্যতা,\nপ্রতিটি মুহূর্তে আন্তরিক যত্ন",
    subheadline:
      "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ — ঢাকার মোহাম্মদপুরে সর্বাধুনিক স্বাস্থ্যসেবা, ২৪ ঘণ্টা ইমার্জেন্সি সাপোর্ট, নির্ভুল ডায়াগনস্টিক ল্যাব এবং মর্যাদাপূর্ণ হাসপাতাল মালিকানা বিনিয়োগ সুবিধা।",
    ctaPrimary: "অ্যাপয়েন্টমেন্ট নিন",
    ctaSecondary: "জরুরি হটলাইন",
    trustChips: [
      "২৪/৭ জরুরি চিকিৎসা",
      "উন্নত ডায়াগনস্টিক সেন্টার",
      "অভিজ্ঞ বিশেষজ্ঞ ডাক্তার",
      "আইসিইউ ও ক্রিটিক্যাল কেয়ার",
    ],
    floatingCard: "স্বীকৃত ডায়াগনস্টিক সেবা",
    floatingCardSub: "১০০% নির্ভুল ও নির্ভরযোগ্য স্বাস্থ্য রিপোর্ট",
  },
  quickAccess: {
    emergency: {
      title: "২৪ ঘণ্টা ইমার্জেন্সি",
      sub: "জরুরি ট্রমা ও দ্রুত সেবা",
    },
    appointment: {
      title: "অ্যাপয়েন্টমেন্ট",
      sub: "বিশেষজ্ঞ ডাক্তার বুকিং",
    },
    findDoctor: {
      title: "বিশেষজ্ঞ ডাক্তার",
      sub: "সিনিয়র কনসালটেন্টবৃন্দ",
    },
    reports: {
      title: "ডায়াগনস্টিক রিপোর্ট",
      sub: "কম্পিউটারাইজড সঠিক ফলাফল",
    },
  },
  about: {
    tag: "আমাদের হাসপাতাল পরিচিতি",
    headline: "আস্থা ও আধুনিক চিকিৎসাবিজ্ঞানে নিবেদিত স্বাস্থ্যসেবা",
    body1:
      "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ ঢাকার মোহাম্মদপুর বসিলা গার্ডেন সিটিতে সর্বাধুনিক চিকিৎসা সেবা ও নির্ভরযোগ্য ডায়াগনস্টিক সেবার নতুন মানদণ্ড স্থাপন করতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য প্রতিটি রোগীর সর্বোচ্চ মর্যাদা ও সঠিক চিকিৎসাসেবা নিশ্চিত করা।",
    body2:
      "উন্নত অটোমেটেড ল্যাবরেটরি, ডিজিটাল রেডিওলজি, সার্বক্ষণিক ক্রিটিক্যাল কেয়ার ইউনিট (ICU) এবং অভিজ্ঞ কনসালটেন্ট চিকিৎসকদের সার্বক্ষণিক তত্ত্বাবধানে আমরা ২৪/৭ ঘণ্টা স্বাস্থ্যসেবায় প্রস্তুত।",
    parentNote: "সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিঃ-এর একটি সহযোগী প্রতিষ্ঠান",
    statsHeadline: "আমাদের সক্ষমতা",
  },
  departments: {
    tag: "চিকিৎসা বিভাগসমূহ",
    headline: "আমাদের বিশেষায়িত বিভাগসমূহ",
    sub: "অভিজ্ঞ বিশেষজ্ঞ ডাক্তার ও দক্ষ মেডিকেল টিম দ্বারা পরিচালিত আধুনিক ক্লিনিক্যাল বিভাগ।",
  },
  facilities: {
    tag: "ডায়াগনস্টিক ও জরুরি সেবা",
    headline: "সর্বাধুনিক হাসপাতাল ও ল্যাব সুবিধাসমূহ",
    sub: "দ্রুত ও নির্ভুল রোগ নির্ণয়ের জন্য সম্পূর্ণ কম্পিউটারাইজড ল্যাব এবং ২৪ ঘণ্টা জরুরি সেবা ব্যবস্থা।",
  },
  ownership: {
    tag: "হাসপাতাল শেয়ার ও বিনিয়োগ",
    headline: "স্বাস্থ্য ও সেবায় মর্যাদাপূর্ণ বিনিয়োগে নিশ্চিত হোক আপনার ভবিষ্যৎ",
    subheadline:
      "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ-এ আজীবন সাফ-কবলা মালিকানা, বাৎসরিক অংশীদারিত্বের মুনাফা এবং পরিবারের জন্য খরচ মূল্যে বিশ্বমানের চিকিৎসার এক অনন্য সুযোগ।",
    whyInvestTitle: "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ-এ কেন বিনিয়োগ করবেন?",
    benefits: {
      atCostTitle: "নির্ধারিত ২০ জনের খরচ মূল্যে সেবা",
      atCostDesc: "আপনি ও আপনার নির্ধারিত ২০ জনের পরিবারের সদস্যরা আজীবন সকল প্রকার চিকিৎসা সার্ভিস ও ডায়াগনোসিস পাবেন @ per cost (সরাসরি খরচ মূল্যে)।",
      profitTitle: "বাৎসরিক নিশ্চিত মুনাফার অংশীদারিত্ব",
      profitDesc: "হাসপাতালের মোট সেলস, রোগী সেবা ও ডায়াগনস্টিক কার্যক্রম থেকে অংশীদারিত্ব ভিত্তিতে বাৎসরিক লভ্যাংশ নিশ্চিত করা হবে।",
      deedTitle: "সাফ-কবলা রেজিস্ট্রেশনের মাধ্যমে আজীবন মালিকানা",
      deedDesc: "প্রতি বর্গফুটের বিপরীতে রেজিস্ট্রিকৃত সাফ-কবলা দলিলের মাধ্যমে শতভাগ আইনি সুরক্ষায় বংশপরম্পরায় আজীবন মালিকানার নিশ্চয়তা।",
    },
    packagesTitle: "শেয়ার ওনারশিপ প্যাকেজসমূহ",
    packagesSub: "আপনার সুবিধাজনক বিনিয়োগ প্যাকেজটি নির্বাচন করুন। প্রতিটি প্যাকেজে থাকছে স্মার্ট মেম্বারশিপ কার্ড ও নির্দিষ্ট বর্গফুট স্পেস।",
    packages: [
      {
        id: "platinum",
        name: "Platinum Ownership",
        nameBn: "প্লাটিনাম ওনারশিপ",
        price: "Tk. 32,00,000/=",
        booking: "Tk. 8,00,000/=",
        space: "মোট ২৪.৬৪ বর্গফুট (Total 24.64 sft)",
        cardImg: "/images/card-platinum.png",
        cardName: "Platinum Membership Card",
        featured: true,
      },
      {
        id: "gold",
        name: "Gold Ownership",
        nameBn: "গোল্ড ওনারশিপ",
        price: "Tk. 16,50,000/=",
        booking: "Tk. 5,00,000/=",
        space: "মোট ১২.৩২ বর্গফুট (Total 12.32 sft)",
        cardImg: "/images/card-gold.png",
        cardName: "Gold Membership Card",
      },
      {
        id: "silver",
        name: "Silver Ownership",
        nameBn: "সিলভার ওনারশিপ",
        price: "Tk. 10,20,000/=",
        booking: "Tk. 3,00,000/=",
        space: "মোট ৭.৩৯২ বর্গফুট (Total 7.392 sft)",
        cardImg: "/images/card-silver.png",
        cardName: "Silver Membership Card",
      },
      {
        id: "bronze",
        name: "Bronze Ownership",
        nameBn: "ব্রোঞ্জ ওনারশিপ",
        price: "Tk. 3,50,000/=",
        booking: "Tk. 1,00,000/=",
        space: "মোট ২.৪৬৪ বর্গফুট (Total 2.464 sft)",
        cardImg: "/images/card-bronze.png",
        cardName: "Bronze Membership Card",
      },
    ],
    servicesTitle: "আমাদের সুনির্দিষ্ট পরিষেবাসমূহ",
    services: [
      "২৪ ঘণ্টা হোম সার্ভিস",
      "বিশেষজ্ঞ ডাক্তারের সার্বক্ষণিক পরামর্শ",
      "উন্নত ও কম্পিউটারাইজড ডায়াগনস্টিক ল্যাব",
      "সার্বক্ষণিক ফার্মেসী ও জরুরি অ্যাম্বুলেন্স সেবা",
      "২৪/৭ ঘণ্টা ইমার্জেন্সি ও ট্রমা সার্ভিস",
      "১০০% নির্ভুল ও নির্ভরযোগ্য ডায়াগনোসিস",
    ],
    ctaTitle: "হাসপাতালের গর্বিত অংশীদার হতে চান?",
    ctaDesc: "বিস্তারিত তথ্য, দলিলপত্র যাচাই এবং শেয়ার বুকিং করতে আমাদের ইনভেস্টমেন্ট ডেস্কে সরাসরি যোগাযোগ করুন।",
    ctaPrimary: "ইনভেস্টমেন্ট ডেস্কে ফোন করুন",
    ctaSecondary: "অফিসিয়াল ব্রোশিওর দেখুন",
    leafletTitle: "অফিসিয়াল শেয়ার ওনারশিপ লিফলেট",
    viewLeaflet: "অফিসিয়াল প্যাকেজ লিফলেট পূর্ণাঙ্গ দেখুন",
  },
  whyUs: {
    tag: "আমাদের বিশেষত্ব",
    headline: "সান কেয়ার হাসপাতালের ওপর কেন আস্থা রাখবেন",
    sub: "আন্তর্জাতিক চিকিৎসা প্রোটোকল, সর্বাধুনিক ডায়াগনস্টিক যন্ত্রপাতি এবং আন্তরিক সেবায় গড়ে উঠেছে আমাদের হাসপাতাল।",
  },
  doctors: {
    tag: "চিকিৎসকবৃন্দ",
    headline: "অভিজ্ঞ কনসালটেন্ট ও বিশেষজ্ঞ ডাক্তার",
    sub: "প্রতিটি চিকিৎসা বিভাগে রোগীদের সঠিক ও দ্রুত চিকিৎসা প্রদানে নিবেদিত প্রাণ বিশেষজ্ঞ চিকিৎসকগণ।",
  },
  appointment: {
    tag: "অ্যাপয়েন্টমেন্ট বুকিং",
    headline: "বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন",
    sub: "নিচের ফর্মটি পূরণ করে আপনার কাঙ্ক্ষিত ডাক্তারের অ্যাপয়েন্টমেন্ট শিডিউল নিশ্চিত করুন।",
    fields: {
      name: "রোগীর পূর্ণ নাম",
      phone: "মোবাইল নম্বর (+880)",
      department: "বিভাগ নির্বাচন করুন",
      date: "পছন্দের তারিখ",
      message: "সমস্যা বা লক্ষণ (ঐচ্ছিক)",
    },
    submit: "অ্যাপয়েন্টমেন্ট বুক করুন",
    successTitle: "অ্যাপয়েন্টমেন্ট অনুরোধ গৃহীত হয়েছে",
    successBody: "আমাদের মেডিকেল ফ্রন্ট ডেস্ক শীঘ্রই আপনার সাথে যোগাযোগ করে সময় নিশ্চিত করবে।",
    departments: [
      "জেনারেল মেডিসিন",
      "কার্ডিওলজি (হৃদরোগ)",
      "গাইনি ও প্রসূতি বিভাগ",
      "শিশু বিভাগ",
      "অর্থোপেডিকস (হাড় ও জোড়া)",
      "নিউরো মেডিসিন",
      "ইএনটি (নাক, কান ও গলা)",
      "ইমার্জেন্সি ও আইসিইউ",
    ],
  },
  testimonials: {
    tag: "রোগীদের অভিজ্ঞতা",
    headline: "রোগী ও পরিবারের আস্থার প্রতীক",
    sub: "আমাদের সেবা ও ডায়াগনস্টিক সুবিধা নিয়ে সন্তুষ্ট রোগীদের প্রতিক্রিয়া।",
  },
  contact: {
    tag: "যোগাযোগ",
    headline: "ঠিকানা ও যোগাযোগের মাধ্যম",
    sub: "ঢাকার মোহাম্মদপুর বসিলা গার্ডেন সিটিতে অবস্থিত আমাদের সহজে পৌঁছানোর মতো শান্ত ক্যাম্পাস।",
    addressLabel: "হাসপাতালের ঠিকানা",
    phoneLabel: "হটলাইন নম্বর",
    followLabel: "সোশ্যাল মিডিয়া",
    directionsBtn: "গুগল ম্যাপে লোকেশন",
    callBtn: "কল করুন",
  },
  footer: {
    description:
      "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ — ঢাকার মোহাম্মদপুরে আন্তর্জাতিক মানের চিকিৎসাসেবা, নির্ভরযোগ্য প্যাথলজি ডায়াগনস্টিক এবং মর্যাদাপূর্ণ বিনিয়োগ অংশীদারিত্ব।",
    quickLinks: "গুরুত্বপূর্ণ লিংক",
    contactInfo: "যোগাযোগ তথ্য",
    followUs: "যুক্ত থাকুন",
    copyright: "সান কেয়ার হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার লিঃ। সর্বস্বত্ব সংরক্ষিত।",
  },
};

export const content: Record<Lang, ContentShape> = {
  en,
  bn,
};

// Export default en content for static SSR compatibility
export const t = en;
