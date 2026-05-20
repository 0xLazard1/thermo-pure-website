export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky">
          Phase 1 · Foundation
        </p>

        <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight">
          <span className="text-sky-deep">THERMO</span>{" "}
          <span className="text-leaf">PURE</span>
        </h1>

        <p className="mt-6 font-serif italic text-xl text-ink-soft">
          Nettoyage à basse pression, sans produit chimique.
        </p>

        <p className="mt-12 text-sm text-ink/60">
          Foundation set — tokens TS, Tailwind extension, Google fonts
          (Bricolage Grotesque / Fraunces / JetBrains Mono), root layout.
          Prochaine phase : dossier images + composants UI partagés.
        </p>
      </div>
    </main>
  );
}
