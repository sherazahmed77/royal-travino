import {
  Armchair,
  BadgeCheck,
  Briefcase,
  CalendarClock,
  Compass,
  Gem,
  GraduationCap,
  ShieldCheck,
  Timer,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Media                                                              */
/* ------------------------------------------------------------------ */

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/35027116/14838738_3840_2160_30fps.mp4";
export const HERO_POSTER = "/images/hero-poster.jpg";

export const STOCK = {
  burjNight:
    "https://images.pexels.com/photos/5577693/pexels-photo-5577693.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  downtown:
    "https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  marina:
    "https://images.pexels.com/photos/28350360/pexels-photo-28350360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  palm: "https://images.pexels.com/photos/33710116/pexels-photo-33710116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  desert:
    "https://images.pexels.com/photos/38687359/pexels-photo-38687359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  skyline:
    "https://images.pexels.com/photos/32410197/pexels-photo-32410197.png?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  aerial:
    "https://images.pexels.com/photos/36738857/pexels-photo-36738857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  school:
    "https://images.pexels.com/photos/8457625/pexels-photo-8457625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
  office:
    "https://images.pexels.com/photos/4964751/pexels-photo-4964751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Contact Information                                                */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  email: "muniumawan3@gmail.com",
  phone: "+971 55 904 9324",
  address: "H40 Production City, Dubai",
};

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    id: "school-pick-drop",
    name: "School Pick & Drop",
    tagline: "Safe journeys for young passengers",
    description:
      "Safe, reliable and comfortable daily transportation for students, with professional drivers and carefully planned schedules.",
    longDescription:
      "A dependable door-to-door service designed around the school day. Our professional drivers follow consistent morning and afternoon routes, so students travel in comfort and arrive on time — while parents enjoy complete peace of mind. We also provide dedicated, trained drivers exclusively for this service to ensure the highest level of safety and reliability for your children.",
    highlights: [
      "Consistent morning & afternoon schedules",
      "Professional, courteous drivers",
      "Comfortable, air-conditioned vehicles",
      "Door-to-door convenience for families",
    ],
    image: STOCK.school,
    icon: GraduationCap,
  },
  {
    id: "office-pick-drop",
    name: "Office Pick & Drop",
    tagline: "Corporate commuting, refined",
    description:
      "Reliable daily transportation for employees and corporate clients — punctual, comfortable and professionally managed.",
    longDescription:
      "Begin and end the workday the right way. We provide dependable pick-up and drop-off for professionals and corporate teams across Dubai, with scheduling built around your working hours and the standard of comfort your day deserves. We also provide dedicated, experienced drivers exclusively for this service to ensure a smooth, consistent, and professional commute every day.",
    highlights: [
      "Schedules aligned with your workday",
      "Ideal for employees & corporate clients",
      "Comfortable vehicles for daily travel",
      "Punctual, predictable service",
    ],
    image: STOCK.office,
    icon: Briefcase,
  },
  {
    id: "full-day-booking",
    name: "Full Day Booking",
    tagline: "Your chauffeur, for the entire day",
    description:
      "A luxury vehicle and professional chauffeur at your service for the entire day — wherever the day takes you.",
    longDescription:
      "For days with many stops and no room for compromise. Reserve a premium vehicle with a dedicated chauffeur for the full day — from morning meetings across the city to evening engagements, your car and driver remain at your disposal.",
    highlights: [
      "Dedicated vehicle & chauffeur for the day",
      "Effortless multi-stop itineraries",
      "Business, leisure & special occasions",
      "Complete flexibility with your schedule",
    ],
    image: "/images/fleet-mercedes.jpg",
    icon: CalendarClock,
  },
  {
    id: "hourly-booking",
    name: "Hourly Booking",
    tagline: "Premium travel, by the hour",
    description:
      "Flexible premium transportation arranged around your schedule — for as many hours as you need.",
    longDescription:
      "When plans change by the hour, your transport should keep pace. Hourly booking places a luxury vehicle and professional driver on standby, ready to move whenever you are — for meetings, errands, events and everything in between.",
    highlights: [
      "Book only for the hours you require",
      "Driver on standby between stops",
      "Ideal for meetings, errands & events",
      "Travel that moves on your time",
    ],
    image: "/images/chauffeur.jpg",
    icon: Timer,
  },
  {
    id: "tourism-services",
    name: "Tourism Services",
    tagline: "Dubai, explored in style",
    description:
      "Premium transportation for tourists exploring Dubai and the UAE — iconic sights experienced in complete comfort.",
    longDescription:
      "From the heights of the Burj Khalifa to the golden dunes beyond the city, experience the UAE's most remarkable destinations with a professional driver and the comfort of a luxury vehicle — no maps, no parking, no worries.",
    highlights: [
      "Iconic Dubai & UAE destinations",
      "Comfortable private sightseeing",
      "Flexible itineraries for visitors",
      "Airport-to-attraction convenience",
    ],
    image: STOCK.marina,
    icon: Compass,
  },
];

