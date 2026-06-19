import Link from "next/link";

interface HeaderProps {
  activePage?: "home" | "catering";
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-3xl text-brand-orange tracking-widest hover:text-brand-gold transition-colors"
        >
          El Sol
        </Link>
        <nav className="flex items-center gap-5 sm:gap-6">
          <a
            href={activePage === "home" ? "#menu" : "/#menu"}
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
              activePage === "home"
                ? "text-brand-orange"
                : "text-white/70 hover:text-brand-orange"
            }`}
          >
            Menu
          </a>
          <Link
            href="/catering"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
              activePage === "catering"
                ? "text-brand-orange"
                : "text-white/70 hover:text-brand-orange"
            }`}
          >
            Catering
          </Link>
          <a
            href="tel:4025040458"
            className="hidden sm:inline-flex bg-brand-orange text-black text-sm font-bold px-4 py-2 uppercase tracking-widest hover:bg-brand-gold transition-colors"
          >
            Call Us
          </a>
        </nav>
      </div>
    </header>
  );
}
