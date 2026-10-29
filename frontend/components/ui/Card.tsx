// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={[
        "bg-white rounded-xl border border-gray-100 shadow-subtle p-6",
        hover && "transition-colors duration-200 hover:border-brand-green-500",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
