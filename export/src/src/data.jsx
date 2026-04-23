// ============================================================================
// DATA — all research, numbers, and network content in one place
// ============================================================================

const ISSUE = {
  title: "Full Stream Ahead",
  subtitle: "Unpacking the 2026 Upfronts",
  volume: "Vol. 02",
  date: "April 2026",
  publisher: "UM Worldwide",
  client: "ExxonMobil",
};

const CONTRIBUTORS = {
  editor: { name: "Rory Glantz", role: "Editor · Senior Associate, ExxonMobil Fuels Planning" },
  contributors: [
    { name: "Kurt Tulud", role: "Contributor · Sports & Tentpoles" },
    { name: "David Weiss", role: "Contributor · Consumer & Economics" },
    { name: "Beamz Siverly", role: "Contributor · Regulatory & M&A" },
  ],
};

const TOC = [
  { id: "thesis", num: "01", title: "The Thesis", desc: "From allocation to optimization.", pages: "P.03" },
  { id: "market", num: "02", title: "The Market", desc: "Softer market, smarter dollars.", pages: "P.04–05" },
  { id: "ctv", num: "03", title: "CTV & Streaming", desc: "The new center of gravity.", pages: "P.06–07" },
  { id: "linear", num: "04", title: "Linear Reality", desc: "Not dead — compressed.", pages: "P.08–09" },
  { id: "sports", num: "05", title: "Sports", desc: "The last driver of scale.", pages: "P.10" },
  { id: "ai", num: "06", title: "AI & Measurement", desc: "The new decision layer.", pages: "P.11–12" },
  { id: "economics", num: "07", title: "Economics", desc: "A market defined by uncertainty.", pages: "P.13" },
  { id: "regulation", num: "08", title: "Regulation & M&A", desc: "Consolidation has a green light.", pages: "P.14" },
  { id: "scoreboard", num: "09", title: "Network Scoreboard", desc: "Eleven players, five axes.", pages: "P.15" },
  { id: "networks", num: "10", title: "Network Deep-Dives", desc: "Who shows up with what.", pages: "P.16–22" },
  { id: "competitive", num: "11", title: "Competitive Landscape", desc: "ExxonMobil Fuels.", pages: "P.23–24" },
  { id: "take", num: "12", title: "The UM Take", desc: "Recommendations + predictions.", pages: "P.25" },
];

// ---------- MARKET ----------
const MARKET_STATS = [
  { num: "+18.9%", label: "Streaming TV ad sales growth", sub: "2025 actual · beat 2024's +14% forecast", source: "MAGNA" },
  { num: "−4.5%", label: "Linear ad sales decline in 2025", sub: "Projected to accelerate to −5.9% in 2026", source: "MAGNA" },
  { num: "~75%", label: "Of national TV ad dollars now flow through upfronts", sub: "Up from 60% five years ago", source: "MAGNA" },
  { num: "$46B", label: "National cross-platform TV spend, holding steady", sub: "Streaming growth offsets linear decline", source: "MAGNA" },
];

const GROWTH_DATA = [
  { year: "2022", streaming: 6.8, linear: 40.2 },
  { year: "2023", streaming: 8.9, linear: 38.9 },
  { year: "2024", streaming: 10.8, linear: 36.8 },
  { year: "2025", streaming: 12.9, linear: 34.0 },
  { year: "2026", streaming: 15.0, linear: 32.0 },
];

// ---------- CTV ----------
const CTV_STATS = [
  { num: "84%", label: "Of U.S. households subscribed to at least one major streaming service by end of 2024", source: "MAGNA" },
  { num: "10.9", label: "Streaming services per consumer per month in 2025", sub: "Up from 8 in 2024", source: "MAGNA" },
  { num: "45%", label: "Of ad-supported video viewing now takes place on CTV (A18–49)", source: "MAGNA" },
  { num: "62%", label: "Of consumers willing to watch ads in exchange for lower costs", sub: "Up from 58% in 2024", source: "Kantar" },
  { num: "78%", label: "Of Peacock viewers are on the ad-supported tier", source: "Peacock / MAGNA" },
  { num: "~30%", label: "Of streaming ad sales now controlled by Netflix + Amazon alone", sub: "Netflix doubled upfront commitments YoY", source: "Industry" },
];

