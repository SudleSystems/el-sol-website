const hours = [
  { day: "Monday", hours: "11AM – 12AM" },
  { day: "Tuesday", hours: "11AM – 12AM" },
  { day: "Wednesday", hours: "11AM – 1AM" },
  { day: "Thursday", hours: "11AM – 1AM" },
  { day: "Friday", hours: "11AM – 3AM" },
  { day: "Saturday", hours: "11AM – 3AM" },
  { day: "Sunday", hours: "11AM – 1AM" },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-heading text-4xl text-brand-orange tracking-widest mb-1">
              El Sol
            </p>
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              Comida Mexicana
            </p>
          </div>

          {/* Location & Phone */}
          <div>
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-3">
              Encuéntranos
            </p>
            <p className="text-white/60 mb-1">304 23rd St</p>
            <p className="text-white/60 mb-4">Columbus, NE 68601</p>
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
              Llámanos
            </p>
            <a
              href="tel:4025040458"
              className="text-brand-orange text-xl font-bold tracking-wide"
            >
              (402) 504-0458
            </a>
          </div>

          {/* Hours */}
          <div>
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-3">
              Horario
            </p>
            <ul className="space-y-1.5">
              {hours.map(({ day, hours: h }) => (
                <li key={day} className="flex justify-between gap-4 text-sm">
                  <span className="text-white/50 w-24 flex-shrink-0">{day}</span>
                  <span className="text-white/80">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center">
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
