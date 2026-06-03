import { Link } from 'react-router-dom'

export default function Logo({ size = 40 }) {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* outer ring */}
        <circle cx="20" cy="20" r="18.5" stroke="#00ff88" strokeWidth="1.5" />

        {/* 3 Bar Play candlestick pattern */}
        {/* candle 1 — small mother bar (mid green) */}
        <line x1="11" y1="13" x2="11" y2="27" stroke="#00b864" strokeWidth="1.4" />
        <rect x="9" y="17" width="4" height="7" fill="#00b864" rx="0.4" />

        {/* candle 2 — inside bar (brighter) */}
        <line x1="20" y1="10" x2="20" y2="30" stroke="#00e57a" strokeWidth="1.4" />
        <rect x="18" y="14" width="4" height="12" fill="#00e57a" rx="0.4" />

        {/* candle 3 — breakout (full neon) */}
        <line x1="29" y1="8" x2="29" y2="24" stroke="#00ff88" strokeWidth="1.4" />
        <rect x="27" y="11" width="4" height="10" fill="#00ff88" rx="0.4" />
      </svg>
      <span
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '1.5rem',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        <span style={{ color: '#fff' }}>Trader</span>
        <span style={{ color: '#00ff88' }}>Athlete</span>
      </span>
    </Link>
  )
}
