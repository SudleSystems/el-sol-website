export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-border py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-heading text-4xl text-brand-orange tracking-widest mb-1">
              El Sol
            </p>
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              Mexican Food
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
              Encuéntranos
            </p>
            <p className="text-white/50">304 23rd St</p>
            <p className="text-white/50">Columbus, NE 68601</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
              Llámanos
            </p>
            <a
              href="tel:4025040458"
              className="text-brand-orange hover:text-brand-gold transition-colors text-xl font-bold tracking-wide"
            >
              (402) 504-0458
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-dark-border text-center">
          <p className="font-heading text-3xl text-brand-gold tracking-wide mb-2">
            ¡Gracias por preferirnos!
          </p>
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} El Sol Mexican Food · Columbus, NE
          </p>
        </div>
      </div>
    </footer>
  );
}
