import { Link } from "react-router-dom";
import { images } from "../data/images";
import { packages } from "../data/packages";
import Eyebrow from "../components/Eyebrow";
import WaveDivider from "../components/WaveDivider";

const rooms = [
  {
    name: "Lagoon Room",
    price: "₦95,000",
    blurb: "Garden-facing, king bed, private terrace — for a quiet first stay.",
    image: images.roomInterior,
  },
  {
    name: "Tideline Suite",
    price: "₦165,000",
    blurb: "Ocean-facing suite with a soaking tub and a wraparound balcony.",
    image: images.aerialVilla,
  },
  {
    name: "Komson Villa",
    price: "₦295,000",
    blurb: "Two-bedroom villa with a plunge pool, steps from the beach path.",
    image: images.poolBeach,
  },
];

const amenities = [
  { label: "Infinity Pool", copy: "A horizon-edge pool that runs straight into the Atlantic view." },
  { label: "Beachfront Dining", copy: "Grilled catch and Nigerian classics, plated at the water's edge." },
  { label: "Spa & Wellness", copy: "Slow mornings, deep-tissue afternoons, palm-shaded quiet." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center">
        <img
          src={images.heroPool}
          alt="Infinity pool overlooking the Atlantic at Komson Resorts, Ajah"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 w-full">
          <Eyebrow dark>Ajah, Lagos — Atlantic Coastline</Eyebrow>
          <h1 className="font-display text-5xl md:text-8xl text-paper mt-4 leading-[0.95] max-w-3xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
            Where the lagoon<br />
            <span className="italic text-turquoise-light">exhales</span> into the sea.
          </h1>
          <p className="text-paper/90 mt-6 max-w-md text-base md:text-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            Komson Resorts sits at the edge of Ajah, thirty minutes from the
            noise of Lagos and a short walk from the Atlantic tide line.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-coral text-paper font-mono text-xs tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:bg-turquoise transition-colors"
            >
              Check Availability
            </Link>
            <Link
              to="/rooms"
              className="border border-paper/50 text-paper font-mono text-xs tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:bg-paper hover:text-ink transition-colors"
            >
              View Rooms
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <WaveDivider />
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-[0.7fr_1.2fr] gap-8 md:gap-12 items-start">
        <div className="md:sticky md:top-28">
          <Eyebrow>The Resort</Eyebrow>
          <p className="font-mono text-4xl md:text-5xl text-lagoon mt-5">35′</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/45 mt-2 max-w-[14ch]">
            From Victoria Island, door to door
          </p>
        </div>
        <div>
          <p className="font-display text-2xl md:text-4xl leading-snug text-ink">
            Ajah moves fast — okada horns, market stalls, the Lekki–Epe
            traffic. Komson is the exhale at the end of that road: a stretch
            of private beach, a lagoon-fed pool, and rooms built low and open
            to the sea breeze.
          </p>
          <p className="mt-6 text-ink/70 max-w-xl">
            We built Komson for people who want Lagos nearby but not underfoot
            — weekenders from the Island, families down from the mainland,
            and travelers who'd rather hear waves than generators.
          </p>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-lagoon-dark text-paper py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <Eyebrow dark>Stay</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl mt-3">
                Rooms built for the breeze
              </h2>
            </div>
            <Link
              to="/rooms"
              className="font-mono text-xs tracking-[0.15em] uppercase text-turquoise-light border-b border-turquoise-light/50 pb-1 hover:border-turquoise-light"
            >
              All Rooms →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((r) => (
              <div key={r.name} className="group">
                <div className="overflow-hidden rounded-lg aspect-[4/5]">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-xl">{r.name}</h3>
                  <span className="font-mono text-xs text-turquoise-light">{r.price}/night</span>
                </div>
                <p className="text-sm text-paper/65 mt-2">{r.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES TEASER */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Eyebrow>Bundled Stays</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
              Or let a package handle the rest
            </h2>
          </div>
          <Link
            to="/packages"
            className="font-mono text-xs tracking-[0.15em] uppercase text-lagoon border-b border-lagoon/50 pb-1 hover:border-lagoon"
          >
            All Packages →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {packages.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/packages" className="group block">
              <div className="overflow-hidden rounded-lg aspect-[4/5] relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-coral text-paper font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-xl text-ink">{p.name}</h3>
                <span className="font-mono text-xs text-lagoon">{p.nights}</span>
              </div>
              <p className="text-sm text-ink/60 mt-2">From ₦{p.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* AMENITIES TEASER */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28">
        <Eyebrow>What's Here</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-xl text-ink">
          Everything is within reach of the tide.
        </h2>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {amenities.map((a, i) => (
            <div key={a.label} className="border-t border-ink/15 pt-6">
              <span className="font-mono text-xs text-lagoon">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl mt-3 text-ink">{a.label}</h3>
              <p className="text-ink/65 text-sm mt-2">{a.copy}</p>
            </div>
          ))}
        </div>

        <Link
          to="/amenities"
          className="inline-block mt-14 font-mono text-xs tracking-[0.15em] uppercase text-lagoon border-b border-lagoon/50 pb-1 hover:border-lagoon"
        >
          See All Amenities →
        </Link>
      </section>

      {/* CTA BAND */}
      <section className="relative py-28 md:py-36">
        <img
          src={images.poolPinkSky}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative max-w-2xl mx-auto text-center px-6">
          <Eyebrow dark>Book Direct</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-paper mt-4">
            The tide comes in twice a day. Your escape can start sooner.
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-9 bg-coral text-paper font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-turquoise transition-colors"
          >
            Send an Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
