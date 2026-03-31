export const COMPANY_CATEGORIES = [
  "Exchange",
  "Infrastructure",
  "Custody",
  "DeFi",
  "Payments",
  "Analytics",
  "Investor",
] as const

export type CompanyCategory = (typeof COMPANY_CATEGORIES)[number]

export const CATEGORY_COLORS: Record<CompanyCategory, string> = {
  Exchange: "#d32f2f",
  Infrastructure: "#7b1fa2",
  Custody: "#1565c0",
  DeFi: "#00897b",
  Payments: "#fbc02d",
  Analytics: "#e65100",
  Investor: "#2e7d32",
}

export function categoryPillForeground(
  category: CompanyCategory
): "#ffffff" | "#1a1a2e" {
  return category === "Payments" ? "#1a1a2e" : "#ffffff"
}

export type Company = {
  slug: string
  name: string
  website: string
  shortDescription: string
  whyItMatters: string
  category: CompanyCategory
  locationLabel: string
  coordinates: [number, number]
  founded: number
  logoUrl?: string
  hideFromSidebar?: boolean
  mapSprite?: "default" | "boss" | "tombstone"
  sourceUrl: string
  sourceLabel: string
  departed?: boolean
}

export const HK_BOSS_SLUG = "hashkey-exchange" as const

export function getCompanyMonogram(company: Company) {
  const parts = company.name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return company.name.slice(0, 2).toUpperCase()
}

export function getCompanyDomain(company: Company) {
  return new URL(company.website).hostname
}

export function getCompanyLogoUrl(company: Company) {
  if (company.logoUrl) return company.logoUrl
  const domain = getCompanyDomain(company)
  return "https://www.google.com/s2/favicons?domain=" + domain + "&sz=128"
}