const STREAMING_SHARE = [
  { year: 2014, value: 2 },
  { year: 2016, value: 7 },
  { year: 2018, value: 15 },
  { year: 2020, value: 25 },
  { year: 2022, value: 35 },
  { year: 2024, value: 45 },
];

// ---------- LINEAR ----------
const LINEAR_STATS = [
  { num: "6.5", label: "Hours/week of linear TV in 2024", sub: "Peaked at 31+ hrs/week in 2008–09", source: "MAGNA" },
  { num: "65+", label: "Median age of broadcast primetime viewer", source: "MAGNA" },
  { num: "7%", label: "Of adults say nearly all their TV is through traditional channels", source: "Kantar" },
  { num: "13%", label: "Linear's share of total U.S. ad spend in 2024", sub: "Surpassed by digital back in 2016", source: "MAGNA" },
];

const LINEAR_REACH = [
  { year: 2011, value: 93 },
  { year: 2014, value: 87 },
  { year: 2017, value: 80 },
  { year: 2020, value: 75 },
  { year: 2024, value: 68 },
];

// ---------- AI ----------
const AI_CAPABILITIES = [
  { title: "Agentic Planning & Buying", body: "Productizing previous years' AI-agent tests. Networks are selling flexibility, not just automation — the upfront becomes the framework, agentic execution happens year-round." },
  { title: "Outcomes-Based Measurement", body: "iSpot, VideoAmp, and partner clean rooms are emerging as the primary point of differentiation. Attribution at scale changes the conversation from reach to impact." },
  { title: "Creative Optimization", body: "Dynamic creative versioning and AI-assisted compliance checks accelerating across CTV inventory." },
  { title: "Cross-Platform Attribution", body: "The hardest problem in the room. Walled gardens (Netflix, Amazon, YouTube) are tightening; independent measurement is fighting to keep up." },
  { title: "Privacy-Compliant Targeting", body: "Clean rooms partnered with agency holdcos and Snowflake. Precision without the third-party cookie." },
];

// ---------- ECONOMICS ----------
const ECONOMICS_POINTS = [
  { k: "Tariffs", v: "Reintroduced tariff regime continues to hit advertising's biggest spenders — Auto, Retail, CPG — hardest. Intangibles (finance, entertainment, travel) remain relatively insulated." },
  { k: "Buyer posture", v: "Advertisers are holding dollars longer. Scatter is getting more attractive relative to upfront commitments — flexibility is the new premium." },
  { k: "Category outlook", v: "Retail under enormous 2025 pressure; significant recovery expected in 2026–27 with digital ad spend accelerating +14.2%." },
  { k: "Innovation bet", v: "Brands are investing in product innovation to combat price fatigue — a tailwind for narrative-led, platform-native creative." },
];

// ---------- REGULATION ----------
const REGULATION_POINTS = [
  { k: "M&A wave", v: "Paramount's acquisition of HBO (post-Skydance) headlines a period PwC calls 'headline-grabbing megadeals.' Streaming consolidation is shifting from defense to offense." },
  { k: "FCC posture", v: "Notably flexible. Nexstar now exceeds the 39% national cap, reaching 54.5% of U.S. TV households. Waivers signal recognition of digital competition." },
  { k: "Privacy patchwork", v: "Nearly 20 states now have comprehensive privacy laws. CCPA/CPRA amendments effective Jan 1, 2026 require risk assessments, audits, and tightened consumer notifications." },
  { k: "Clean-room acceleration", v: "Data privacy constraints are a tailwind for clean-room adoption — the one place networks and advertisers can measure without violating a patchwork of state rules." },
];

