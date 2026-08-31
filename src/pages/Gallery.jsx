import { images } from "../data/images";
import PageHero from "../components/PageHero";

const shots = [
  { src: images.heroPool, alt: "Infinity pool at sunset", tall: true },
  { src: images.roomInterior, alt: "Lagoon Room interior" },
  { src: images.loungeChairs, alt: "Lounge chairs by the pool" },
  { src: images.droneBeach, alt: "Aerial view of the beach" },
  { src: images.sunbeds, alt: "Sunbeds at golden hour", tall: true },
  { src: images.aerialVilla, alt: "Aerial view of Tideline Suite" },
  { src: images.cabana, alt: "Beachside cabana" },
  { src: images.poolBeach, alt: "Pool beside the beach" },
  { src: images.poolPinkSky, alt: "Pool under a pink sunset sky" },
];

export default function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Komson, in light"
        subtitle="A look at the pool deck, the rooms, and the shoreline — placeholder imagery, swap in your own photography anytime."
        image={images.cabana}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {shots.map((s, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg break-inside-avoid ${
                s.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
