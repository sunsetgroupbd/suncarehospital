// components/ui/SectionTag.tsx
interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionTag({
  children,
  className = "",
  light = false,
}: SectionTagProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase",
        light
          ? "bg-white/15 text-white border border-white/20"
          : "bg-brand-green-100 text-brand-green-800 border border-brand-green-200/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
