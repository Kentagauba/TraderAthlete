import { Check, X, ChevronDown, Target, Activity, Brain, Users, TrendingUp, Zap } from 'lucide-react'
import { useState } from 'react'
import { LINKS, TIER } from '../config.js'

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section className="section" style={{ paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow" style={{ width: 600, height: 600, background: 'var(--neon)', top: -200, right: -200, opacity: 0.15 }} />
      <div className="ambient-glow" style={{ width: 400, height: 400, background: 'var(--neon)', bottom: -100, left: -100, opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '8px 18px 8px 8px', background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 999 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #0a3d2a, #00ff88)',
              border: '2px solid var(--neon)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', fontWeight: 700, color: '#000',
              letterSpacing: '0.05em',
            }}>
              KENTA
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Kenta Gauba</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Founder · Discretionary Futures Trader</div>
            </div>
          </div>
        </div>

        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <h1 className="h-display">
              TRADE LIKE<br />
              <span className="text-neon">AN ATHLETE</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginTop: 24, maxWidth: 540, lineHeight: 1.65 }}>
              Most traders fail because they treat the market like a casino. We train it like sport — deliberate practice, recovery, state control, accountability. Built for serious futures traders.
            </p>

            <div style={{
              marginTop: 36,
              padding: '24px 28px',
              borderLeft: '3px solid var(--neon)',
              background: 'linear-gradient(90deg, rgba(0,255,136,0.05), transparent)',
              borderRadius: '4px 14px 14px 4px',
            }}>
              <div className="compare-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '14px 18px',
                alignItems: 'center',
              }}>
                {[
                  ['Random entries', 'Defined setups'],
                  ['Revenge trading', 'Process over outcome'],
                  ['Hope and fear', 'Trained state control'],
                  ['Signal chasing', 'Your own read'],
                  ['Trading alone', 'Serious cohort'],
                ].map(([bad, good], i) => (
                  <FragmentRow key={i} bad={bad} good={good} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 36 }}>
              <div style={{
                padding: '12px 18px',
                background: 'var(--neon-bg)',
                border: '1px solid var(--neon)',
                borderRadius: 12,
                animation: 'pulseGlow 2.2s ease-in-out infinite',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--neon)',
                    boxShadow: '0 0 10px var(--neon)',
                  }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--neon)', textTransform: 'uppercase' }}>
                    Founding Cohort Now Open
                  </span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                  First 100 at <span className="text-neon">\${TIER.current}/mo</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                  Locked for life — never goes up
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.25s' }}>
            <div style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid var(--card-border)',
              aspectRatio: '4/5',
              maxHeight: 600,
              background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1f15 60%, #0a0a0a 100%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.15), 0 0 60px rgba(0,255,136,0.1)',
            }}>
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <radialGradient id="centerGlow" cx="0.5" cy="0.45" r="0.6">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#00ff88" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="candleUp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="100%" stopColor="#00cc66" />
                  </linearGradient>
                  <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0a1f15" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                  <filter id="softBlur">
                    <feGaussianBlur stdDeviation="0.6" />
                  </filter>
                </defs>

                <rect width="400" height="500" fill="url(#centerGlow)" />

                <g transform="translate(200, 165)" opacity="0.35" stroke="#00ff88" strokeWidth="1.3" fill="none" filter="url(#softBlur)">
                  <circle r="55" />
                  <circle r="55" cx="0" cy="-55" />
                  <circle r="55" cx="0" cy="55" />
                  <circle r="55" cx="47.6" cy="-27.5" />
                  <circle r="55" cx="47.6" cy="27.5" />
                  <circle r="55" cx="-47.6" cy="-27.5" />
                  <circle r="55" cx="-47.6" cy="27.5" />
                  <circle r="60" opacity="0.6" />
                </g>

                <path d="M 0 380 L 50 340 L 120 310 L 180 360 L 250 295 L 320 330 L 400 290 L 400 500 L 0 500 Z" fill="url(#mountainGrad)" opacity="0.85" />
                <path d="M 0 400 L 80 370 L 150 395 L 230 360 L 300 380 L 400 355 L 400 500 L 0 500 Z" fill="#000" opacity="0.6" />

                <g transform="translate(150, 348)">
                  <line x1="-150" y1="0" x2="220" y2="-25" stroke="#00ff88" strokeWidth="0.8" opacity="0.5" />
                  <g transform="translate(0, -3)">
                    <line x1="-2" y1="-8" x2="2" y2="-8" stroke="#00ff88" strokeWidth="0.6" />
                    <line x1="0" y1="-8" x2="0" y2="2" stroke="#fff" strokeWidth="1.4" />
                    <circle cx="0" cy="3" r="1.5" fill="#fff" />
                    <line x1="-2" y1="3" x2="-3.5" y2="9" stroke="#fff" strokeWidth="0.9" />
                    <line x1="2" y1="3" x2="3.5" y2="9" stroke="#fff" strokeWidth="0.9" />
                  </g>
                </g>

                <g transform="translate(50, 250)">
                  <line x1="0" y1="125" x2="320" y2="125" stroke="#1a3a2a" strokeWidth="0.8" strokeDasharray="2,4" opacity="0.5" />
                  {[
                    [0, 95, 22, false],
                    [28, 105, 18, true],
                    [56, 90, 26, true],
                    [84, 95, 16, false],
                    [112, 70, 32, true],
                    [140, 75, 22, false],
                    [168, 50, 38, true],
                    [196, 55, 28, true],
                    [224, 35, 42, true],
                    [252, 40, 30, true],
                    [280, 15, 48, true],
                  ].map(([x, y, h, up], i) => (
                    <g key={i} opacity="0.95">
                      <line x1={x + 7} y1={y - 6} x2={x + 7} y2={y + h + 6} stroke={up ? '#00ff88' : '#ff4458'} strokeWidth="1" opacity="0.7" />
                      <rect x={x} y={y} width="14" height={h} fill={up ? 'url(#candleUp)' : '#ff4458'} opacity={up ? '1' : '0.65'} rx="1" />
                    </g>
                  ))}
                </g>

                <g transform="translate(20, 35)">
                  <rect x="0" y="0" width="135" height="60" rx="10" fill="#000" fillOpacity="0.7" stroke="#1a3a2a" strokeWidth="1" />
                  <circle cx="14" cy="14" r="4" fill="#00ff88" opacity="0.9" />
                  <circle cx="14" cy="14" r="4" fill="#00ff88" opacity="0.4">
                    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="26" y="18" fill="#00ff88" fontSize="8.5" fontWeight="800" fontFamily="monospace" letterSpacing="0.1em">LIVE</text>
                  <text x="14" y="38" fill="#888" fontSize="7" fontFamily="monospace" letterSpacing="0.05em">MNQ • 1m</text>
                  <text x="14" y="52" fill="#fff" fontSize="13" fontWeight="800" fontFamily="monospace">21,847.50</text>
                </g>

                <g transform="translate(245, 35)">
                  <rect x="0" y="0" width="135" height="60" rx="10" fill="#000" fillOpacity="0.7" stroke="#1a3a2a" strokeWidth="1" />
                  <text x="14" y="20" fill="#00ff88" fontSize="8.5" fontWeight="800" fontFamily="monospace" letterSpacing="0.1em">SESSION</text>
                  <text x="14" y="38" fill="#888" fontSize="7" fontFamily="monospace" letterSpacing="0.05em">NY OPEN</text>
                  <text x="14" y="52" fill="#fff" fontSize="13" fontWeight="800" fontFamily="monospace">+0.8R</text>
                </g>

                <g transform="translate(140, 410)">
                  <rect x="0" y="0" width="120" height="36" rx="18" fill="#000" fillOpacity="0.85" stroke="#1a3a2a" strokeWidth="1" />
                  <circle cx="16" cy="18" r="4" fill="#00ff88" />
                  <text x="28" y="22" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.05em">DISCIPLINE</text>
                </g>
              </svg>

              <div style={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--neon)',
                borderRadius: 999,
                padding: '10px 22px',
                display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 0 30px rgba(0,255,136,0.3)',
              }}>
                <Target size={16} color="var(--neon)" strokeWidth={2.5} />
                <span style={{ color: 'var(--neon)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>Train the mind. Trade the edge.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .compare-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
          .compare-grid .arrow { display: none !important; }
          .compare-grid .bad { padding-bottom: 4px; }
        }
      `}</style>
    </section>
  )
}

function FragmentRow({ bad, good }) {
  return (
    <>
      <div className="bad" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <X size={18} color="var(--danger)" strokeWidth={3} />
        <span style={{ color: 'var(--text-muted)' }}>{bad}</span>
      </div>
      <div className="arrow" style={{ color: 'var(--neon)', fontWeight: 700, opacity: 0.6 }}>→</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Check size={18} color="var(--neon)" strokeWidth={3} />
        <span style={{ color: 'var(--text)', fontWeight: 500 }}>{good}</span>
      </div>
    </>
  )
}

// ============================================================
// STATS STRIP — bigger, more dramatic
// ============================================================
function StatsStrip() {
  const stats = [
    { value: 'MNQ · NQ', label: 'MARKETS I TRADE LIVE', highlight: false },
    { value: 'LIVE', label: 'NY HOURS, IN THE CHAIR DAILY', highlight: true },
    { value: '100', label: 'FOUNDING COHORT CAP', highlight: false },
    { value: 'DIRECT', label: '1-ON-1 ACCESS', highlight: false },
  ]
  return (
    <section style={{
      padding: '60px 0',
      background: 'linear-gradient(180deg, transparent, rgba(0,255,136,0.04), transparent)',
      borderTop: '1px solid var(--card-border)',
      borderBottom: '1px solid var(--card-border)',
    }}>
      <div className="container">
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 40,
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="display" style={{
                fontSize: '3.2rem',
                color: s.highlight ? 'var(--neon)' : 'var(--text)',
                textShadow: s.highlight ? '0 0 30px var(--neon-glow)' : 'none',
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{
                marginTop: 12,
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 30px !important; }
        }
      `}</style>
    </section>
  )
}

