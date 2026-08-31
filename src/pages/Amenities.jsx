import { images } from "../data/images";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import WaveDivider from "../components/WaveDivider";

const amenities = [
  {
    label: "Infinity Pool",
    title: "A horizon that never ends",
    copy: "Our vanishing-edge pool sits above the beach so the water line and the ocean line blur together. Loungers, a swim-up shade bar, and towel service from sunrise to sunset.",
    image: images.loungeChairs,
  },
  {
    label: "Beachfront Dining",
    title: "Grilled catch, plated at the water's edge",
    copy: "Suya, jollof, and the day's catch off the grill, served on the sand at Komson Table — our open-air restaurant. The bar stays open past sunset for palm wine cocktails and Afrobeat.",
    image: images.sunbeds,
  },
  {
    label: "Spa & Wellness",
    title: "Slow mornings, deep-tissue afternoons",
    copy: "Two treatment cabanas open to the sea breeze, a yoga deck for sunrise sessions, and therapists trained in traditional Nigerian and coastal techniques.",
    image: images.poolBeach,
  },
  {
    label: "Private Beach Access",
    title: "Your own stretch of the Atlantic",
    copy: "A gated path leads straight from the pool deck to a private section of Ajah beach — beach chairs, cabanas, and jet-ski and kayak rentals on request.",
    image: images.droneBeach,
  },
];

export default function Amenities() {
  return (
    <div>
      <PageHero
        eyebrow="On the Property"
        title="Everything within reach of the tide"
        subtitle="Four ways to spend a day at Komson, from the pool deck to the shoreline."
        image={images.poolPinkSky}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-24">
        {amenities.map((a, i) => (
          <article
            key={a.label}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src={a.image} alt={a.label} className="w-full h-full object-cover" />
            </div>
            <div>
              <Eyebrow>{a.label}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">{a.title}</h2>
              <p className="text-ink/65 mt-4 leading-relaxed max-w-md">{a.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <WaveDivider />

      <section className="bg-lagoon-dark text-paper py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Eyebrow dark>Also On Site</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-md">
            The small things we don't leave out
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 border-t border-dashed border-paper/25">
            {[
              "Free Wi-Fi throughout",
              "Airport & Island transfers",
              "Event lawn for weddings",
              "24-hour front desk",
              "Uninterrupted power supply",
              "Secure on-site parking",
            ].map((item, i) => (
              <div
                key={item}
                className="py-5 border-b border-dashed border-paper/25 flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-turquoise-light shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
