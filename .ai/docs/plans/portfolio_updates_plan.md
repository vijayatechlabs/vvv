# Implementation Plan: Portfolio Updates & Accurate Social Media Links

**File Location**: `.ai/docs/plans/portfolio_updates_plan.md`  
**Master Directory**: [.ai/docs/portfolio_brands.md](file:///Users/User/Projects/vvv/.ai/docs/portfolio_brands.md)

## Overview
This plan details the completed updates to ViswaVardhan Vyapara portfolio site:
1. Adding **KlypsoTech.com** under `AI & Technology` (highlighting **CureHMS** as its flagship healthcare management & billing software product).
2. Adding **osaa.ai** (`osaa.ai`) under `Research & Open Source`.
3. Completing the rename from **SpinVerb.in** to **AgenticAds.dev**.
4. Updating domain URLs as requested:
   - **Glint**: `vijayatechlabs.com/glint` (plus GitHub link).
   - **MemPalace**: `mempalace.in` (plus GitHub link).
   - **OpenStart**: GitHub repository link (`github.com/vijayatechlabs/openstart`).
   - **osaa.ai**: `osaa.ai` *(Alias: osaa.dev)*.
5. Standardizing the **social media display sequence** across all cards and docs:
   1. **X**
   2. **LinkedIn**
   3. **GitHub**
   4. **Facebook**
   5. **YouTube**
   6. **Telegram**
   7. **Instagram**
   8. **Bluesky**
6. Updating dynamic portfolio counts: **15 active brands** and **540+ global clients**.
7. Maintaining a permanent brand documentation directory in [.ai/docs/portfolio_brands.md](file:///Users/User/Projects/vvv/.ai/docs/portfolio_brands.md) for reuse by human team members and AI agents.

---

## Complete Portfolio & Social Media Directory (Standard Sequence)

Below is the complete reference matrix of all 15 brands, their domains, descriptions, and verified social media links ordered by standard sequence (`X`, `LinkedIn`, `GitHub`, `Facebook`, `YouTube`, `Telegram`, `Instagram`, `Bluesky`).

| Brand | Sector | Domain / Website | Description & Tagline | Verified Social Media Links (In Sequence) |
| :--- | :--- | :--- | :--- | :--- |
| **VijayaTech Labs** | AI & Technology | `vijayatechlabs.com` | AI & Automation Agency — Digital automation for your business | X (`x.com/vijayatechlabs`), LinkedIn (`linkedin.com/company/vijayatech-labs`), GitHub (`github.com/vijayatechlabs`), Facebook (`facebook.com/vijayatech`), YouTube (`youtube.com/@vijayatechlabs`) |
| **atharva AI** | AI & Technology | `atharva.app` | WhatsApp Business API & AI Engagement Platform | X (`x.com/atharvaapp`), LinkedIn (`linkedin.com/company/atharva-app/`), Facebook (`facebook.com/atharvaapp`), YouTube (`youtube.com/@atharvaapp`), Bluesky (`bsky.app/profile/atharvaapp.bsky.social`) |
| **Zira** | AI & Technology | `heyzira.com` | Autonomous AI agent for Accounts Receivable — stop chasing payments | *None active* |
| **naam** | AI & Technology | `naam.one` | AI-powered business name generator — Name it. Claim it. Launch it. | X (`x.com/naamdotone`), LinkedIn (`linkedin.com/company/naamdotone`), Facebook (`facebook.com/naamdotone`), YouTube (`youtube.com/@naamdotone`) |
| **WP Setu** | AI & Technology | `wpsetu.com` | WordPress plugin for API-driven media upload & content automation | GitHub (`github.com/vijayatechlabs/wp-setu`) |
| **KlypsoTech** *(NEW)* | AI & Technology | `klypsotech.com` | Custom software & IT solutions — Creators of CureHMS healthcare management & billing software | *None active* |
| **Shrika Finserv** | Fintech & Real Estate | `shrika.in` | Expert guidance for wealth building — Insurance, investments & financial intelligence | *None active* |
| **Shrika Realty** | Fintech & Real Estate | `shrikarealty.in` | Your trusted partner in property — sales, rentals & management | Facebook (`facebook.com/shrikarealty`), YouTube (`youtube.com/@shrikarealty`), Instagram (`instagram.com/shrikarealty`) |
| **PANI** | Commerce & Growth | `panihq.com` | Scores candidates by public work, surfaces hidden-market jobs | X (`x.com/panihq`), LinkedIn (`linkedin.com/company/panihq`), Facebook Group (`facebook.com/groups/pani.deals`), Telegram (`t.me/pani_jobs`), LinkedIn Showcase (`linkedin.com/showcase/pani-jobs/`) |
| **Revive Talent** | Commerce & Growth | `revivetalent.com` | WhatsApp automation for staffing & recruitment agencies | *None active* |
| **AgenticAds** *(Renamed)*| Commerce & Growth | `agenticads.dev` | Ad marketplace inside AI coding-agent wait states | X (`x.com/AgenticAdsDev`) |
| **MemPalace** *(Open Source)* | Research & Open Source | `mempalace.in` | Open-source, local AI memory system with 96.6% recall | GitHub (`github.com/vijayatechlabs/mempalace`) |
| **Glint** *(Open Source)* | Research & Open Source | `vijayatechlabs.com/glint` | Lightning publishing engine for the AI era — git-native | GitHub (`github.com/vijayatechlabs/glint`) |
| **OpenStart** *(Open Source)* | Research & Open Source | `github.com/vijayatechlabs/openstart` | Agent-first framework for building software with human + AI teams | GitHub (`github.com/vijayatechlabs/openstart`) |
| **osaa.ai** *(NEW)* | Research & Open Source | `osaa.ai` *(osaa.dev)* | Open-source AI agent architecture & security framework | *None active* |

---

## Data Model Architecture (`src/data/companies.ts`)

```typescript
export interface CompanySocials {
  x?: string;         // 1. X URL
  linkedin?: string;  // 2. LinkedIn Company URL
  github?: string;    // 3. GitHub Repo / Org URL
  facebook?: string;  // 4. Facebook Page / Group URL
  youtube?: string;   // 5. YouTube Channel URL
  telegram?: string;  // 6. Telegram Channel URL
  instagram?: string; // 7. Instagram Profile URL
  bluesky?: string;   // 8. Bluesky Profile URL
}

export interface Company {
  name: string;
  domain: string;
  tagline: string;
  status: CompanyStatus;
  socials?: CompanySocials;
}
```

---

## Detailed File Modifications

### 1. [MODIFY] [companies.ts](file:///Users/User/Projects/vvv/src/data/companies.ts)
- Defined `CompanySocials` interface in exact sequence order.
- Added **KlypsoTech** to `AI & Technology` with tagline featuring **CureHMS**.
- Added **osaa.ai** (`osaa.ai`) to `Research & Open Source`.
- Updated open-source domains and verified social links.

### 2. [MODIFY] [CompanyLogo.tsx](file:///Users/User/Projects/vvv/src/components/CompanyLogo.tsx)
- Updated `AgenticAds` initials to `'AA'`.
- Added `KlypsoTech` logo config (using `klypsotech-logo.svg`).
- Added `osaa.ai` logo config.

### 3. [MODIFY] [Companies.tsx](file:///Users/User/Projects/vvv/src/sections/Companies.tsx)
- Rendered social link icons following sequence: `X` -> `LinkedIn` -> `GitHub` -> `Facebook` -> `YouTube` -> `Telegram` -> `Instagram` -> `Bluesky`.

### 4. [MODIFY] [Footer.tsx](file:///Users/User/Projects/vvv/src/components/Footer.tsx)
- Added **KlypsoTech** (`https://klypsotech.com`) under `AI & Technology`.
- Added **osaa.ai** (`https://osaa.ai`) under `Research & Open Source`.
- Updated Glint link to `https://vijayatechlabs.com/glint`.
- Updated MemPalace link to `https://mempalace.in`.

---

## Verification Plan

1. **Typecheck & Build**:
   - `npm run typecheck` (`tsc --noEmit`)
   - `npm run build`
2. **Runtime Verification**:
   - Verified 15 active brands render on portfolio cards.
