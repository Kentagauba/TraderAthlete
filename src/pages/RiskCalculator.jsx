import { useState, useEffect, useMemo, useRef } from 'react'
import { Lock, Mail, Phone, ArrowRight, AlertTriangle, Shield, Zap, Crown, TrendingUp, TrendingDown, BarChart3, Target, Activity } from 'lucide-react'
import { LINKS } from '../config.js'

// =====================================================================
// FIRM DATA — Update affiliate URLs in src/config.js or here as you get codes
// =====================================================================
const FIRMS = [
  { firm: 'Topstep', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2000, dll: 1000, consistency: 50, ddType: 'EOD Trailing', notes: '50% consistency. 10 max contracts.' },
  { firm: 'Topstep', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 3000, dll: 2000, consistency: 50, ddType: 'EOD Trailing', notes: 'Best day ≤ $3,000.' },
  { firm: 'Topstep', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 4500, dll: 3000, consistency: 50, ddType: 'EOD Trailing', notes: 'Best day ≤ $4,500.' },
  { firm: 'FTMO', tier: '$50K Challenge', account: 50000, target: 5000, mdd: 5000, dll: 2500, consistency: 0, ddType: 'Static', notes: '2-Step. Min 4 trading days.' },
  { firm: 'FTMO', tier: '$100K Challenge', account: 100000, target: 10000, mdd: 10000, dll: 5000, consistency: 0, ddType: 'Static', notes: '10% target / 10% MDD / 5% DLL.' },
  { firm: 'FTMO', tier: '$150K Challenge', account: 200000, target: 20000, mdd: 20000, dll: 10000, consistency: 0, ddType: 'Static', notes: '$150K slot = $200K account.' },
  { firm: 'Apex Trader Funding', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2500, dll: 1000, consistency: 50, ddType: 'EOD Trailing', notes: 'Apex 4.0. EOD trailing updates 4:59 PM ET.' },
  { firm: 'Apex Trader Funding', tier: '$100K Challenge', account: 100000, target: 3000, mdd: 3000, dll: 1500, consistency: 50, ddType: 'EOD Trailing', notes: '⚠️ Verify current Apex 4.0 rules.' },
  { firm: 'Apex Trader Funding', tier: '$150K Challenge', account: 150000, target: 4500, mdd: 3750, dll: 2000, consistency: 50, ddType: 'EOD Trailing', notes: '⚠️ Verify current Apex 4.0 rules.' },
  { firm: 'Top One Futures', tier: '$50K Challenge', account: 50000, target: 2500, mdd: 2000, dll: 0, consistency: 15, ddType: 'EOD Trailing', notes: 'Ignite instant-funding.' },
  { firm: 'Top One Futures', tier: '$100K Challenge', account: 100000, target: 5000, mdd: 4000, dll: 0, consistency: 15, ddType: 'EOD Trailing', notes: '5% target / 4% trailing.' },
  { firm: 'Top One Futures', tier: '$150K Challenge', account: 150000, target: 7500, mdd: 6000, dll: 0, consistency: 15, ddType: 'EOD Trailing', notes: '5% target / 4% trailing.' },
  { firm: 'Tradeify', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2000, dll: 1000, consistency: 0, ddType: 'EOD Trailing', notes: 'Select plan. No consistency rule.' },
  { firm: 'Tradeify', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 3000, dll: 1250, consistency: 0, ddType: 'EOD Trailing', notes: 'Select $100K. No consistency.' },
  { firm: 'Tradeify', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 4500, dll: 1750, consistency: 0, ddType: 'EOD Trailing', notes: 'Select $150K. 90% profit split.' },
  { firm: 'Alpha Futures', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2000, dll: 1000, consistency: 50, ddType: 'EOD Trailing', notes: 'MLL locks at starting balance.' },
  { firm: 'Alpha Futures', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 4000, dll: 2000, consistency: 50, ddType: 'EOD Trailing', notes: 'MLL locks permanently.' },
  { firm: 'Alpha Futures', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 6000, dll: 3000, consistency: 50, ddType: 'EOD Trailing', notes: 'MLL locks permanently.' },
  { firm: 'Lucid Trading', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'LucidFlex. 15-min payouts.' },
  { firm: 'Lucid Trading', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 4000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'LucidFlex $100K.' },
  { firm: 'Lucid Trading', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 6000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'LucidFlex $150K.' },
  { firm: 'MyFundedFutures', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 1500, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Core plan. No DLL.' },
  { firm: 'MyFundedFutures', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 3000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Core $100K. No DLL.' },
  { firm: 'MyFundedFutures', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 4500, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Core $150K. No DLL.' },
  { firm: 'FundedNext', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 2000, dll: 0, consistency: 40, ddType: 'EOD Trailing', notes: 'Legacy plan. 40% consistency.' },
  { firm: 'FundedNext', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 3000, dll: 0, consistency: 40, ddType: 'EOD Trailing', notes: 'Legacy $100K. 40% consistency.' },
  { firm: 'FundedNext', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 4500, dll: 0, consistency: 40, ddType: 'EOD Trailing', notes: 'Legacy $150K. 40% consistency.' },
  { firm: 'Take Profit Trader', tier: '$50K Challenge', account: 50000, target: 3000, mdd: 3000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Target = MDD = 6%. Min 5 days.' },
  { firm: 'Take Profit Trader', tier: '$100K Challenge', account: 100000, target: 6000, mdd: 6000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Target = MDD = 6%. Min 5 days.' },
  { firm: 'Take Profit Trader', tier: '$150K Challenge', account: 150000, target: 9000, mdd: 9000, dll: 0, consistency: 50, ddType: 'EOD Trailing', notes: 'Target = MDD = 6%. Min 5 days.' },
]

const INSTRUMENTS = [
  { name: 'ES — E-mini S&P 500', tickSize: 0.25, tickValue: 12.5 },
  { name: 'MES — Micro E-mini S&P 500', tickSize: 0.25, tickValue: 1.25 },
  { name: 'NQ — E-mini Nasdaq-100', tickSize: 0.25, tickValue: 5.0 },
  { name: 'MNQ — Micro E-mini Nasdaq', tickSize: 0.25, tickValue: 0.5 },
  { name: 'YM — E-mini Dow', tickSize: 1.0, tickValue: 5.0 },
  { name: 'MYM — Micro E-mini Dow', tickSize: 1.0, tickValue: 0.5 },
  { name: 'RTY — E-mini Russell 2000', tickSize: 0.1, tickValue: 5.0 },
  { name: 'M2K — Micro E-mini Russell', tickSize: 0.1, tickValue: 0.5 },
  { name: 'CL — Crude Oil', tickSize: 0.01, tickValue: 10.0 },
  { name: 'GC — Gold Futures', tickSize: 0.1, tickValue: 10.0 },
  { name: 'SI — Silver Futures', tickSize: 0.005, tickValue: 25.0 },
  { name: 'ZN — 10-Year T-Note', tickSize: 0.015625, tickValue: 15.625 },
  { name: 'ZB — 30-Year T-Bond', tickSize: 0.03125, tickValue: 31.25 },
]

const TIERS = {
  aggressive: { tolerance: 0.30, horizon: 30, label: 'Aggressive', phase: 'CHALLENGE' },
  balanced: { tolerance: 0.15, horizon: 100, label: 'Balanced', phase: 'EARLY PAYOUT' },
  conservative: { tolerance: 0.05, horizon: 250, label: 'Conservative', phase: 'ESTABLISHED' },
}

// =====================================================================
// MATH ENGINE
// =====================================================================
function probNoRun(n, k, p) {
  if (n === 0) return 1.0
  if (k === 0) return 0.0
  let dp = new Array(k).fill(0)
  dp[0] = 1.0
  for (let i = 0; i < n; i++) {
    const newDp = new Array(k).fill(0)
    for (let j = 0; j < k; j++) {
      if (j + 1 < k) newDp[j + 1] += dp[j] * p
      newDp[0] += dp[j] * (1 - p)
    }
    dp = newDp
  }
  return dp.reduce((a, b) => a + b, 0)
}

const probStreakIn = (n, k, p) => 1 - probNoRun(n, k, p)

function maxSafeStreak(winRate, totalTrades, tolerance) {
  const lossRate = 1 - winRate
  for (let k = 1; k < 50; k++) {
    if (probStreakIn(totalTrades, k, lossRate) <= tolerance) return k
  }
  return 50
}

function calcRecommendedRisk(account, mdd, dll, winRate, rr, tierKey) {
  const t = TIERS[tierKey]
  const kellyFull = (winRate * rr - (1 - winRate)) / rr
  const halfKelly = Math.max(0, kellyFull / 2)
  const streak = maxSafeStreak(winRate, t.horizon, t.tolerance)
  const halfKellyDollar = account * halfKelly
  const mddPer = mdd / streak
  const dllPer = dll > 0 ? dll / streak : Infinity
  return {
    streak,
    recommended: Math.min(halfKellyDollar, mddPer, dllPer),
  }
}

function simulateChallenge(opts) {
  const {
    winRate, rr, risk, account, target, mdd, dll, ddType,
    consistency = 0, minDays = 0, nSims = 5000, maxTradesPerDay = 10,
  } = opts
  const winAmt = risk * rr
  const lossAmt = risk
  let passes = 0, busts = 0
  const tradesToPass = []
  const daysToPass = []
  const maxDds = []

  for (let s = 0; s < nSims; s++) {
    let balance = account
    let peak = account
    let floor = account - mdd
    let maxDdSeen = 0
    let trades = 0, days = 0, daysTraded = 0
    let result = null

    while (result === null && days < 60) {
      days++
      let dailyPnl = 0, dailyTrades = 0, dailyLoss = 0
      let tradedToday = false
      const dailyCap = consistency > 0 ? (consistency / 100) * target : Infinity

      while (dailyTrades < maxTradesPerDay) {
        if (dailyPnl >= dailyCap) break
        if (dll > 0 && dailyLoss >= dll) break
        trades++; dailyTrades++; tradedToday = true
        if (Math.random() < winRate) { balance += winAmt; dailyPnl += winAmt }
        else { balance -= lossAmt; dailyPnl -= lossAmt; dailyLoss += lossAmt }
        const dd = peak - balance
        if (dd > maxDdSeen) maxDdSeen = dd
        if (balance <= floor) { result = 'bust'; break }
        if (balance >= account + target) {
          if (daysTraded + (tradedToday ? 1 : 0) < minDays) break
          result = consistency > 0 && dailyPnl > dailyCap ? 'cfail' : 'pass'
          break
        }
      }
      if (tradedToday) daysTraded++
      if (ddType === 'EOD Trailing' && result === null && balance > peak) {
        peak = balance; floor = Math.min(peak - mdd, account)
      }
    }
    if (result === 'pass') { passes++; tradesToPass.push(trades); daysToPass.push(days); maxDds.push(maxDdSeen) }
    else if (result === 'bust') busts++
  }
  tradesToPass.sort((a, b) => a - b)
  const pct = (arr, p) => arr.length ? arr[Math.min(arr.length - 1, Math.floor(arr.length * p))] : 0
  const avg = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
  return {
    passRate: passes / nSims * 100,
    bustRate: busts / nSims * 100,
    avgDays: avg(daysToPass),
    p10: pct(tradesToPass, 0.1),
    p50: pct(tradesToPass, 0.5),
    p90: pct(tradesToPass, 0.9),
    avgMaxDd: avg(maxDds),
  }
}

// =====================================================================
// COMPONENTS
// =====================================================================
function Gate({ onUnlock }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setErr('Enter a valid email.')
    if (phone.replace(/\D/g, '').length < 7) return setErr('Enter a valid phone number.')
    setErr(''); setBusy(true)

    // ===== LEAD CAPTURE =====
    // Prototype: localStorage. Wire up ConvertKit/Kit or Brevo below.
    const leads = JSON.parse(localStorage.getItem('ta_leads') || '[]')
    leads.push({ email: email.trim(), phone: phone.trim(), ts: new Date().toISOString() })
    localStorage.setItem('ta_leads', JSON.stringify(leads))

    /* === ConvertKit (Kit) example ===
    await fetch(`https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: 'YOUR_API_KEY', email, fields: { phone } })
    })
    */

    localStorage.setItem('ta_unlocked', '1')
    setTimeout(() => { setBusy(false); onUnlock() }, 200)
  }

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow" style={{ width: 900, height: 600, background: 'var(--neon)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 540 }}>
        <div className="card" style={{ padding: '48px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 3, background: 'var(--neon)', borderRadius: '0 0 4px 4px', boxShadow: '0 0 20px var(--neon)' }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.3)', borderRadius: 999, marginBottom: 24 }}>
            <Lock size={12} color="var(--neon)" />
            <span style={{ color: 'var(--neon)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>FREE TOOL · LOCKED</span>
          </div>
          <h2 className="h-section" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 12 }}>The math <span className="text-neon">that keeps</span> your account alive.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: 32 }}>
            Get instant access to the prop firm risk calculator. Built on Kelly criterion, streak probability theory, and 10 firms of real rule data.
          </p>
          <div style={{ textAlign: 'left', marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com" autoComplete="email"
                style={{ width: '100%', padding: '14px 14px 14px 42px', background: 'var(--bg, #0a0f0c)', color: 'var(--text)', border: '1px solid var(--card-border)', borderRadius: 8, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none' }}
                onFocus={e => e.target.style.borderColor = 'var(--neon)'}
                onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
              />
            </div>
          </div>
          <div style={{ textAlign: 'left', marginBottom: 8 }}>
            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>Phone (for updates)</label>
            <div style={{ position: 'relative' }}>
              <Phone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="+1 (555) 555-5555" autoComplete="tel"
                style={{ width: '100%', padding: '14px 14px 14px 42px', background: 'var(--bg, #0a0f0c)', color: 'var(--text)', border: '1px solid var(--card-border)', borderRadius: 8, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none' }}
                onFocus={e => e.target.style.borderColor = 'var(--neon)'}
                onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
              />
            </div>
          </div>
          <div style={{ minHeight: 18, color: '#ff8080', fontSize: '0.85rem', marginBottom: 14 }}>{err}</div>
          <button
            onClick={submit} disabled={busy}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: busy ? 0.6 : 1 }}
          >
            {busy ? 'Unlocking…' : 'UNLOCK CALCULATOR'} <ArrowRight size={18} strokeWidth={3} />
          </button>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 18, lineHeight: 1.5 }}>
            No spam. Unsubscribe anytime. Your info is used only to deliver the tool and value-first updates.
          </p>
        </div>
      </div>
    </section>
  )
}

function Header({ tabs, active, setActive }) {
  return (
    <div style={{ borderBottom: '1px solid var(--card-border)', marginBottom: 40 }}>
      <div className="container" style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              background: 'none', border: 'none', padding: '16px 22px',
              color: active === t.id ? 'var(--neon)' : 'var(--text-muted)',
              fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', whiteSpace: 'nowrap',
              borderBottom: active === t.id ? '2px solid var(--neon)' : '2px solid transparent',
              transition: 'all 0.15s ease',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value, sub, color = 'var(--text)', hero = false }) {
  return (
    <div
      className="card"
      style={{
        padding: hero ? 28 : 18,
        textAlign: hero ? 'center' : 'left',
        gridColumn: hero ? '1 / -1' : 'auto',
        background: hero ? 'linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,255,136,0.02))' : 'var(--card)',
        border: hero ? '1px solid rgba(0,255,136,0.4)' : '1px solid var(--card-border)',
      }}
    >
      <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: hero ? 'var(--neon)' : 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        {label}
      </div>
      <div className="display" style={{ fontSize: hero ? '3rem' : '1.6rem', color, lineHeight: 1.1, fontWeight: 700, textShadow: hero ? '0 0 20px var(--neon-glow)' : 'none' }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 6 }}>{sub}</div>}
    </div>
  )
}

const fmtMoney = n => isFinite(n) ? '$' + Math.round(n).toLocaleString() : '—'
const fmtPct = (n, d = 2) => n.toFixed(d) + '%'

// ============== TAB: Calculator ==============
function CalculatorTab({ state, setState, derived }) {
  const cfg = derived.cfg
  const wr = state.wr / 100
  const rr = state.rr
  const { recommended, streak } = derived
  const ev = (wr * recommended * rr) - ((1 - wr) * recommended)
  const beWr = 100 / (1 + rr)

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Configure your <span className="text-neon">challenge</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Pick your firm and trading stats. Math runs live as you change anything.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24 }} className="calc-grid">
        <div className="card" style={{ padding: 28 }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--neon)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid var(--card-border)' }}>
            FIRM &amp; TRADING STATS
          </div>
          <Field label="Prop Firm">
            <Select value={state.firm} options={[...new Set(FIRMS.map(f => f.firm))]} onChange={v => setState({ ...state, firm: v, tier: FIRMS.find(f => f.firm === v).tier })} />
          </Field>
          <Field label="Account Tier">
            <Select value={state.tier} options={FIRMS.filter(f => f.firm === state.firm).map(f => f.tier)} onChange={v => setState({ ...state, tier: v })} />
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Win Rate (%)"><NumInput value={state.wr} min={20} max={95} step={1} onChange={v => setState({ ...state, wr: v })} /></Field>
            <Field label="Risk : Reward"><NumInput value={state.rr} min={0.3} max={10} step={0.1} onChange={v => setState({ ...state, rr: v })} /></Field>
          </div>
          <Field label="Risk Tier (matches phase)">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 4 }}>
              {Object.entries(TIERS).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => setState({ ...state, riskTier: key })}
                  style={{
                    padding: '12px 8px', cursor: 'pointer',
                    background: state.riskTier === key ? 'rgba(0,255,136,0.1)' : 'var(--card)',
                    border: state.riskTier === key ? '1px solid var(--neon)' : '1px solid var(--card-border)',
                    borderRadius: 8, fontFamily: 'inherit', color: 'var(--text)',
                    boxShadow: state.riskTier === key ? '0 0 20px rgba(0,255,136,0.15)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: 2 }}>{t.label}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: state.riskTier === key ? 'var(--neon)' : 'var(--text-muted)' }}>{t.phase}</div>
                </button>
              ))}
            </div>
          </Field>
          <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid var(--card-border)', borderRadius: 8, padding: 14, marginTop: 8, fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <RuleRow label="Account" val={fmtMoney(cfg.account)} />
            <RuleRow label="Profit Target" val={`${fmtMoney(cfg.target)} (${(cfg.target / cfg.account * 100).toFixed(1)}%)`} />
            <RuleRow label="Max Drawdown" val={`${fmtMoney(cfg.mdd)} (${(cfg.mdd / cfg.account * 100).toFixed(1)}%)`} />
            <RuleRow label="Daily Loss Limit" val={cfg.dll > 0 ? fmtMoney(cfg.dll) : 'None'} />
            <RuleRow label="Consistency Rule" val={cfg.consistency > 0 ? cfg.consistency + '%' : 'None'} />
            <RuleRow label="Drawdown Type" val={cfg.ddType} />
          </div>
        </div>

        <div className="card" style={{ padding: 28 }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--neon)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid var(--card-border)' }}>
            RECOMMENDED RISK
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <Stat hero label="Risk Per Trade" value={fmtMoney(recommended)} sub={`${fmtPct(recommended / cfg.account * 100)} of account`} color="var(--neon)" />
            <Stat label="Reward Per Trade" value={fmtMoney(recommended * rr)} color="var(--neon)" />
            <Stat label="Edge Per Trade (EV)" value={fmtMoney(ev)} color={ev > 0 ? 'var(--neon)' : '#ff8080'} sub={ev > 0 ? '✓ Positive edge' : '✗ Negative edge — fix stats'} />
            <Stat label="Streak Protection" value={streak} sub="consecutive losses survivable" />
            <Stat label="Break-Even WR @ R:R" value={fmtPct(beWr, 1)} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .calc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  )
}

