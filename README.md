# 🎮 Playverse — Online Gaming Entertainment Platform

A production-quality, full-stack recreation of an online gaming/casino-style
website, built from scratch with an **original brand, copy, and assets** (no
copyrighted material is reproduced). Playverse demonstrates the complete UX of a
modern real-money-style gaming site — game catalog, live casino, sportsbook,
promotions, VIP club, account wallet, and authentication — using a **mock
backend** with **play credits only** (no real money is ever involved).

> ⚠️ Playverse is a **fictional, educational demonstration**. It uses play
> credits only, performs no real-money transactions, and is intended for adults
> 18+. It includes prominent responsible-gaming tooling and disclaimers.

---

## ✨ Tech stack

| Layer            | Technology                                                     |
| ---------------- | ------------------------------------------------------------- |
| Framework        | **Next.js 16** (App Router, React Server Components)           |
| Language         | **TypeScript** (strict)                                       |
| Styling          | **Tailwind CSS v4** (CSS-first `@theme`, custom design tokens) |
| UI primitives    | **shadcn/ui**-style components (Radix UI + CVA)               |
| Icons            | **lucide-react**                                              |
| Notifications    | **sonner** toasts                                             |
| Database         | **PostgreSQL** via **Drizzle ORM**                            |
| Auth (mock)      | scrypt password hashing + signed httpOnly session cookies     |
| Forms / state    | React hooks + server actions via REST API routes              |

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure the database (already set in .env)
#    DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db

# 3. Create the database tables
npx drizzle-kit push --force

# 4. Run the dev server
npm run dev
```

Open <http://localhost:3000>. Create an account to receive ₱500 in play credit.

### Scripts
- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check
- `npx drizzle-kit push` — apply schema changes to Postgres

---

## 🧱 Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── (routes)/             # pages: home, games, dashboard, auth, etc.
│   ├── api/                  # mock backend (REST route handlers)
│   │   ├── auth/             # register, login, logout, me
│   │   ├── wallet/           # deposit / withdraw
│   │   ├── transactions/     # transaction history
│   │   └── favorites/        # favorite games
│   ├── layout.tsx            # root layout, SEO metadata, providers
│   ├── globals.css           # Tailwind v4 theme + design tokens
│   ├── sitemap.ts            # dynamic SEO sitemap
│   └── robots.ts             # robots.txt
├── components/
│   ├── ui/                   # shadcn/ui primitives (button, card, dialog…)
│   ├── site/                 # header, footer, page-hero, faq, cta
│   ├── game/                 # game-card, hero-carousel, browser, launcher
│   ├── dashboard/            # dashboard shell, wallet form, tx rows
│   ├── auth/                 # login/register forms + auth shell
│   └── providers/            # client auth context + toaster
├── db/
│   ├── schema.ts             # Drizzle schema (users, sessions, tx, favorites)
│   └── index.ts              # Postgres pool + drizzle client
└── lib/
    ├── auth.ts               # mock auth + wallet/favorites data layer
    ├── catalog.ts            # static catalog (games, promos, sports, content)
    ├── nav.ts                # navigation + payment config
    ├── types.ts              # shared TypeScript types
    └── utils.ts              # cn(), currency/time formatters, helpers
```

---

## 🔐 How authentication works (mock backend)

Playverse implements a realistic auth flow **without third-party services**:

1. **Registration** (`POST /api/auth/register`) validates input, hashes the
   password with Node's **scrypt** (`salt:hash`), inserts a user, credits
   ₱500 welcome bonus, and creates a session.
2. **Login** (`POST /api/auth/login`) verifies the password with
   `timingSafeEqual` and issues a session.
3. **Sessions** are random 256-bit tokens stored in the `sessions` table and in
   an **httpOnly, sameSite, Secure** cookie (`pv_session`, 7-day TTL).
4. **Current user** is resolved server-side via `getSessionUser()` (used in
   server components/layouts) and exposed client-side through the
   `AuthProvider` context (which calls `GET /api/auth/me`).
5. **Protected routes** (`/dashboard/*`) call `requireUser()`, which redirects
   to `/login` when there is no valid session.
6. **Logout** deletes the session row and clears the cookie.

Passwords are never stored in plain text, and the client only ever receives a
**safe user object** (no password hash).

---

## 💳 Wallet & transactions

- `POST /api/wallet` (`deposit` / `withdraw`) adjusts the user's balance
  atomically and records a transaction with a unique reference.
