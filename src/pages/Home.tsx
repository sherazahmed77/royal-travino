import { motion } from "framer-motion";
import { ArrowUpRight, Check, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import SEO from "../components/SEO";
import {
  CtaBand,
  Eyebrow,
  GoldLink,
  Marquee,
  PageFade,
  Reveal,
  SectionHeading,
  SmartImage,
} from "../components/ui";
import {
  DESTINATIONS,
  FEATURES,
  FLEET,
  HERO_POSTER,
  HERO_VIDEO,
  MARQUEE_ITEMS,
  SERVICES,
} from "../data/content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  // Defer video load until after first paint so it doesn't compete
  // with critical JS / CSS resources on initial page load.
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background: poster shown immediately; video swapped in after delay */}
      <div className="absolute inset-0">
        {/* Always render the poster as the base layer */}
        <SmartImage
          src={HERO_POSTER}
          alt="Dubai skyline at dusk with a luxury car"
          eager
          className="h-full w-full"
        />
        {/* Only mount the video element after the delay */}
        {videoReady && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-ink/62" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" />
      </div>

      {/* Vertical accent */}
      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-ivory/35 [writing-mode:vertical-rl]">
          Travel · Tourism · Chauffeur
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-32 pt-40 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
        >
          <Eyebrow>Dubai · United Arab Emirates</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.28, ease: EASE }}
          className="mt-8 font-display text-[clamp(3.4rem,9.5vw,8rem)] leading-[0.98] text-ivory"
        >
          Royal <span className="text-gold-grad">Travino</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.48, ease: EASE }}
          className="mt-7 font-serif text-2xl italic text-ivory/90 md:text-4xl"
        >
          Luxury Travel. Exceptional Journeys.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.64, ease: EASE }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-ivory/65 md:text-base"
        >
          Experience premium transportation and tourism services across Dubai with
          professional drivers, luxury vehicles, and reliable service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          className="mt-11 flex flex-wrap gap-4"
        >
          <GoldLink to="/services">Explore Our Services</GoldLink>
          <GoldLink to="/fleet" variant="ghost">
            View Our Fleet
          </GoldLink>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.5em] text-ivory/45">
          Scroll
        </span>
        <span className="h-12 w-px animate-pulse-soft bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Welcome / intro                                                    */
/* ------------------------------------------------------------------ */

