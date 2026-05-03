export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Fleet uptime improvement", value: "34%" },
  { label: "Fuel cost reduction", value: "22%" },
  { label: "Automated daily decisions", value: "2.8M+" },
];

export const features = [
  {
    title: "Smart Dispatch",
    description:
      "Auto-assign jobs by route distance, vehicle capability, traffic, and driver availability.",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Detect failure patterns early from telematics and service history before breakdowns happen.",
  },
  {
    title: "Unified Operations",
    description:
      "Manage vehicles, drivers, assets, compliance, and clients from one centralized workspace.",
  },
  {
    title: "Live Fleet Control",
    description:
      "Track every movement in real-time with instant alerts for delays, geofence events, or risks.",
  },
];

export const aiIntegrations = [
  {
    name: "Route Intelligence Engine",
    description:
      "Uses historical and live data to optimize routes and minimize delay penalties.",
  },
  {
    name: "Driver Safety Co-pilot",
    description:
      "AI risk scoring highlights unsafe behavior and provides personalized coaching actions.",
  },
  {
    name: "Maintenance Forecast Model",
    description:
      "Projects part failures using mileage, vibration, and diagnostic trends.",
  },
  {
    name: "Demand Prediction Hub",
    description:
      "Forecasts order peaks by location and season so you can scale resources proactively.",
  },
];

export const industries = [
  "Logistics",
  "Transportations",
  "Delivery Services",
  "Constructions",
  "Maintaniance Services",
  "Rental Services",
  "Public Transport",
];

export const businessTypes = [...industries];

export const trustPoints = [
  "ISO-aligned security policies and encrypted telematics data transfer.",
  "Role-based access controls with full operational activity audit trails.",
  "High-availability architecture with automatic backups and incident response readiness.",
];

export const blogPosts = [
  {
    title: "How AI Dispatching Improves Last-Mile Fleet Profitability",
    excerpt:
      "A practical framework to reduce idle time, failed deliveries, and route overlap using AI.",
    category: "Operations",
  },
  {
    title: "Predictive Maintenance for Heavy Construction Fleets",
    excerpt:
      "Turn service logs and sensor data into maintenance schedules that prevent downtime.",
    category: "Maintenance",
  },
  {
    title: "Building Trust in Public Transport with Real-Time Visibility",
    excerpt:
      "Increase rider confidence with transparent ETAs, safety monitoring, and service analytics.",
    category: "Public Transport",
  },
];

export const aboutHighlights = [
  {
    title: "Mission",
    description:
      "Help fleet businesses make faster, safer, and more profitable decisions using practical AI.",
  },
  {
    title: "Vision",
    description:
      "Build the most trusted intelligent operations platform for global mobility and transport teams.",
  },
  {
    title: "Approach",
    description:
      "Combine domain experts, telematics data, and applied AI models in one workflow-first product.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$99/mo",
    description: "For small fleet operations starting digital transformation.",
    features: ["Up to 25 vehicles", "Live tracking", "Basic reporting", "Email support"],
  },
  {
    name: "Growth",
    price: "$299/mo",
    description: "For growing businesses managing mixed operations.",
    features: [
      "Up to 150 vehicles",
      "AI dispatch optimizer",
      "Maintenance predictions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing deep integrations and governance.",
    features: [
      "Unlimited vehicles",
      "Advanced AI suite",
      "SSO and role governance",
      "Dedicated success manager",
    ],
  },
];
