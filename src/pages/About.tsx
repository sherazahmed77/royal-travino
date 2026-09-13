import { Check } from "lucide-react";
import { CtaBand, PageFade, PageHero, Reveal, SectionHeading, SmartImage } from "../components/ui";
import SEO from "../components/SEO";
import { FEATURES } from "../data/content";

/* ------------------------------------------------------------------ */
/*  Story                                                              */
/* ------------------------------------------------------------------ */

function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                Luxury Travel, <span className="text-gold-grad">Rooted in Dubai</span>
              </>
            }
          />
          <Reveal delay={0.18}>
            <p className="mt-7 text-[15px] leading-relaxed text-sand md:text-base">
              Royal Travino is a Dubai-based luxury travel and tourism company
              providing premium transportation and professional chauffeur services
              across the United Arab Emirates. We serve families, professionals,
              corporate clients and visitors who expect every journey to be handled
              with care.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-5 text-[15px] leading-relaxed text-sand md:text-base">
              We believe the journey matters as much as the destination. That belief
              shapes everything we do — from the condition of our vehicles and the
              courtesy of our drivers, to the punctuality our passengers rely on every
              day. Safety, comfort and reliability are not aspirations; they are the
              baseline of our service.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="mt-5 text-[15px] leading-relaxed text-sand md:text-base">
              Whether it is a daily school or office route, a full day with a
              dedicated chauffeur, or a first encounter with the icons of Dubai, our
              purpose remains the same: luxury travel, and exceptional journeys.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={0.1}>
            <div className="relative ml-auto max-w-[540px]">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/30" />
              <SmartImage
                src="/images/interior.jpg"
                alt="The refined interior of a Royal Travino vehicle"
                className="gold-frame relative h-[420px] w-full md:h-[520px]"
              />
              <div className="absolute bottom-5 left-5 border border-ivory/15 bg-ink/75 px-5 py-3 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-gold">
                  Dubai · United Arab Emirates
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Values                                                             */
/* ------------------------------------------------------------------ */

function Values() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-coal py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="What We Stand For"
          title={
            <>
              The Values Behind <span className="text-gold-grad">Every Journey</span>
            </>
          }
          description="Luxury is not only about the vehicle — it is the standard of the experience from beginning to end."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.name} delay={i * 0.1} className="h-full">
                <div className="group h-full border border-line bg-ink p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45">
                  <span className="grid h-13 w-13 rotate-45 place-items-center border border-gold/40 transition-all duration-500 group-hover:bg-gold/10">
                    <Icon className="h-5.5 w-5.5 -rotate-45 text-gold" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-7 font-display text-xl text-ivory">{feature.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">
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
/*  Promise strip                                                      */
/* ------------------------------------------------------------------ */

function PromiseStrip() {
  const items = [
    {
      title: "Safety First",
      text: "Passenger safety guides every decision — from our drivers to our vehicles.",
    },
    {
      title: "Comfort Always",
      text: "Spacious, immaculate vehicles prepared for a smooth, relaxing ride.",
    },
    {
      title: "On Time, Every Time",
      text: "Punctuality and reliability our passengers can plan their day around.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Promise"
          title={
            <>
              The Royal Travino <span className="text-gold-grad">Standard</span>
            </>
          }
        />
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-ink p-9">
                <span className="grid h-7 w-7 rotate-45 place-items-center border border-gold/50">
                  <Check className="h-3.5 w-3.5 -rotate-45 text-gold" strokeWidth={2} />
                </span>
                <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                <p className="text-sm leading-relaxed text-sand">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-12 max-w-3xl font-serif text-xl italic leading-relaxed text-ivory/75 md:text-2xl">
            “We hold ourselves to the standard our passengers deserve — quietly,
            consistently, and on every single journey.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <PageFade>
      <SEO
        title="About Us — Royal Travino | Luxury Travel & Chauffeur Heritage in Dubai"
        description="Learn about Royal Travino, our standard of excellence, professional chauffeurs, and our commitment to luxury travel across Dubai and the United Arab Emirates."
        canonicalPath="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="About Royal Travino"
        subtitle="Luxury Travel & Tourism · Premium Transportation · Professional Chauffeur Services"
        image="/images/hero-poster.jpg"
      />
      <Story />
      <Values />
      <PromiseStrip />
      <CtaBand
        title={
          <>
            Experience Dubai <span className="text-gold-grad">the Royal Travino Way.</span>
          </>
        }
        text="Discover what travel feels like when every detail is cared for — speak with our team today."
      />
    </PageFade>
  );
}
