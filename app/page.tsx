import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "El Sol Mexican Food — Tacos, Burritos & More in Columbus, NE",
  description:
    "El Sol Mexican Food truck in Columbus, NE. Authentic tacos, tortas, burritos, ceviche, pupusas and more. Fresh ingredients, authentic Mexican flavor.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "El Sol Mexican Food",
  description: "Authentic Mexican food truck in Columbus, NE",
  address: {
    "@type": "PostalAddress",
    streetAddress: "304 23rd St",
    addressLocality: "Columbus",
    addressRegion: "NE",
    postalCode: "68601",
    addressCountry: "US",
  },
  telephone: "+1-402-504-0458",
  servesCuisine: "Mexican",
  url: "https://elsolmexican.food",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "11:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "11:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "11:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "11:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "11:00",
      closes: "03:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "03:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "01:00",
    },
  ],
};

const menuItems = [
  { name: "Taco", image: "/menu-items/taco.png" },
  { name: "Mulitas", image: "/menu-items/mulita.jpg" },
  { name: "Ceviche", image: "/menu-items/ceviche.png" },
  { name: "Tortas", image: "/menu-items/torta.png" },
  { name: "Pupusas", image: "/menu-items/papusa.png" },
  { name: "Burrito", image: "/menu-items/burrito.png" },
  { name: "Sopes", image: "/menu-items/sopes.jpg" },
  { name: "Quesadilla", image: "/menu-items/quesadilla.png" },
  { name: "Gordita", image: "/menu-items/gordita.jpg" },
  { name: "Taco Birria", image: "/menu-items/birria-tacos.jpg" },
];

const specials: { name: string; image: string | null }[] = [
  { name: "Corn Cup", image: "/specials/corn-cup.png" },
  { name: "Nacho Fries", image: "/specials/nacho-fries.jpg" },
  { name: "Potato Twist", image: "/specials/potato-twist.png" },
  { name: "Taco Salad Bowl", image: "/specials/taco-salad-bowl.jpg" },
  { name: "Nachos", image: "/menu-items/nachos.png" },
  { name: "Loaded Potato", image: "/menu-items/loaded-potato.png" },
];

const otherDrinks = [
  "Pina",
  "Jamaica",
  "Tamarindo",
  "Champurrado",
  "Chicharritas",
  "Chilindrina",
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/%C3%89l+Sol/@41.438963,-97.3330076,17z/data=!4m18!1m9!3m8!1s0x8790e9c671af0285:0x91333df4bcc8c93c!2zw4lsIFNvbA!8m2!3d41.438959!4d-97.3304327!9m1!1b1!16s%2Fg%2F11ysyn5dh1!3m7!1s0x8790e9c671af0285:0x91333df4bcc8c93c!8m2!3d41.438959!4d-97.3304327!9m1!1b1!16s%2Fg%2F11ysyn5dh1?entry=ttu";


function SectionHeader({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="font-heading text-brand-red text-xl tracking-[0.35em] uppercase mb-1">
        {eyebrow}
      </p>
      <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
        {heading}
      </h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="h-px flex-1 max-w-24 bg-brand-orange/40" />
        <div className="w-2 h-2 bg-brand-orange rounded-full" />
        <div className="h-px flex-1 max-w-24 bg-brand-orange/40" />
      </div>
    </div>
  );
}

function PhotoCard({ name, image }: { name: string; image: string | null }) {
  return (
    <div className="rounded-xl overflow-hidden bg-dark-card border border-dark-border">
      <div className="relative aspect-[4/3]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0830] to-[#0A0515]" />
        )}
      </div>
      <div className="py-3 px-2 text-center">
        <p className="font-heading text-lg sm:text-xl text-white tracking-wide leading-tight">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header activePage="home" />

      <div>
        <main>
          {/* ── HERO ── */}
          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
            <Image
              src="/hero-background.png"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
              aria-hidden="true"
            />
            {/* Fade the bottom of the hero photo into the page background — eliminates the hard cut */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none z-[5]"
              style={{ background: "linear-gradient(to bottom, transparent 0%, #030010 100%)" }}
            />
            <div className="relative z-10 flex flex-col items-center px-4 py-16 text-center">
              <Image
                src="/logo/el-sol-logo.png"
                alt="El Sol Mexican Food"
                width={560}
                height={560}
                className="w-72 sm:w-[380px] md:w-[480px] lg:w-[560px] h-auto drop-shadow-2xl"
                priority
                unoptimized
              />
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#menu"
                  className="rounded-full text-white font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-all hover:brightness-110 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #E04500 0%, #CC2200 100%)",
                    boxShadow: "0 0 28px rgba(204, 50, 0, 0.55), 0 4px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  Ver Menú
                </a>
                <Link
                  href="/catering"
                  className="rounded-full border-2 border-brand-orange text-brand-orange font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-all hover:bg-brand-orange/10 active:scale-95"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 208, 0, 0.25), 0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  Book Catering
                </Link>
              </div>
            </div>
          </section>

          {/* ── MENU ITEMS ── */}
          <section id="menu" className="py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <SectionHeader eyebrow="Lo Que Ofrecemos" heading="Nuestro Menú" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {menuItems.map((item) => (
                  <PhotoCard key={item.name} name={item.name} image={item.image} />
                ))}
              </div>
            </div>
          </section>

          {/* ── SPECIALS ── */}
          <section id="specials" className="py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="Favoritos del Camión"
                heading="Especiales"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {specials.map((item) => (
                  <PhotoCard
                    key={item.name}
                    name={item.name}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── DRINKS ── */}
          <section id="drinks" className="py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <SectionHeader eyebrow="Para Beber" heading="Bebidas" />

              {/* Orchata — photo card */}
              <div className="flex justify-center mb-10">
                <div className="w-full max-w-xs rounded-xl overflow-hidden bg-dark-card border border-dark-border">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/drinks/orchata.png"
                      alt="Orchata"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80vw, 320px"
                    />
                  </div>
                  <div className="py-3 px-2 text-center">
                    <p className="font-heading text-xl text-white tracking-wide">
                      Orchata
                    </p>
                  </div>
                </div>
              </div>

              {/* Other drinks — text list */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {otherDrinks.map((drink) => (
                  <li
                    key={drink}
                    className="bg-dark-card border border-dark-border rounded-xl py-4 px-3 text-center"
                  >
                    <p className="font-heading text-xl text-white tracking-wide">
                      {drink}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── CATERING TEASER ── */}
          <section className="py-24 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-6">
                ¡Celebremos Juntos!
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-5">
                Catering
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                Taco bar service for your events in Columbus, NE and surrounding
                areas. Birthdays, quinceañeras, corporate events, and more —
                authentic tacos brought straight to you.
              </p>
              <Link
                href="/catering"
                className="inline-flex items-center gap-3 bg-brand-orange text-black font-bold text-sm px-10 py-5 uppercase tracking-widest"
              >
                Learn More About Catering
                <span className="text-lg font-normal">→</span>
              </Link>
            </div>
          </section>

          {/* ── REVIEWS ── */}
          <section id="reviews" className="py-24 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-10">
                ¡Nuestros Clientes Hablan!
              </h2>

              <div className="inline-flex items-center gap-4 bg-white/10 rounded-2xl px-6 py-5 mb-10 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Google">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-lg leading-tight">
                    Google Reviews
                  </p>
                  <div className="flex gap-0.5 mt-1" aria-label="5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-[#FBBC05]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#1A0000] font-bold text-sm px-8 py-4 uppercase tracking-widest rounded-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Read Our Reviews on Google
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
