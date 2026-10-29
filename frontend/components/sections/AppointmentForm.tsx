"use client";
// components/sections/AppointmentForm.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  RiCheckboxCircleFill,
  RiCalendarFill,
  RiPhoneFill,
  RiHospitalFill,
} from "react-icons/ri";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  department: z.string().min(1, "Please select a department"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClasses = [
  "w-full px-4 py-3 rounded-lg border border-gray-200",
  "text-ink-900 text-sm placeholder-ink-400",
  "focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent",
  "transition-colors duration-150 bg-white",
].join(" ");

const labelClasses = "block text-sm font-semibold text-ink-900 mb-1.5";

export default function AppointmentForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log("[AppointmentForm] Payload:", data);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="appointment"
        className="py-20 md:py-28 bg-surface-50"
        aria-labelledby="appointment-heading"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-subtle flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-green-100 text-brand-green-700 flex items-center justify-center">
              <RiCheckboxCircleFill size={36} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-2">
                {t.appointment.successTitle}
              </h2>
              <p className="text-ink-600 leading-relaxed text-sm">
                {t.appointment.successBody}
              </p>
            </div>
            <Button
              onClick={() => {
                setSubmitted(false);
                reset();
              }}
              variant="outline"
              size="sm"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="appointment"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="appointment-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex">
              <SectionTag>{t.appointment.tag}</SectionTag>
            </div>
            
            <h2
              id="appointment-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight tracking-tight"
            >
              {t.appointment.headline}
            </h2>
            
            <p className="text-ink-600 text-base leading-relaxed">
              {t.appointment.sub}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3.5 items-start p-4 rounded-xl bg-surface-50 border border-gray-100 shadow-subtle">
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                  <RiCalendarFill size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-ink-900 font-bold text-sm">Prompt Scheduling</h3>
                  <p className="text-ink-600 text-xs leading-relaxed">Select date and clinical department for quick doctor confirmation.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-4 rounded-xl bg-surface-50 border border-gray-100 shadow-subtle">
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                  <RiPhoneFill size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-ink-900 font-bold text-sm">Telephone Verification</h3>
                  <p className="text-ink-600 text-xs leading-relaxed">Our clinical desk calls to confirm room number and schedule.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-4 rounded-xl bg-surface-50 border border-gray-100 shadow-subtle">
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-700 flex items-center justify-center flex-shrink-0">
                  <RiHospitalFill size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-ink-900 font-bold text-sm">Full Diagnostics Integrated</h3>
                  <p className="text-ink-600 text-xs leading-relaxed">Pathology tests and diagnostic imaging conducted on-site.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Solid Clean Form with rounded-xl */}
          <div className="lg:col-span-7 bg-surface-50 rounded-xl p-6 sm:p-10 border border-gray-100 shadow-subtle">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Appointment request form"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    {t.appointment.fields.name} <span className="text-brand-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={inputClasses}
                    placeholder="e.g. Md. Ahsan Rahman"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-brand-red-500 font-medium" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      {t.appointment.fields.phone} <span className="text-brand-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClasses}
                      placeholder="+880 1XXX XXXXXX"
                      aria-required="true"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-brand-red-500 font-medium" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className={labelClasses}>
                      {t.appointment.fields.date} <span className="text-brand-red-500">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={inputClasses}
                      aria-required="true"
                      aria-describedby={errors.date ? "date-error" : undefined}
                      onFocus={(e) => {
                        if (!e.currentTarget.min) {
                          e.currentTarget.min = new Date().toISOString().split("T")[0];
                        }
                      }}
                      {...register("date")}
                    />
                    {errors.date && (
                      <p id="date-error" className="mt-1.5 text-xs text-brand-red-500 font-medium" role="alert">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className={labelClasses}>
                    {t.appointment.fields.department} <span className="text-brand-red-500">*</span>
                  </label>
                  <select
                    id="department"
                    className={inputClasses}
                    aria-required="true"
                    aria-describedby={errors.department ? "dept-error" : undefined}
                    defaultValue=""
                    {...register("department")}
                  >
                    <option value="" disabled>
                      Select department…
                    </option>
                    {t.appointment.departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <p id="dept-error" className="mt-1.5 text-xs text-brand-red-500 font-medium" role="alert">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    {t.appointment.fields.message}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className={inputClasses}
                    placeholder="Brief description of symptoms or specific doctor request…"
                    {...register("message")}
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full mt-2"
                  size="lg"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  <RiCalendarFill size={18} aria-hidden="true" />
                  <span>{submitting ? "Submitting Request…" : t.appointment.submit}</span>
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
