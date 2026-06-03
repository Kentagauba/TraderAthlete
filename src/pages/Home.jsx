import { Check, X, ChevronDown, Target, Activity, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import { LINKS, TIER } from '../config.js'

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section className="section" style={{ paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow" style={{ width: 600, height: 600, background: 'var(--neon)', top: -200, right: -200, opacity: 0.12 }} />
      <div className="ambient-glow" style={{ width: 400, height: 400, background: 'var(--neon)', bottom: -100, left: -100, opacity: 0.06 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
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
              Most traders fail because they treat trading like gambling. We train it like sport — deliberate practice, recovery, state management, accountability. Built for serious futures traders.
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
                  ['Isolation', 'Serious cohort'],
                ].map(([bad, good], i) => (
                  <FragmentRow key={i} bad={bad} good={good} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <div style={{
                padding: '10px 16px',
                background: 'var(--neon-bg)',
                border: '1px solid var(--neon)',
                borderRadius: 8,
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--neon)',
                textTransform: 'uppercase',
              }}>
                Founding Cohort — Now Open
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                First 100 at \${TIER.current}/mo · Rate locked for life
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
              maxHeight: 580,
              background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1f15 100%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.1)',
            }}>
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <radialGradient id="bgGlow" cx="0.5" cy="0.5" r="0.7">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity="0.15" />
                    <stop offset="60%" stopColor="#00ff88" stopOpacity="0.03" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="candleGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="100%" stopColor="#00cc66" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#bgGlow)" />
                <g transform="translate(200, 150)" opacity="0.35" stroke="#00ff88" strokeWidth="1.5" fill="none">
                  <circle r="50" />
                  <circle r="50" cx="0" cy="-50" />
                  <circle r="50" cx="0" cy="50" />
                  <circle r="50" cx="43.3" cy="-25" />
                  <circle r="50" cx="43.3" cy="25" />
                  <circle r="50" cx="-43.3" cy="-25" />
                  <circle r="50" cx="-43.3" cy="25" />
                  <circle r="55" opacity="0.5" />
                </g>
                <g transform="translate(40, 280)">
                  <line x1="0" y1="180" x2="320" y2="180" stroke="#1a3a2a" strokeWidth="1" strokeDasharray="2,4" />
                  {[
                    [10, 140, 25, true],
                    [40, 120, 30, true],
                    [70, 130, 18, false],
                    [100, 100, 35, true],
                    [130, 105, 22, false],
                    [160, 70, 40, true],
                    [190, 75, 28, true],
                    [220, 50, 45, true],
                    [250, 55, 30, true],
                    [280, 25, 50, true],
                  ].map(([x, y, h, up], i) => (
                    <g key={i}>
                      <line x1={x + 7} y1={y - 8} x2={x + 7} y2={y + h + 8} stroke={up ? '#00ff88' : '#ff4458'} strokeWidth="1.2" opacity="0.8" />
                      <rect x={x} y={y} width="14" height={h} fill={up ? 'url(#candleGreen)' : '#ff4458'} opacity={up ? '1' : '0.7'} />
                    </g>
                  ))}
                </g>
                <g transform="translate(30, 40)">
                  <rect x="0" y="0" width="130" height="50" rx="8" fill="#000" fillOpacity="0.6" stroke="#1a3a2a" />
                  <text x="12" y="20" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">SETUPS THIS WEEK</text>
                  <text x="12" y="40" fill="#ffffff" fontSize="20" fontWeight="800" fontFamily="monospace">04</text>
                </g>
                <g transform="translate(240, 40)">
                  <rect x="0" y="0" width="130" height="50" rx="8" fill="#000" fillOpacity="0.6" stroke="#1a3a2a" />
                  <text x="12" y="20" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">RISK / TRADE</text>
                  <text x="12" y="40" fill="#ffffff" fontSize="20" fontWeight="800" fontFamily="monospace">0.5%</text>
                </g>
              </svg>
              <div style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--card-border)',
                borderRadius: 999,
                padding: '10px 20px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <Target size={16} color="var(--neon)" strokeWidth={2.5} />
                <span style={{ color: 'var(--neon)', fontWeight: 600, fontSize: '0.9rem' }}>Train the mind. Trade the edge.</span>
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
// STATS STRIP — real, not fabricated
// ============================================================
function StatsStrip() {
  const stats = [
    { value: 'MNQ · NQ · ES', label: 'MARKETS I TRADE LIVE', big: false },
    { value: 'NY HOURS', label: 'WHEN I AM IN THE CHAIR', big: false },
    { value: '100', label: 'FOUNDING COHORT CAP', big: true },
    { value: 'DIRECT', label: 'ACCESS TO ME', big: false },
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
                fontSize: s.big ? '3.5rem' : '2rem',
                color: s.big ? 'var(--neon)' : 'var(--text)',
                textShadow: s.big ? '0 0 30px var(--neon-glow)' : 'none',
              }}>
                {s.value}
              </div>
              <div style={{
                marginTop: 8,
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
// WHO THIS IS FOR (replaces fake testimonials)
// ============================================================
function WhoFor() {
  const items = [
    {
      icon: <Activity size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'You trade discretionary',
      body: 'You do not want signals fed to you. You want to develop your own read, your own setups, your own conviction — with better feedback loops than you can build alone.',
    },
    {
      icon: <Target size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'You see trading as performance',
      body: 'Sleep, state, nutrition, recovery — you already understand the body matters. Now you want to train the mind with the same rigor you bring to everything else.',
    },
    {
      icon: <Users size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'You have outgrown chat groups',
      body: 'The pump-and-emoji crowd is exhausting. You want a smaller, sharper room with traders who actually journal, review, and improve week over week.',
    },
    {
      icon: <Zap size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'You want a real cohort',
      body: 'Trading alone makes you slow. A cohort of serious traders compresses years of trial-and-error into months of compounded learning.',
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="h-section">Built for traders who train</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: 16, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            This is not for someone looking for a magic indicator. It is for the trader who already knows the work is internal — and wants the structure to do it well.
          </p>
        </div>
        <div className="who-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {items.map((t, i) => (
            <article key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--neon-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', flex: 1, fontSize: '1rem', lineHeight: 1.65 }}>{t.body}</p>
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
          <h2 className="h-section">Inner Circle VIP</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: 14, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            One membership. Everything you need to train and trade with serious people.
          </p>
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
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['Live trade sessions', 'Real-time calls on MNQ, NQ, ES during NY hours'],
                ['Pre-market briefings', 'Key levels, bias, and game plan before the open'],
                ['Weekly live Q&A', 'Bring your charts, your trades, your questions'],
                ['Mental game library', 'The inner work most traders skip'],
                ['Private Discord', 'Serious cohort, no pump-and-emoji noise'],
                ['Direct access', 'Ask me questions, get real feedback'],
              ].map(([title, desc], i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Check size={22} color="var(--neon)" strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.02rem', marginBottom: 2 }}>{title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
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
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.9rem', marginBottom: 26, lineHeight: 1.5 }}>
              First 100 members lock in this rate.<br />
              Price moves to <strong style={{ color: 'var(--text)' }}>\${TIER.next}/mo</strong> when the cohort fills.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Founding rate locked for life',
                'Live trade calls + mental game training',
                'Private Discord cohort',
                'Cancel anytime — no contracts',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.98rem' }}>
                  <Check size={18} color="var(--neon)" strokeWidth={3} />
                  {feat}
                </li>
              ))}
            </ul>
            <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              LOCK IN FOUNDING PRICING
            </a>
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
      a: 'Some trading experience helps, but the framework works for traders at any level. What matters more is that you are serious about improvement and willing to do the inner work — the journaling, the review, the deliberate practice.',
    },
    {
      q: 'What is the time commitment?',
      a: 'Live sessions run during NY market hours and are recorded. Plan on 3 to 5 hours per week if you want to fully use the resources, but you can engage at your own pace. The community moves with you, not against you.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime, no questions asked. Your founding member rate is locked for life as long as your subscription stays active — if you leave and want to rejoin later, you would come back in at the current price.',
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
      <div className="ambient-glow" style={{ width: 800, height: 400, background: 'var(--neon)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.06 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 className="h-section">
          Join the cohort.<br />
          Build the inner game.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 720, margin: '24px auto 0', lineHeight: 1.7 }}>
          The founding cohort caps at <strong style={{ color: 'var(--text)' }}>100 members</strong> at <strong style={{ color: 'var(--text)' }}>\${TIER.current}/mo</strong>. After that, the rate moves to \${TIER.next} for new members. Founding members stay at their rate as long as they stay active.
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
