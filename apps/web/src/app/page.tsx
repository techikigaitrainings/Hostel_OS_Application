export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-accent" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">Hostel OS</span>
        </div>
        <nav className="text-sm text-ink-secondary">
          <span className="font-medium text-accent">Sign in</span>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
        <h1 className="mx-auto max-w-2xl text-5xl font-semibold leading-tight tracking-tight">
          The operating system for your hostel
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-secondary">
          Residents, beds, rent and operations — one calm, fast place to run
          your entire property business.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/sign-in"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-card transition hover:opacity-90"
          >
            Get started
          </a>
          <a
            href="#learn"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium transition hover:bg-background"
          >
            Learn more
          </a>
        </div>
      </section>
    </main>
  );
}
