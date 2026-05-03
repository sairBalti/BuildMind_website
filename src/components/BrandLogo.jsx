import PropTypes from "prop-types";

function BrandLogo({ className = "h-10 w-auto" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FleetMind AI"
    >
      <defs>
        <linearGradient id="fleetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="56" height="56" rx="16" fill="url(#fleetGradient)" />
      <path
        d="M15 37h23l-5 8H10l5-8zm6-18h27l-4 7H24l-3 4h19l-4 7H17l4-7h8l3-4h-15l4-7z"
        fill="#fff"
      />
      <circle cx="44" cy="45" r="4" fill="#0B1120" />
      <text x="70" y="30" fontSize="22" fontWeight="700" fill="#0B1120">
        FleetMind
      </text>
      <text x="70" y="48" fontSize="14" fontWeight="600" fill="#0F766E">
        AI Fleet Platform
      </text>
    </svg>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};

export default BrandLogo;
