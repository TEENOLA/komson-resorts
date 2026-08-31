import Eyebrow from "./Eyebrow";

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/15" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 pb-14 w-full">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl text-paper mt-3 max-w-2xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-paper/90 mt-4 max-w-lg text-sm md:text-base drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
