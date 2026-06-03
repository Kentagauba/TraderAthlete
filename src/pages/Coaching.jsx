import { Clock, Video, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { LINKS } from '../config.js'

export default function Coaching() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,255,136,0.12), transparent)',
        paddingTop: 100,
        paddingBottom: 100,
      }}>
        <div className="ambient-glow" style={{ width: 700, height: 400, background: 'var(--neon)', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow reveal">Level Up Your Trading</span>
          <h1 className="h-display reveal" style={{ marginTop: 30, animationDelay: '0.1s' }}>
            1-on-1 Coaching Session
          </h1>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 30, color: 'var(--text-muted)', flexWrap: 'wrap', animationDelay: '0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Clock size={20} color="var(--neon)" />
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>1 Hour</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Video size={20} color="var(--neon)" />
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Zoom Call</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="coaching-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}>
            {/* Left — Description */}
            <div>
              <h2 className="display" style={{ fontSize: '1.8rem', marginBottom: 20 }}>This is your hour.</h2>
              <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p>
                  This session is for serious traders who are ready to level up and want direct access to my eyes on their chart.
                </p>
                <p>
                  All sessions are held via Zoom and are structured entirely around you — bring your questions, your setups, your mindset blocks, whatever is holding you back. We can cover strategy, trade review, risk management, psychology, prop firm prep, or anything else relevant to your trading journey.
                </p>
                <p>
                  I recommend going through the Sniper Masterclass before booking so we can hit the ground running — but if you're coming in cold and just need direction, we can work with that too.
                </p>
                <p style={{ color: 'var(--text)', fontWeight: 700 }}>
                  Come prepared. This is your hour.
                </p>
              </div>

              {/* How it works */}
              <div className="card" style={{ marginTop: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <CheckCircle2 size={22} color="var(--neon)" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.02em' }}>HOW IT WORKS</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
                  After purchase, you'll receive a confirmation email with next steps to schedule your session. Sessions are booked through my calendar link and confirmed via email. Please have your questions and any charts ready before we connect.
                </p>
              </div>
            </div>

            {/* Right — Booking card */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="card card-glow">
                <h3 className="display" style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: 20 }}>
                  Book your session
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 14, marginBottom: 28 }}>
                  <span style={{ color: 'var(--text-dim)', textDecoration: 'line-through', fontSize: '1.7rem' }}>$497</span>
                  <span className="display text-neon" style={{ fontSize: '4.5rem', textShadow: '0 0 40px var(--neon-glow)' }}>$199</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem' }}>
                    <ShieldCheck size={20} color="var(--neon)" strokeWidth={2.5} />
                    Session is recorded (optional)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1rem' }}>
                    <AlertTriangle size={20} color="var(--danger)" strokeWidth={2.5} />
                    Non-refundable
                  </li>
                </ul>

                {/* Caution box */}
                <div style={{
                  padding: '16px 18px',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 12,
                  marginBottom: 24,
                  color: 'rgba(248, 180, 180, 0.9)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <AlertTriangle size={16} color="var(--warn)" />
                    <strong style={{ color: 'var(--warn)' }}>CAUTION:</strong>
                  </span>{' '}
                  No cancellations or rescheduling within 24 hours of your session. Your spot takes the place of another trader who was ready — respect the process.
                </div>

                <a href={LINKS.coachingBook} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  BOOK YOUR SESSION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .coaching-grid { grid-template-columns: 1fr !important; }
          .coaching-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </>
  )
}
