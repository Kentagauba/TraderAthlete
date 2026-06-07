// ============================================================
// TraderAthlete — Edit these links once and they update sitewide
// ============================================================

export const LINKS = {
  // Whop storefront — monthly Inner Circle VIP
  whopJoin: 'https://whop.com/traderathlete/inner-circle-vip-83/',

  // Whop storefront — Lifetime Founder
  whopLifetime: 'https://whop.com/traderathlete/lifetime-founder-12/',

  // Member login URL (Whop dashboard)
  memberLogin: 'https://whop.com/orders',

  // Coaching booking link
  coachingBook: 'https://calendly.com/kentagauba-uakt/performance-call',

  // Social
  instagram: 'https://instagram.com/traderathlete',
  tiktok: 'https://tiktok.com/@traderathlete',
}

// ============================================================
// MONTHLY TIER LADDER — rises as proof accumulates
// Existing members ALWAYS keep their joining rate (locked for life)
// ============================================================
export const TIER = {
  filled: 0,  // <-- UPDATE THIS as members join
  brackets: [
    { min: 1,   max: 25,  price: 47 },
    { min: 26,  max: 50,  price: 57 },
    { min: 51,  max: 75,  price: 67 },
    { min: 76,  max: 100, price: 77 },
    { min: 101, max: Infinity, price: 97 },
  ],
}

// ============================================================
// LIFETIME TIER
// ============================================================
export const LIFETIME = {
  price: 497,
  compareAt: 997,
  includes: [
    'Lifetime dojo access',
    'One free 1-on-1 Performance Call ($199 value)',
    '1 year of all TraderAthlete TradingView indicators',
    '"Lifetime Founder" Discord role',
  ],
}

// ============================================================
// HELPER — compute current tier based on filled count
// ============================================================
export function currentTier() {
  const next = TIER.filled + 1
  for (let i = 0; i < TIER.brackets.length; i++) {
    const b = TIER.brackets[i]
    if (next >= b.min && next <= b.max) {
      return {
        index: i + 1,
        total: TIER.brackets.length,
        price: b.price,
        rangeMin: b.min,
        rangeMax: b.max === Infinity ? null : b.max,
        spotsLeftInTier: b.max === Infinity ? null : b.max - TIER.filled,
        nextTierPrice: TIER.brackets[i + 1] ? TIER.brackets[i + 1].price : null,
      }
    }
  }
  return null
}
