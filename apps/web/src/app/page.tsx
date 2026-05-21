export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600">
          Coming soon
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
          DotEcon Online
        </h1>
        <p className="mb-8 text-xl text-gray-500">
          Education and tools that empower any developer to build
          production-grade software — with AI as a force multiplier, not a
          shortcut.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@doteconline.com"
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get notified at launch
          </a>
        </div>
      </div>
    </main>
  );
}
