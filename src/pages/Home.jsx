import { Check, X, ShieldCheck, TrendingUp, Sparkles, Zap, ChevronDown, Star } from 'lucide-react'
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
        {/* Founder pill */}
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
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Kenta</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>7-figure funded trader & founder</div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <h1 className="h-display">
              LIVE THE<br />
              <span className="text-neon">1% LIFESTYLE</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginTop: 24, maxWidth: 540 }}>
              Most traders fail not because of the market — but because they have no system. We fix that.
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
                  ['Guessing entries', 'Sniper precision'],
                  ['Blown accounts', 'Funded and withdrawing'],
                  ['No system', 'A blueprint that repeats'],
                  ['Emotional trading', 'Process-driven execution'],
                  ['9-5 loop', '1 hour a day, anywhere'],
                ].map(([bad, good], i) => (
                  <FragmentRow key={i} bad={bad} good={good} />
                ))}
              </div>
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 36 }}>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3,4].map(i => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'var(--card-2)',
                    border: '2px solid var(--bg)',
                    marginLeft: i === 0 ? 0 : -10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-dim)',
                  }}>
                    <span style={{ fontSize: 13 }}>👤</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2, color: 'var(--neon)' }}>
                  {[0,1,2,3,4].map(i => <Star key={i} size={14} fill="var(--neon)" stroke="var(--neon)" />)}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 2 }}>
                  <strong style={{ color: 'var(--text)' }}>4.9/5</strong> from 500+ successful students
                </div>
              </div>
            </div>
          </div>

          {/* Hero image card */}
          <div className="reveal" style={{ animationDelay: '0.25s' }}>
            <div style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid var(--card-border)',
              aspectRatio: '4/5',
              maxHeight: 580,
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.1)',
            }}>
              {/* Stylized "tropical workspace" — SVG since we don't have the photo */}
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a0f3a" />
                    <stop offset="35%" stopColor="#ff6b35" />
                    <stop offset="65%" stopColor="#f7931e" />
                    <stop offset="100%" stopColor="#ffd23f" />
                  </linearGradient>
                  <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffcb47" />
                    <stop offset="35%" stopColor="#0e5d8a" />
                    <stop offset="100%" stopColor="#001a33" />
                  </linearGradient>
                  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fff5a8" />
                    <stop offset="35%" stopColor="#ffcb47" />
                    <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* sky */}
                <rect width="400" height="290" fill="url(#sky)" />
                {/* sun */}
                <circle cx="200" cy="270" r="70" fill="url(#sun)" />
                {/* ocean */}
                <rect y="290" width="400" height="210" fill="url(#ocean)" />
                {/* sun reflection on water */}
                <ellipse cx="200" cy="298" rx="55" ry="2.5" fill="#fff5a8" opacity="0.85" />
                <ellipse cx="200" cy="308" rx="35" ry="1.8" fill="#ffcb47" opacity="0.6" />
                <ellipse cx="200" cy="318" rx="20" ry="1.2" fill="#ffcb47" opacity="0.3" />

                {/* PALM TREES — silhouettes using single path each */}
                {/* Left palm 1 — tall, leans right */}
                <path d="M 28 500
                         L 33 220
                         Q 34 180 38 165
                         L 42 165
                         Q 38 200 36 220
                         L 36 500 Z" fill="#000" />
                {/* fronds left palm 1 */}
                <g fill="#000">
                  <path d="M 36 168
                           Q 5 145 -5 140
                           Q 20 160 36 175 Z" />
                  <path d="M 36 168
                           Q 65 138 85 130
                           Q 55 160 36 175 Z" />
                  <path d="M 36 168
                           Q 10 170 -8 195
                           Q 18 175 36 175 Z" />
                  <path d="M 36 168
                           Q 70 175 88 200
                           Q 60 175 36 175 Z" />
                  <path d="M 36 168
                           Q 25 145 18 125
                           Q 32 152 38 170 Z" />
                  <circle cx="36" cy="168" r="4" fill="#000" />
                </g>

                {/* Left palm 2 — shorter */}
                <path d="M 75 500
                         L 78 240
                         Q 78 215 80 205
                         L 84 205
                         Q 82 225 82 240
                         L 82 500 Z" fill="#000" />
                <g fill="#000">
                  <path d="M 81 208
                           Q 55 188 45 178
                           Q 65 198 82 215 Z" />
                  <path d="M 81 208
                           Q 110 188 130 178
                           Q 95 200 82 215 Z" />
                  <path d="M 81 208
                           Q 60 212 50 230
                           Q 70 215 82 215 Z" />
                  <circle cx="81" cy="208" r="3.5" fill="#000" />
                </g>

                {/* Right palm 1 — tall, leans left */}
                <path d="M 362 500
                         L 365 215
                         Q 364 180 360 165
                         L 356 165
                         Q 360 200 362 215
                         L 362 500 Z" fill="#000" />
                <g fill="#000">
                  <path d="M 362 168
                           Q 395 145 410 138
                           Q 380 160 362 175 Z" />
                  <path d="M 362 168
                           Q 330 138 312 128
                           Q 345 160 362 175 Z" />
                  <path d="M 362 168
                           Q 388 170 408 195
                           Q 380 175 362 175 Z" />
                  <path d="M 362 168
                           Q 332 175 312 200
                           Q 340 175 362 175 Z" />
                  <path d="M 362 168
                           Q 372 145 378 125
                           Q 366 152 360 170 Z" />
                  <circle cx="362" cy="168" r="4" fill="#000" />
                </g>

                {/* Laptop on dark table */}
                <g transform="translate(140, 360)">
                  {/* table */}
                  <ellipse cx="60" cy="120" rx="120" ry="14" fill="#000" opacity="0.55" />
                  {/* laptop screen back */}
                  <path d="M 5 35 L 115 35 L 110 105 L 10 105 Z" fill="#1a1a1a" />
                  {/* screen */}
                  <rect x="12" y="42" width="96" height="58" fill="#0a0e14" stroke="#222" strokeWidth="0.5" />
                  {/* base */}
                  <path d="M 0 105 L 120 105 L 125 112 L -5 112 Z" fill="#2a2a2a" />
                  {/* candles on screen */}
                  {[
                    [18, 16, true],
                    [28, 24, true],
                    [38, 10, false],
                    [48, 28, true],
                    [58, 14, false],
                    [68, 32, true],
                    [78, 18, true],
                    [88, 22, false],
                    [98, 26, true],
                  ].map(([x, h, green], i) => {
                    const top = 95 - h
                    return (
                      <g key={i}>
                        <line x1={x+3.5} y1={top - 3} x2={x+3.5} y2={top + h + 3} stroke={green ? "#00ff88" : "#ff4458"} strokeWidth="0.7" />
                        <rect x={x+0.5} y={top} width="6" height={h} fill={green ? "#00ff88" : "#ff4458"} />
                      </g>
                    )
                  })}
                </g>
              </svg>

              {/* Caption bar at bottom */}
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
                <Check size={18} color="var(--neon)" strokeWidth={3} />
                <span style={{ color: 'var(--neon)', fontWeight: 600, fontSize: '0.95rem' }}>Escape the Matrix</span>
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
// STATS STRIP
// ============================================================
function StatsStrip() {
  const stats = [
    { value: '$200K+', label: 'IN VERIFIED STUDENT PROP PAYOUTS' },
    { value: 'LIVE', label: 'DOCUMENTED LIVE SETUPS, REVIEWED WEEKLY' },
    { value: '50+', label: 'FUNDED TRADERS' },
    { value: '24/7', label: 'DIRECT ACCESS TO ME' },
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
                fontSize: '3.5rem',
                color: i === 1 ? 'var(--neon)' : 'var(--text)',
                textShadow: i === 1 ? '0 0 30px var(--neon-glow)' : 'none',
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
// TESTIMONIALS
// ============================================================
function Testimonials() {
  const items = [
    {
      icon: <Check size={22} color="var(--neon)" strokeWidth={3} />,
      title: 'Passed $100K Prop Eval — Week 3',
      body: '"Hit my profit target in Week 3 following the morning session setups exactly. First time I\'ve ever passed an evaluation without blowing it on the last day."',
      author: 'David R.',
    },
    {
      icon: <TrendingUp size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'First funded payout: $2,340',
      body: '"Just received my first payout via Deel. The risk management rules changed everything for me. Treating it like a business instead of a casino."',
      author: 'Marcus T.',
    },
    {
      icon: <ShieldCheck size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: 'Finally Consistent',
      body: '"Escaped the boom and bust cycle. The community keeps me accountable and the daily live streams prevent me from taking stupid setups."',
      author: 'Sarah J.',
    },
    {
      icon: <Zap size={22} color="var(--neon)" strokeWidth={2.5} />,
      title: '$150K Funded Achieved',
      body: '"The \'Sniper\' framework simplifies the charts so much. No more cluttered indicators. Just pure price action and execution. Best investment I\'ve made."',
      author: 'Michael K.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="h-section">Numbers don't lie.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: 16, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Stop listening to fake gurus with paper trading accounts. We trade live. We post receipts. We withdraw.
          </p>
        </div>

        <div className="testimonials-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {items.map((t, i) => (
            <article key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--neon-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', flex: 1, fontSize: '1rem', lineHeight: 1.65 }}>{t.body}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, color: 'var(--neon)', fontWeight: 600, fontSize: '0.9rem' }}>
                <span style={{ width: 14, height: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                {t.author}
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
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
          <h2 className="h-section">Stop wasting time</h2>
          <p className="text-neon" style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.1em', marginTop: 12, textTransform: 'uppercase' }}>
            Get the blueprint now.
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
          {/* Left — What you're getting */}
          <div style={{ padding: '32px 8px' }}>
            <h3 className="display" style={{ fontSize: '1.75rem', marginBottom: 30 }}>
              What you're getting today:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['The "Sniper" Trading Masterclass', '$997', false],
                ['Daily Live Trading Sessions', '$1,497', true],
                ['Private VIP Discord & Alerts', '$497', false],
              ].map(([item, price, highlight], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--card-border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {highlight && <Zap size={18} color="var(--neon)" fill="var(--neon)" />}
                    <span style={{ color: highlight ? 'var(--neon)' : 'var(--text)', fontWeight: highlight ? 700 : 500, fontSize: '1.05rem' }}>
                      {item}
                    </span>
                  </div>
                  <span style={{ color: 'var(--text-dim)', textDecoration: 'line-through', fontSize: '1.05rem' }}>{price}</span>
                </div>
              ))}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: 24,
              }}>
                <span className="display" style={{ fontSize: '1.5rem' }}>Total Value:</span>
                <span style={{ color: 'var(--danger)', textDecoration: 'line-through', fontSize: '1.8rem', fontWeight: 700 }}>$2,991</span>
              </div>
            </div>
          </div>

          {/* Right — Pricing Card */}
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
              CLOSING SOON
            </div>

            <h3 className="display" style={{ fontSize: '1.6rem', textAlign: 'center', marginTop: 14, marginBottom: 18 }}>
              Inner Circle VIP
            </h3>

            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ color: 'var(--text-dim)', textDecoration: 'line-through', fontSize: '1.6rem' }}>${TIER.next}</span>
              <span className="display text-neon" style={{ fontSize: '4.5rem', textShadow: '0 0 40px var(--neon-glow)' }}>${TIER.current}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>/mo</span>
            </div>

            <p style={{ color: 'var(--danger)', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 26, textTransform: 'uppercase' }}>
              Price jumps to ${TIER.next} at {TIER.capacity} members
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Complete Sniper Masterclass',
                'Daily Live Trading Sessions',
                'Prop Firm Passing Blueprint',
                'Direct Access to Me 24/7',
                'VIP Networking Events',
              ].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.02rem' }}>
                  <Check size={20} color="var(--neon)" strokeWidth={3} />
                  {feat}
                </li>
              ))}
            </ul>

            <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              CLAIM YOUR SPOT NOW
            </a>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 12 }}>
              Cancel anytime.
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
      q: 'Who is this community for?',
      a: 'Serious traders who want to stop guessing and start executing with a system. Whether you\'re a beginner who needs structure or an experienced trader stuck at break-even, the Inner Circle gives you the framework, accountability, and live trading environment to break through.',
    },
    {
      q: 'How much money do I need to start trading?',
      a: 'You can start with as little as a small prop firm evaluation ($150-$300). I recommend using prop firms (Topstep, Apex) to learn rather than risking your own capital. We walk you through prop firm selection, sizing, and the exact pass strategy inside the community.',
    },
    {
      q: 'What is the live stream schedule?',
      a: 'Live trading sessions run during NY market hours (9:30 AM – 11:30 AM EST) Monday through Friday. All sessions are recorded and posted in the Discord for members who can\'t attend live. Replays are available 24/7.',
    },
    {
      q: 'What is the refund policy?',
      a: 'No refunds, but you can cancel anytime — no contracts, no questions asked. If you cancel mid-month, you keep access until the end of your billing cycle. We don\'t lock you in.',
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 className="h-section">Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: 14 }}>
            Everything you need to know about joining the Inner Circle.
          </p>
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
          You've seen the system.<br />
          You know what's at stake.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 720, margin: '24px auto 0', lineHeight: 1.7 }}>
          Every day you wait is another day you're trading without an edge.
          Lock in your <strong style={{ color: 'var(--text)' }}>${TIER.current}/mo</strong> rate now — it goes to ${TIER.next} at {TIER.capacity} members and it won't come back down.
        </p>

        {/* Progress card */}
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
            Founding Member Spots Remaining
          </div>
          <div style={{
            height: 12,
            background: 'var(--card-2)',
            borderRadius: 999,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              width: `${progress}%`,
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
              {spotsLeft} SPOTS LEFT AT ${TIER.current}/MO
            </span>
            <span style={{ color: 'var(--text-muted)' }}>
              {TIER.capacity}/{TIER.capacity} = PRICE JUMPS TO ${TIER.next}
            </span>
          </div>
        </div>

        <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ padding: '24px 60px' }}>
          LOCK IN ${TIER.current} NOW
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
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