// ---------- SPORTS ----------
const SPORTS_DATA = {
  worldCup: {
    title: "FIFA World Cup 2026",
    body: "16 cities across North America. Telemundo bringing the 'full Olympics treatment' — a chance to package city-level storytelling with national reach.",
    categories: [
      { k: "Finance / Betting", v: "Already ~16% of sports ad spend. Expect outsized investment around knockout rounds." },
      { k: "Auto", v: "Premium placements around heritage, performance, global reach storytelling." },
      { k: "Travel / Hospitality", v: "Host-city tourism plays — a rare US moment for international brand entry." },
      { k: "Tech", v: "Mobile, AR/VR, streaming-native experiences." },
      { k: "International CPG / Luxury / Apparel", v: "Using the tournament as a U.S.-market springboard." },
    ],
  },
  rightsMoves: [
    { league: "NBA / WNBA", to: "ESPN/ABC, NBC, Amazon", note: "11-year, $76B. WBD out. Era-defining realignment." },
    { league: "NFL Playoffs", to: "Peacock", note: "2024 exclusive stream drove +2.8M new subs — a permanent proof point." },
    { league: "College Football", to: "Fragmented across ESPN, Fox, NBC, CBS", note: "Still the most valuable linear-first reach vehicle." },
    { league: "UFC", to: "Paramount (exclusive, beginning 2026)", note: "New cultural tentpole for CBS/Paramount+." },
  ],
};

