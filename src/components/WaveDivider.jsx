export default function WaveDivider({ className = "", flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[36px] md:h-[52px]"
      >
        <defs>
          <linearGradient id="tideline" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0E5C56" />
            <stop offset="55%" stopColor="#22B4A6" />
            <stop offset="100%" stopColor="#6FD3C7" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 C 80 5, 160 55, 240 30 C 320 5, 400 55, 480 30 C 560 5, 640 55, 720 30 C 800 5, 880 55, 960 30 C 1040 5, 1120 55, 1200 30"
          fill="none"
          stroke="url(#tideline)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
