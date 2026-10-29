import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE, CONTACT, ADDRESS } from "@/lib/constants";
import DevelopmentNoticeModal from "@/components/ui/DevelopmentNoticeModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B2518",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Best Hospital in Mohammadpur, Dhaka`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Sun Care Hospital & Diagnostic Center Ltd. is a leading multi-specialty hospital in Bosila Garden City, Mohammadpur, Dhaka. Offering 24/7 emergency care, automated pathology, digital imaging, ICU, and experienced consultant doctors.",
  keywords: [
    // Brand keywords
    "Sun Care Hospital",
    "Sun Care Hospital & Diagnostic Center Ltd",
    "Sun Care Hospital Dhaka",
    "Sun Care Diagnostic Center",
    "suncarehospital.com",
    
    // Core Location Keywords (High Search Volume)
    "hospital in Mohammadpur",
    "hospital in Mohammadpur Dhaka",
    "best hospital in Mohammadpur",
    "diagnostic center in Mohammadpur",
    "diagnostic center Mohammadpur Dhaka",
    "hospital in Bosila",
    "hospital in Bosila Garden City",
    "hospital near Bosila 40 feet road",
    "medical center Mohammadpur",
    
    // Emergency & Critical Care Keywords
    "24/7 emergency hospital Mohammadpur",
    "emergency hospital Dhaka",
    "ICU hospital Mohammadpur",
    "ambulance service Mohammadpur Dhaka",
    "24 hour pharmacy Mohammadpur",
    
    // Diagnostic & Laboratory Keywords
    "pathology lab Mohammadpur",
    "best diagnostic lab Dhaka",
    "digital X-ray Mohammadpur",
    "ultrasound test Mohammadpur Dhaka",
    "ECG test Mohammadpur",
    "blood test center Mohammadpur",
    
    // Specialist Doctor Services
    "doctor appointment Mohammadpur",
    "medicine specialist Mohammadpur",
    "cardiologist Mohammadpur Dhaka",
    "gynecologist in Mohammadpur",
    "pediatrician Mohammadpur Dhaka",
    "orthopedic doctor Mohammadpur",
    "ENT specialist Mohammadpur",
    "neurologist Dhaka",
  ],
  authors: [
    { name: SITE.name, url: SITE.url },
    { name: "Sunset Kuakata Hotel & Resort Ltd." },
  ],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Healthcare",
  applicationName: SITE.shortName,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-US": SITE.url,
      "bn-BD": `${SITE.url}?lang=bn`,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Best Hospital in Mohammadpur, Dhaka`,
    description:
      "Premier multi-specialty hospital and computerized diagnostic center in Bosila Garden City, Mohammadpur, Dhaka. 24/7 emergency trauma care, modern pathology lab, digital imaging, and consultant physicians.",
    images: [
      {
        url: "/images/hospitalbuildingimage.webp",
        width: 1200,
        height: 630,
        alt: `${SITE.name} Building in Mohammadpur, Dhaka`,
      },
      {
        url: "/onlylogo.png",
        width: 512,
        height: 512,
        alt: `${SITE.name} Logo`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Hospital & Diagnostic Center`,
    description:
      "24/7 emergency trauma care, automated diagnostics, ICU, and senior consultant physicians in Mohammadpur, Dhaka.",
    images: ["/images/hospitalbuildingimage.webp"],
    creator: "@suncarehospital",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/onlylogo.png", sizes: "any", type: "image/png" },
      { url: "/app/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/onlylogo.png",
    apple: [
      { url: "/onlylogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

// Rich Schema.org JSON-LD Structured Data for Hospital & Medical Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Hospital", "MedicalOrganization", "DiagnosticLab", "EmergencyService"],
      "@id": `${SITE.url}/#hospital`,
      name: SITE.name,
      alternateName: [SITE.shortName, "Sun Care Hospital Dhaka", "Sun Care Diagnostic"],
      url: SITE.url,
      logo: `${SITE.url}/onlylogo.png`,
      image: `${SITE.url}/images/hospitalbuildingimage.webp`,
      description:
        "Premier multi-specialty hospital and comprehensive diagnostic center in Bosila Garden City, Mohammadpur, Dhaka. Features 24/7 emergency service, automated pathology, digital radiology, ICU, and specialist outpatient consultations.",
      telephone: [CONTACT.phone1Raw, CONTACT.phone2Raw],
      emergencyTelephone: CONTACT.phone1Raw,
      priceRange: "$$",
      currenciesAccepted: "BDT",
      paymentAccepted: "Cash, Credit Card, Debit Card, bKash, Nagad",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
        addressLocality: "Mohammadpur",
        addressRegion: "Dhaka",
        postalCode: "1207",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.7639,
        longitude: 90.3547,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      availableService: [
        { "@type": "MedicalService", name: "24/7 Emergency & Trauma Care" },
        { "@type": "MedicalService", name: "Automated Clinical Pathology Laboratory" },
        { "@type": "MedicalService", name: "Digital X-Ray & 4D Ultrasound Imaging" },
        { "@type": "MedicalService", name: "Intensive Care Unit (ICU)" },
        { "@type": "MedicalService", name: "Outpatient Specialist Consultations" },
        { "@type": "MedicalService", name: "24/7 In-House Pharmacy" },
        { "@type": "MedicalService", name: "Emergency Ambulance Dispatch" },
      ],
      medicalSpecialty: [
        "https://schema.org/Emergency",
        "https://schema.org/Cardiovascular",
        "https://schema.org/Gynecologic",
        "https://schema.org/Pediatric",
        "https://schema.org/Orthopedic",
        "https://schema.org/Neurologic",
        "https://schema.org/Otolaryngologic",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Sunset Kuakata Hotel & Resort Ltd.",
      },
      sameAs: [CONTACT.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: "Official Website of Sun Care Hospital & Diagnostic Center Ltd.",
      publisher: {
        "@id": `${SITE.url}/#hospital`,
      },
      inLanguage: ["en-US", "bn-BD"],
    },
  ],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-ink-900">
        <DevelopmentNoticeModal />
        {children}
      </body>
    </html>
  );
}
