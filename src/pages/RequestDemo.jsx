import { useRef, useState } from "react";

const categoryOptions = ["All", "Sector Focus", "Legal Structure"];

const inputClass =
  "mt-1 h-10 w-full rounded-lg border border-bm-border bg-bm-bg px-3 text-sm text-white focus:border-bm-accent focus:outline-none";

const textareaClass =
  "mt-1 w-full rounded-lg border border-bm-border bg-bm-bg px-3 py-2 text-sm text-white focus:border-bm-accent focus:outline-none";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  category: categoryOptions[0],
  branchCount: "",
  teamSize: "",
  preferredDate: "",
  goals: "",
};

function RequestDemo() {
  const preferredDateInputRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const apiBaseUrl = (() => {
    let fromEnv = import.meta.env.VITE_API_BASE_URL?.trim();
    if (fromEnv) {
      fromEnv = fromEnv.replace(/\/$/, "");
      if (fromEnv.endsWith("/api")) return fromEnv.slice(0, -4);
      return fromEnv;
    }
    if (import.meta.env.DEV) return "http://localhost:5002";
    return "";
  })();

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const openPreferredDatePicker = () => {
    const input = preferredDateInputRef.current;
    if (!input) return;
    input.focus();
    if (typeof input.showPicker === "function") {
      input.showPicker();
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        businessType: formData.category,
      };

      const response = await fetch(`${apiBaseUrl}/api/demo-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit demo request right now.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-bm-bg py-16 text-white">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bm-bg/90 to-bm-bg" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-14 h-64 w-64 rounded-full bg-bm-accent/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-bm-warm/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr,1fr]">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
          <p className="inline-block rounded-full border border-bm-accent/40 bg-bm-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bm-accent">
            Request Demo
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            See BuildMind tailored to your construction operations.
          </h1>
          <p className="mt-4 max-w-xl text-slate-200">
            Book a guided walkthrough focused on your business type, current workflow challenges,
            and growth goals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-semibold text-bm-accent">Personalized AI Recommendations</p>
              <p className="mt-1 text-sm text-slate-300">Mapped to your projects, workforce, and site data.</p>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-semibold text-bm-accent">Industry-specific Setup Plan</p>
              <p className="mt-1 text-sm text-slate-300">Built for contractors, developers, and infrastructure teams.</p>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-semibold text-bm-accent">Live Product Walkthrough</p>
              <p className="mt-1 text-sm text-slate-300">Projects, workforce, materials, equipment, and finance.</p>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-semibold text-bm-accent">Implementation Roadmap</p>
              <p className="mt-1 text-sm text-slate-300">Clear timeline, integrations, and rollout milestones.</p>
            </article>
          </div>
        </div>

        <div className="rounded-3xl border border-bm-border bg-bm-card p-8 text-bm-text shadow-2xl">
          <h2 className="text-2xl font-bold text-white">Schedule Your Demo</h2>
          <p className="mt-2 text-sm text-bm-muted">
            Fill in your details and our team will reach out within one business day.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800">
              <p className="font-semibold">Thank you for submitting your request.</p>
              <p className="mt-2">
                We will contact you within 1 to 2 business days. For further queries, you can contact our
                support team at{" "}
                <a href="mailto:skdev3@gmail.com" className="font-medium underline">
                  skdev3@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {errorMessage ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 sm:col-span-2">
                  {errorMessage}
                </div>
              ) : null}
              <label className="text-sm font-medium">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onFieldChange}
                  required
                  className={inputClass}
                />
              </label>

              <label className="text-sm font-medium">
                Work Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onFieldChange}
                  required
                  className={inputClass}
                />
              </label>

              <label className="text-sm font-medium">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onFieldChange}
                  placeholder="+1 555 123 4567"
                  className={inputClass}
                />
              </label>

              <label className="text-sm font-medium">
                Company Name
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={onFieldChange}
                  required
                  className={inputClass}
                />
              </label>

              <label className="text-sm font-medium">
                Category
                <select
                  name="category"
                  value={formData.category}
                  onChange={onFieldChange}
                  required
                  className={inputClass}
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-medium">
                Number of branches
                <input
                  type="number"
                  name="branchCount"
                  min={1}
                  required
                  value={formData.branchCount}
                  onChange={onFieldChange}
                  placeholder="e.g., 5"
                  className={inputClass}
                />
              </label>

              <label className="text-sm font-medium">
                Team / project scale
                <input
                  type="text"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={onFieldChange}
                  placeholder="e.g., 8 active projects, 200 field staff"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col text-sm font-medium">
                Preferred Demo Date
                <div className="relative mt-1 h-10">
                  <input
                    ref={preferredDateInputRef}
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={onFieldChange}
                    onClick={openPreferredDatePicker}
                    className="h-full w-full rounded-lg border border-bm-border bg-bm-bg px-3 pr-10 text-sm text-white focus:border-bm-accent focus:outline-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                  />
                  <button
                    type="button"
                    onClick={openPreferredDatePicker}
                    aria-label="Open calendar"
                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-bm-muted hover:text-white"
                  >
                    📅
                  </button>
                </div>
              </label>

              <label className="text-sm font-medium sm:col-span-2">
                Goals and Requirements
                <textarea
                  name="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={onFieldChange}
                  placeholder="Share your current challenges and objectives. (optional)"
                  className={textareaClass}
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-lg bg-bm-accent px-5 py-3 text-sm font-semibold text-bm-bg transition hover:bg-sky-300 sm:col-span-2"
              >
                {submitting ? "Submitting..." : "Submit Demo Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default RequestDemo;
