// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Minimal footer with subtle ink-wash styling

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-parchment">
      <div className="max-w-[780px] mx-auto px-6 py-12">
        {/* Decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo/20 to-transparent" />
          <span className="font-serif-en text-xs text-ink-light tracking-[0.3em]">Kieran Liang</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo/20 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Quote */}
          <p className="font-wenkai text-sm text-ink-light tracking-wide">
            器以载道 · 技术为人
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-ink-light/60 mt-8 tracking-wide">
          © {new Date().getFullYear()} · Built with passion and purpose
        </p>
      </div>
    </footer>
  );
}
