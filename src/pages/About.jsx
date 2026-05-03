import { aboutHighlights } from "../data/siteContent";

function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">About FleetMind AI</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        We are building a complete AI-powered fleet management ecosystem for organizations that need
        reliability, efficiency, and data-driven growth.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default About;
