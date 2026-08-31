import { Link } from "react-router-dom";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  return (
    <footer className="bg-lagoon text-paper">
      <WaveDivider />
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-4 pb-12 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display italic text-2xl">Komson</p>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-turquoise-light mt-1">
            Resorts
          </p>
          <p className="mt-4 text-sm text-paper/70 max-w-xs">
            A tide-line escape on the Ajah shore, where Lagos exhales.
          </p>
        </div>

        <div>
          <Eyebrow>Find Us</Eyebrow>
          <p className="mt-3 text-sm text-paper/80 leading-relaxed">
            Km 21, Lekki–Epe Expressway<br />
            Ajah, Lagos, Nigeria
          </p>
        </div>

        <div>
          <Eyebrow>Reach Us</Eyebrow>
          <p className="mt-3 text-sm text-paper/80 leading-relaxed">
            +234 (0) 815 000 4471<br />
            stay@komsonresorts.com
          </p>
        </div>

        <div>
          <Eyebrow>Explore</Eyebrow>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link to="/rooms" className="hover:text-turquoise-light">Rooms</Link></li>
            <li><Link to="/packages" className="hover:text-turquoise-light">Packages</Link></li>
            <li><Link to="/amenities" className="hover:text-turquoise-light">Amenities</Link></li>
            <li><Link to="/gallery" className="hover:text-turquoise-light">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-turquoise-light">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="max-w-6xl mx-auto px-6 md:px-8 py-5 text-xs text-paper/50 font-mono">
          © {new Date().getFullYear()} Komson Resorts. All tides reserved.
        </p>
      </div>
    </footer>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-turquoise-light">
      {children}
    </span>
  );
}
