export default function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase ${
        dark ? "text-turquoise-light" : "text-lagoon"
      }`}
    >
      {children}
    </span>
  );
}
