# HK Web3 Quest 🇭🇰🕹️

> An interactive pixel-art quest map of Hong Kong's Web3 & crypto ecosystem.

<p align="center">
  <img src="public/ogp-sf-ai-startup-map.png" alt="HK Web3 Quest key visual" width="720" />
</p>

## What is this?

A Dragon Quest-inspired interactive map that lets you explore **20 active Web3 companies** across Hong Kong — from SFC-licensed exchanges to blockchain VCs — plus a **Graveyard of the Departed** featuring 5 tombstone markers for companies that didn’t make it.

Forked from [sf-web3-quest](https://github.com/Cloriskitty/sf-web3-quest).

## Categories

| Category | Count | Examples |
|---|---|---|
| 🏦 Exchange | 6 | HashKey Exchange, OSL, HKVAX, OKX HK, HKbitEX, VDX |
| 🛠️ Infrastructure | 3 | HashKey Cloud, CryptoBLK, Consensys HK |
| 🔐 Custody | 1 | Hex Trust |
| 🌐 DeFi | 1 | Ondo Finance |
| 💳 Payments | 3 | RedotPay, Alchemy Pay, ZA Bank |
| 🔍 Analytics | 1 | Chainalysis HK |
| 💰 Investor | 5 | Animoca Brands, HashKey Capital, CMCC Global |

### 🪦 The Graveyard

| Company | What Happened |
|---|---|
| FTX ☠️ | HK → Bahamas → Federal Prison |
| Tether / Bitfinex ☠️ | HK → BVI → El Salvador |
| Bybit ☠️ | Applied for VASP, got flagged, ran to Dubai |
| Gate.HK ☠️ | Part of the May 2024 great escape |
| Huobi HK (HTX) ☠️ | Rebranded, relocated, retreated |

## Tech Stack

- **Next.js 15** + TypeScript + Tailwind CSS
- **MapLibre GL** for the interactive map
- Custom pixel-art sprite rendering (including tombstone markers)
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

MIT
