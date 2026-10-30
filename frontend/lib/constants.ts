/**
 * lib/constants.ts
 * Single source of truth for contact information, site metadata,
 * navigation links, statistics, and medical departments.
 */

export const SITE = {
  name: "Sun Care Hospital & Diagnostic Center Ltd.",
  shortName: "Sun Care Hospital",
  tagline: "Caring for You, Every Step of the Way",
  domain: "suncarehospital.com",
  url: "https://suncarehospital.com",
  status: "Multi-Specialty Hospital & Diagnostic Center",
  parentCompany: "A Project by Sunset Kuakata Hotel & Resort Ltd.",
  parentCompanyUrl: "https://sunsetkuakatahotel.com/",
  copyrightYear: 2026,
} as const;

export const CONTACT = {
  phone1: "+880 1967 407 020",
  phone1Raw: "+8801967407020",
  phone2: "+880 1325 074 535",
  phone2Raw: "+8801325074535",
  facebook: "https://www.facebook.com/suncarehospital",
  email: "info@suncarehospital.com",
} as const;

export const ADDRESS = {
  line1: "H#03, BL#A, Avenue Road (40 Feet)",
  line2: "Bosila Garden City, Mohammadpur",
  city: "Dhaka-1207",
  country: "Bangladesh",
  full: "H#03, BL#A, Avenue Road (40 Feet), Bosila Garden City, Mohammadpur, Dhaka-1207",
  mapQuery: "Bosila Garden City, Mohammadpur, Dhaka 1207",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5!2d90.3547!3d23.7639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6fc5c3c1b9%3A0x4b2a94f4b4d3f0b9!2sBosila%20Garden%20City%2C%20Mohammadpur%2C%20Dhaka%201207!5e0!3m2!1sen!2sbd!4v1698000000000!5m2!1sen!2sbd",
} as const;