export const COMPANIES: Company[] = [
  // EXCHANGES
  {
    slug: "hashkey-exchange",
    name: "HashKey Exchange",
    website: "https://www.hashkey.com",
    shortDescription: "Hong Kong's leading SFC-licensed virtual asset trading platform, serving both retail and professional investors.",
    whyItMatters: "HashKey was the second company in Hong Kong to obtain a crypto license and has built an end-to-end Web3 ecosystem -- exchange, capital, cloud, and its own Ethereum L2 (HashKey Chain).",
    category: "Exchange",
    locationLabel: "Level 14, Three Exchange Square, 8 Connaught Place, Central",
    coordinates: [114.1588, 22.2838],
    founded: 2018,
    mapSprite: "boss",
    sourceUrl: "https://group.hashkey.com/en/about",
    sourceLabel: "HashKey Group -- About",
  },
  {
    slug: "osl",
    name: "OSL",
    website: "https://www.osl.com",
    shortDescription: "The first SFC-licensed virtual asset platform in Hong Kong, offering institutional-grade brokerage, custody, and exchange services.",
    whyItMatters: "OSL pioneered regulated crypto in Hong Kong -- the first to receive an SFC license, paving the way for the city's entire VASP framework.",
    category: "Exchange",
    locationLabel: "39/F, Lee Garden One, 33 Hysan Avenue, Causeway Bay",
    coordinates: [114.1836, 22.2791],
    founded: 2018,
    sourceUrl: "https://osl.com/support/article/what-is-osls-office-address-xntjko/",
    sourceLabel: "OSL Support -- Office address",
  },
  {
    slug: "hkvax",
    name: "HKVAX",
    website: "https://www.hkvax.com",
    shortDescription: "Hong Kong's third SFC-licensed virtual asset exchange, partnering with Microsoft to build enterprise-grade trading infrastructure.",
    whyItMatters: "HKVAX chose to build on Microsoft Azure -- a signal that institutional-grade cloud infrastructure is now table stakes for regulated crypto exchanges.",
    category: "Exchange",
    locationLabel: "Unit 2503, Level 25, Lee Garden Five, 18 Hysan Ave, Causeway Bay",
    coordinates: [114.1849, 22.2783],
    founded: 2019,
    sourceUrl: "https://news.microsoft.com/en-hk/2025/04/08/hkvax-collaborates-with-microsoft-hong-kong-to-build-enterprise-grade-digital-asset-trading-infrastructure/",
    sourceLabel: "Microsoft News -- HKVAX collaboration",
  },
  {
    slug: "okx-hk",
    name: "OKX (HK Office)",
    website: "https://www.okx.com",
    shortDescription: "Global crypto exchange and Web3 wallet platform serving 50M+ users, with a registered Hong Kong custody entity.",
    whyItMatters: "OKX is building the super-app for Web3 -- combining spot, derivatives, DeFi, and NFTs. The Hong Kong entity signals ongoing interest in the city's regulated market.",
    category: "Exchange",
    locationLabel: "6/F, Sino Plaza, 255-257 Gloucester Road, Causeway Bay",
    coordinates: [114.1843, 22.2802],
    founded: 2017,
    sourceUrl: "https://www.dnb.com/business-directory/company-profiles.okx_hong_kong_custody_company_limited.db6738b5f4dd0eb862def20416316b27.html",
    sourceLabel: "D&B -- OKX Hong Kong Custody Company",
  },
  {
    slug: "hkbitex",
    name: "HKbitEX",
    website: "https://www.hkbitex.com",
    shortDescription: "Newly SFC-licensed exchange approved through Hong Kong's swift licensing process in 2026.",
    whyItMatters: "HKbitEX is proof that Hong Kong's 'swift licensing' track works -- fast-tracking compliant platforms to meet growing institutional demand.",
    category: "Exchange",
    locationLabel: "Central, Hong Kong",
    coordinates: [114.1595, 22.2820],
    founded: 2019,
    sourceUrl: "https://www.theblock.co/post/331616/hong-kong-accelerates-crypto-exchange-licensing-with-four-new-approvals",
    sourceLabel: "The Block -- HK accelerates crypto licensing",
  },
  {
    slug: "vdx",
    name: "VDX (Victory Fintech)",
    website: "https://www.vdx.com",
    shortDescription: "First company approved as an SFC-licensed VATP in 2026, providing institutional virtual asset trading infrastructure.",
    whyItMatters: "VDX focuses on giving licensed financial institutions the rails to offer crypto services -- the picks-and-shovels play for Hong Kong's regulated market.",
    category: "Exchange",
    locationLabel: "Central, Hong Kong",
    coordinates: [114.1570, 22.2835],
    founded: 2020,
    sourceUrl: "https://fintechnews.hk/licensed-crypto-exchanges-hong-kong/",
    sourceLabel: "Fintech HK -- Full list of licensed exchanges",
  },
  // INFRASTRUCTURE
  {
    slug: "hashkey-cloud",
    name: "HashKey Cloud",
    website: "https://www.hashkey.cloud",
    shortDescription: "HashKey's node infrastructure arm -- validator services, staking, and the builder of HashKey Chain, an Ethereum Layer 2.",
    whyItMatters: "HashKey Chain is Hong Kong's homegrown L2 -- purpose-built for tokenized finance under a regime that actually has regulatory clarity.",
    category: "Infrastructure",
    locationLabel: "Level 14, Three Exchange Square, 8 Connaught Place, Central",
    coordinates: [114.1592, 22.2840],
    founded: 2019,
    sourceUrl: "https://group.hashkey.com/en",
    sourceLabel: "HashKey Group -- Official site",
  },
  {
    slug: "cryptoblk",
    name: "CryptoBLK",
    website: "https://www.cryptoblk.io",
    shortDescription: "Hong Kong enterprise blockchain specialist since 2017, delivering DLT solutions for trade finance, supply chain, and InsurTech.",
    whyItMatters: "CryptoBLK proves blockchain isn't just about tokens -- it's the enterprise DLT workhorse powering real trade finance and insurance workflows in Asia.",
    category: "Infrastructure",
    locationLabel: "Cyberport 1, 100 Cyberport Road, Pok Fu Lam",
    coordinates: [114.1308, 22.2611],
    founded: 2017,
    sourceUrl: "https://cryptorank.io/news/feed/6c743-blockchain-development-companies-hong-kong",
    sourceLabel: "CryptoRank -- Blockchain dev companies HK",
  },
  {
    slug: "consensys-hk",
    name: "Consensys (HK Office)",
    website: "https://consensys.io",
    shortDescription: "The Ethereum software company behind MetaMask, Infura, and Linea -- with a growing Hong Kong presence at Cyberport.",
    whyItMatters: "MetaMask is the wallet 30M+ people use to interact with Web3. Consensys setting up at Cyberport signals Ethereum's institutional bet on Hong Kong.",
    category: "Infrastructure",
    locationLabel: "Cyberport, 100 Cyberport Road, Pok Fu Lam",
    coordinates: [114.1312, 22.2615],
    founded: 2014,
    sourceUrl: "https://beincrypto.com/hong-kongs-cyberport-web3-crypto-firms/",
    sourceLabel: "BeInCrypto -- Cyberport Web3 firms",
  },
  // CUSTODY
  {
    slug: "hex-trust",
    name: "Hex Trust",
    website: "https://www.hextrust.com",
    shortDescription: "Licensed digital asset custodian and Fireblocks partner, serving institutions across APAC and the Middle East.",
    whyItMatters: "Hex Trust is the regulated custody backbone for institutional crypto in Asia -- Cyberport-incubated, now a Fireblocks Qualified Custodian.",
    category: "Custody",
    locationLabel: "28/F, 308 Des Voeux Road Central, Sheung Wan",
    coordinates: [114.1507, 22.2867],
    founded: 2018,
    sourceUrl: "https://craft.co/hex-trust/locations",
    sourceLabel: "Craft.co -- Hex Trust locations",
  },
  // DeFi
  {
    slug: "ondo-finance",
    name: "Ondo Finance",
    website: "https://ondo.finance",
    shortDescription: "RWA tokenization protocol bringing US Treasuries and bonds on-chain, with growing presence in Hong Kong's Web3 scene.",
    whyItMatters: "Ondo is the bridge between TradFi yield and DeFi composability -- tokenized Treasuries are the killer app that makes institutions care about on-chain.",
    category: "DeFi",
    locationLabel: "Hong Kong (Web3 Festival presence)",
    coordinates: [114.1710, 22.2800],
    founded: 2021,
    sourceUrl: "https://news.bitcoin.com/hong-kong-web3-festival-unveils-2026-speaker-lineup-featuring-leaders-from-blackrock-okx-solana-sharplink-and-ondo/",
    sourceLabel: "Bitcoin News -- HK Web3 Festival 2026 speakers",
  },
  // PAYMENTS
  {
    slug: "redotpay",
    name: "RedotPay",
    website: "https://www.redotpay.com",
    shortDescription: "Hong Kong-born stablecoin payment unicorn -- $194M raised in 2025, 6M+ users, $10B+ annualized payment volume.",
    whyItMatters: "RedotPay proved that stablecoin payments can scale to billions. Born in Hong Kong, now the poster child for real-world crypto utility.",
    category: "Payments",
    locationLabel: "Hong Kong",
    coordinates: [114.1650, 22.2750],
    founded: 2023,
    mapSprite: "boss",
    sourceUrl: "https://www.redotpay.com/news/redotpay-raises-us107m-in-series-b-to-drive-stablecoin-payments-adoption-globally",
    sourceLabel: "RedotPay -- Series B announcement",
  },
  {
    slug: "alchemy-pay",
    name: "Alchemy Pay",
    website: "https://alchemypay.org",
    shortDescription: "Crypto-fiat payment gateway powering Visa/Mastercard crypto card programs, now building Alchemy Chain for stablecoin payments.",
    whyItMatters: "Alchemy Pay is building the Stripe of crypto -- fiat on/off ramps, card issuance, and a purpose-built L1 for stablecoin settlements.",
    category: "Payments",
    locationLabel: "Hong Kong",
    coordinates: [114.1680, 22.2770],
    founded: 2017,
    sourceUrl: "https://alchemypay.org/news-and-press/alchemy-pay-introduces-crypto-card-issuance-solution-for-business-partners",
    sourceLabel: "Alchemy Pay -- Crypto card solution",
  },
  {
    slug: "za-bank",
    name: "ZA Bank",
    website: "https://bank.za.group",
    shortDescription: "Hong Kong's first virtual bank to offer crypto services -- bridging traditional banking and digital assets.",
    whyItMatters: "ZA Bank is the canary in the coal mine: when a licensed virtual bank starts offering crypto, it means digital assets have crossed into mainstream finance in Hong Kong.",
    category: "Payments",
    locationLabel: "36/F, Tower 1, Kowloon Commerce Centre, 51 Kwai Cheong Rd, Kwai Chung",
    coordinates: [114.1270, 22.3630],
    founded: 2019,
    sourceUrl: "https://www.scmp.com/tech/blockchain/article/3347286/will-hong-kongs-regulatory-clarity-crypto-forge-path-global-hub-status",
    sourceLabel: "SCMP -- HK regulatory clarity for crypto",
  },
  // ANALYTICS
  {
    slug: "chainalysis-hk",
    name: "Chainalysis (HK Office)",
    website: "https://www.chainalysis.com",
    shortDescription: "The leading blockchain analytics and compliance platform, supporting law enforcement and financial institutions across Asia.",
    whyItMatters: "Chainalysis is the eyes of compliance -- without on-chain analytics, Hong Kong's entire VASP licensing regime would be flying blind.",
    category: "Analytics",
    locationLabel: "Hong Kong",
    coordinates: [114.1620, 22.2810],
    founded: 2014,
    sourceUrl: "https://www.chainalysis.com/blog/eastern-asia-crypto-adoption-2024/",
    sourceLabel: "Chainalysis -- Eastern Asia adoption report",
  },
  // INVESTORS
  {
    slug: "animoca-brands",
    name: "Animoca Brands",
    website: "https://www.animocabrands.com",
    shortDescription: "Hong Kong's Web3 gaming and metaverse unicorn -- $758M raised, powering NFT ecosystems and digital property rights globally.",
    whyItMatters: "Animoca is Hong Kong's crown jewel of Web3: a homegrown unicorn that proved blockchain gaming and digital ownership are real businesses, not just hype.",
    category: "Investor",
    locationLabel: "Unit 417-421, Cyberport 1, 100 Cyberport Road, Pok Fu Lam",
    coordinates: [114.1305, 22.2608],
    founded: 2014,
    mapSprite: "boss",
    sourceUrl: "https://www.animocabrands.com/contact",
    sourceLabel: "Animoca Brands -- Contact",
  },
  {
    slug: "hashkey-capital",
    name: "HashKey Capital",
    website: "https://capital.hashkey.com",
    shortDescription: "Asia's premier crypto-native VC with 219+ investments spanning infrastructure, DeFi, and CeFi -- backer of Animoca, Celestia, and more.",
    whyItMatters: "HashKey Capital has quietly funded the backbone of Web3 in Asia. From L1s to DeFi protocols, their portfolio is a map of the industry's future.",
    category: "Investor",
    locationLabel: "Three Exchange Square, 8 Connaught Place, Central",
    coordinates: [114.1585, 22.2835],
    founded: 2018,
    sourceUrl: "https://pitchbook.com/profiles/company/264190-60",
    sourceLabel: "PitchBook -- HashKey Group profile",
  },
  {
    slug: "cmcc-global",
    name: "CMCC Global",
    website: "https://www.cmcc.vc",
    shortDescription: "One of Asia's first pure-play blockchain VCs, running the $100M Titan Fund focused on infrastructure, gaming, and financial services.",
    whyItMatters: "CMCC Global (and its Titan Fund) was betting on blockchain before it was fashionable in Asia -- early conviction that's now paying off as Hong Kong embraces Web3.",
    category: "Investor",
    locationLabel: "Exchange Square 1, Central",
    coordinates: [114.1580, 22.2842],
    founded: 2016,
    sourceUrl: "https://www.cmcc.vc/about",
    sourceLabel: "CMCC Global -- About",
  },
  {
    slug: "kenetic-capital",
    name: "Kenetic Capital",
    website: "https://www.kenetic.capital",
    shortDescription: "Hong Kong-based blockchain venture firm investing in the sector since 2016 -- one of the earliest crypto VCs in Asia.",
    whyItMatters: "Kenetic was doing crypto VC in Hong Kong when most funds wouldn't touch it. That early conviction shaped the city's entire Web3 investment landscape.",
    category: "Investor",
    locationLabel: "Central, Hong Kong",
    coordinates: [114.1560, 22.2825],
    founded: 2016,
    sourceUrl: "https://www.crunchbase.com/organization/kenetic-capital",
    sourceLabel: "Crunchbase -- Kenetic Capital",
  },
  {
    slug: "spartan-group",
    name: "Spartan Group",
    website: "https://www.spartangroup.io",
    shortDescription: "Blockchain investment and advisory firm with dual HQ in Singapore and Hong Kong, focused on DeFi, infrastructure, and gaming.",
    whyItMatters: "Spartan bridges the Singapore-Hong Kong crypto corridor -- a dual-city thesis that mirrors how institutional capital actually flows in Asia.",
    category: "Investor",
    locationLabel: "Hong Kong & Singapore",
    coordinates: [114.1640, 22.2815],
    founded: 2018,
    sourceUrl: "https://www.crunchbase.com/organization/the-spartan-group-4202",
    sourceLabel: "Crunchbase -- Spartan Group",
  },
  // THE GRAVEYARD -- departed / defunct
  {
    slug: "ftx-hk",
    name: "FTX \u2620\uFE0F",
    website: "https://en.wikipedia.org/wiki/FTX",
    shortDescription: "Once Hong Kong's hottest crypto exchange. Moved to Bahamas in 2021. Imploded in 2022. Founder convicted of fraud.",
    whyItMatters: "SBF called Hong Kong's regulators 'hostile' and fled to the Bahamas for 'freedom.' Plot twist: the Bahamas didn't save him either. \uD83D\uDC80",
    category: "Exchange",
    locationLabel: "Former: Hong Kong \u2192 Bahamas \u2192 Federal Prison",
    coordinates: [114.1550, 22.2790],
    founded: 2019,
    mapSprite: "tombstone",
    departed: true,
    sourceUrl: "https://en.wikipedia.org/wiki/FTX",
    sourceLabel: "Wikipedia -- FTX",
  },
  {
    slug: "tether-bitfinex",
    name: "Tether / Bitfinex \u2620\uFE0F",
    website: "https://en.wikipedia.org/wiki/Tether_(cryptocurrency)",
    shortDescription: "Born in Hong Kong in 2012 as iFinex. Printed the world's most controversial stablecoin. Relocated to El Salvador in 2025.",
    whyItMatters: "From a Hong Kong office to the world's largest stablecoin ($100B+). Left for El Salvador -- because when you print digital dollars, you pick your own jurisdiction. \uD83C\uDFC3\u200D\u2642\uFE0F",
    category: "Payments",
    locationLabel: "Former: Hong Kong \u2192 BVI \u2192 El Salvador",
    coordinates: [114.1700, 22.2850],
    founded: 2012,
    mapSprite: "tombstone",
    departed: true,
    sourceUrl: "https://en.wikipedia.org/wiki/Tether_(cryptocurrency)",
    sourceLabel: "Wikipedia -- Tether",
  },
  {
    slug: "bybit-hk",
    name: "Bybit \u2620\uFE0F",
    website: "https://en.wikipedia.org/wiki/Bybit",
    shortDescription: "Applied for Hong Kong VASP license in January 2024. Withdrew 4 months later after SFC flagged it as unlicensed. Now based in Dubai.",
    whyItMatters: "Filed the application, got publicly called out by the SFC, then ran to Dubai faster than you can say 'compliance.' Classic. \uD83C\uDFDC\uFE0F",
    category: "Exchange",
    locationLabel: "Former: Hong Kong \u2192 Dubai",
    coordinates: [114.1730, 22.2830],
    founded: 2018,
    mapSprite: "tombstone",
    departed: true,
    sourceUrl: "https://news.bitcoin.com/bybit-affiliate-withdraws-hong-kong-vasp-application-months-after-regulator-issued-license-warning/",
    sourceLabel: "Bitcoin News -- Bybit withdraws HK VASP app",
  },
  {
    slug: "gate-hk",
    name: "Gate.HK \u2620\uFE0F",
    website: "https://en.wikipedia.org/wiki/Gate.io",
    shortDescription: "Gate.io's Hong Kong affiliate. Applied for VASP license, withdrew by May 2024 deadline alongside the mass exodus.",
    whyItMatters: "Part of the May 2024 great escape -- when half the industry looked at Hong Kong's compliance costs and collectively said 'nah.' \uD83D\uDC4B",
    category: "Exchange",
    locationLabel: "Former: Hong Kong \u2192 Gone",
    coordinates: [114.1480, 22.2780],
    founded: 2013,
    mapSprite: "tombstone",
    departed: true,
    sourceUrl: "https://www.coindesk.com/business/2024/05/24/crypto-exchange-okx-withdraws-hong-kong-license-application/",
    sourceLabel: "CoinDesk -- Exchanges withdraw HK licenses",
  },
  {
    slug: "huobi-hk",
    name: "Huobi HK (HTX) \u2620\uFE0F",
    website: "https://en.wikipedia.org/wiki/Huobi",
    shortDescription: "Huobi's Hong Kong arm. Rebranded to HTX. Withdrew VASP application in May 2024. Now a distant memory.",
    whyItMatters: "Rebranded, relocated, and retreated -- all in the span of a year. The VASP license was apparently scarier than a rebrand. RIP. \u26B0\uFE0F",
    category: "Exchange",
    locationLabel: "Former: Hong Kong \u2192 Seychelles \u2192 \u00AF\\_(\u30C4)_/\u00AF",
    coordinates: [114.1500, 22.2860],
    founded: 2013,
    mapSprite: "tombstone",
    departed: true,
    sourceUrl: "https://www.elliptic.co/blog/hong-kong-regulator-names-eleven-crypto-firms-progressing-through-licensing-process",
    sourceLabel: "Elliptic -- HK licensing progress",
  },
]