// ============================================================
// WHO THIS IS FOR — visual cards with icons
// ============================================================
function WhoFor() {
  const items = [
    {
      icon: <Brain size={24} color="var(--neon)" strokeWidth={2} />,
      title: 'You see trading as performance',
      body: 'Sleep, state, nutrition, recovery — you already train your body. Now you want to train your mind with the same rigor.',
    },
    {
      icon: <Activity size={24} color="var(--neon)" strokeWidth={2} />,
      title: 'You trade discretionary',
      body: 'You do not want signals fed to you. You want to develop your own read, your own setups, your own conviction.',
    },
    {
      icon: <Users size={24} color="var(--neon)" strokeWidth={2} />,
      title: 'You have outgrown chat groups',
      body: 'The pump-and-emoji crowd is exhausting. You want a smaller, sharper room where traders journal, review, and improve.',
    },
    {
      icon: <TrendingUp size={24} color="var(--neon)" strokeWidth={2} />,
      title: 'You want compounding learning',
      body: 'Trading alone is slow. A serious cohort compresses years of trial-and-error into months of compounded reps.',
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="h-section">Built for traders who <span className="text-neon">train</span>.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: 16, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Not for someone hunting a magic indicator. For the trader who already knows the work is internal — and wants the structure to do it well.
          </p>
        </div>
        <div className="who-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {items.map((t, i) => (
            <article key={i} className="card" style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <div className="ambient-glow" style={{ width: 200, height: 200, background: 'var(--neon)', top: -100, right: -100, opacity: 0.04 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, position: 'relative' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'var(--neon-bg)',
                  border: '1px solid var(--neon)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0,255,136,0.2)',
                }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, lineHeight: 1.3 }}>{t.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', flex: 1, fontSize: '1rem', lineHeight: 1.65, position: 'relative' }}>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ============================================================
// PRICING
// ============================================================
function Pricing() {
  return (
    <section className="section" id="membership" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.08), transparent)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="h-section">One membership.<br /><span className="text-neon">Everything inside.</span></h2>
        </div>
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 36,
          alignItems: 'stretch',
          maxWidth: 1080,
          margin: '0 auto',
        }}>
          <div style={{ padding: '32px 8px' }}>
            <h3 className="display" style={{ fontSize: '1.75rem', marginBottom: 30 }}>
              What is inside:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['Live trade sessions', 'NY hours · MNQ, NQ, ES', true],
                ['Pre-market briefings', 'Levels, bias, game plan', false],
                ['Weekly live Q&A', 'Bring your charts and trades', false],
                ['Mental game library', 'The inner work most skip', true],
                ['Private Discord', 'Serious cohort only', false],
                ['Direct access to me', 'Real feedback, real questions', false],
              ].map(([item, desc, highlight], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 0',
                  borderBottom: i === 5 ? 'none' : '1px solid var(--card-border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {highlight ? <Zap size={18} color="var(--neon)" fill="var(--neon)" /> : <Check size={18} color="var(--neon)" strokeWidth={3} />}
                    <div>
                      <div style={{ color: highlight ? 'var(--neon)' : 'var(--text)', fontWeight: highlight ? 700 : 600, fontSize: '1.05rem' }}>
                        {item}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 2 }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--neon)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em' }}>INCLUDED</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card card-glow" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              position: 'absolute',
              top: -16, left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--neon)',
              color: '#000',
              padding: '6px 18px',
              borderRadius: 999,
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              animation: 'pulseGlow 2.2s ease-in-out infinite',
            }}>
              FOUNDING COHORT
            </div>
            <h3 className="display" style={{ fontSize: '1.6rem', textAlign: 'center', marginTop: 14, marginBottom: 18 }}>
              Inner Circle VIP
            </h3>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ color: 'var(--text-dim)', textDecoration: 'line-through', fontSize: '1.6rem' }}>\${TIER.next}</span>
              <span className="display text-neon" style={{ fontSize: '4.5rem', textShadow: '0 0 40px var(--neon-glow)' }}>\${TIER.current}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text)', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, marginBottom: 6 }}>
              First 100 lock this rate <span className="text-neon">for life</span>
            </p>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.85rem', marginBottom: 26 }}>
              Rate moves to \${TIER.next}/mo when cohort fills
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Founding rate locked for life',
                'Live trade calls + mental game library',
                'Private Discord cohort',
                'Cancel anytime — no contracts',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.02rem' }}>
                  <Check size={20} color="var(--neon)" strokeWidth={3} />
                  {feat}
                </li>
              ))}
            </ul>
            <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              LOCK IN FOUNDING PRICING
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 12 }}>
              Cancel anytime · Instant access
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ============================================================
// FAQ
// ============================================================
function FAQ() {
  const [open, setOpen] = useState(0)
  const items = [
    {
      q: 'What markets do you trade?',
      a: 'Primarily MNQ and NQ (Nasdaq futures), with ES (S&P futures) as a secondary focus. All live calls run on NY market hours.',
    },
    {
      q: 'Is this just signals?',
      a: 'No. Signals are a small part of it. The core focus is helping you build the mental and structural game of a consistent trader — the inner work that separates the 5% from everyone else. You can copy a call once; you cannot copy a process.',
    },
    {
      q: 'Do I need to be experienced?',
      a: 'Some trading experience helps, but the framework works at any level. What matters more is that you are serious about improvement and willing to do the inner work — the journaling, the review, the deliberate practice.',
    },
    {
      q: 'What is the time commitment?',
      a: 'Live sessions run during NY market hours and are recorded. Plan on 3 to 5 hours per week to fully use the resources, but you can engage at your own pace.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime, no questions asked. Your founding rate is locked for life as long as your subscription stays active — leave and rejoin later, you would come back at the current price.',
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 className="h-section">Common questions</h2>
        </div>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {items.map((item, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%',
                  padding: '22px 26px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                }}
              >
                {item.q}
                <ChevronDown
                  size={22}
                  color="var(--neon)"
                  style={{
                    transition: 'transform 0.25s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                    flexShrink: 0,
                  }}
                />
              </button>
              <div style={{
                maxHeight: open === i ? 400 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}>
                <p style={{
                  padding: '0 26px 24px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.7,
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FINAL CTA
// ============================================================
function FinalCTA() {
  const spotsLeft = TIER.capacity - TIER.filled
  const progress = (TIER.filled / TIER.capacity) * 100
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow" style={{ width: 800, height: 400, background: 'var(--neon)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 className="h-section">
          Join the cohort.<br />
          <span className="text-neon">Build the inner game.</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 720, margin: '24px auto 0', lineHeight: 1.7 }}>
          The founding cohort caps at <strong style={{ color: 'var(--text)' }}>100 members</strong> at <strong style={{ color: 'var(--text)' }}>\${TIER.current}/mo</strong>. After that, the rate moves to \${TIER.next}. Founding members keep their rate as long as they stay active.
        </p>
        <div className="card" style={{
          maxWidth: 540,
          margin: '50px auto 36px',
          padding: '24px 28px',
          textAlign: 'left',
        }}>
          <div style={{
            color: 'var(--text)',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 16,
          }}>
            Founding Cohort Progress
          </div>
          <div style={{
            height: 12,
            background: 'var(--card-2)',
            borderRadius: 999,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              width: `${Math.max(progress, 2)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--neon-dim), var(--neon), #aaffd6, var(--neon), var(--neon-dim))',
              backgroundSize: '200% 100%',
              borderRadius: 999,
              animation: 'shimmer 3s linear infinite',
              boxShadow: '0 0 14px var(--neon-glow)',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: '0.85rem' }}>
            <span className="text-neon" style={{ fontWeight: 700 }}>
              {spotsLeft} of {TIER.capacity} spots open
            </span>
            <span style={{ color: 'var(--text-muted)' }}>
              Rate jumps to \${TIER.next} at full
            </span>
          </div>
        </div>
        <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ padding: '24px 60px' }}>
          LOCK IN \${TIER.current}/MO
        </a>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 36,
          marginTop: 28,
          flexWrap: 'wrap',
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
        }}>
          {['Cancel anytime', 'Instant access', 'No contracts'].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={18} color="var(--neon)" strokeWidth={3} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// HOME PAGE
// ============================================================
export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhoFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