// ---------- NETWORKS (scoreboard + deep-dives) ----------
// Axes: AI/Measurement, Sports Leverage, Streaming Scale, Audience Youth, Flexibility
const NETWORKS = [
  {
    id: "nbcu",
    name: "NBCUniversal",
    tagline: "The most-loaded year in company history.",
    event: "Mon · May 11, 2026 · 10:30 AM · Radio City Music Hall",
    scores: { ai: 4, sports: 5, streaming: 4, youth: 3, flex: 3 },
    tags: ["Peacock", "NBA", "Olympics"],
    body: `NBCU is walking into 2026 with what Ad Sales Chairman Mark Marshall has already called "the greatest collection of content that has ever been assembled by one media company" — Super Bowl LX, the 2026 Winter Olympics, FIFA World Cup, the new NBA package on Peacock, BravoCon, and the traditional tentpoles.`,
    highlights: [
      "NBA 11-year package: 100 national regular-season games + strong playoff lineup on Peacock",
      "Super Bowl LX (Feb 8, 2026) + Winter Olympics (Feb 6–22) back-to-back tentpoles",
      "Comcast spinoff 'Versant' houses USA, MSNBC, CNBC — reshaping how cable inventory is sold",
    ],
    watch: "Peacock's ad-tier at 78% penetration is the most mature AVOD environment in the market.",
  },
  {
    id: "disney",
    name: "Disney",
    tagline: "Flagship ESPN streamer now defines the portfolio.",
    event: "Tue · May 12, 2026 · 4:00 PM · North Javits Center",
    scores: { ai: 4, sports: 5, streaming: 5, youth: 4, flex: 4 },
    tags: ["ESPN Flagship", "Hulu/D+", "NFL"],
    body: `Global Ads President Rita Ferro is positioning Disney as the flexibility-first partner for brands navigating uncertainty. The ESPN flagship streamer launch has quietly become the most consequential product ship in the market — combining live sports, betting, fantasy, and social into a single logged-in surface.`,
    highlights: [
      "ESPN flagship streaming service now in-market — combines live sports, betting, fantasy",
      "Disney+/Hulu/Max bundle has reshaped subscriber economics",
      "NFL, NBA, WNBA, College Football, F1 — the deepest sports rights portfolio",
    ],
    watch: "Watch for how ESPN prices inventory that's both linear and streaming-native.",
  },
  {
    id: "amazon",
    name: "Amazon",
    tagline: "Full-funnel, first-party, unavoidable.",
    event: "Mon · May 11, 2026 · 6:30 PM · Beacon Theatre",
    scores: { ai: 5, sports: 5, streaming: 5, youth: 4, flex: 4 },
    tags: ["Prime Video", "NBA", "Retail Media"],
    body: `Amazon is the only player walking into the room with a first-party retail signal graph AND premium streaming inventory AND live sports. Expect the pitch to center on closed-loop measurement — the kind other networks can only promise through partner clean rooms.`,
    highlights: [
      "275M+ monthly ad-supported viewers in the U.S.",
      "NBA, NASCAR live rights now anchor the pitch",
      "X-Ray 'shop the show' + interactive ad formats selling at scale",
      "Prime Video ads expanding to 5 new international markets in 2025–26",
    ],
    watch: "The retail-media-plus-CTV flywheel is the hardest moat to replicate in TV advertising.",
  },
  {
    id: "fox",
    name: "Fox Corporation",
    tagline: "Live-first, news-strong, Tubi-powered.",
    event: "Mon · May 11, 2026 · Hammerstein Ballroom",
    scores: { ai: 3, sports: 5, streaming: 3, youth: 4, flex: 5 },
    tags: ["Tubi", "NFL", "News"],
    body: `Chief of Ad Sales Jeff Collins is coming in off a strong 2024–25 post-election audience acceleration. Tubi has quietly become one of the most important AVOD stories in the market — approaching 100M MAUs with a markedly younger, more multicultural audience than Fox's core.`,
    highlights: [
      "Tubi ≈100M monthly active users — 50%+ Gen Z/Millennial, ~50% multicultural, 77% cord-cutters",
      "Fox One streaming service debut late 2025 — broader sports/news/entertainment package",
      "News, sports, live — the trifecta that's most resilient to measurement disruption",
    ],
    watch: "Tubi's audience profile makes Fox the quietest youth reach play in the broadcast set.",
  },
  {
    id: "wbd",
    name: "Warner Bros. Discovery",
    tagline: "Prestige story, sports rebuild.",
    event: "Wed · May 13, 2026 · 10:00 AM · MSG Theater",
    scores: { ai: 4, sports: 2, streaming: 4, youth: 3, flex: 3 },
    tags: ["Max", "HBO", "Clean Rooms"],
    body: `The loss of the NBA to Amazon/NBCU hurt — a material dollars hit — but Max has become a legitimate prestige destination. With the Paramount acquisition of HBO IP in motion, WBD enters 2026 with a genuinely uncertain structure but a hot content slate.`,
    highlights: [
      "Max prestige: White Lotus (6.2M finale viewers), The Pitt, Hacks, The Last of Us",
      "Data clean-room expansion with holding cos, Snowflake, VideoAmp",
      "NBA exit means sports storytelling has to come from college, Bleacher, and live events",
      "HBO transaction with Paramount will reshape 2026 negotiations",
    ],
    watch: "If the clean-room story lands, WBD redefines how prestige inventory gets measured.",
  },
  {
    id: "paramount",
    name: "Paramount / CBS",
    tagline: "Smaller rooms, bigger signals.",
    event: "Thu · April 16, 2026 · Carnegie Hall",
    scores: { ai: 4, sports: 4, streaming: 4, youth: 3, flex: 5 },
    tags: ["Paramount+", "UFC", "iSpot"],
    body: `Paramount is continuing its intimate-dinners format — Ad Sales Chief John Halley has no intention of returning to the "highly impersonal" bombastic presentation. Under new ownership dynamics (Skydance, pending HBO IP), Paramount is leaning hardest on measurement as its wedge.`,
    highlights: [
      "iSpot 'Outcomes at Scale' deployment — attribution as the lead pitch",
      "UFC exclusive rights beginning 2026 — new tentpole for Paramount+",
      "Franchise slate: Yellowstone, Halo, Tracker, Ghosts, Daily Show, Colbert",
      "March Madness, NFL, UEFA, NWSL, PGA anchoring live",
    ],
    watch: "Watch the Halley quote evolve — the reach-to-impact framing is becoming the industry's language.",
  },
  {
    id: "netflix",
    name: "Netflix",
    tagline: "From skeptic to scale player.",
    event: "Upfront · May 2026 · Location TBA",
    scores: { ai: 4, sports: 3, streaming: 5, youth: 5, flex: 3 },
    tags: ["AVOD", "Live", "First-Party"],
    body: `Netflix doubled its upfront commitments for the 2025–26 season. Together with Amazon, it now accounts for ~30% of streaming ad sales. The ads tier has moved from experimental to central — and live (NFL Christmas, WWE Raw, boxing) is the acquisition wedge.`,
    highlights: [
      "AVOD tier now a majority of new signups in many markets",
      "First-party signal finally operationalized for advertisers",
      "Live programming (NFL Christmas, WWE Raw, tentpole boxing) driving appointment viewing",
    ],
    watch: "Netflix's first-party data plus original IP may be the market's most-under-priced combination.",
  },
  {
    id: "youtube",
    name: "YouTube",
    tagline: "Already the biggest screen in the living room.",
    event: "Brandcast · May 2026 · Lincoln Center",
    scores: { ai: 5, sports: 4, streaming: 5, youth: 5, flex: 4 },
    tags: ["CTV #1", "Shorts", "NFL Sunday Ticket"],
    body: `YouTube crossed every meaningful viewership threshold years ago; the 2026 upfront is about packaging. NFL Sunday Ticket, creator-led Shorts, and connected-TV reach position it as the platform that does not need to argue for its relevance.`,
    highlights: [
      "#1 streaming platform by watch time on CTV (Nielsen Gauge)",
      "NFL Sunday Ticket deepening sports story",
      "Shorts monetization maturing; creator-as-channel scaling",
      "Full Google measurement stack as the unique selling point",
    ],
    watch: "YouTube is the platform the industry still under-weights in upfront conversations.",
  },
  {
    id: "roku",
    name: "Roku",
    tagline: "The neutral operating system.",
    event: "NewFronts · May 2026",
    scores: { ai: 4, sports: 2, streaming: 5, youth: 3, flex: 5 },
    tags: ["OS Scale", "Roku Channel", "ACR Data"],
    body: `Roku's role is structural: it's the operating system on tens of millions of households' primary screen, with ACR data that powers attribution nobody else can offer. Less splashy, more essential.`,
    highlights: [
      "The Roku Channel is a top-5 FAST destination",
      "ACR data uniquely cross-app, cross-publisher",
      "DSP partnerships deepening with Amazon DSP and The Trade Desk",
    ],
    watch: "Roku's value is as a measurement substrate, not just a content destination.",
  },
  {
    id: "telemundo",
    name: "Telemundo",
    tagline: "Live TV is the mission.",
    event: "Thu · Feb 5, 2026 · Tribeca Performing Arts Center",
    scores: { ai: 3, sports: 5, streaming: 2, youth: 4, flex: 4 },
    tags: ["FIFA '26", "Live", "Multicultural"],
    body: `"If you are live, you are on Telemundo." Luis Fernandez's positioning for 2026 is blunt and correct: 70%+ of the lineup is live, and FIFA World Cup 2026 — staged across 16 North American cities — is the tentpole of tentpoles for the U.S. Hispanic audience.`,
    highlights: [
      "FIFA World Cup 2026 — 'full Olympics treatment' per EVP Sports Joaquin Duro",
      "70%+ of programming is live",
      "Multicultural and multigenerational family targeting",
    ],
    watch: "For brands chasing scaled multicultural live audiences, Telemundo is still the single most efficient buy.",
  },
  {
    id: "apple",
    name: "Apple TV+",
    tagline: "Prestige, quiet, expanding.",
    event: "Upfront engagement · 2026 TBA",
    scores: { ai: 3, sports: 4, streaming: 3, youth: 3, flex: 3 },
    tags: ["MLS Season Pass", "F1", "Prestige"],
    body: `Apple has been the upfront's wild card — prestige originals, MLS Season Pass, an F1 presence, and a rumored ad-tier discussion that would reshape the streaming ad market if it actually lands in 2026.`,
    highlights: [
      "MLS Season Pass — the template for league-exclusive streaming",
      "F1 rights adding live global appeal",
      "Ad-tier launch persistently rumored; if/when it lands, supply dynamics shift",
    ],
    watch: "A real Apple ad tier would be the single biggest supply event of 2026.",
  },
];

