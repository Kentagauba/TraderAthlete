import { Check, X, ChevronDown, AlertTriangle, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { LINKS, TIER } from '../config.js'

// ============================================================
// TOP WARNING BAR
// ============================================================
function WarningBar() {
  return (
    <div style={{
      width: '100%',
      background: 'linear-gradient(90deg, rgba(180, 30, 30, 0.15), rgba(180, 30, 30, 0.25), rgba(180, 30, 30, 0.15))',
      borderBottom: '1px solid rgba(255, 80, 80, 0.3)',
      padding: '14px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
        <AlertTriangle size={16} color="#ff6666" />
        <span style={{ color: '#ffb3b3', fontSize: '0.95rem', fontWeight: 500 }}>
          Price locks for life at <strong style={{ color: '#fff' }}>\${TIER.current}/mo</strong> for the first {TIER.capacity} members. Goes to <strong style={{ color: '#fff' }}>\${TIER.next}</strong> after.
        </span>
      </div>
    </div>
  )
}

// ============================================================
// HERO (centered, Replit-style)
// ============================================================
function Hero() {
  const spotsLeft = TIER.capacity - TIER.filled
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow" style={{ width: 900, height: 600, background: 'var(--neon)', top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.12 }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 980 }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', background: 'rgba(0,255,136,0.08)', border: '1px solid var(--neon)', borderRadius: 999, marginBottom: 40, boxShadow: '0 0 30px rgba(0,255,136,0.2)' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--neon)',
            boxShadow: '0 0 10px var(--neon)',
            animation: 'pulseGlow 2s ease-in-out infinite',
          }} />
          <span style={{ color: 'var(--neon)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            The exact system I used to go from losing trader to funded
          </span>
        </div>

        <h1 className="reveal h-display" style={{
          animationDelay: '0.1s',
          fontSize: 'clamp(3rem, 7.5vw, 6rem)',
          lineHeight: 1.02,
          marginBottom: 0,
          letterSpacing: '-0.01em',
        }}>
          STOP BEING LIQUIDITY.
        </h1>
        <h1 className="reveal h-display text-neon" style={{
          animationDelay: '0.2s',
          fontSize: 'clamp(3rem, 7.5vw, 6rem)',
          lineHeight: 1.02,
          marginTop: 8,
          letterSpacing: '-0.01em',
          textShadow: '0 0 40px var(--neon-glow)',
        }}>
          START TRADING LIKE A WHALE.
        </h1>

        <p className="reveal" style={{
          animationDelay: '0.3s',
          fontSize: '1.2rem',
          color: 'var(--text-muted)',
          marginTop: 36,
          maxWidth: 760,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
        }}>
          Most retail traders are the liquidity. They chase, panic, revenge-trade — and get out-traded by traders who train the mental game. I built the dojo to teach the other side: deliberate practice, state control, defined setups, accountability. 
        </p>

        <div className="reveal" style={{ animationDelay: '0.4s', marginTop: 48 }}>
          <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '22px 48px',
            background: 'var(--neon)',
            color: '#000',
            fontSize: '1.15rem',
            fontWeight: 800,
            borderRadius: 999,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            boxShadow: '0 0 50px rgba(0,255,136,0.5), 0 10px 30px rgba(0,255,136,0.25)',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
          }}>
            Join the Dojo
            <ArrowRight size={22} strokeWidth={3} />
          </a>
        </div>

        <p className="reveal" style={{
          animationDelay: '0.5s',
          color: 'var(--text-muted)',
          fontSize: '0.92rem',
          marginTop: 22,
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          🔥 First {TIER.capacity} members at \${TIER.current}/mo — rate locked for life. Goes to \${TIER.next} after.
        </p>

        <div className="reveal" style={{ animationDelay: '0.6s', marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '8px 22px 8px 8px', background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 999 }}>
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
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Kenta</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Founder · Discretionary Futures Trader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// STATS STRIP
// ============================================================
function StatsStrip() {
  const stats = [
    { value: 'MNQ · NQ', label: 'MARKETS I TRADE LIVE', highlight: false },
    { value: 'LIVE', label: 'NY HOURS, IN THE CHAIR DAILY', highlight: true },
    { value: TIER.capacity.toString(), label: 'MEMBER CAP AT THIS PRICE', highlight: false },
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
// IF THIS IS YOU — diagnostic cards
// ============================================================
function IfThisIsYou() {
  const cards = [
    {
      title: 'You blow accounts on emotion',
      body: 'Not strategy. Not bad luck. You know the setup. You see the setup. You take it wrong anyway. The problem isn\'t your charts — it\'s your nervous system.',
    },
    {
      title: 'You\'ve watched over 200 hours of YouTube. You\'re still down on the year.',
      body: 'ICT one month. SMC the next. VWAP scalping after that. Each time you switch strategies, you tell yourself this one is different. It isn\'t. The problem was never the strategy — it was that you never ran any of them long enough to find out if they worked.',
    },
    {
      title: 'You take profits early and let losers run',
      body: 'You cut a 1R winner because "what if it reverses." You hold a 2R loser because "what if it comes back." You know which direction the asymmetry should run. You don\'t have a system that forces you to do the opposite of what feels safe.',
    },
    {
      title: 'You trade in isolation',
      body: 'Discord groups are noise. Twitter is performance. You\'ve never been in a room with traders who actually review their trades honestly. So you keep making the same mistake alone.',
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="h-section" style={{ marginBottom: 0 }}>
            IF THIS IS YOU,
          </h2>
          <h2 className="h-section text-neon" style={{ marginTop: 8, textShadow: '0 0 30px var(--neon-glow)' }}>
            YOU'RE IN THE RIGHT ROOM.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Not for someone hunting a magic indicator. For the trader who already knows the work is internal — and wants the structure to do it well.
          </p>
        </div>
        <div className="diag-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          maxWidth: 1080,
          margin: '0 auto',
        }}>
          {cards.map((c, i) => (
            <article key={i} className="card" style={{ position: 'relative', overflow: 'hidden', padding: '28px 30px' }}>
              <div className="ambient-glow" style={{ width: 240, height: 240, background: 'var(--neon)', top: -120, right: -120, opacity: 0.05 }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14, position: 'relative' }}>
                <div style={{
                  flexShrink: 0,
                  width: 32, height: 32, borderRadius: 8,
                  background: 'var(--neon)',
                  color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  boxShadow: '0 0 15px rgba(0,255,136,0.4)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: '1.22rem', fontWeight: 800, lineHeight: 1.3, flex: 1 }}>
                  {c.title}
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, position: 'relative', marginLeft: 48 }}>
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .diag-grid { grid-template-columns: 1fr !important; }
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
          <h2 className="h-section">ONE MEMBERSHIP.</h2>
          <h2 className="h-section text-neon" style={{ marginTop: 8 }}>EVERYTHING INSIDE.</h2>
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
              What's inside:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['Live trade sessions', 'NY hours · MNQ, NQ, ES'],
                ['Pre-market briefings', 'Levels, bias, game plan'],
                ['Weekly live Q&A', 'Bring your charts and trades'],
                ['Mental game library', 'The inner work most skip'],
                ['Private Discord', 'Serious traders only'],
                ['Direct access to me', 'Real feedback, real questions'],
              ].map(([item, desc], i, arr) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 0',
                  borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--card-border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Check size={18} color="var(--neon)" strokeWidth={3} />
                    <div>
                      <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.05rem' }}>
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
              FIRST 100 ONLY
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
              Rate moves to \${TIER.next}/mo at 100 members
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Locked-in rate for life',
                'Live trade calls + mental game library',
                'Private Discord',
                'Cancel anytime — no contracts',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.02rem' }}>
                  <Check size={20} color="var(--neon)" strokeWidth={3} />
                  {feat}
                </li>
              ))}
            </ul>
            <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              JOIN THE DOJO
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
      a: 'Yes. Cancel anytime, no questions asked. Your locked-in rate stays as long as your subscription stays active — leave and rejoin later, you would come back at the current price.',
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
        <h2 className="h-section">JOIN THE DOJO.</h2>
        <h2 className="h-section text-neon" style={{ marginTop: 8 }}>BUILD THE INNER GAME.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 720, margin: '24px auto 0', lineHeight: 1.7 }}>
          The first <strong style={{ color: 'var(--text)' }}>{TIER.capacity} members</strong> lock in <strong style={{ color: 'var(--text)' }}>\${TIER.current}/mo</strong> for life. After that, the rate moves to \${TIER.next}. Members who stay active keep their rate.
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
            Dojo Progress
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
          JOIN THE DOJO — \${TIER.current}/MO
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
      <WarningBar />
      <Hero />
      <StatsStrip />
      <IfThisIsYou />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
