// components/ui/WaveDivider.tsx
interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export default function WaveDivider({
  flip = false,
  color = "#ffffff",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "80px" }}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