// ---------- COMPETITIVE (ExxonMobil fuels category) ----------
const COMPETITIVE = {
  lede: `The fuels category remains more traditional in its allocation approach than the broader market — heavy in National and Local TV, slower in CTV and measurement adoption. That's an opportunity: advanced video and outcomes-based measurement are where advantage will be built in 2026.`,
  competitors: [
    {
      brand: "Shell",
      position: "#1 fuels-category spender",
      note: "Linear TV investment reduced YoY in 2025. In 2022, 50%+ of media was Linear TV — now gradually shifting into Digital and Social. Still cautious on CTV premium.",
    },
    {
      brand: "BP",
      position: "−17% YoY total media in 2024; flat to down in 2025",
      note: "50% of media still on Local TV. Q4 National TV push behind the 'earnify' app launch. Conservative CTV posture.",
    },
    {
      brand: "Chevron",
      position: "Decreased total TV YoY",
      note: "$2.6M invested in Local TV specifically to support Renewable Energy messaging in 2024. Pattern continued into 2025.",
    },
    {
      brand: "Marathon",
      position: "Heavy National TV concentration",
      note: "94% of 2024 media in National TV; overall budget down 13% YoY. 2025 saw one of the category's only notable Linear TV propositions behind the 'Rewarding Fans' College Football campaign.",
    },
  ],
  takeaway: `While competitors remain concentrated in linear, the advantage shifts to whichever fuels advertiser moves first on (1) premium CTV sports inventory priced against outcomes, (2) measurement partnerships that prove station-level lift, and (3) national-plus-local hybrid packages that the new streaming bundles make newly possible.`,
};