function Select({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ width: '100%', padding: '10px 12px', background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--card-border)', borderRadius: 6, fontSize: '0.92rem', fontFamily: 'inherit', cursor: 'pointer' }}
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}

function NumInput({ value, onChange, min, max, step }) {
  return (
    <input
      type="number" value={value} min={min} max={max} step={step}
      onChange={e => onChange(parseFloat(e.target.value) || 0)}
      style={{ width: '100%', padding: '10px 12px', background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--card-border)', borderRadius: 6, fontSize: '0.92rem', fontFamily: 'inherit' }}
    />
  )
}

function RuleRow({ label, val }) {
  return (
    <div><span style={{ display: 'inline-block', minWidth: 130, color: 'var(--text-dim)' }}>{label}:</span><span style={{ color: 'var(--text)' }}>{val}</span></div>
  )
}

// ============== TAB: Simulator ==============
function SimulatorTab({ state, derived }) {
  const [sim, setSim] = useState(null)
  const [running, setRunning] = useState(false)
  const lastKey = useRef(null)

  useEffect(() => {
    const key = `${state.firm}|${state.tier}|${state.wr}|${state.rr}|${state.riskTier}`
    if (key === lastKey.current) return
    lastKey.current = key
    setRunning(true)
    const id = setTimeout(() => {
      const cfg = derived.cfg
      const result = simulateChallenge({
        winRate: state.wr / 100, rr: state.rr, risk: derived.recommended,
        account: cfg.account, target: cfg.target, mdd: cfg.mdd, dll: cfg.dll,
        ddType: cfg.ddType, consistency: cfg.consistency,
      })
      setSim(result); setRunning(false)
    }, 50)
    return () => clearTimeout(id)
  }, [state, derived])

  const passColor = sim ? (sim.passRate > 80 ? 'var(--neon)' : sim.passRate > 50 ? '#ffb84d' : '#ff8080') : 'var(--text)'
  const bustColor = sim ? (sim.bustRate < 10 ? 'var(--neon)' : sim.bustRate < 25 ? '#ffb84d' : '#ff8080') : 'var(--text)'

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Pass / Bust <span className="text-neon">Simulator</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>5,000 simulated challenges with your inputs. Real probability — not the theoretical max.</p>
      </div>
      <div className="card" style={{ padding: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Stat hero label="Pass Probability" value={running ? 'Running…' : sim ? sim.passRate.toFixed(1) + '%' : '—'} sub="across 5,000 simulated challenges" color={passColor} />
          <Stat label="Bust Rate" value={sim ? sim.bustRate.toFixed(1) + '%' : '—'} sub="drawdown breach probability" color={bustColor} />
          <Stat label="Avg Days to Pass" value={sim ? sim.avgDays.toFixed(1) : '—'} />
          <Stat label="Trades to Pass (median)" value={sim ? Math.round(sim.p50) : '—'} sub={sim ? `typical range ${Math.round(sim.p10)}–${Math.round(sim.p90)} trades` : 'typical range —'} />
          <Stat label="Worst Realistic Drawdown" value={sim ? fmtMoney(sim.avgMaxDd) : '—'} sub="expect this on the way to passing" color="#ffb84d" />
        </div>
      </div>
    </div>
  )
}

// ============== TAB: Position Sizing ==============
function PositionTab({ derived }) {
  const [unit, setUnit] = useState('points')
  const [stops, setStops] = useState(() => INSTRUMENTS.map(() => 20))
  const risk = derived.recommended

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Position <span className="text-neon">Sizing</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Translate your risk into contract counts. Edit stop loss per instrument.</p>
      </div>
      <div className="card" style={{ padding: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <Field label="Risk Per Trade ($)">
            <input value={fmtMoney(risk)} readOnly style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,255,136,0.05)', color: 'var(--neon)', border: '1px solid rgba(0,255,136,0.3)', borderRadius: 6, fontSize: '0.95rem', fontWeight: 700, fontFamily: 'inherit' }} />
          </Field>
          <Field label="Stop Loss Unit">
            <Select value={unit} options={['points', 'ticks']} onChange={setUnit} />
          </Field>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                {['Instrument', 'Tick Size', 'Tick Value', 'Stop Loss', 'SL $/Contract', 'Max Contracts', 'Actual Risk'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INSTRUMENTS.map((inst, i) => {
                const slUnits = stops[i] || 0
                const slPer = unit === 'points' ? slUnits * (inst.tickValue / inst.tickSize) : slUnits * inst.tickValue
                const maxC = slPer > 0 ? Math.floor(risk / slPer) : 0
                const actual = maxC * slPer
                return (
                  <tr key={inst.name} style={{ borderBottom: '1px solid var(--card-border)' }}>
                    <td style={{ padding: '10px 12px' }}>{inst.name}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{inst.tickSize}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>${inst.tickValue.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <input
                        type="number" value={slUnits} min={1} max={500}
                        onChange={e => { const c = [...stops]; c[i] = parseFloat(e.target.value) || 0; setStops(c) }}
                        style={{ width: 70, padding: '6px 8px', background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--card-border)', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.85rem' }}
                      />
                    </td>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{fmtMoney(slPer)}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 4, fontSize: '0.82rem', fontWeight: 700, background: maxC > 0 ? 'rgba(0,255,136,0.12)' : 'rgba(255,80,80,0.12)', color: maxC > 0 ? 'var(--neon)' : '#ff8080' }}>{maxC}</span>
                    </td>
                    <td style={{ padding: '10px 12px' }}>{fmtMoney(actual)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ============== TAB: Firm Comparison ==============
function CompareTab({ state }) {
  const wr = state.wr / 100
  const rr = state.rr
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Firm <span className="text-neon">Comparison</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>All 30 accounts scored against your inputs · Tier: <span style={{ color: 'var(--neon)' }}>{TIERS[state.riskTier].label}</span></p>
      </div>
      <div className="card" style={{ padding: 28, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              {['Firm', 'Tier', 'Account', 'Target', 'MDD', 'DLL', 'Cons.', 'Streak', 'Rec Risk $', 'Rec Risk %'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FIRMS.map(f => {
              const { streak, recommended } = calcRecommendedRisk(f.account, f.mdd, f.dll, wr, rr, state.riskTier)
              const current = f.firm === state.firm && f.tier === state.tier
              return (
                <tr key={f.firm + f.tier} style={{ borderBottom: '1px solid var(--card-border)', background: current ? 'rgba(0,255,136,0.06)' : 'transparent' }}>
                  <td style={{ padding: '10px 12px', fontWeight: current ? 700 : 400 }}>{f.firm}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{f.tier}</td>
                  <td style={{ padding: '10px 12px' }}>{fmtMoney(f.account)}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{(f.target / f.account * 100).toFixed(1)}%</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{(f.mdd / f.account * 100).toFixed(1)}%</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{f.dll > 0 ? fmtMoney(f.dll) : '—'}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{f.consistency > 0 ? f.consistency + '%' : '—'}</td>
                  <td style={{ padding: '10px 12px' }}>{streak}</td>
                  <td style={{ padding: '10px 12px' }}><span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 4, fontSize: '0.82rem', fontWeight: 700, background: 'rgba(0,255,136,0.12)', color: 'var(--neon)' }}>{fmtMoney(recommended)}</span></td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{(recommended / f.account * 100).toFixed(2)}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ============== TAB: Edge Matrix ==============
function EdgeMatrixTab({ state }) {
  const wrs = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]
  const rrLabels = ['3:1', '2.5:1', '2:1', '1.5:1', '1:1', '1:1.5', '1:2', '1:2.5', '1:3', '1:3.5', '1:4', '1:5', '1:6']
  const rrValues = [1/3, 1/2.5, 1/2, 1/1.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6]
  const closestWr = wrs.reduce((a, b) => Math.abs(b - state.wr) < Math.abs(a - state.wr) ? b : a)
  const closestRr = rrValues.reduce((a, b) => Math.abs(b - state.rr) < Math.abs(a - state.rr) ? b : a)

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Edge <span className="text-neon">Matrix</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Expected profit per $100 risked. Your setup is highlighted.</p>
      </div>
      <div className="card" style={{ padding: 28, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
          <thead>
            <tr>
              <th style={{ padding: '6px 4px', background: 'var(--card)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}>R:R</th>
              {wrs.map(w => <th key={w} style={{ padding: '6px 4px', background: 'var(--card)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}>{w}%</th>)}
            </tr>
          </thead>
          <tbody>
            {rrLabels.map((label, i) => {
              const rr = rrValues[i]
              return (
                <tr key={label}>
                  <th style={{ padding: '6px 4px', background: 'var(--card)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}>{label}</th>
                  {wrs.map(w => {
                    const wp = w / 100
                    const ev = (wp * 100 * rr) - ((1 - wp) * 100)
                    const isUser = w === closestWr && rr === closestRr
                    let bg
                    if (ev > 50) bg = 'rgba(0,255,136,0.32)'
                    else if (ev > 20) bg = 'rgba(0,255,136,0.20)'
                    else if (ev > 0) bg = 'rgba(0,255,136,0.10)'
                    else if (ev > -20) bg = 'rgba(255,184,77,0.15)'
                    else bg = 'rgba(255,80,80,0.18)'
                    return (
                      <td key={w} style={{ padding: '6px 4px', textAlign: 'center', border: '1px solid var(--card-border)', background: bg, color: ev > 0 ? 'var(--text)' : 'var(--text-muted)', fontWeight: isUser ? 800 : 400, boxShadow: isUser ? '0 0 0 2px var(--neon) inset' : 'none' }}>
                        {ev > 0 ? '+' : ''}{ev.toFixed(0)}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ============== TAB: Streak Charts (SVG) ==============
function StreaksTab({ state }) {
  const wrs = [30, 40, 50, 60, 70, 80, 90]
  const streakLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const colors = ['#D9544D', '#E8854A', '#888780', '#378ADD', '#1D9E75', '#EF9F27', '#7F77DD']
  const closestWr = wrs.reduce((a, b) => Math.abs(b - state.wr) < Math.abs(a - state.wr) ? b : a)

  const buildSeries = isLoss => wrs.map(w => {
    const p = isLoss ? (1 - w / 100) : (w / 100)
    return streakLengths.map(k => probStreakIn(100, k, p) * 100)
  })

  const lossSeries = useMemo(() => buildSeries(true), [])
  const winSeries = useMemo(() => buildSeries(false), [])

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 className="h-section" style={{ marginBottom: 4 }}>Streak <span className="text-neon">Reality Check</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Probability of hitting a streak of N+ in 100 trades. Your win rate is bolded.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="streak-grid">
        <Chart title="Losing Streak Probability" series={lossSeries} wrs={wrs} closestWr={closestWr} colors={colors} icon={<TrendingDown size={14} color="var(--text-muted)" />} />
        <Chart title="Winning Streak Probability" series={winSeries} wrs={wrs} closestWr={closestWr} colors={colors} icon={<TrendingUp size={14} color="var(--neon)" />} />
      </div>
      <div className="card" style={{ padding: 28, marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <Shield size={18} color="var(--neon)" />
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--neon)', fontWeight: 700, textTransform: 'uppercase' }}>The Golden Rule</div>
        </div>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text)' }}>
          Max risk per trade = max drawdown ÷ expected worst streak.
          At <span className="text-neon" style={{ fontWeight: 700 }}>1% risk</span> with a 5-loss streak = 5% drawdown — survivable.
          At <span style={{ color: '#ff8080', fontWeight: 700 }}>5% risk</span> the same streak = blown account.
        </p>
      </div>
      <style>{`@media (max-width: 900px) { .streak-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

function Chart({ title, series, wrs, closestWr, colors, icon }) {
  const W = 600, H = 320, pad = { l: 50, r: 16, t: 20, b: 50 }
  const innerW = W - pad.l - pad.r, innerH = H - pad.t - pad.b
  const xMax = series[0].length, yMax = 100
  const xs = i => pad.l + (i / (xMax - 1)) * innerW
  const ys = v => pad.t + innerH - (v / yMax) * innerH

  return (
    <div className="card" style={{ padding: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        {icon}
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--neon)', fontWeight: 700, textTransform: 'uppercase' }}>{title}</div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line x1={pad.l} x2={W - pad.r} y1={ys(v)} y2={ys(v)} stroke="var(--card-border)" strokeDasharray="2,3" />
            <text x={pad.l - 8} y={ys(v) + 4} fill="var(--text-muted)" fontSize="10" textAnchor="end">{v}%</text>
          </g>
        ))}
        {series[0].map((_, i) => (
          <text key={i} x={xs(i)} y={H - pad.b + 18} fill="var(--text-muted)" fontSize="10" textAnchor="middle">{i + 1}</text>
        ))}
        <text x={W / 2} y={H - 8} fill="var(--text-muted)" fontSize="10" textAnchor="middle">Streak length</text>

        {series.map((data, idx) => {
          const wr = wrs[idx]
          const isUser = wr === closestWr
          const path = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ')
          return (
            <g key={wr}>
              <path d={path} fill="none" stroke={colors[idx]} strokeWidth={isUser ? 2.5 : 1.2} strokeDasharray={isUser ? '' : '3,3'} opacity={isUser ? 1 : 0.6} />
              {isUser && data.map((v, i) => <circle key={i} cx={xs(i)} cy={ys(v)} r={3} fill={colors[idx]} />)}
            </g>
          )
        })}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14, fontSize: '0.7rem', justifyContent: 'center' }}>
        {wrs.map((w, i) => (
          <span key={w} style={{ display: 'flex', alignItems: 'center', gap: 5, color: w === closestWr ? 'var(--text)' : 'var(--text-muted)', fontWeight: w === closestWr ? 700 : 400 }}>
            <span style={{ width: 10, height: 10, background: colors[i], borderRadius: 2, display: 'inline-block' }} />{w}% WR
          </span>
        ))}
      </div>
    </div>
  )
}

// =====================================================================
// FINAL CTA — funnels into Whop after they engage with tool
// =====================================================================
function CalcCTA() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', marginTop: 60 }}>
      <div className="ambient-glow" style={{ width: 800, height: 400, background: 'var(--neon)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
        <h2 className="h-section">Built the math.</h2>
        <h2 className="h-section text-neon" style={{ marginTop: 8, textShadow: '0 0 30px var(--neon-glow)' }}>Now build the trader.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginTop: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          The calculator tells you what to risk. The dojo teaches you to execute it under pressure. Live sessions, mental game library, and direct access — the inner work that separates funded traders from the rest.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 36, flexWrap: 'wrap' }}>
          <a href={LINKS.whopJoin} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            JOIN THE DOJO <ArrowRight size={18} strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// MAIN PAGE COMPONENT
// =====================================================================
export default function RiskCalculator() {
  const [unlocked, setUnlocked] = useState(() => typeof window !== 'undefined' && localStorage.getItem('ta_unlocked') === '1')
  const [activeTab, setActiveTab] = useState('calc')
  const [state, setState] = useState({
    firm: 'Topstep',
    tier: '$50K Challenge',
    wr: 55,
    rr: 2.0,
    riskTier: 'aggressive',
  })

  // Reset state.tier if firm change made it invalid
  useEffect(() => {
    const tiers = FIRMS.filter(f => f.firm === state.firm).map(f => f.tier)
    if (!tiers.includes(state.tier)) setState(s => ({ ...s, tier: tiers[0] }))
  }, [state.firm])

  const derived = useMemo(() => {
    const cfg = FIRMS.find(f => f.firm === state.firm && f.tier === state.tier) || FIRMS[0]
    const { streak, recommended } = calcRecommendedRisk(cfg.account, cfg.mdd, cfg.dll, state.wr / 100, state.rr, state.riskTier)
    return { cfg, streak, recommended }
  }, [state])

  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />

  const tabs = [
    { id: 'calc', label: 'Risk Calculator', icon: Target },
    { id: 'sim', label: 'Pass/Bust Simulator', icon: Activity },
    { id: 'pos', label: 'Position Sizing', icon: BarChart3 },
    { id: 'cmp', label: 'Firm Comparison', icon: Crown },
    { id: 'edge', label: 'Edge Matrix', icon: Zap },
    { id: 'streaks', label: 'Streak Charts', icon: TrendingDown },
  ]

  return (
    <>
      <section className="section" style={{ paddingTop: 60, paddingBottom: 20, position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow" style={{ width: 900, height: 400, background: 'var(--neon)', top: '0%', left: '50%', transform: 'translateX(-50%)', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px', background: 'rgba(0,255,136,0.08)', border: '1px solid var(--neon)', borderRadius: 999, marginBottom: 24 }}>
            <Shield size={14} color="var(--neon)" />
            <span style={{ color: 'var(--neon)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>FREE TOOL · v2.0</span>
          </div>
          <h1 className="h-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.05, letterSpacing: '0.01em', marginBottom: 16 }}>
            PROP FIRM <span className="text-neon" style={{ textShadow: '0 0 30px var(--neon-glow)' }}>RISK CALCULATOR</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Kelly criterion. Streak theory. Monte Carlo simulation. Built on the math that keeps real money alive.
          </p>
        </div>
      </section>

      <Header tabs={tabs} active={activeTab} setActive={setActiveTab} />

      {activeTab === 'calc' && <CalculatorTab state={state} setState={setState} derived={derived} />}
      {activeTab === 'sim' && <SimulatorTab state={state} derived={derived} />}
      {activeTab === 'pos' && <PositionTab derived={derived} />}
      {activeTab === 'cmp' && <CompareTab state={state} />}
      {activeTab === 'edge' && <EdgeMatrixTab state={state} />}
      {activeTab === 'streaks' && <StreaksTab state={state} />}

      <CalcCTA />
    </>
  )
}
