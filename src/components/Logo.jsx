export default function Logo({ size = 40 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/logo.png"
        alt="TraderAthlete"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))',
        }}
      />
      <span style={{
        fontFamily: 'var(--font-display, "Anton", sans-serif)',
        fontSize: '1.4rem',
        fontWeight: 800,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: 'var(--text)',
      }}>
        Trader<span style={{ color: 'var(--neon)' }}>Athlete</span>
      </span>
    </div>
  )
}
