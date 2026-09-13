import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 rotate-45 place-items-center border border-gold/60">
                <span className="-rotate-45 font-display text-sm font-semibold tracking-wider text-gold">RT</span>
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-[0.22em] text-ivory">
                  ROYAL
                </span>
                <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.52em] text-gold">
                  Travino
                </span>
              </span>
            </div>
            <p className="mt-7 font-serif text-xl italic text-ivory/80">
              “Luxury Travel. Exceptional Journeys.”
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand">
              A Dubai-based luxury travel and tourism company offering premium
              transportation and professional chauffeur services across the UAE.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">
              Explore
            </h3>
            <ul className="mt-7 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-3 text-sm text-sand transition-colors duration-300 hover:text-ivory"
                  >
                    <span className="h-px w-4 bg-gold/40 transition-all duration-300 group-hover:w-6 group-hover:bg-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">
              Services
            </h3>
            <ul className="mt-7 space-y-3.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="group inline-flex items-center gap-3 text-sm text-sand transition-colors duration-300 hover:text-ivory"
                  >
                    <span className="h-px w-4 bg-gold/40 transition-all duration-300 group-hover:w-6 group-hover:bg-gold" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.38em] text-gold">
              Contact
            </h3>
            <ul className="mt-7 space-y-5 text-sm text-sand">
              <li className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-sand/70">
            © {year} Royal Travino. All rights reserved.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-gold/60">
            Luxury Travel &amp; Tourism — Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
