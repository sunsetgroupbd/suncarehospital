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
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Facilities", href: "#facilities" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
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
    icon: "Stethoscope",
    description:
      "Comprehensive diagnostic evaluation and evidence-based treatments for acute and chronic internal diseases.",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "Heart",
    description:
      "Non-invasive cardiac evaluations, ECG, Echocardiography, hypertension management, and preventive heart care.",
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    icon: "Baby",
    description:
      "Complete women's healthcare, antenatal care, safe normal & cesarean delivery, and routine gynaecological surgeries.",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    icon: "Users",
    description:
      "Compassionate pediatric consultation, routine immunizations, child growth monitoring, and neonatal care.",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Trauma",
    icon: "Bone",
    description:
      "Specialized joint and fracture care, arthroscopy, spine care, and rehabilitative physiotherapy services.",
  },
  {
    id: "neurology",
    name: "Neurology & Neuro-Medicine",
    icon: "Brain",
    description:
      "Advanced clinical diagnosis and therapeutic management of stroke, migraine, seizures, and neurological disorders.",
  },
  {
    id: "ent",
    name: "ENT & Head-Neck Surgery",
    icon: "Ear",
    description:
      "Ear microscopy, hearing assessments, endoscopic sinus diagnosis, and microsurgeries of the throat and neck.",
  },
  {
    id: "emergency-icu",
    name: "Emergency & ICU",
    icon: "AlertCircle",
    description:
      "Round-the-clock rapid response trauma center, central cardiac monitoring, and high-dependency critical care unit.",
  },
] as const;

export const FACILITIES = [
  {
    id: "pathology",
    title: "Automated Pathology Laboratory",
    description:
      "Fully automated clinical biochemistry, haematology, microbiology, immunology, and histopathology diagnostics with rapid digital reporting.",
    icon: "FlaskConical",
  },
  {
    id: "imaging",
    title: "Digital Imaging & Radiology",
    description:
      "High-resolution Digital X-Ray, 4D Color Doppler Ultrasound, digital ECG, and echocardiography for prompt clinical precision.",
    icon: "ScanLine",
  },
  {
    id: "pharmacy",
    title: "24/7 In-House Pharmacy",
    description:
      "Comprehensive hospital pharmacy open 24 hours daily with temperature-controlled genuine medicines and registered pharmacists.",
    icon: "Pill",
  },
  {
    id: "ambulance",
    title: "Cardiac & Trauma Ambulance",
    description:
      "Oxygen-equipped rapid transit ambulances with trained paramedic attendants available on immediate dispatch across Dhaka.",
    icon: "Ambulance",
  },
  {
    id: "icu",
    title: "Intensive Care Unit (ICU)",
    description:
      "Dedicated multi-bed intensive care unit equipped with advanced ventilators, arterial line monitoring, and 1:1 specialized nurse-to-patient ratio.",
    icon: "Activity",
  },
  {
    id: "rooms",
    title: "Comfort Patient Cabins & Wards",
    description:
      "Acoustically quiet single cabins, deluxe suites, and spacious sanitized general wards configured with central medical gas and nurse call systems.",
    icon: "BedDouble",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "Clock",
    title: "24/7 Dedicated Emergency Care",
    description:
      "Immediate emergency medical evaluation with resident trauma physicians and critical care nursing ready day and night.",
  },
  {
    icon: "UserCheck",
    title: "Qualified Consultant Specialists",
    description:
      "Renowned professors, senior consultants, and experienced surgeons across primary and tertiary medical disciplines.",
  },
  {
    icon: "Microscope",
    title: "High-Accuracy Diagnostic Center",
    description:
      "Standardized laboratory automation and digital imaging delivering reliable results for targeted therapeutic intervention.",
  },
  {
    icon: "HeartHandshake",
    title: "Compassionate, Patient-Centered Care",
    description:
      "Clear communication, respectful treatment protocols, and supportive patient attendants at every touchpoint.",
  },
  {
    icon: "MapPin",
    title: "Strategic Mohammadpur Location",
    description:
      "Prime, wide-road access in Bosila Garden City (40 Feet Avenue Road), providing swift access without city center congestion.",
  },
  {
    icon: "Shield",
    title: "Clinical Hygiene & Patient Safety",
    description:
      "Strict hospital infection control policies, HEPA filtered air circulation, and rigorous surgical sterilization.",
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
