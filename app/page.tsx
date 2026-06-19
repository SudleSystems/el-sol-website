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

interface MenuItem {
  name: string;
  emoji: string;
  special?: boolean;
}

const foodItems: MenuItem[] = [
  { name: "Taco", emoji: "🌮" },
  { name: "Mulitas", emoji: "🫓" },
  { name: "Ceviche", emoji: "🍋" },
  { name: "Tortas", emoji: "🥖" },
  { name: "Pupusas", emoji: "🫓" },
  { name: "Corn Cup", emoji: "🌽", special: true },
  { name: "Burrito", emoji: "🌯" },
  { name: "Sopes", emoji: "🫓" },
  { name: "Twist Potato", emoji: "🥔", special: true },
  { name: "Quesadilla", emoji: "🧀" },
  { name: "Gordita", emoji: "🫓" },
  { name: "Nacho Fries", emoji: "🍟", special: true },
  { name: "Taco Birria", emoji: "🌮" },
  { name: "Nacho", emoji: "🧀", special: true },
  { name: "Loaded Potato", emoji: "🥔", special: true },
  { name: "Taco Salad Bowl", emoji: "🥗", special: true },
];

const drinks: MenuItem[] = [
  { name: "Orchata", emoji: "🥛" },
  { name: "Pina", emoji: "🍍" },
  { name: "Jamaica", emoji: "🌺" },
  { name: "Tamarindo", emoji: "🟤" },
  { name: "Champurrado", emoji: "☕" },
  { name: "Chicharritas", emoji: "🍿" },
  { name: "Chilindrina", emoji: "🍿" },
];

const specials = foodItems.filter((item) => item.special);

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
};

function MenuCard({
  item,
  featured = false,
}: {
  item: MenuItem;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 p-5 rounded-xl text-center transition-all duration-200 hover:-translate-y-1 cursor-default ${
        featured
          ? "bg-dark-card border-2 border-brand-gold shadow-lg shadow-brand-gold/10"
          : "bg-dark-card border border-dark-border hover:border-brand-orange/40 hover:shadow-lg hover:shadow-brand-orange/10"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-full whitespace-nowrap">
          Special
        </span>
      )}
      <span className="text-3xl leading-none">{item.emoji}</span>
      <span
        className={`font-heading text-xl tracking-wide leading-tight ${
          featured ? "text-brand-gold" : "text-white"
        }`}
      >
        {item.name}
      </span>
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

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center bg-black pt-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-brand-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-red/5 rounded-full blur-3xl" />
          </div>

          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-6 py-14 lg:py-20 lg:pl-12 xl:pl-20 relative z-10">
            <span className="inline-flex items-center gap-2 bg-brand-red/15 text-brand-red border border-brand-red/25 text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              Columbus, Nebraska
            </span>

            <h1 className="font-heading leading-none mb-4">
              <span className="block text-[5.5rem] sm:text-[7rem] xl:text-[9rem] text-brand-orange drop-shadow-lg">
                El Sol
              </span>
              <span className="block text-2xl sm:text-3xl xl:text-4xl text-white/80 tracking-[0.3em] uppercase -mt-2">
                Mexican Food
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6 lg:justify-start justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-brand-orange to-transparent" />
              <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-brand-orange to-transparent" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl xl:text-4xl text-brand-gold leading-tight mb-3">
              Tacos, Tortas, Burritos Y Mas!
            </h2>
            <p className="text-white/55 italic text-base sm:text-lg mb-10 font-light">
              ¡Ingredientes Frescos y Sabor Auténtico!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="bg-brand-orange text-black font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-brand-gold transition-colors text-center"
              >
                Ver Menú
              </a>
              <Link
                href="/catering"
                className="border-2 border-brand-orange text-brand-orange font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-brand-orange hover:text-black transition-colors text-center"
              >
                Book Catering
              </Link>
            </div>
          </div>

          {/* Right: Menu flyer image */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-6 py-12 lg:pr-12 xl:pr-20 relative z-10">
            <div className="relative w-full max-w-xs xl:max-w-sm">
              <div className="absolute -inset-6 bg-brand-orange/8 rounded-3xl blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-b from-brand-orange/20 to-brand-red/20 rounded-2xl" />
              <Image
                src="/elsolmexicanfood.webp"
                alt="El Sol Mexican Food — Menu"
                width={480}
                height={967}
                className="relative w-full h-auto rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── MENU ── */}
        <section id="menu" className="py-24 px-4 sm:px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <p className="font-heading text-brand-red text-xl tracking-[0.35em] uppercase mb-1">
                Lo Que Ofrecemos
              </p>
              <h2 className="font-heading text-6xl sm:text-7xl text-white">
                Nuestro Menú
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px flex-1 max-w-28 bg-brand-orange/30" />
                <div className="w-2 h-2 bg-brand-orange rounded-full" />
                <div className="h-px flex-1 max-w-28 bg-brand-orange/30" />
              </div>
            </div>

            {/* Food */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-dark-border">
                <span className="text-2xl">🌮</span>
                <h3 className="font-heading text-4xl text-brand-orange">Food</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {foodItems.map((item) => (
                  <MenuCard key={item.name} item={item} featured={!!item.special} />
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-dark-border">
                <span className="text-2xl">🥤</span>
                <h3 className="font-heading text-4xl text-brand-orange">
                  Drinks & Más
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {drinks.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Specials */}
            <div>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-gold/25">
                <span className="text-2xl">⭐</span>
                <h3 className="font-heading text-4xl text-brand-gold">Specials</h3>
                <span className="ml-auto text-white/30 text-sm font-medium uppercase tracking-wider">
                  Fan Favorites
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specials.map((item) => (
                  <MenuCard key={`sp-${item.name}`} item={item} featured />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CATERING TEASER ── */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-black">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/6 rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 mb-6">
              ¡Celebremos Juntos!
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl text-white leading-none mb-5">
              Catering Services
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Bringing bold, authentic Mexican flavors to your events in Columbus, NE
              and surrounding areas. Weddings, quinceañeras, corporate events, and more.
            </p>
            <Link
              href="/catering"
              className="inline-flex items-center gap-3 bg-brand-orange text-black font-bold text-sm px-10 py-5 uppercase tracking-widest hover:bg-brand-gold transition-colors"
            >
              Learn More About Catering
              <span className="text-lg font-normal">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