// ---------- THE TAKE ----------
const TAKE_RECS = [
  {
    n: "01",
    title: "Treat the Upfront as a framework, not a commitment",
    body: "The most successful 2026 buys will be the ones structured for optimization year-round — agentic execution, scatter flex, and programmatic roll-forward terms agreed to at the table.",
  },
  {
    n: "02",
    title: "Price against outcomes, not impressions",
    body: "Bring iSpot, VideoAmp, or partner clean-room measurement into every negotiation as a baseline expectation. Networks that resist are telling you something.",
  },
  {
    n: "03",
    title: "Pay the premium for sports and live",
    body: "Live inventory is the only thing scaling against audience fragmentation. NFL, World Cup, NBA, Olympics — these are where sight-sound-motion reach still compounds.",
  },
  {
    n: "04",
    title: "Lean into streaming bundles, not individual services",
    body: "Disney+/Hulu/Max and the emerging Paramount-WBD bundle unlock cross-portfolio measurement. Negotiate at the bundle level, not the service level.",
  },
  {
    n: "05",
    title: "For fuels specifically: lead the category on CTV + measurement",
    body: "The rest of the category is cautious. The brand that moves first on outcomes-priced CTV at scale sets a narrative competitors will spend 2026 chasing.",
  },
];

const TAKE_PREDICTIONS = [
  { n: "01", body: "At least one major publisher announces an agentic-buying product at its Upfront presentation — productizing 2024–25's tests.", confidence: "HIGH" },
  { n: "02", body: "Apple quietly confirms an ad-supported tier inside a broader bundle announcement.", confidence: "MED" },
  { n: "03", body: "Netflix moves from 'premium scatter' posture to aggressive upfront volume commitments.", confidence: "HIGH" },
  { n: "04", body: "At least one network formally publishes outcomes-based CPM pricing tied to iSpot or VideoAmp.", confidence: "MED" },
  { n: "05", body: "A measurable scatter-over-upfront shift in two of the top-10 advertiser categories (likely Retail and Auto) as brands preserve optionality.", confidence: "MED" },
  { n: "06", body: "FIFA World Cup 2026 drives the largest single-tournament upfront premium in U.S. media history.", confidence: "HIGH" },
];

// Make global
Object.assign(window, {
  ISSUE, CONTRIBUTORS, TOC,
  MARKET_STATS, GROWTH_DATA,
  CTV_STATS, STREAMING_SHARE,
  LINEAR_STATS, LINEAR_REACH,
  AI_CAPABILITIES, ECONOMICS_POINTS, REGULATION_POINTS,
  SPORTS_DATA,
  NETWORKS,
  COMPETITIVE,
  TAKE_RECS, TAKE_PREDICTIONS,
});
