/**
 * Resolve BuildMind API origin (no trailing slash, no /api suffix).
 * VITE_API_BASE_URL is baked in at build time — set it in Vercel and redeploy.
 */
export function resolveApiOrigin() {
  let fromEnv = import.meta.env.VITE_API_BASE_URL?.trim();
  if (fromEnv) {
    fromEnv = fromEnv.replace(/\/$/, "");
    if (fromEnv.endsWith("/api")) return fromEnv.slice(0, -4);
    return fromEnv;
  }
  if (import.meta.env.DEV) return "http://localhost:5002";
  return "";
}

/** Full API prefix, e.g. https://api.example.com/api */
export function resolveApiBase() {
  const origin = resolveApiOrigin();
  if (origin) return `${origin}/api`;
  if (import.meta.env.DEV) return "http://localhost:5002/api";
  return "/api";
}

export function isNetworkFetchError(error) {
  if (!error) return false;
  const msg = String(error.message || error);
  return (
    error instanceof TypeError ||
    /failed to fetch|networkerror|load failed|network request failed/i.test(msg)
  );
}
