import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { LINKS } from '../config.js'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--neon)' : 'var(--text)',
    fontWeight: 500,
    fontSize: '0.95rem',
    transition: 'color 0.15s ease',
  })

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'var(--card-border)' : 'transparent'}`,
        transition: 'all 0.25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}>
        <Logo />

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/coaching" style={linkStyle}>Coaching</NavLink>
          <a href="/#membership" style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem' }}>Membership</a>
          <NavLink to="/risk-calculator" style={linkStyle}>Risk Calculator</NavLink>
          <a href={LINKS.memberLogin} className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '0.85rem' }}>
            MEMBER LOGIN
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ display: 'none' }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          borderTop: '1px solid var(--card-border)',
          background: 'rgba(0,0,0,0.95)',
        }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/coaching" style={linkStyle}>Coaching</NavLink>
          <a href="/#membership" style={{ color: 'var(--text)' }}>Membership</a>
          <NavLink to="/risk-calculator" style={linkStyle}>Risk Calculator</NavLink>
          <a href={LINKS.memberLogin} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>MEMBER LOGIN</a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--card-border)', padding: '60px 0 40px', marginTop: 40 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 40,
          marginBottom: 48,
        }} className="footer-grid">
          <div>
            <Logo size={32} />
            <p style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: 320, fontSize: '0.95rem' }}>
              Professional day trading education focusing on price action, market psychology, and risk management.
            </p>
          </div>
          <div>
            <h4 className="display" style={{ fontSize: '1.1rem', marginBottom: 16, letterSpacing: '0.05em' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Strategies</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Psychology</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Live Trading</a></li>
              <li><Link to="/risk-calculator" style={{ color: 'var(--text-muted)' }}>Risk Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="display" style={{ fontSize: '1.1rem', marginBottom: 16, letterSpacing: '0.05em' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)' }}>Risk Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--card-border)',
          paddingTop: 32,
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          lineHeight: 1.7,
        }}>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--text)' }}>Disclaimer:</strong>{' '}
            I'm not a licensed financial advisor, investment advisor, or certified financial planner. Everything shared inside TraderAthlete — including trade ideas, market analysis, watchlists, and commentary — is for educational and informational purposes only. Nothing here should be interpreted as personalized financial advice or a recommendation to buy or sell any security or financial instrument. All trading involves substantial risk, and you can lose more than you invest. Any trades you take are entirely your own decision and your own responsibility. Always do your own due diligence and consider consulting a licensed professional before making any financial decisions.
          </p>
          <p style={{ marginTop: 28, marginBottom: 0, textAlign: 'center' }}>
            © {new Date().getFullYear()} TraderAthlete. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()
  // scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}