function Welcome() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Welcome to Royal Travino"
            title={
              <>
                A Standard of Travel{" "}
                <span className="text-gold-grad">Beyond the Ordinary</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-7 text-[15px] leading-relaxed text-sand md:text-base">
              Royal Travino is a Dubai-based luxury travel and tourism company,
              specialising in premium transportation and professional chauffeur
              services. From daily school and office journeys to full-day chauffeur
              bookings and tourism across the Emirates, every trip is handled with
              the same quiet precision and care.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-5 text-[15px] leading-relaxed text-sand md:text-base">
              Our philosophy is simple: immaculate vehicles, courteous professional
              drivers, and journeys that feel effortless from first door to last.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <ul className="mt-8 space-y-3.5">
              {[
                "Professional, courteous chauffeurs",
                "Premium & luxury vehicle fleet",
                "Serving Dubai and the wider UAE",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3.5 text-sm text-ivory/85">
                  <span className="grid h-6 w-6 shrink-0 rotate-45 place-items-center border border-gold/50">
                    <Check className="h-3.5 w-3.5 -rotate-45 text-gold" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.42}>
            <div className="mt-11">
              <GoldLink to="/about" variant="ghost">
                About Royal Travino
              </GoldLink>
            </div>
          </Reveal>
        </div>

        {/* Image collage */}
        <div className="relative">
          <Reveal delay={0.1}>
            <div className="relative ml-auto max-w-[540px]">
              <div className="absolute -right-4 -top-4 h-full w-full border border-gold/30" />
              <SmartImage
                src="/images/chauffeur.jpg"
                alt="Professional chauffeur at Royal Travino"
                className="gold-frame relative h-[440px] w-full md:h-[560px]"
              />
              <div className="absolute right-5 top-5 border border-ivory/15 bg-ink/70 px-4 py-2.5 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-gold">
                  Chauffeur Services
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={0.25}
            className="absolute -bottom-8 left-0 hidden w-60 border-[6px] border-ink md:block"
          >
            <SmartImage
              src="/images/interior.jpg"
              alt="Luxury vehicle interior"
              className="h-44 w-full"
            />
          </Reveal>
          <Reveal
            delay={0.35}
            className="absolute bottom-8 right-0 hidden max-w-[240px] border border-line bg-ink/85 p-6 backdrop-blur-md lg:block"
          >
            <p className="font-serif text-xl italic leading-snug text-ivory/90">
              “Every journey, first class.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services preview                                                   */
/* ------------------------------------------------------------------ */

function ServicesPreview() {
  return (
    <section className="border-y border-line bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="What We Do"
          title={
            <>
              Premium Services, <span className="text-gold-grad">Tailored to You</span>
            </>
          }
          description="From the school run to the boardroom, from an hour to a full day — every service is delivered with the same standard of care."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
          {/* Closing tile */}
          <Reveal delay={0.2} className="h-full">
            <Link
              to="/contact"
              className="group flex h-full flex-col justify-center border border-gold/25 bg-ink p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
            >
              <p className="font-serif text-2xl italic leading-snug text-ivory/90">
                Have a journey in mind?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sand">
                Tell us where you need to be — our team will take care of the rest.
              </p>
              <span className="mt-7 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                Contact Our Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why choose us                                                      */
/* ------------------------------------------------------------------ */

function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Why Choose <span className="text-gold-grad">Royal Travino</span>
            </>
          }
          description="Four promises sit at the heart of every journey we provide — for families, professionals and visitors alike."
        />
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.name} delay={i * 0.1}>
                <div className="group relative border-t border-line pt-9">
                  <span className="font-serif text-lg italic text-gold/60">
                    0{i + 1}
                  </span>
                  <span className="mt-7 grid h-14 w-14 rotate-45 place-items-center border border-gold/40 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                    <Icon
                      className="h-6 w-6 -rotate-45 text-gold"
                      strokeWidth={1.25}
                    />
                  </span>
                  <h3 className="mt-7 font-display text-2xl text-ivory">
                    {feature.name}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-sand">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Dubai tourism                                                      */
/* ------------------------------------------------------------------ */

function Tourism() {
  return (
    <section className="border-y border-line bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Dubai Tourism"
            title={
              <>
                Discover Dubai in{" "}
                <span className="text-gold-grad">Comfort and Style</span>
              </>
            }
            description="Explore the iconic sights of Dubai with the comfort of a luxury vehicle and the convenience of professional transportation."
          />
          <Reveal delay={0.2} className="hidden shrink-0 lg:block">
            <GoldLink to="/services#tourism-services" variant="ghost">
              Explore Tourism Services
            </GoldLink>
          </Reveal>
        </div>

        {/* Mosaic */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[15rem]">
          {DESTINATIONS.map((destination, i) => (
            <Reveal
              key={destination.name}
              delay={(i % 4) * 0.08}
              className={
                i === 0
                  ? "col-span-2 md:row-span-2"
                  : i === 5
                    ? "col-span-2 md:col-span-4"
                    : "col-span-1"
              }
            >
              <figure className="group relative h-56 w-full overflow-hidden md:h-full">
                <SmartImage
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="absolute inset-3 border border-ivory/0 transition-all duration-700 group-hover:border-gold/30" />
                <figcaption className="absolute bottom-5 left-5 right-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-gold">
                    {destination.note}
                  </p>
                  <p className="mt-1.5 font-display text-xl text-ivory md:text-2xl">
                    {destination.name}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center lg:hidden">
          <GoldLink to="/services#tourism-services" variant="ghost">
            Explore Tourism Services
          </GoldLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Fleet preview                                                      */
/* ------------------------------------------------------------------ */

function FleetPreview() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Our Fleet"
            title={
              <>
                Travel in a Fleet <span className="text-gold-grad">Worthy of Dubai</span>
              </>
            }
            description="Sedans, SUVs and luxury people carriers — each presented to the standard your journey deserves."
          />
          <Reveal delay={0.2} className="shrink-0">
            <GoldLink to="/fleet" variant="ghost">
              View Full Fleet
            </GoldLink>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:px-0">
            {FLEET.map((vehicle) => (
              <Link
                to="/fleet"
                key={vehicle.id}
                className="group w-[290px] shrink-0 snap-start md:w-[400px]"
              >
                <div className="relative h-[220px] overflow-hidden border border-line transition-colors duration-500 group-hover:border-gold/40 md:h-[260px]">
                  <SmartImage
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full transition-transform duration-[1600ms] ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute left-5 top-5 border border-gold/40 bg-ink/65 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
                    {vehicle.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{vehicle.name}</h3>
                    <p className="mt-1.5 flex items-center gap-2 text-xs text-sand">
                      <Users className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      {vehicle.capacity}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-line text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <PageFade>
      <SEO
        title="Royal Travino — Luxury Travel & Chauffeur Services in Dubai"
        description="Royal Travino offers premier luxury travel, executive chauffeur services, airport transfers, corporate transportation, and private sightseeing in Dubai and across the UAE."
        canonicalPath="/"
      />
      <Hero />
      <Welcome />
      <Marquee items={MARQUEE_ITEMS} />
      <ServicesPreview />
      <WhyChoose />
      <Tourism />
      <FleetPreview />
      <CtaBand />
    </PageFade>
  );
}
