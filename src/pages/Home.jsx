import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  aiIntegrations,
  blogPosts,
  features,
  industries,
  stats,
  trustPoints,
} from "../data/siteContent";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{subtitle}</p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

function Home() {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            AI Based Fleet Management System
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Scale operations with intelligent fleet automation across every business segment.
          </h1>
          <p className="mt-5 max-w-2xl text-blue-50">
            FleetMind AI helps logistics, transport, delivery, construction, maintenance, rental,
            and public transport teams optimize routes, cut costs, and increase safety in one
            connected platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold leading-none text-blue-700 transition hover:bg-blue-50"
            >
              Explore Platform
            </a>
            <Link
              to="/request-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue-200 px-5 text-sm font-semibold leading-none text-white transition hover:bg-blue-500"
            >
              Request Demo
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto w-full max-w-6xl px-6 py-14">
        <SectionTitle
          title="Operational Solutions"
          subtitle="Purpose-built modules to run your entire fleet lifecycle in a single AI-first platform."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionTitle
            title="AI Integrations"
            subtitle="Embedded intelligence across dispatching, maintenance, safety, and demand planning."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {aiIntegrations.map((integration) => (
              <article key={integration.name} className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                <h3 className="text-lg font-semibold">{integration.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{integration.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          title="Industries We Cover"
          subtitle="Designed for mixed fleet organizations with unique operational demands."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionTitle
            title="Trusted and Secure"
            subtitle="Enterprise-grade reliability and governance for mission-critical fleet operations."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => (
              <article key={point} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-700">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="mx-auto w-full max-w-6xl px-6 py-16">
        <SectionTitle
          title="Insights and Blog"
          subtitle="Learn proven playbooks for AI-driven fleet optimization."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;