# Content Customization Guide — Sun Care Hospital & Diagnostic Center Ltd.

All hospital data, contact numbers, doctor listings, and departments are centralized in **two files**:
- **[`lib/constants.ts`](./lib/constants.ts)**: Contact info, addresses, stats, doctors, departments, and facilities.
- **[`lib/content.ts`](./lib/content.ts)**: All user-facing section headings, descriptions, and appointment form options.

---

## 🏥 Hospital Information Customization

### 1. Contact Information (`lib/constants.ts`)
- **Primary Hotline**: `CONTACT.phone1` (`+880 1967 407 020`) — Automatically updates in the top bar, navbar, hero, contact card, footer, and mobile floating call button.
- **Secondary Hotline**: `CONTACT.phone2` (`+880 1325 074 535`).
- **Facebook URL**: `CONTACT.facebook` (`https://www.facebook.com/suncarehospital`).
- **Address**: `ADDRESS.line1`, `ADDRESS.line2`, `ADDRESS.city`.

### 2. Doctors & Medical Faculty (`lib/constants.ts → DOCTORS`)
Update or expand the `DOCTORS` array with your verified consultant roster:
```ts
{
  id: "doc-1",
  name: "Prof. Dr. Your Doctor Name",
  specialty: "Department / Specialty",
  qualification: "MBBS, FCPS, MD...",
  department: "Medicine",
}
```

### 3. Hospital Departments (`lib/constants.ts → DEPARTMENTS`)
Add, reorder, or update the clinical departments and their summaries.

### 4. Diagnostic Facilities (`lib/constants.ts → FACILITIES`)
Add or customize lab and diagnostic equipment descriptions (Pathology, Digital X-Ray, USG, ICU, Pharmacy, Ambulance).

### 5. Appointment Form Backend Integration (`components/sections/AppointmentForm.tsx`)
In `AppointmentForm.tsx`, locate the `onSubmit` function:
```ts
const onSubmit = async (data: FormData) => {
  // Wire to your email service (e.g. Resend, Nodemailer) or hospital CRM API:
  // await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) });
};
```