/* ------------------------------------------------------------------ */
/*  Why Choose Royal Travino                                           */
/* ------------------------------------------------------------------ */

export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    name: "Professional Drivers",
    description:
      "Experienced, courteous and professional drivers, focused on providing an exceptional passenger experience on every journey.",
    icon: BadgeCheck,
  },
  {
    name: "Comfortable Ride",
    description:
      "Sit back and enjoy smooth, spacious and comfortable transportation — every mile, every time.",
    icon: Armchair,
  },
  {
    name: "Luxury Vehicles",
    description:
      "Travel in premium and luxury vehicles suited to business, tourism, airport transfers and special occasions.",
    icon: Gem,
  },
  {
    name: "Safe & Reliable",
    description:
      "Passenger safety, punctuality, reliability and professional service are our highest priorities.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/*  Fleet                                                              */
/* ------------------------------------------------------------------ */

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  capacity: string;
  idealFor: string[];
  image: string;
}

export const FLEET: Vehicle[] = [
  {
    id: "lexus",
    name: "Lexus",
    category: "Executive Luxury Sedan",
    description:
      "Quiet confidence in motion. Lexus blends refined craftsmanship with a serene cabin, making every journey — from the airport to the boardroom — effortlessly comfortable.",
    capacity: "Up to 3 guests",
    idealFor: ["Airport Transfers", "Corporate Travel", "Special Occasions"],
    image: "/images/fleet-lexus.jpg",
  },
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser",
    category: "Prestige SUV",
    description:
      "The definitive full-size SUV of the region. Commanding presence, generous space and go-anywhere ability — equally at home on Sheikh Zayed Road or the road toward the desert.",
    capacity: "Up to 6 guests",
    idealFor: ["Family Travel", "Dubai Tourism", "Group Airport Transfers"],
    image: "/images/fleet-landcruiser.jpg",
  },
  {
    id: "byd",
    name: "BYD",
    category: "Modern Premium Sedan",
    description:
      "Contemporary luxury with a forward-looking spirit. BYD offers a smooth, quiet ride and modern comforts — an elegant choice for the modern traveller.",
    capacity: "Up to 3 guests",
    idealFor: ["City Transfers", "Business Travel", "Daily Commutes"],
    image: "/images/fleet-byd.jpg",
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    category: "First-Class Sedan",
    description:
      "The international symbol of chauffeured luxury. A journey by Mercedes-Benz is defined by poise, presence and an uncompromising standard of comfort.",
    capacity: "Up to 3 guests",
    idealFor: ["VIP & Corporate", "Airport Transfers", "Special Occasions"],
    image: "/images/fleet-mercedes.jpg",
  },
  {
    id: "mercedes-viano",
    name: "Mercedes-Benz Viano",
    category: "Luxury People Carrier",
    description:
      "First-class travel for families and groups. The Viano combines the prestige of Mercedes-Benz with the space and versatility to carry everyone — and everything — in comfort.",
    capacity: "Up to 6 guests",
    idealFor: ["Family & Group Travel", "Airport Transfers", "Full-Day Chauffeur"],
    image: "/images/fleet-viano.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Dubai tourism                                                      */
/* ------------------------------------------------------------------ */

export interface Destination {
  name: string;
  note: string;
  image: string;
}

export const DESTINATIONS: Destination[] = [
  { name: "Burj Khalifa", note: "The world's tallest icon", image: STOCK.burjNight },
  { name: "Downtown Dubai", note: "The heart of the city", image: STOCK.downtown },
  { name: "Dubai Marina", note: "Waterfront elegance", image: STOCK.marina },
  { name: "Palm Jumeirah", note: "An island landmark", image: STOCK.palm },
  { name: "The Desert", note: "Golden horizons", image: STOCK.desert },
  { name: "Dubai Skyline", note: "A city of light", image: STOCK.skyline },
];

export const MARQUEE_ITEMS = [
  "Burj Khalifa",
  "Dubai Marina",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Dubai Mall",
  "Jumeirah",
  "Sheikh Zayed Road",
  "The Desert",
  "Airport Transfers",
  "Corporate Travel",
];
