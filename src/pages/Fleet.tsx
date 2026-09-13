import { ArrowUpRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand, PageFade, PageHero, Reveal, SmartImage } from "../components/ui";
import SEO from "../components/SEO";
import { FLEET, type Vehicle } from "../data/content";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Vehicle showcase row                                               */
/* ------------------------------------------------------------------ */

function VehicleRow({
  vehicle,
  index,
  flip,
}: {
  vehicle: Vehicle;
  index: number;
  flip: boolean;
}) {
  return (
    <article className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
      {/* Image */}
      <Reveal className={cn(flip && "lg:order-2")}>
        <Link to="/contact" className="group relative block">
          <div
            className={cn(
              "absolute h-full w-full border border-gold/25 transition-all duration-700",
              flip ? "-left-4 -top-4" : "-right-4 -top-4"
            )}
          />
          <div className="relative overflow-hidden">
            <SmartImage
              src={vehicle.image}
              alt={vehicle.name}
              className="aspect-[16/10] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <span className="absolute left-6 top-6 border border-gold/40 bg-ink/65 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.32em] text-gold backdrop-blur-sm">
              {vehicle.category}
            </span>
          </div>
        </Link>
      </Reveal>

      {/* Copy */}
      <div className={cn(flip && "lg:order-1")}>
        <Reveal>
          <span className="font-serif text-lg italic text-gold/75">
            0{index + 1} — The Collection
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
            {vehicle.name}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-[15px] leading-relaxed text-sand md:text-base">
            {vehicle.description}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-7 flex items-center gap-3 text-sm text-ivory/85">
            <span className="grid h-9 w-9 rotate-45 place-items-center border border-gold/45">
              <Users className="h-4 w-4 -rotate-45 text-gold" strokeWidth={1.5} />
            </span>
            <span className="font-semibold tracking-wide">{vehicle.capacity}</span>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-gold/80">
              Ideal For
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {vehicle.idealFor.map((use) => (
                <span
                  key={use}
                  className="border border-line bg-char px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/75 transition-colors duration-400 hover:border-gold/40 hover:text-ivory"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.38}>
          <div className="mt-10 border-t border-line pt-7">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold transition-colors hover:text-gold-soft"
            >
              Enquire About This Vehicle
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

export default function Fleet() {
  return (
    <PageFade>
      <SEO
        title="Our Fleet — Royal Travino | Luxury Sedans, SUVs & Chauffeur Vehicles in Dubai"
        description="Discover the Royal Travino fleet: Lexus executive sedans, Toyota Land Cruiser SUVs, BYD electric luxury, Mercedes-Benz sedans, and Viano luxury vans in Dubai."
        canonicalPath="/fleet"
      />
      <PageHero
        eyebrow="The Royal Travino Collection"
        title="Our Fleet"
        subtitle="Premium and luxury vehicles — prepared for business, leisure and every occasion in between."
        image="/images/fleet-landcruiser.jpg"
      />

      {/* Intro */}
      <section className="border-b border-line py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[auto_1fr] md:items-center md:gap-16 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-gold">
              The Standard
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-3xl text-[15px] leading-relaxed text-sand md:text-lg">
              Each vehicle in the Royal Travino collection is chosen for comfort,
              presence and refinement — and maintained to the standard our passengers
              expect. Whether you are travelling alone or with family and colleagues,
              there is a vehicle in our fleet suited to your journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vehicles */}
      <section className="mx-auto max-w-7xl space-y-28 px-6 py-24 md:space-y-40 md:py-32 lg:px-10">
        {FLEET.map((vehicle, i) => (
          <VehicleRow key={vehicle.id} vehicle={vehicle} index={i} flip={i % 2 === 1} />
        ))}
      </section>

      <CtaBand
        title={
          <>
            Choose Your Vehicle. <span className="text-gold-grad">We Handle the Rest.</span>
          </>
        }
        text="Let our team know where you are headed, and we will recommend the vehicle that suits your journey best."
      />
    </PageFade>
  );
}