export const NAV_LINKS = [
  { label: "Home", labelBn: "হোম", href: "/" },
  { label: "About", labelBn: "পরিচিতি", href: "#about" },
  { label: "Departments", labelBn: "বিভাগ", href: "#departments" },
  { label: "Facilities", labelBn: "সুবিধাসমূহ", href: "#facilities" },
  { label: "Doctors", labelBn: "ডাক্তার", href: "#doctors" },
  { label: "Share Ownership", labelBn: "শেয়ার ও বিনিয়োগ", href: "#ownership" },
  { label: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
] as const;

export const STATS = [
  { value: "100+", label: "Modern Hospital Beds" },
  { value: "12+", label: "Specialized Departments" },
  { value: "35+", label: "Consultant Specialists" },
  { value: "24/7", label: "Emergency & Critical Care" },
] as const;

export const DEPARTMENTS = [
  {
    id: "general-medicine",
    name: "General Medicine",
    nameBn: "জেনারেল মেডিসিন",
    icon: "Stethoscope",
    description:
      "Comprehensive diagnostic evaluation and evidence-based treatments for acute and chronic internal diseases.",
    descriptionBn:
      "যেকোনো জটিল ও দীর্ঘস্থায়ী অভ্যন্তরীণ রোগের আধুনিক মূল্যায়ন ও সঠিক চিকিৎসাসেবা।",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    nameBn: "কার্ডিওলজি (হৃদরোগ)",
    icon: "Heart",
    description:
      "Non-invasive cardiac evaluations, ECG, Echocardiography, hypertension management, and preventive heart care.",
    descriptionBn:
      "উন্নত ইসিজি, ইকোকার্ডিওগ্রাফি, উচ্চ রক্তচাপ নিয়ন্ত্রণ ও হৃদরোগ প্রতিরোধমূলক বিশেষায়িত সেবা।",
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    nameBn: "গাইনি ও প্রসূতি বিভাগ",
    icon: "Baby",
    description:
      "Complete women's healthcare, antenatal care, safe normal & cesarean delivery, and routine gynaecological surgeries.",
    descriptionBn:
      "গর্ভকালীন যত্ন, নিরাপদ নরমাল ও সিজারিয়ান ডেলিভারি এবং নারীদের সার্বিক স্বাস্থ্যসেবা।",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    nameBn: "শিশু ও নবজাতক বিভাগ",
    icon: "Users",
    description:
      "Compassionate pediatric consultation, routine immunizations, child growth monitoring, and neonatal care.",
    descriptionBn:
      "নবজাতক ও শিশুদের যত্ন, নিয়মিত টিকাদান এবং বিকাশজনিত সমস্যার অভিজ্ঞ পরামর্শ।",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Trauma",
    nameBn: "অর্থোপেডিকস ও ট্রমা",
    icon: "Bone",
    description:
      "Specialized joint and fracture care, arthroscopy, spine care, and rehabilitative physiotherapy services.",
    descriptionBn:
      "হাড় ও জয়েন্টের আঘাত, ফ্র্যাকচার ব্যবস্থাপনা এবং পুনর্বাসনমূলক ফিজিওথেরাপি চিকিৎসা।",
  },
  {
    id: "neurology",
    name: "Neurology & Neuro-Medicine",
    nameBn: "নিউরো মেডিসিন",
    icon: "Brain",
    description:
      "Advanced clinical diagnosis and therapeutic management of stroke, migraine, seizures, and neurological disorders.",
    descriptionBn:
      "স্ট্রোক, মাইগ্রেন, প্যারালাইসিস ও স্নায়বিক সমস্যার সর্বাধুনিক চিকিৎসাসেবা।",
  },
  {
    id: "ent",
    name: "ENT & Head-Neck Surgery",
    nameBn: "ইএনটি (নাক, কান ও গলা)",
    icon: "Ear",
    description:
      "Ear microscopy, hearing assessments, endoscopic sinus diagnosis, and microsurgeries of the throat and neck.",
    descriptionBn:
      "নাক, কান ও গলার এন্ডোস্কোপিক পরীক্ষা, শ্রবণশক্তি মূল্যায়ন ও আধুনিক চিকিৎসা।",
  },
  {
    id: "emergency-icu",
    name: "Emergency & ICU",
    nameBn: "ইমার্জেন্সি ও আইসিইউ",
    icon: "AlertCircle",
    description:
      "Round-the-clock rapid response trauma center, central cardiac monitoring, and high-dependency critical care unit.",
    descriptionBn:
      "সার্বক্ষণিক ইমার্জেন্সি ট্রমা কেয়ার, সেন্ট্রাল কার্ডিয়াক মনিটরিং এবং সার্বক্ষণিক আইসিইউ সেবা।",
  },
] as const;

export const FACILITIES = [
  {
    id: "pathology",
    title: "Automated Pathology Laboratory",
    titleBn: "অটোমেটেড প্যাথলজি ল্যাবরেটরি",
    description:
      "Fully automated clinical biochemistry, haematology, microbiology, immunology, and histopathology diagnostics with rapid digital reporting.",
    descriptionBn:
      "বায়োকেমিস্ট্রি, হেমাটোলজি ও মাইক্রোবায়োলজির শতভাগ অটোমেটেড সঠিক রোগ নির্ণয় ল্যাব।",
    icon: "FlaskConical",
    image: "/images/facilities/lab.jpg",
  },
  {
    id: "imaging",
    title: "Digital Imaging & Radiology",
    titleBn: "ডিজিটাল ইমেজিং ও রেডিওলজি",
    description:
      "High-resolution Digital X-Ray, 4D Color Doppler Ultrasound, digital ECG, and echocardiography for prompt clinical precision.",
    descriptionBn:
      "উচ্চ রেজ্যুলেশন ডিজিটাল এক্স-রে, ৪ডি কালার ডপলার আল্ট্রাসনোগ্রাম ও ইকোকার্ডিওগ্রাফি।",
    icon: "ScanLine",
    image: "/images/facilities/radiology.jpg",
  },
  {
    id: "pharmacy",
    title: "24/7 In-House Pharmacy",
    titleBn: "২৪ ঘণ্টা সার্বক্ষণিক ফার্মেসী",
    description:
      "Comprehensive hospital pharmacy open 24 hours daily with temperature-controlled genuine medicines and registered pharmacists.",
    descriptionBn:
      "সার্বক্ষণিক খোলা মানসম্মত ওষুধ ও অভিজ্ঞ ফার্মাসিস্ট দ্বারা পরিচালিত ইন-হাউস ফার্মেসী।",
    icon: "Pill",
    image: "/images/facilities/pharmacy.jpg",
  },
  {
    id: "ambulance",
    title: "Cardiac & Trauma Ambulance",
    titleBn: "কার্ডিয়াক ও জরুরি অ্যাম্বুলেন্স",
    description:
      "Oxygen-equipped rapid transit ambulances with trained paramedic attendants available on immediate dispatch across Dhaka.",
    descriptionBn:
      "অক্সিজেন ও প্যারামেডিক সুবিধা সংবলিত দ্রুতগামী অ্যাম্বুলেন্স সেবা।",
    icon: "Ambulance",
    image: "/images/SUN CARE Ambulance at Hospital Entrance.webp",
  },
  {
    id: "icu",
    title: "Intensive Care Unit (ICU)",
    titleBn: "ইনটেনসিভ কেয়ার ইউনিট (ICU)",
    description:
      "Dedicated multi-bed intensive care unit equipped with advanced ventilators, arterial line monitoring, and 1:1 specialized nurse-to-patient ratio.",
    descriptionBn:
      "অত্যাধুনিক ভেন্টিলেটর ও সার্বক্ষণিক বিশেষজ্ঞ চিকিৎসক নিয়ন্ত্রিত আইসিইউ শয্যা।",
    icon: "Activity",
    image: "/images/facilities/icu.jpg",
  },
  {
    id: "rooms",
    title: "Comfort Patient Cabins & Wards",
    titleBn: "আরামদায়ক কেবিন ও ওয়ার্ড",
    description:
      "Acoustically quiet single cabins, deluxe suites, and spacious sanitized general wards configured with central medical gas and nurse call systems.",
    descriptionBn:
      "সেন্ট্রাল অক্সিজেন সমৃদ্ধ শান্ত ও পরিচ্ছন্ন সিঙ্গেল কেবিন, ডিলাক্স ও জেনারেল ওয়ার্ড।",
    icon: "BedDouble",
    image: "/images/facilities/cabin.jpg",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "Clock",
    title: "24/7 Dedicated Emergency Care",
    titleBn: "২৪/৭ সার্বক্ষণিক জরুরি সেবা",
    description:
      "Immediate emergency medical evaluation with resident trauma physicians and critical care nursing ready day and night.",
    descriptionBn:
      "রাত-দিন যেকোনো জরুরি মুহূর্তে অভিজ্ঞ ট্রমা চিকিৎসক ও নার্সিং টিমের তাৎক্ষণিক সেবা।",
  },
  {
    icon: "Sparkles",
    title: "Precision Computerized Diagnostics",
    titleBn: "কম্পিউটারাইজড নির্ভুল রোগ নির্ণয়",
    description:
      "Direct automated analyzer connections eliminating manual handling errors for reliable clinical decisions.",
    descriptionBn:
      "আধুনিক অটোমেটেড অ্যানালাইজার প্রযুক্তির মাধ্যমে শতভাগ নির্ভরযোগ্য ডায়াগনস্টিক রিপোর্ট।",
  },
  {
    icon: "Award",
    title: "Senior Consultant Physicians",
    titleBn: "সিনিয়র বিশেষজ্ঞ কনসালটেন্টবৃন্দ",
    description:
      "Reputable medical professors and specialized consultants offering evidence-based outpatient consultations.",
    descriptionBn:
      "দেশ-বিদেশের অভিজ্ঞ প্রফেসর ও বিশেষজ্ঞ চিকিৎসকদের নিয়মিত কনসালটেশন সুবিধা।",
  },
  {
    icon: "ShieldCheck",
    title: "Strict Sterilization & Infection Control",
    titleBn: "জীবাণুমুক্ত নিরাপদ পরিবেশ",
    description:
      "Hospital-grade HEPA air filtration and international multi-step sterilization protocols safeguarding every patient.",
    descriptionBn:
      "হাসপাতালের প্রতিটি বিভাগ আন্তর্জাতিক মানের প্রোটোকল মেনে সার্বক্ষণিক জীবাণুমুক্ত রাখা হয়।",
  },
  {
    icon: "HeartHandshake",
    title: "Transparent & Ethical Healthcare",
    titleBn: "স্বচ্ছ ও মানবিক চিকিৎসাসেবা",
    description:
      "Clear, published investigation tariffs with no hidden charges, treating every patient with compassion and dignity.",
    descriptionBn:
      "কোনো গোপন চার্জ ছাড়া শতভাগ স্বচ্ছতা ও মানবিক মর্যাদার সাথে রোগীদের সেবা প্রদান।",
  },
  {
    icon: "MapPin",
    title: "Strategic Mohammadpur Location",
    titleBn: "মোহাম্মদপুরে সহজে পৌঁছানোর মতো স্থান",
    description:
      "Positioned on a 40-foot wide avenue road in Bosila Garden City with rapid ambulance access and patient parking.",
    descriptionBn:
      "বসিলা গার্ডেন সিটির ৪০ ফিট প্রশস্ত এভিনিউ রোডে যানজটমুক্ত দ্রুত যাতায়াত ও পার্কিং সুবিধা।",
  },
] as const;

export const DOCTORS = [
  {
    id: "doc-1",
    name: "Prof. Dr. M. A. Rahman",
    specialty: "General & Internal Medicine",
    qualification: "MBBS, FCPS (Medicine), MACP (USA)",
    department: "Medicine",
  },
  {
    id: "doc-2",
    name: "Dr. K. N. Chowdhury",
    specialty: "Cardiology & Interventional Care",
    qualification: "MBBS, MD (Cardiology), NICVD",
    department: "Cardiology",
  },
  {
    id: "doc-3",
    name: "Dr. Sultana Parveen",
    specialty: "Gynecology & Obstetrics",
    qualification: "MBBS, FCPS (OBGYN), MS",
    department: "Gynecology",
  },
  {
    id: "doc-4",
    name: "Dr. Tariqul Islam",
    specialty: "Pediatrics & Neonatology",
    qualification: "MBBS, DCH, MD (Pediatrics)",
    department: "Pediatrics",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Mohammad Ahsanullah",
    location: "Mohammadpur, Dhaka",
    text: "The clinical attention and fast diagnostic reports at Sun Care Hospital were outstanding. The doctors and nursing staff took exceptional care of my elderly father.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Mrs. Nasreen Akter",
    location: "Bosila, Dhaka",
    text: "A clean, modern, and highly respectful environment. The appointment was on time, and having the pharmacy and lab under one roof made everything effortless.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Engr. Rezaul Karim",
    location: "Dhanmondi, Dhaka",
    text: "Top-tier medical facility in Mohammadpur. The 40-feet avenue road makes emergency vehicle access seamless, and the medical team is remarkably attentive.",
    rating: 5,
  },
] as const;
