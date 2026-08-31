import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/rooms", label: "Rooms" },
  { to: "/packages", label: "Packages" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = solid ? "text-ink" : "text-paper";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className={`font-display italic text-2xl ${linkColor}`}>Komson</span>
          <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${solid ? "text-turquoise" : "text-turquoise-light"}`}>
            Resorts
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-xs tracking-[0.15em] uppercase transition-colors ${linkColor} ${
                  isActive ? "border-b border-current" : "opacity-80 hover:opacity-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="font-mono text-xs tracking-[0.15em] uppercase bg-coral text-paper px-4 py-2 rounded-full hover:bg-lagoon transition-colors"
          >
            Book a Stay
          </Link>
        </nav>

        <button
          className={`md:hidden font-mono text-xs uppercase tracking-widest ${linkColor}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-[0.15em] uppercase text-ink"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs tracking-[0.15em] uppercase bg-coral text-paper px-4 py-3 rounded-full text-center"
          >
            Book a Stay
          </Link>
        </div>
      )}
    </header>
  );
}
