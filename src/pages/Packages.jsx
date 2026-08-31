import { Link } from "react-router-dom";
import { images } from "../data/images";
import { packages } from "../data/packages";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import WaveDivider from "../components/WaveDivider";

export default function Packages() {
  return (
    <div>
      <PageHero
        eyebrow="Packages"
        title="The whole trip, bundled"
        subtitle="Five ways to book beyond just a room — pick any room type, the package handles the rest."
        image={images.loungeChairs}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-24">
        {packages.map((p, i) => (
          <article
            key={p.slug}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              {p.tag && (
                <span className="absolute top-4 left-4 bg-coral text-paper font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {p.tag}
                </span>
              )}
            </div>

            <div>
              <Eyebrow>{p.nights}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">{p.name}</h2>
              <p className="text-ink/65 mt-4 leading-relaxed">{p.blurb}</p>

              {/* ticket-stub inclusions */}
              <div className="mt-7 border border-dashed border-ink/25 rounded-lg overflow-hidden">
                <div className="p-4 sm:p-5 space-y-2.5">
                  {p.inclusions.map((item) => (
                    <div key={item} className="flex items-baseline gap-3">
                      <span className="font-mono text-turquoise text-xs shrink-0">＋</span>
                      <span className="text-sm text-ink">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-sand-light border-t border-dashed border-ink/25">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                    {p.priceNote}
                  </span>
                  <span className="font-mono text-lg text-lagoon">₦{p.price}</span>
                </div>
              </div>

              <Link
                to={`/contact?package=${encodeURIComponent(p.name)}`}
                className="inline-block mt-6 bg-lagoon text-paper font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 rounded-full hover:bg-coral transition-colors"
              >
                Inquire About This Package
              </Link>
            </div>
          </article>
        ))}
      </section>

      <WaveDivider />

      <section className="bg-sand-light py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <p className="font-display text-2xl md:text-3xl text-ink max-w-xl mx-auto">
            Every package can be built onto any room type — let us know your
            preference when you inquire and we'll confirm the final rate.
          </p>
        </div>
      </section>
    </div>
  );
}
