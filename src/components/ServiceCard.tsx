import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/content";
import { Reveal, SmartImage } from "./ui";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 3) * 0.1} className="h-full">
      <Link
        to={`/services#${service.id}`}
        className="group flex h-full flex-col border border-line bg-char transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_30px_70px_-28px_rgba(201,164,92,0.28)]"
      >
        <div className="relative h-56 shrink-0 overflow-hidden">
          <SmartImage
            src={service.image}
            alt={service.name}
            className="h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char via-char/10 to-transparent" />
          <span className="absolute right-6 top-6 grid h-11 w-11 rotate-45 place-items-center border border-gold/50 bg-ink/70 backdrop-blur-sm transition-colors duration-500 group-hover:bg-gold">
            <Icon
              className="h-5 w-5 -rotate-45 text-gold transition-colors duration-500 group-hover:text-ink"
              strokeWidth={1.5}
            />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <p className="font-serif text-sm italic text-gold/80">{service.tagline}</p>
          <h3 className="mt-2 font-display text-2xl text-ivory">{service.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-sand">
            {service.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            Learn More
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
