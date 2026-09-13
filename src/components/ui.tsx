import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/*  Scroll reveal wrapper                                            */
/* ---------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Page transition shell                                            */
/* ---------------------------------------------------------------- */

export function PageFade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Eyebrow label                                                    */
/* ---------------------------------------------------------------- */

export function Eyebrow({
  children,
  center = false,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold",
        className
      )}
    >
      <span className="h-px w-9 bg-gold/60" />
      {children}
      {center && <span className="h-px w-9 bg-gold/60" />}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/*  Section heading                                                  */
/* ---------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <Reveal>
        <Eyebrow center={center}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ivory md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-[15px] leading-relaxed text-sand md:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Buttons                                                          */
/* ---------------------------------------------------------------- */

export function GoldLink({
  to,
  children,
  variant = "solid",
  className,
  arrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500",
        variant === "solid"
          ? "bg-gold text-ink hover:bg-gold-soft"
          : "border border-ivory/25 text-ivory hover:border-gold hover:text-gold",
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
          strokeWidth={1.5}
        />
      )}
    </Link>
  );
}

/* ---------------------------------------------------------------- */
/*  Image with graceful fallback                                     */
/* ---------------------------------------------------------------- */

export function SmartImage({
  src,
  alt,
  className,
  fallback = "/images/hero-poster.jpg",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? fallback : src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      // @ts-expect-error – fetchpriority is a valid HTML attr but not yet in TS types
      fetchpriority={eager ? "high" : "auto"}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}

/* ---------------------------------------------------------------- */
/*  Sub-page hero                                                    */
/* ---------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <header className="relative flex min-h-[62vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage src={image} alt={title} eager className="h-full w-full" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-44 lg:px-10">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-7 font-display text-5xl leading-[1.04] text-ivory md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl font-serif text-xl italic text-ivory/75 md:text-2xl">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.28}>
          <span className="mt-10 block h-px w-32 bg-gradient-to-r from-gold to-transparent" />
        </Reveal>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/*  Destination marquee                                              */
/* ---------------------------------------------------------------- */

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden border-y border-line bg-coal py-6", className)}>
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-serif text-lg italic tracking-wide text-ivory/55 md:text-xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Closing CTA band (contact — not booking)                         */
/* ---------------------------------------------------------------- */

export function CtaBand({
  title = (
    <>
      Arrive in Comfort. <span className="text-gold-grad">Travel in Style.</span>
    </>
  ),
  text = "Speak with our team about chauffeur services, daily transportation or exploring Dubai — we will be pleased to assist.",
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <SmartImage
          src="/images/hero-poster.jpg"
          alt="Dubai skyline at dusk"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-ink/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow center>Let Us Drive You</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] text-ivory md:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-sand md:text-base">
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10">
            <GoldLink to="/contact">Contact Our Team</GoldLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
