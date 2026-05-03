import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Contact FleetMind AI</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Let us understand your operation and recommend the right AI rollout strategy for your fleet.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Talk to Product Specialist</h2>
        <p className="mt-2 text-slate-600">
          Request a demo and we will tailor the walkthrough to your business type and fleet size.
        </p>
        <Link
          to="/request-demo"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold leading-none text-white transition hover:bg-blue-700"
        >
          Request Demo
        </Link>
      </div>
    </div>
  );
}

export default Contact;
