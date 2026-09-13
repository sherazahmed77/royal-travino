import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CtaBand, PageFade, PageHero, Reveal, SmartImage } from "../components/ui";
import SEO from "../components/SEO";
import { SERVICES, STOCK, type Service } from "../data/content";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Service detail row                                                 */
/* ------------------------------------------------------------------ */

function ServiceRow({
  service,
  index,
  flip,
}: {
  service: Service;
  index: number;
  flip: boolean;
}) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="grid scroll-mt-32 items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      {/* Image */}
      <Reveal className={cn(flip && "lg:order-2")}>
        <div className="relative">
          <div
            className={cn(
              "absolute h-full w-full border border-gold/25",
              flip ? "-left-4 -top-4" : "-right-4 -top-4"
            )}
          />
          <div className="relative overflow-hidden">
            <SmartImage
              src={service.image}
              alt={service.name}
              className="aspect-[4/3] w-full transition-transform duration-[1600ms] ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>
          <span
            className={cn(
              "absolute -bottom-6 grid h-16 w-16 rotate-45 place-items-center border border-gold/50 bg-ink",
              flip ? "left-8" : "right-8"
            )}
          >
            <Icon className="h-6 w-6 -rotate-45 text-gold" strokeWidth={1.25} />
          </span>
        </div>
      </Reveal>

      {/* Copy */}
      <div className={cn(flip && "lg:order-1")}>
        <Reveal>
          <span className="font-serif text-lg italic text-gold/75">
            0{index + 1} — {service.tagline}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ivory md:text-5xl">
            {service.name}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-[15px] leading-relaxed text-sand md:text-base">
            {service.longDescription}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm text-ivory/80"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                {highlight}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-11 border-t border-line pt-7">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold transition-colors hover:text-gold-soft"
            >
              Enquire About This Service
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <PageFade>
      <SEO
        title="Services — Royal Travino | Luxury Chauffeur & Daily Transportation Dubai"
        description="Explore Royal Travino's premium transportation services in Dubai: School Pick & Drop, Office Pick & Drop, Full Day Bookings, Hourly Chauffeurs, and UAE Tourism."
        canonicalPath="/services"
      />
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Premium transportation and tourism services across Dubai and the United Arab Emirates."
        image={STOCK.aerial}
      />

      {/* Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-serif text-2xl italic leading-relaxed text-ivory/85 md:text-3xl">
              “Whatever the journey — the school run, the office commute, a full day
              or a tour of the Emirates — we make it feel effortless.”
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="mx-auto mt-8 block h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* Service details */}
      <section className="mx-auto max-w-7xl space-y-28 px-6 py-24 md:space-y-40 md:py-32 lg:px-10">
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} flip={i % 2 === 1} />
        ))}
      </section>

      <CtaBand
        title={
          <>
            Every Journey, <span className="text-gold-grad">Arranged Beautifully.</span>
          </>
        }
        text="Tell us about the journey you have in mind — a daily route, a full day, or a tour of Dubai — and our team will take care of the details."
      />
    </PageFade>
  );
}
