import { Link } from "react-router-dom";
import { pricingPlans } from "../data/siteContent";

function Pricing() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Simple, Scalable Pricing</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Choose a plan based on your fleet size and operational complexity. Upgrade as you grow.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-blue-600">{plan.price}</p>
            <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <Link
              to="/request-demo"
              className="mt-6 inline-flex h-10 items-center justify-center self-start rounded-lg bg-blue-600 px-4 text-sm font-semibold leading-none text-white transition hover:bg-blue-700"
            >
              Request Demo
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
