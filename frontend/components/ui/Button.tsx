// components/ui/Button.tsx
import { forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green-600 text-white hover:bg-brand-green-700 active:bg-brand-green-800 border border-transparent",
  outline:
    "border border-brand-green-600 text-brand-green-700 hover:bg-brand-green-50 active:bg-brand-green-100 bg-transparent",
  ghost:
    "text-brand-green-700 hover:bg-brand-green-50 bg-transparent",
  danger:
    "bg-brand-red-500 text-white hover:bg-brand-red-600 active:bg-brand-red-700 border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs font-semibold rounded-md",
  md: "px-5 py-2.5 text-sm font-semibold rounded-lg",
  lg: "px-6 py-3 text-base font-semibold rounded-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      "inline-flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-600 focus-visible:ring-offset-1",
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
