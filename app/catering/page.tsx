import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "El Sol Mexican Catering — Taco Bar Service · Columbus, NE",
  description:
    "El Sol Mexican Food offers authentic taco bar catering in Columbus, NE. Fresh tacos for birthdays, quinceañeras, corporate events, and special occasions. Call (402) 504-0458.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "El Sol Mexican Food Catering",
  description:
    "Authentic taco bar catering service for birthdays, quinceañeras, corporate events, and special occasions in Columbus, NE.",
  hasMenu: {
    "@type": "Menu",
    name: "Taco Bar",
    description:
      "Tacos only — a full taco bar setup brought to your event. Fresh, authentic Mexican tacos made to order.",
  },
  provider: {
    "@type": "FoodEstablishment",
    name: "El Sol Mexican Food",
    address: {
      "@type": "PostalAddress",
      streetAddress: "304 23rd St",
      addressLocality: "Columbus",
      addressRegion: "NE",
      postalCode: "68601",
      addressCountry: "US",
    },
    telephone: "+1-402-504-0458",
  },
  areaServed: {
    "@type": "City",
    name: "Columbus",
    containedInPlace: {
      "@type": "State",
      name: "Nebraska",
    },
  },
  telephone: "+1-402-504-0458",
  url: "https://elsolmexican.food/catering",
};

const birthdayPhotos = [
  { src: "/catering/birthdays/birthday-1.jpg", alt: "Birthday taco bar celebration" },
  { src: "/catering/birthdays/birthday-2.jpg", alt: "Birthday party catering by El Sol" },
];

const eventPhotos = [
  { src: "/catering/events/heart-tacos.jpg", alt: "Heart-shaped tacos for special events" },
];

function SectionHeader({ heading }: { heading: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">
        {heading}
      </h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="h-px flex-1 max-w-20 bg-brand-orange/40" />
        <div className="w-2 h-2 bg-brand-orange rounded-full" />
        <div className="h-px flex-1 max-w-20 bg-brand-orange/40" />
      </div>
    </div>
  );
}

export default function CateringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header activePage="catering" />

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
              <p
                className="font-heading text-6xl sm:text-7xl tracking-[0.25em] text-white mt-8 uppercase"
                style={{ textShadow: "0 0 40px rgba(255, 120, 0, 0.4), 0 2px 8px rgba(0,0,0,0.6)" }}
              >
                Catering
              </p>
              <p className="font-heading text-xl sm:text-2xl tracking-[0.25em] text-white/70 mt-2 uppercase">
                Taco Bar Service · Columbus, NE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contact"
                  className="rounded-full text-white font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-all hover:brightness-110 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #E04500 0%, #CC2200 100%)",
                    boxShadow: "0 0 28px rgba(204, 50, 0, 0.55), 0 4px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  Book Your Event
                </a>
                <Link
                  href="/#menu"
                  className="rounded-full border-2 border-brand-orange text-brand-orange font-bold text-sm px-10 py-4 uppercase tracking-widest text-center transition-all hover:bg-brand-orange/10 active:scale-95"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 208, 0, 0.25), 0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  View Our Menu
                </Link>
              </div>
            </div>
          </section>

          {/* ── ABOUT CATERING ── */}
          <section className="py-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-6">
                Tacos Para Tu Evento
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl text-white leading-none mb-6">
                Our Catering Service
              </h2>
              <p className="text-white/65 text-lg leading-relaxed">
                El Sol catering is a <strong className="text-white">taco bar service</strong> — we set up a full taco station at your event and serve fresh, authentic Mexican tacos made to order. We bring everything you need: the tortillas, the meats, the salsas, and the flavor.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mt-4">
                Perfect for birthdays, quinceañeras, wedding receptions, corporate gatherings, and any occasion worth celebrating in Columbus, NE and surrounding areas.
              </p>
            </div>
          </section>

          {/* ── BIRTHDAY CELEBRATIONS ── */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeader heading="Birthday Celebrations" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {birthdayPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-card border border-dark-border"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SPECIAL EVENTS ── */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <SectionHeader heading="Special Events" />
              <div className="flex flex-col items-center gap-4">
                {eventPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className="w-full rounded-xl overflow-hidden border border-dark-border"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={670}
                      height={349}
                      className="w-full h-auto"
                      sizes="(max-width: 640px) 100vw, 670px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY EL SOL ── */}
          <section className="py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="font-heading text-5xl sm:text-6xl text-white">
                  Why El Sol?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {[
                  {
                    num: "01",
                    title: "Tacos Only — Done Right",
                    body: "We specialize in one thing: an authentic taco bar. That focus means every taco is made with care and real Mexican flavor.",
                  },
                  {
                    num: "02",
                    title: "Fresh Ingredients",
                    body: "Every dish made with fresh, quality ingredients — the same care we bring to the food truck, now at your event.",
                  },
                  {
                    num: "03",
                    title: "Local & Reliable",
                    body: "Columbus-based and community trusted. We show up on time, every time, ready to serve.",
                  },
                ].map((item) => (
                  <div key={item.num}>
                    <div className="font-heading text-7xl text-brand-orange/30 mb-3 leading-none">
                      {item.num}
                    </div>
                    <h3 className="font-heading text-2xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact" className="py-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-dark-card border border-dark-border rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
                </div>
                <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-6">
                  ¡Contáctanos!
                </span>
                <h2 className="font-heading text-5xl sm:text-6xl text-white mb-4">
                  Book Your Taco Bar
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                  Ready to bring El Sol to your next event? Give us a call and
                  let&apos;s make it happen.
                </p>
                <a
                  href="tel:4025040458"
                  className="group inline-flex flex-col items-center gap-1"
                >
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    Call us today
                  </span>
                  <span className="font-heading text-5xl sm:text-6xl text-brand-orange tracking-wide">
                    (402) 504-0458
                  </span>
                </a>
                <div className="mt-10 pt-8 border-t border-dark-border">
                  <p className="text-white/30 text-sm">
                    304 23rd St · Columbus, NE 68601
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
