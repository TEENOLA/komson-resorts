import { Link } from "react-router-dom";
import { images } from "../data/images";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import WaveDivider from "../components/WaveDivider";

const rooms = [
  {
    slug: "sandbar-twin",
    name: "Sandbar Twin",
    price: "75,000",
    size: "26 m²",
    guests: "2 Guests",
    bed: "2 Twin Beds",
    view: "Courtyard View",
    blurb:
      "Our most compact room, built for friends or siblings traveling together. Two twin beds, a work nook, and a shaded courtyard view — simple, cool, and close to the pool deck.",
    image: images.loungeChairs,
  },
  {
    slug: "lagoon-room",
    name: "Lagoon Room",
    price: "95,000",
    size: "32 m²",
    guests: "2 Guests",
    bed: "1 King Bed",
    view: "Garden View",
    blurb:
      "Our entry double, set back from the shoreline among the palms. Warm timber floors, a rain shower, and a private terrace facing the lagoon side of the property — quiet, shaded, and close to the pool deck.",
    image: images.roomInterior,
  },
  {
    slug: "palm-deck-room",
    name: "Palm Deck Room",
    price: "120,000",
    size: "36 m²",
    guests: "2 Guests",
    bed: "1 King Bed",
    view: "Pool View",
    blurb:
      "A step up in space and light, with sliding doors that open straight onto the pool deck. Mornings start with a plunge before breakfast; evenings end with the pool lit up below your terrace.",
    image: images.cabana,
  },
  {
    slug: "tideline-suite",
    name: "Tideline Suite",
    price: "165,000",
    size: "48 m²",
    guests: "2–3 Guests",
    bed: "1 King + Daybed",
    view: "Ocean View",
    blurb:
      "A corner suite with glass doors that fold back to a wraparound balcony over the Atlantic. Soaking tub, separate sitting area, and the first pour of coffee arrives with the sunrise light.",
    image: images.aerialVilla,
  },
  {
    slug: "sunset-penthouse",
    name: "Sunset Penthouse",
    price: "210,000",
    size: "58 m²",
    guests: "2–3 Guests",
    bed: "1 King + Daybed",
    view: "Top-Floor Ocean View",
    blurb:
      "The highest room on the property, with a private rooftop-style terrace built for the evening light show over the Atlantic. Comes with a stocked bar cart and turndown at dusk.",
    image: images.poolPinkSky,
  },
  {
    slug: "family-cottage",
    name: "Family Cottage",
    price: "240,000",
    size: "75 m²",
    guests: "4–5 Guests",
    bed: "1 King + 2 Twin",
    view: "Garden & Pool View",
    blurb:
      "A freestanding two-bedroom cottage with its own sitting room and small kitchenette. Built for families who want space to spread out without losing the run of the main pool and beach path.",
    image: images.sunbeds,
  },
  {
    slug: "komson-villa",
    name: "Komson Villa",
    price: "295,000",
    size: "90 m²",
    guests: "4 Guests",
    bed: "2 King Beds",
    view: "Private Plunge Pool",
    blurb:
      "Two bedrooms, a living room that opens fully to your own plunge pool, and a private path down to the beach. Built for families or two couples who want their own gate.",
    image: images.poolBeach,
  },
];

export default function Rooms() {
  return (
    <div>
      <PageHero
        eyebrow="Accommodation"
        title="Rooms built for the breeze"
        subtitle="Seven ways to sleep with the windows open at Komson, from cozy twins to a private-pool villa."
        image={images.cabana}
      />

      {/* AT A GLANCE */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-20">
        <Eyebrow>At A Glance</Eyebrow>
        <div className="mt-6 border-t border-ink/15">
          {rooms.map((r, i) => (
            <a
              key={r.slug}
              href={`#${r.slug}`}
              className="flex items-center justify-between gap-4 py-4 border-b border-ink/15 hover:bg-sand-light/60 transition-colors px-2 -mx-2"
            >
              <span className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-xs text-ink/40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg md:text-xl text-ink truncate">{r.name}</span>
                <span className="hidden sm:inline font-mono text-[11px] text-ink/45 uppercase tracking-widest shrink-0">
                  {r.guests}
                </span>
              </span>
              <span className="font-mono text-sm text-lagoon shrink-0">₦{r.price}<span className="text-ink/40">/night</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-24">
        {rooms.map((r, i) => (
          <article
            key={r.name}
            id={r.slug}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-24 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <Eyebrow>Room {String(i + 1).padStart(2, "0")}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">{r.name}</h2>
              <p className="text-ink/65 mt-4 leading-relaxed">{r.blurb}</p>

              {/* ticket-stub spec strip */}
              <div className="mt-7 border border-dashed border-ink/25 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-dashed divide-ink/25">
                  {[
                    ["Size", r.size],
                    ["Guests", r.guests],
                    ["Bed", r.bed],
                    ["View", r.view],
                  ].map(([label, val]) => (
                    <div key={label} className="p-3 sm:p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/45">{label}</p>
                      <p className="font-mono text-xs sm:text-sm mt-1 text-ink">{val}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-sand-light border-t border-dashed border-ink/25">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/60">Rate</span>
                  <span className="font-mono text-lg text-lagoon">₦{r.price} <span className="text-xs text-ink/50">/ night</span></span>
                </div>
              </div>

              <Link
                to={`/contact?room=${encodeURIComponent(r.name)}`}
                className="inline-block mt-6 bg-lagoon text-paper font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 rounded-full hover:bg-coral transition-colors"
              >
                Inquire About This Room
              </Link>
            </div>
          </article>
        ))}
      </section>

      <WaveDivider />

      <section className="bg-sand-light py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <p className="font-display text-2xl md:text-3xl text-ink max-w-xl mx-auto">
            Rates include breakfast, pool and beach access, and Wi-Fi.
            Peak-season and long-stay pricing available on request.
          </p>
        </div>
      </section>
    </div>
  );
}