- Server-side validation enforces min/max limits and prevents overdrafts.
- `GET /api/transactions` returns the user's full history, rendered in the
  dashboard with color-coded type badges and relative timestamps.

---

## 🎰 The game catalog

The catalog (`src/lib/catalog.ts`) is a typed, static dataset (no scraping of
third-party content) containing:

- **27 fictional games** across 7 categories (Slots, Live Casino, Sports,
  Fishing, Crash, Arcade, Poker) with RTP, ratings, providers, tags, and
  jackpot flags.
- **6 promotions** with full terms & bonus codes.
- **Sports events** with live/upcoming status and 1X2 odds.
- **Providers, testimonials, FAQs, stats, and features** content.

Game "thumbnails" are rendered as **deterministic CSS gradients + emoji**
(`GameArt`) — no copyrighted images, and very performant. Logged-in users can
launch an interactive **demo game** (a slot-style spin) from the game detail
page via the `GameLauncher`.

---

## 📄 Pages & features

| Route                     | Description                                              |
| ------------------------- | ------------------------------------------------------- |
| `/`                       | Hero carousel, categories, hot/new/featured games, jackpot, promos, providers, testimonials, FAQ, CTA |
| `/games`                  | Searchable/filterable/sortable game library (client)     |
| `/games/[id]`             | Game detail, ratings, RTP, demo launcher, related games  |
| `/live-casino`, `/slots`  | Category landing pages                                   |
| `/sport`                  | Sportsbook with live & upcoming events and odds          |
| `/promotions`, `/[id]`    | Promotions grid + detail with copyable bonus codes       |
| `/vip`                    | 5-tier VIP club with cashback and perks                  |
| `/login`, `/register`     | Split-screen auth flows                                  |
| `/dashboard`              | Overview: balance, stats, VIP progress, recent activity  |
| `/dashboard/wallet`       | Deposit/withdraw with payment methods                    |
| `/dashboard/history`      | Full transaction history                                 |
| `/dashboard/favorites`    | Saved games                                              |
| `/dashboard/profile`      | Account details + responsible-gaming toggles             |
| `/support`, `/faq`        | Support channels, contact form, FAQ                      |
| `/about`                  | Company story, mission, values                           |
| `/responsible-gaming`     | Limits, self-exclusion, resources                        |
| `/terms`, `/privacy`      | Legal pages                                              |

---

## 📱 Responsive design

Every screen is built mobile-first and tested across breakpoints:
- **Mobile:** bottom-aligned sticky header with slide-out sheet navigation,
  single-column layouts, horizontally-scrollable filters.
- **Tablet:** 2–3 column grids, condensed navigation.
- **Desktop:** full nav, multi-column dashboards, sidebar layouts, hero
  side-panels.

---

## ♿ Accessibility & 🔍 SEO

- Semantic HTML, ARIA labels, keyboard-navigable Radix components, focus rings,
  `aria-live` jackpot ticker, and `<details>`-based accordions.
- `alt`/`aria-label` on all icon-only buttons; color-contrast tuned for dark
  theme.
- Per-page `Metadata` (titles, descriptions, Open Graph, Twitter cards),
  `sitemap.xml`, `robots.txt`, canonical `metadataBase`, and **JSON-LD**
  structured data (`WebSite`, `VideoGame`, `AggregateRating`).

---

## ⚡ Performance

- React Server Components render HTML on the server (great for SEO/FCP).
- Static catalog avoids DB round-trips for public pages.
- CSS-gradient artwork instead of heavy images; system font stack (no web-font
  fetch); CSS-only animations (marquee, float, pulse).
- Code-split client islands only where interactivity is required.

---

## 🌱 Data model (Drizzle)

- **users** — id, username, email, passwordHash, balance, vipLevel, vipPoints
- **sessions** — token, userId, expiresAt
- **transactions** — userId, type (deposit/withdraw/bet/win/bonus), amount, status, method, reference
- **favorites** — userId, gameId

---

## 🚢 Deployment

Playverse is a standard Next.js app and deploys anywhere that supports Node
(Vercel, Netlify, a Node host, or Docker). Set `DATABASE_URL` to a managed
Postgres instance, run `npx drizzle-kit push`, then `npm run build && npm run start`.

---

_Playverse is an original work created for demonstration purposes. All game
titles, providers, branding, and imagery are fictional._
