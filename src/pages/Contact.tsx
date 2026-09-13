import { Mail, MapPin, Phone } from "lucide-react";
import { PageFade, PageHero, Reveal, Eyebrow } from "../components/ui";
import SEO from "../components/SEO";
import { CONTACT } from "../data/content";

/* ------------------------------------------------------------------ */
/*  Contact channel card                                               */
/* ------------------------------------------------------------------ */

function ContactCard({
  label,
  value,
  hint,
  href,
  icon: Icon,
  delay,
}: {
  label: string;
  value: string;
  hint: string;
  href?: string;
  icon: typeof Mail;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col items-center border border-line bg-char p-10 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45">
        <span className="grid h-14 w-14 rotate-45 place-items-center border border-gold/45 transition-all duration-500 group-hover:bg-gold/10">
          <Icon className="h-5.5 w-5.5 -rotate-45 text-gold" strokeWidth={1.25} />
        </span>
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-4 font-display text-xl text-ivory transition-colors duration-300 hover:text-gold-soft md:text-2xl"
          >
            {value}
          </a>
        ) : (
          <p className="mt-4 font-display text-xl text-ivory md:text-2xl">{value}</p>
        )}
        <p className="mt-3 text-sm text-sand">{hint}</p>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <PageFade>
      <SEO
        title="Contact Us — Royal Travino | Book Luxury Chauffeur in Dubai"
        description="Get in touch with Royal Travino for luxury chauffeur reservations, daily pick & drop services, airport transfers, and private tours across Dubai and the UAE."
        canonicalPath="/contact"
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We look forward to being of service — wherever you are headed."
        image="/images/chauffeur.jpg"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow center>Contact Details</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ivory md:text-5xl">
                Speak With <span className="text-gold-grad">Our Team</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-[15px] leading-relaxed text-sand md:text-base">
                For enquiries about our chauffeur services, daily transportation or
                Dubai tourism, please reach us through any of the channels below.
              </p>
            </Reveal>
          </div>

          {/* Email · Phone · Address */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ContactCard
              label="Email"
              value={CONTACT.email}
              hint="For enquiries and reservations"
              href={`mailto:${CONTACT.email}`}
              icon={Mail}
              delay={0}
            />
            <ContactCard
              label="Contact / Phone"
              value={CONTACT.phone}
              hint="Direct call & WhatsApp inquiries"
              href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
              icon={Phone}
              delay={0.1}
            />
            <ContactCard
              label="Address"
              value={CONTACT.address}
              hint="Dubai, United Arab Emirates"
              icon={MapPin}
              delay={0.2}
            />
          </div>
        </div>
      </section>
    </PageFade>
  );
}
