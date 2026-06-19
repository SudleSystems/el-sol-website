import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "El Sol Mexican Catering — Columbus, NE Events & Parties",
  description:
    "El Sol Mexican Food offers authentic Mexican catering in Columbus, NE. Perfect for weddings, quinceañeras, corporate events, and private parties. Call (402) 504-0458.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "El Sol Mexican Food Catering",
  description:
    "Authentic Mexican catering services in Columbus, NE for weddings, events, and parties.",
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

const events = [
  {
    icon: "💒",
    title: "Weddings",
    desc: "Make your special day unforgettable with authentic Mexican cuisine.",
  },
  {
    icon: "🎉",
    title: "Quinceañeras",
    desc: "Honor the tradition with bold, festive flavors and beautiful presentation.",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Impress your team and clients with fresh, crowd-pleasing Mexican food.",
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    desc: "Celebrate in style with tacos, burritos, and everything guests love.",
  },
  {
    icon: "🎪",
    title: "Community Events",
    desc: "From fundraisers to festivals — we bring the fiesta to you.",
  },
  {
    icon: "🏡",
    title: "Private Gatherings",
    desc: "Any occasion calls for great food. Let El Sol handle the cooking.",
  },
];

export default function CateringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header activePage="catering" />

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-black pt-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl" />
          </div>
          <div className="text-center px-4 relative z-10 py-20 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-brand-red/15 text-brand-red border border-brand-red/25 text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              Columbus, NE & Surrounding Areas
            </span>
            <h1 className="font-heading leading-none mb-4">
              <span className="block text-[5rem] sm:text-[7rem] xl:text-[9rem] text-brand-orange drop-shadow-lg">
                Catering
              </span>
              <span className="block text-2xl sm:text-3xl xl:text-4xl text-white/80 tracking-[0.3em] uppercase -mt-2">
                El Sol Mexican Food
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-16 bg-gradient-to-r from-brand-orange to-transparent" />
              <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-brand-orange to-transparent" />
            </div>
            <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Authentic Mexican flavors brought directly to your event. From
              intimate family dinners to large celebrations — El Sol delivers
              the taste of real Mexican food to Columbus, NE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-brand-orange text-black font-bold text-sm px-10 py-4 uppercase tracking-widest hover:bg-brand-gold transition-colors"
              >
                Get In Touch
              </a>
              <Link
                href="/#menu"
                className="border-2 border-white/20 text-white/70 font-bold text-sm px-10 py-4 uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </section>

        {/* ── EVENTS WE CATER ── */}
        <section className="py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-heading text-brand-red text-xl tracking-[0.35em] uppercase mb-1">
                What We Offer
              </p>
              <h2 className="font-heading text-6xl sm:text-7xl text-white">
                Events We Cater
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px flex-1 max-w-28 bg-brand-orange/30" />
                <div className="w-2 h-2 bg-brand-orange rounded-full" />
                <div className="h-px flex-1 max-w-28 bg-brand-orange/30" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-brand-orange/40 hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-200 hover:-translate-y-1"
                >
                  <span className="text-4xl block mb-5">{event.icon}</span>
                  <h3 className="font-heading text-3xl text-brand-orange mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY EL SOL ── */}
        <section className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/4 rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-6xl sm:text-7xl text-white">
                Why El Sol?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                {
                  num: "01",
                  title: "Fresh Ingredients",
                  body: "Every dish made with fresh, quality ingredients — the same care we bring to the food truck, now at your event.",
                },
                {
                  num: "02",
                  title: "Authentic Flavor",
                  body: "Real Mexican recipes with bold, traditional flavors. Your guests won't forget it.",
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
        <section id="contact" className="py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
              </div>
              <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-6">
                ¡Contáctanos!
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl text-white mb-4">
                Book Your Event
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Ready to bring El Sol to your next event in Columbus, NE? Give
                us a call and let&apos;s make it happen.
              </p>
              <a
                href="tel:4025040458"
                className="group inline-flex flex-col items-center gap-1"
              >
                <span className="text-white/40 text-xs uppercase tracking-widest group-hover:text-brand-orange transition-colors">
                  Call us today
                </span>
                <span className="font-heading text-5xl sm:text-6xl text-brand-orange group-hover:text-brand-gold transition-colors tracking-wide">
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
    </>
  );
}
