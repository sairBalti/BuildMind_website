import { resolveApiBase } from "./apiBase";

const VISITOR_KEY = "fleet_visitor_key";

export function getOrCreateVisitorKey() {
  let key = localStorage.getItem(VISITOR_KEY);
  if (!key) {
    key = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, key);
  }
  return key;
}

export function recordMarketingVisit(pagePath) {
  const apiBase = resolveApiBase();
  const payload = {
    visitorKey: getOrCreateVisitorKey(),
    pagePath: pagePath || window.location.pathname || "/",
    siteSource: "marketing",
    referrer: document.referrer || null,
  };

  fetch(`${apiBase}/public/monitoring/visit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}
