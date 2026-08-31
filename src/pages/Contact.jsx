import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { images } from "../data/images";
import { packages } from "../data/packages";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import WaveDivider from "../components/WaveDivider";

// TODO: replace with your real Formspree endpoint, e.g.
// "https://formspree.io/f/xxxxabcd"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const roomOptions = [
  "Sandbar Twin",
  "Lagoon Room",
  "Palm Deck Room",
  "Tideline Suite",
  "Sunset Penthouse",
  "Family Cottage",
  "Komson Villa",
  "Not sure yet",
];

const packageOptions = ["General inquiry — no package", ...packages.map((p) => p.name)];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get("package");
  const defaultPackage =
    preselectedPackage && packageOptions.includes(preselectedPackage)
      ? preselectedPackage
      : packageOptions[0];
  const preselectedRoom = searchParams.get("room");
  const defaultRoom =
    preselectedRoom && roomOptions.includes(preselectedRoom)
      ? preselectedRoom
      : roomOptions[roomOptions.length - 1];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Plan your stay"
        subtitle="Tell us your dates and we'll confirm availability within a day."
        image={images.poolBeach}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-[1.1fr_0.9fr] gap-16">
        {/* FORM */}
        <div>
          <Eyebrow>Send an Inquiry</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">
            Reserve your dates
          </h2>

          {status === "sent" ? (
            <div className="mt-8 border border-lagoon/30 bg-sand-light rounded-lg p-8">
              <p className="font-display text-2xl text-lagoon">Message sent.</p>
              <p className="text-ink/65 mt-2">
                Thank you — our reservations team will reply to confirm availability
                within 24 hours.
              </p>
            </div>
          ) : (
            <form key={`${defaultPackage}-${defaultRoom}`} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" type="tel" />
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                    Room Type
                  </label>
                  <select
                    name="room_type"
                    defaultValue={defaultRoom}
                    className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 focus:outline-none focus:border-lagoon"
                  >
                    {roomOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Package
                </label>
                <select
                  name="package"
                  defaultValue={defaultPackage}
                  className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 focus:outline-none focus:border-lagoon"
                >
                  {packageOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Check-in" name="check_in" type="date" />
                <Field label="Check-out" name="check_out" type="date" />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Number of guests, special requests, anything else we should know."
                  className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 focus:outline-none focus:border-lagoon resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-coral text-paper font-mono text-xs tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:bg-lagoon transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Inquiry"}
              </button>

              {status === "error" && (
                <p className="text-sm text-coral font-mono">
                  Something went wrong — please try again, or email stay@komsonresorts.com directly.
                </p>
              )}
            </form>
          )}
        </div>

        {/* INFO */}
        <div className="space-y-10">
          <div>
            <Eyebrow>Address</Eyebrow>
            <p className="font-display text-xl mt-2 text-ink">
              Km 21, Lekki–Epe Expressway<br />Ajah, Lagos, Nigeria
            </p>
          </div>
          <div>
            <Eyebrow>Phone & Email</Eyebrow>
            <p className="font-display text-xl mt-2 text-ink">
              +234 (0) 815 000 4471<br />stay@komsonresorts.com
            </p>
          </div>
          <div>
            <Eyebrow>Front Desk Hours</Eyebrow>
            <p className="font-display text-xl mt-2 text-ink">
              Open 24 hours, every day
            </p>
          </div>
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <img src={images.aerialVilla} alt="Aerial view of Komson Resorts" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <WaveDivider />
    </div>
  );
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 focus:outline-none focus:border-lagoon"
      />
    </div>
  );
}
