export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

/** Curated Unsplash construction imagery (hotlink-friendly for marketing site) */
export const images = {
  hero:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  heroSecondary:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  aiDashboard:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  crane:
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
  /** AI integrations section on Home — active construction site */
  aiIntegrations:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  commercialTower:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  heavyMachinery:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  workforce:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  materials:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
  equipment:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  safety:
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  aboutTeam:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      alt: "Modern commercial tower under construction",
    },
    {
      src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80",
      alt: "Infrastructure bridge construction site",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
      alt: "Heavy machinery on industrial job site",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      alt: "Residential development framing phase",
    },
  ],
};

/** Marketing stats aligned with shipped product capabilities (see fleetBack automation + reports). */
export const stats = [
  { label: "ERP modules live today", value: "9+", trend: "projects → finance" },
  { label: "Progress report cadence", value: "3×", trend: "daily · weekly · monthly" },
  { label: "Schedule risk scoring", value: "Rules", trend: "persisted per project" },
];

export const features = [
  {
    title: "Project Control Center",
    description:
      "Plan milestones, track tasks, and monitor progress across every active job site from one workspace.",
    image: images.heroSecondary,
    icon: "project",
  },
  {
    title: "Workforce & Safety",
    description:
      "Schedule shifts, manage attendance, and run quality inspections with role-based access for field teams.",
    image: images.workforce,
    icon: "workforce",
  },
  {
    title: "Materials & Procurement",
    description:
      "Control inventory, purchase orders, and material usage tied directly to project budgets.",
    image: images.materials,
    icon: "materials",
  },
  {
    title: "Equipment Intelligence",
    description:
      "Track machinery assignments, maintenance, and utilization to reduce downtime on site.",
    image: images.equipment,
    icon: "equipment",
  },
];

export const aiIntegrations = [
  {
    name: "Schedule variance alerts",
    description:
      "Rules-based detection of overdue tasks, delayed milestones, and end-date slippage — surfaced in the command center.",
    metric: "Live",
    metricLabel: "in production",
  },
  {
    name: "Workforce & shifts",
    description:
      "Shift scheduling, attendance, and task assignment with role-based access for field teams.",
    metric: "Live",
    metricLabel: "in production",
  },
  {
    name: "Equipment tracking",
    description:
      "Assignments, maintenance dates, and utilization signals across active job sites.",
    metric: "Live",
    metricLabel: "in production",
  },
  {
    name: "Budget & finance KPIs",
    description:
      "Budget utilization, expenses, and invoices with automated low-stock and budget warnings.",
    metric: "Live",
    metricLabel: "in production",
  },
];

export const industries = [
  "General Contracting",
  "Commercial Construction",
  "Residential Development",
  "Infrastructure",
  "Industrial & Energy",
];

export const businessTypes = [...industries];

export const trustPoints = [
  {
    title: "Role-based governance",
    description:
      "Full audit trails for project and financial actions across every role on site.",
  },
  {
    title: "Secure by design",
    description:
      "Encrypted data handling and secure workforce invitation workflows.",
  },
  {
    title: "Enterprise scale",
    description:
      "Multi-company, multi-branch architecture built for growing contractors.",
  },
];

export const blogPosts = [
  {
    title: "How AI Scheduling Reduces Construction Delays",
    excerpt:
      "A practical framework to align milestones, labor, and equipment before critical path slips.",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    readTime: "6 min read",
  },
  {
    title: "Equipment Utilization on Multi-Site Programs",
    excerpt:
      "Turn maintenance logs and assignment data into smarter machinery deployment.",
    category: "Equipment",
    image: images.equipment,
    readTime: "5 min read",
  },
  {
    title: "Field Safety Inspections That Teams Actually Use",
    excerpt:
      "Increase compliance with mobile-friendly quality and safety workflows.",
    category: "Safety",
    image: images.safety,
    readTime: "4 min read",
  },
];

export const aboutHighlights = [
  {
    title: "Mission",
    description:
      "Help construction businesses deliver projects on time, on budget, and with safer job sites.",
  },
  {
    title: "Vision",
    description:
      "Become the trusted operations platform for contractors managing complex, multi-branch programs.",
  },
  {
    title: "Approach",
    description:
      "Combine project management, workforce, materials, and finance in one workflow-first product.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$149/mo",
    description: "For small contractors digitizing projects and workforce.",
    features: ["Up to 5 active projects", "Workforce scheduling", "Basic reporting", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$399/mo",
    description: "For growing firms managing multiple sites and teams.",
    features: [
      "Unlimited projects",
      "Materials & procurement",
      "Equipment tracking",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing governance and integrations.",
    features: [
      "Multi-company hierarchy",
      "Advanced reporting",
      "SSO and role governance",
      "Dedicated success manager",
    ],
    highlighted: false,
  },
];
