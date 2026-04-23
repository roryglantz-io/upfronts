// ============================================================================
// DATA — all research, numbers, and network content in one place
// ============================================================================

const ISSUE = {
  title: "The Agentic Upfront",
  subtitle: "How 2026 Changes How We Buy",
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
  { id: "thesis", num: "01", title: "The Thesis", desc: "Agents enter the room.", pages: "P.03" },
  { id: "agentic", num: "02", title: "The Agentic Upfront", desc: "The headline story of 2026.", pages: "P.04–06" },
  { id: "calendar", num: "03", title: "Upfront Week Map", desc: "Dates, venues, who shows up when.", pages: "P.07" },
  { id: "market", num: "04", title: "The Market", desc: "Softer market, smarter dollars.", pages: "P.08–09" },
  { id: "ctv", num: "05", title: "CTV & Streaming", desc: "The new center of gravity.", pages: "P.10–11" },
  { id: "linear", num: "06", title: "Linear Reality", desc: "Not dead — compressed.", pages: "P.12–13" },
  { id: "sports", num: "07", title: "Sports", desc: "The last driver of scale.", pages: "P.14" },
  { id: "economics", num: "08", title: "Economics", desc: "Uncertainty, caution, optionality.", pages: "P.15" },
  { id: "regulation", num: "09", title: "Regulation & M&A", desc: "Consolidation has a green light.", pages: "P.16" },
  { id: "scoreboard", num: "10", title: "Network Scoreboard", desc: "Eleven players, five axes.", pages: "P.17" },
  { id: "networks", num: "11", title: "Network Deep-Dives", desc: "Who shows up with what.", pages: "P.18–24" },
  { id: "competitive", num: "12", title: "Competitive Landscape", desc: "ExxonMobil Fuels.", pages: "P.25–26" },
  { id: "take", num: "13", title: "The UM Take", desc: "Recommendations + predictions.", pages: "P.27" },
];

// ---------- UPFRONT CALENDAR ----------
const CALENDAR = [
  {
    date: "Apr 15",
    day: "Wed",
    fullDate: "April 15, 2026",
    network: "CBS (Paramount/Skydance)",
    event: "Upfront",
    venue: "Carnegie Hall · 4:00 PM",
    note: "CBS has pulled out of traditional upfront week entirely. First major publisher to break rank.",
    bucket: "CBS Pre-Week",
  },
  {
    date: "May 11",
    day: "Mon",
    fullDate: "May 11, 2026",
    network: "NBCUniversal",
    event: "Upfront · \"Super Monday\"",
    venue: "Radio City Music Hall · 10:30 AM · 100th anniversary",
    note: "First full season of the new NBA rights deal, Super Bowl LXI runway, Peacock's agentic PG framework — 'the most-loaded year in company history.'",
    bucket: "Super Monday",
  },
  {
    date: "May 11",
    day: "Mon",
    fullDate: "May 11, 2026",
    network: "Fox Corporation",
    event: "Upfront · Super Monday",
    venue: "New York City Center · 4:00 PM",
    note: "Live-first positioning. Tubi + Fox One + news/sports trifecta.",
    bucket: "Super Monday",
  },
  {
    date: "May 11",
    day: "Mon",
    fullDate: "May 11, 2026",
    network: "Amazon",
    event: "Upfront · Super Monday",
    venue: "Beacon Theatre · 6:30 PM",
    note: "Agentic AI tools, 300M monthly ad-supported audience, 90% U.S. household authenticated reach.",
    bucket: "Super Monday",
  },
  {
    date: "May 12",
    day: "Tue",
    fullDate: "May 12, 2026",
    network: "Telemundo",
    event: "Upfront · Client Experience",
    venue: "Tribeca Performing Arts Center",
    note: "Live-first multicultural play. Liga MX, Copa Oro, Spanish-language Super Bowl LXI simulcast.",
    bucket: "Upfront Week",
  },
  {
    date: "May 12",
    day: "Tue",
    fullDate: "May 12, 2026",
    network: "Disney",
    event: "Upfront",
    venue: "North Javits Center · 4:00 PM",
    note: "ESPN flagship streamer + D+/Hulu/Max bundle — the deepest sports portfolio.",
    bucket: "Upfront Week",
  },
  {
    date: "May 13",
    day: "Wed",
    fullDate: "May 13, 2026",
    network: "Discovery Global (WBD)",
    event: "Upfront",
    venue: "MSG Theater · 10:00 AM",
    note: "Newly renamed, selling WBD inventory too. \"One-stop shop\" positioning.",
    bucket: "Upfront Week",
  },
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

const LINEAR_VERTICALS = [
  { cat: "Finance", pct: 12 },
  { cat: "Pharma", pct: 12 },
  { cat: "Personal Care", pct: 11 },
  { cat: "Auto", pct: 9 },
  { cat: "Retail", pct: 8 },
  { cat: "All others", pct: 48 },
];

// ---------- CTV ----------
const CTV_STATS = [
  { num: "84%", label: "Of U.S. households subscribed to at least one major streaming service by end of 2024", source: "MAGNA" },
  { num: "10.9", label: "Streaming services per consumer per month in 2025", sub: "Up from 8 in 2024", source: "MAGNA" },
  { num: "45%", label: "Of ad-supported video viewing now takes place on CTV (A18–49)", source: "MAGNA" },
  { num: "62%", label: "Of consumers willing to watch ads in exchange for lower costs", sub: "Up from 58% in 2024", source: "Kantar" },
  { num: "44%", label: "Of consumers subscribe to at least one streaming bundle", sub: "Disney+/Hulu/Max, etc.", source: "MAGNA" },
  { num: "~30%", label: "Of streaming ad sales now controlled by Netflix + Amazon alone", sub: "Netflix doubled upfront commitments YoY", source: "Industry" },
];

const AVOD_MIX = [
  { name: "Peacock", adTier: 78 },
  { name: "Prime Video", adTier: 73 },
  { name: "Max", adTier: 55 },
  { name: "Disney+", adTier: 52 },
  { name: "Netflix", adTier: 40 },
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

const LINEAR_Q3 = [
  { k: "Linear national TV", v: "−5.8%" },
  { k: "Cable networks", v: "−5.8%" },
  { k: "English-language broadcast", v: "−10.5%" },
  { k: "Cord-cutting pace", v: "5–6M households / yr" },
];

// ---------- AGENTIC AI (NEW lead section) ----------
const AGENTIC_MILESTONES = [
  {
    date: "Apr 21, 2026",
    label: "The Trade Desk · Koa Agents",
    detail: "Biggest product launch in TTD's history. Agentic buying layer sitting on top of the platform. Alpha with Stagwell. Positioned as the beginning of the end of manual programmatic.",
    tag: "Product Launch",
  },
  {
    date: "Q1 2026",
    label: "NBCU × FreeWheel · First AI-Agent-Led PG Deal",
    detail: "First major publisher-side campaign bought entirely via agent negotiation — live sports, linear + streaming. Mark Marshall called it a redefinition of how TV inventory is bought and sold.",
    tag: "Industry First",
  },
  {
    date: "Upfront 2026",
    label: "Amazon · Agentic Campaign + Creative Tools",
    detail: "Central pitch now foregrounds agentic AI for media and creative, plus 300M monthly ad-supported audience and 90% U.S. household authenticated reach.",
    tag: "Platform",
  },
  {
    date: "Dec 2025",
    label: "AdCP · First Standardized Test Buys",
    detail: "Ad Context Protocol emerging as the universal interoperability standard. Magnite, MiQ, and Scope3 completed early test buys in December 2025.",
    tag: "Standard",
  },
  {
    date: "2026 Upfront",
    label: "EDO · ChatEDO Opens to All Agencies",
    detail: "Agentic AI interface to EDO's TV ad performance database. Free access for all ad agencies through the 2026 upfront cycle.",
    tag: "Tools",
  },
];

const AGENTIC_QUOTES = [
  {
    body: "Agentic buying will not replace the need for upfront commitments, nor the human relationships they rely on. It will be similar to what happened when programmatic became a way to transact. It didn't make the upfronts less relevant — it made them more relevant.",
    who: "Senior Seller, Ad Age Buyer/Seller Roundtable",
  },
  {
    body: "2026 marks the beginning of the end for manual programmatic buying.",
    who: "eMarketer · 2026 Outlook",
  },
  {
    body: "We expect ~25% of online spending to flow through AI shopping agents by 2030.",
    who: "Morgan Stanley Research",
  },
];

const AGENTIC_STACK = [
  {
    layer: "Interface",
    what: "Where buyers talk to the system",
    desc: "Instead of logging into a DSP and setting parameters manually, planners increasingly type or speak their goals into a chat-style interface. The interface translates intent into the technical steps.",
    examples: "ChatEDO (EDO's conversational TV-attribution tool) · Copilot-style buyer dashboards being rolled out by Amazon, TTD, Yahoo · agent-aware CRMs at holding companies",
  },
  {
    layer: "Agent",
    what: "The AI that actually does the buying",
    desc: "An autonomous system that reads a brief, negotiates inventory, executes the buy, and optimizes mid-flight — doing in minutes what a team of planners previously did over days.",
    examples: "The Trade Desk's Koa (live this year) · Amazon's DSP agents · NBCU's FreeWheel agent (ran the first agentic TV deal in NFL playoffs, Q1 2026)",
  },
  {
    layer: "Protocol",
    what: "The shared language between agents",
    desc: "For an agent on the buy side to negotiate with an agent on the sell side, they need a common vocabulary for audiences, inventory and outcomes. AdCP is the emerging open standard trying to become that universal layer — think 'HTTP for ad agents.'",
    examples: "AdCP (Ad Context Protocol) — emerging universal standard backed by Magnite, MiQ, Scope3 and others",
  },
  {
    layer: "Measurement",
    what: "How the agent knows it worked",
    desc: "Agents can only optimize toward outcomes they can see. Outcome measurement (store visits, sales lift, brand search) and clean rooms (privacy-safe data matching) are what let the agent close the loop instead of optimizing to impressions.",
    examples: "iSpot Outcomes · VideoAmp · data clean rooms (Snowflake, LiveRamp, Habu) · ACR-based cross-screen measurement (VIZIO, Samsung Ads)",
  },
  {
    layer: "Inventory",
    what: "What the agent is actually buying",
    desc: "The pool of ad inventory that has been unlocked for agentic access. In 2026, upfront deals are still negotiated by humans, but executed and optimized by agents — and scatter inventory is increasingly priced and traded agent-to-agent throughout the year.",
    examples: "Upfront commitments negotiated by humans, executed by agents · scatter inventory priced dynamically year-round · streaming CTV first, linear next",
  },
];

// ---------- ECONOMICS ----------
const ECONOMICS_POINTS = [
  { k: "Geopolitical pressure", v: "The U.S./Israel conflict with Iran and repeated closures of the Strait of Hormuz have kept energy and shipping costs volatile through 2025. CFOs are treating 2026 planning as a year of scenario planning, not a year of commitments." },
  { k: "Buyer posture", v: "Advertisers are holding dollars longer. Scatter is getting more attractive relative to upfront commitments — flexibility is the new premium." },
  { k: "Category exposure", v: "The categories most sensitive to fuel costs, shipping and supply chains — Auto, Retail, CPG, Fuels — carry the most tonnage in TV. Intangibles (finance, entertainment, travel) remain relatively insulated." },
  { k: "Recovery signal", v: "Digital ad spend is still forecast to accelerate +14.2% into 2026–27 as retail stabilizes — but the upside is back-weighted, which pushes more dollars into scatter and later quarters." },
];

// ---------- REGULATION ----------
const REGULATION_POINTS = [
  { k: "M&A wave", v: "Paramount-Skydance closed. Paramount acquisition of HBO in motion. PwC calls the environment 'headline-grabbing megadeals' — consolidation has shifted from defense to offense." },
  { k: "FCC posture", v: "Notably flexible. Nexstar now exceeds the 39% national cap, reaching 54.5% of U.S. TV households. Waivers signal recognition of digital competition." },
  { k: "Privacy patchwork", v: "Nearly 20 states now have comprehensive privacy laws. CCPA/CPRA amendments effective Jan 1, 2026 require risk assessments, audits, tightened consumer notifications, and ADM controls." },
  { k: "Clean-room acceleration", v: "Data privacy constraints are a tailwind for clean-room adoption — the one place networks and advertisers can measure without violating a patchwork of state rules." },
];

// ---------- SPORTS ----------
const SPORTS_DATA = {
  superBowl: {
    title: "Super Bowl LXI",
    body: "NBC/Peacock · February 2027. The single biggest buy in the Q4 '26–Q3 '27 window. First Super Bowl sold under NBCU's agentic PG framework — expect a measurement-linked package, not just a 30-second spot.",
    categories: [
      { k: "Finance / Crypto / Betting", v: "Now ~20% of sports spend. Expect record Super Bowl category volume; FanDuel/DraftKings/Robinhood holding flights." },
      { k: "Auto / EV", v: "First Super Bowl where Chinese EV entrants (BYD, others) are plausible buyers; domestic OEMs defend." },
      { k: "Tech / AI", v: "The consumer-AI category (OpenAI, Anthropic, Google, Meta) has matured into a legitimate Super Bowl advertiser class." },
      { k: "Energy / Mobility", v: "ExxonMobil's natural window — fuel efficiency + Mobil 1 stories land hardest with live-sports intent audiences." },
      { k: "Streaming / Entertainment", v: "Peacock, Netflix, Prime, Max all using the game to seed Q1 '27 slate launches." },
    ],
  },
  rightsMoves: [
    { league: "NBA / WNBA — Year 1", to: "NBC · Amazon Prime · Disney", note: "First FULL season (Oct '26 – Jun '27) under the new 11-yr, $76B rights split. Defines the fall. Every network's pitch touches this." },
    { league: "WNBA — Year 2 of new deal", to: "Disney · NBC · Amazon", note: "Caitlin Clark era at scale. Fastest-growing U.S. pro sports property; ratings still compounding YoY." },
    { league: "CFP National Championship 2027", to: "ESPN / ABC", note: "Post-12-team expansion, second year under the new format — ratings floor is now permanently higher." },
    { league: "Ryder Cup 2027", to: "NBC · Adare Manor, Ireland", note: "Premium golf inventory in Sept '27, last major live event inside the buying window. European venue = global audience." },
    { league: "2027 NFL Season kickoff", to: "CBS · Fox · NBC · ESPN · Amazon · Netflix", note: "First year where Netflix Christmas Day games are a second-year proof point, not a novelty. Streaming share of NFL inventory keeps climbing." },
    { league: "March Madness 2027", to: "CBS · TNT · TruTV", note: "Final year of the current CBS/Warner deal structure — negotiations for the next cycle begin in earnest during this upfront." },
  ],
};

// ---------- NETWORKS (scoreboard + deep-dives) ----------
// Axes: AI/Measurement, Sports Leverage, Streaming Scale, Audience Youth, Flexibility
const NETWORKS = [
  {
    id: "nbcu",
    name: "NBCUniversal",
    tagline: "The most-loaded year in company history.",
    event: "Mon · May 11, 2026 · 10:30 AM · Radio City Music Hall (100th anniversary)",
    scores: { ai: 5, sports: 5, streaming: 4, youth: 3, flex: 4 },
    tags: ["Peacock", "NBA Year 1", "Super Bowl LXI", "Agentic"],
    body: `NBCU walks into 2026 with the biggest single-company slate in the Q4 '26 – Q3 '27 window — Super Bowl LXI, the first full season of the new NBA rights split (100 national regular-season games + playoff volume on Peacock), and the first AI-agent-led programmatic guaranteed deal in U.S. television already bought and running. The product story has finally caught up with the content story.`,
    highlights: [
      "First AI-agent-led PG deal with FreeWheel — live sports, linear + streaming; first campaign ran in NFL playoffs Q1 2026",
      "LIVE Total Impact: retargeting viewers exposed to live ads (+6.8× website visit lift in telecom beta)",
      "Performance Insights Hub: in-flight measurement dashboard, AI-powered contextual targeting in LIVE",
      "Super Bowl LXI (Feb 2027) · first Super Bowl sold under NBCU's full agentic framework",
      "NBA Year 1 of new 11-year package — 100 regular-season games + playoff lineup on Peacock",
      "Peacock Arrival Ads + 280M+ combined reach across the full portfolio",
      "Versant spinoff (USA, E!, Syfy, Oxygen, Golf, CNBC, MS NOW) separated end of 2025 — still sold through NBCU upfront. Bravo stays.",
    ],
    watch: "The FreeWheel agentic deal isn't a pitch — it's already ran. That makes NBCU the most credible agentic-AI story in the room.",
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
      "ESPN flagship streaming service now in-market — combines live sports, betting, fantasy, social",
      "Disney+/Hulu/Max bundle has reshaped subscriber economics (44% of consumers subscribe to at least one bundle)",
      "NFL, NBA, WNBA, College Football, F1 — the deepest sports rights portfolio",
    ],
    watch: "Watch for how ESPN prices inventory that's both linear and streaming-native. This is the pricing precedent other networks will follow.",
  },
  {
    id: "amazon",
    name: "Amazon",
    tagline: "Agentic, first-party, unavoidable.",
    event: "Mon · May 11, 2026 · 6:30 PM · Beacon Theatre",
    scores: { ai: 5, sports: 5, streaming: 5, youth: 4, flex: 4 },
    tags: ["Prime Video", "Agentic", "NBA", "Retail"],
    body: `Amazon is the only player in the room with a first-party retail signal graph AND premium streaming inventory AND live sports AND a major agentic-AI story. Expect the 2026 pitch to center on closed-loop measurement and agentic campaign/creative tools — a combination other networks can only approximate through partner clean rooms.`,
    highlights: [
      "300M monthly ad-supported viewers globally; 90% U.S. household authenticated reach via the Amazon graph",
      "Agentic AI campaign and creative tools positioned as a central message for 2026",
      "NBA, NASCAR, Thursday Night Football live rights anchoring the pitch",
      "X-Ray 'shop the show' + interactive ad formats scaling",
      "Prime Video ads expanding to 5 new international markets in 2025–26",
    ],
    watch: "The retail-media + CTV + agentic-AI flywheel is the hardest moat to replicate in TV advertising. Everyone else is assembling partnerships to approximate what Amazon owns.",
  },
  {
    id: "fox",
    name: "Fox Corporation",
    tagline: "Live-first, news-strong, Tubi-powered.",
    event: "Mon · May 11, 2026 · 4:00 PM · New York City Center",
    scores: { ai: 3, sports: 5, streaming: 3, youth: 4, flex: 5 },
    tags: ["Tubi", "NFL", "News", "Fox One"],
    body: `Chief of Ad Sales Jeff Collins is coming in off a strong 2024–25 post-election audience acceleration. Tubi has quietly become one of the most important AVOD stories in the market — approaching 100M MAUs with a markedly younger, more multicultural audience than Fox's core.`,
    highlights: [
      "Tubi ≈100M monthly active users — 50%+ Gen Z/Millennial, ~50% multicultural, 77% cord-cutters",
      "Fox One streaming service — broader sports/news/entertainment package launched late 2025",
      "Tubi NewFront Mar 24, 2026 kicks off the entire upfront season",
      "News, sports, live — the trifecta most resilient to measurement disruption",
    ],
    watch: "Tubi's audience profile makes Fox the quietest youth reach play in the broadcast set.",
  },
  {
    id: "wbd",
    name: "Discovery Global (WBD)",
    tagline: "One-stop shop. Prestige + portfolio.",
    event: "Wed · May 13, 2026 · 10:00 AM · MSG Theater",
    scores: { ai: 4, sports: 2, streaming: 4, youth: 3, flex: 4 },
    tags: ["Max", "HBO", "Clean Rooms", "One-Stop"],
    body: `Formally renamed Discovery Global in the 2025 restructuring, the company is now selling all WBD inventory — and pitching itself as a "one-stop shop" for premium scripted, lifestyle, and documentary at scale. The NBA loss to Amazon/NBCU hurt, but Max has become a legitimate prestige destination and the clean-room story is genuinely differentiated.`,
    highlights: [
      "Rebranded Discovery Global — unified sell across Max, HBO, Discovery, TNT, TBS, CNN",
      "Max prestige slate: White Lotus (6.2M finale), The Pitt, Hacks, The Last of Us",
      "Data clean-room expansion with holding cos, Snowflake, VideoAmp",
      "HBO transaction with Paramount in motion — likely to reshape 2026 negotiations mid-year",
      "Sports storytelling rebuilding around college, Bleacher, and live events post-NBA",
    ],
    watch: "If the clean-room story lands, Discovery Global redefines how prestige inventory gets measured. If HBO moves to Paramount, this pitch changes fast.",
  },
  {
    id: "paramount",
    name: "Paramount / CBS",
    tagline: "Skydance era · out of upfront week.",
    event: "Wed · April 15, 2026 · 4:00 PM · Carnegie Hall (not upfront week)",
    scores: { ai: 4, sports: 4, streaming: 4, youth: 3, flex: 5 },
    tags: ["Paramount+", "UFC", "Skydance"],
    body: `The Paramount-Skydance merger has closed, and CBS has formally pulled out of traditional upfront week entirely — moving its presentation all the way up to April 15. That's a statement about how the company sees the week itself. Under new ownership dynamics (Skydance closed, pending HBO IP), Paramount is leaning hardest on measurement and intimate dealmaking as its wedge.`,
    highlights: [
      "CBS moved to April 15 — first major publisher to formally exit upfront week",
      "Skydance merger closed; HBO IP acquisition in motion from WBD",
      "iSpot 'Outcomes at Scale' deployment — attribution as the lead pitch",
      "UFC exclusive rights beginning 2026 — new tentpole for Paramount+",
      "Franchise slate: Yellowstone, Halo, Tracker, Ghosts, Daily Show, Colbert",
      "March Madness, NFL, UEFA, NWSL, PGA anchoring live",
    ],
    watch: "Ad Sales Chief John Halley's intimate-dinners format is the anti-upfront. Calendar move reinforces it — Paramount is betting on relationships over stagecraft.",
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
    watch: "Netflix's first-party data plus original IP may be the market's most under-priced combination.",
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
    tags: ["OS Scale", "Roku Channel", "ACR", "Universal Ads"],
    body: `Roku's role is structural: the operating system on tens of millions of primary-screen households, with ACR data that powers attribution nobody else can offer. Now also a Universal Ads partner with NBCU — deepening the SMB self-serve story.`,
    highlights: [
      "The Roku Channel is a top-5 FAST destination",
      "ACR data uniquely cross-app, cross-publisher",
      "Universal Ads partnership with NBCU, WBD, LG Ad Solutions, Vizio — SMB democratization",
      "DSP partnerships deepening with Amazon DSP and The Trade Desk",
    ],
    watch: "Roku's value is as a measurement substrate and a buy-side gateway, not just a content destination.",
  },
  {
    id: "telemundo",
    name: "Telemundo",
    tagline: "Live TV is the mission. Multicultural scale is the proof.",
    event: "Tue · May 12, 2026 · Tribeca Performing Arts Center · Client Experience",
    scores: { ai: 3, sports: 5, streaming: 2, youth: 4, flex: 4 },
    tags: ["Liga MX", "Live", "Multicultural"],
    body: `"If you are live, you are on Telemundo." Luis Fernandez's positioning for 2026 is blunt and correct: 70%+ of the Telemundo lineup is live. Liga MX, Copa Oro, the Spanish-language Super Bowl LXI simulcast, and the widest multicultural live-sports slate in U.S. media anchor the year. The 2026 presentation is being framed as a "client experience" rather than a traditional upfront.`,
    highlights: [
      "Exclusive Spanish-language Super Bowl LXI simulcast (Feb 2027)",
      "Liga MX + Copa Oro — the most-watched soccer properties in U.S. Spanish-language TV",
      "70%+ of programming is live",
      "Client Experience format replacing the traditional showcase",
      "Multicultural + multigenerational family targeting",
    ],
    watch: "For brands chasing scaled multicultural live audiences, Telemundo is still the single most efficient buy. Expect premium pricing on Super Bowl LXI and Liga MX inventory.",
  },
  {
    id: "apple",
    name: "Apple TV+",
    tagline: "Prestige, quiet, expanding.",
    event: "Upfront engagement · 2026 TBA",
    scores: { ai: 3, sports: 4, streaming: 3, youth: 3, flex: 3 },
    tags: ["MLS", "F1", "Prestige"],
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
  lede: `The fuels category remains more traditional in its allocation approach than the broader market — heavy in National and Local TV, slower in CTV and measurement adoption. That's an opportunity: advanced video, agentic execution, and outcomes-based measurement are where advantage will be built in 2026.`,
  competitors: [
    {
      brand: "Shell",
      position: "#1 fuels-category spender · Search-led in 2025",
      note: "Linear TV ticked up slightly in 2025 but stayed minimal. Prioritized Search, held Digital/Social at ~25% of spend. Still cautious on CTV premium.",
    },
    {
      brand: "BP",
      position: "Near-full Linear TV divestment YoY 2024→2025",
      note: "Pulled back sharply from Linear TV and also decreased Digital spend — consolidating investment into Search. Conservative CTV posture; no meaningful video footprint heading into 2026.",
    },
    {
      brand: "Chevron",
      position: "$0 in TV in 2025 · dark on the category",
      note: "Eliminated TV spend YoY from 2024 and shifted budget into Search and Digital/Social, with a dominant focus on fuels messaging. No linear or CTV footprint heading into 2026.",
    },
    {
      brand: "Marathon",
      position: "Linear-heavy, but de-weighting",
      note: "Linear TV dropped from 64% of spend in 2024 to 44% in 2025 — still a large commitment, anchored to Big Ten college football sponsorship. 2026 opened with a major campaign launch around their new 'Gascot' mascot.",
    },
  ],
  takeaway: `The category has bifurcated. Shell, BP, and Chevron have retreated from TV into Search and lower-funnel digital — trading brand-building for efficiency. Marathon is the outlier, still committing ~44% to linear behind Big Ten and the 'Gascot' launch. That leaves premium video wide open: outcomes-priced CTV sports inventory, measurement partnerships that prove lift, national-plus-local hybrid packages enabled by the new streaming bundles, and agentic execution on scatter — ExxonMobil can own the brand-building lane the rest of the category has abandoned, while Marathon plays the only other hand on the board.`,
};

// ---------- UM ACTION ITEMS (new closing) ----------
const ACTION_ITEMS = [
  {
    area: "Negotiate",
    title: "Build agentic execution into upfront terms",
    body: "Ask every network for programmatic roll-forward, agent-compatible API access, and clean-room integration as line-item commitments. NBCU/FreeWheel and TTD Koa are the precedent — don't let networks pretend agentic is aspirational.",
  },
  {
    area: "Measure",
    title: "Make outcomes-based CPMs the default ask",
    body: "iSpot, VideoAmp, or partner clean-room measurement as a baseline expectation across every 2026 negotiation. Resistance is a signal about what the network actually can (and can't) prove.",
  },
  {
    area: "Buy",
    title: "Shift from allocation to framework",
    body: "Think of the upfront as a committed operating budget with agentic execution throughout the year — not a static schedule locked in May. Scatter flexibility should be valued at a premium, not a discount.",
  },
  {
    area: "Plan",
    title: "Invest in internal agentic literacy",
    body: "UM planners should be operating ChatEDO, evaluating TTD Koa outputs, and understanding AdCP by end of Q2 2026. The agency-side moat is the taste to know when agent outputs are right.",
  },
  {
    area: "ExxonMobil",
    title: "Lead the fuels category on outcomes-priced CTV",
    body: "Competitors are cautious on CTV premium and slow on measurement. First-mover on outcomes-priced live-sports CTV sets a narrative the rest of the category spends 2026 chasing.",
  },
];

// ---------- THE TAKE ----------
const TAKE_RECS = [
  {
    n: "01",
    title: "Treat the Upfront as a framework, not a commitment",
    body: "The most successful 2026 buys will be structured for optimization year-round — agentic execution, scatter flex, and programmatic roll-forward terms agreed to at the table.",
  },
  {
    n: "02",
    title: "Price against outcomes, not impressions",
    body: "Bring iSpot, VideoAmp, or partner clean-room measurement into every negotiation as a baseline expectation. Networks that resist are telling you something.",
  },
  {
    n: "03",
    title: "Pay the premium for sports and live",
    body: "Live inventory is the only thing scaling against audience fragmentation. NFL, Super Bowl LXI, NBA Year 1, Ryder Cup, CFP — these are where sight-sound-motion reach still compounds.",
  },
  {
    n: "04",
    title: "Lean into streaming bundles, not individual services",
    body: "Disney+/Hulu/Max and the emerging Paramount–WBD bundle unlock cross-portfolio measurement. Negotiate at the bundle level, not the service level.",
  },
  {
    n: "05",
    title: "For fuels specifically: lead the category on CTV + measurement",
    body: "The rest of the category is cautious. The brand that moves first on outcomes-priced CTV at scale sets a narrative competitors will spend 2026 chasing.",
  },
  {
    n: "06",
    title: "Invest in internal agentic literacy",
    body: "UM planners should be operating ChatEDO, evaluating TTD Koa outputs, and understanding AdCP by end of Q2 2026. The agency-side moat is the taste to know when agent outputs are right.",
  },
];

const TAKE_PREDICTIONS = [
  { n: "01", body: "At least two more major publishers announce agentic-buying products at their Upfront presentations — following NBCU/FreeWheel's Q1 deal.", confidence: "HIGH" },
  { n: "02", body: "Apple quietly confirms an ad-supported tier inside a broader bundle announcement.", confidence: "MED" },
  { n: "03", body: "Netflix moves from 'premium scatter' posture to aggressive upfront volume commitments.", confidence: "HIGH" },
  { n: "04", body: "At least one network formally publishes outcomes-based CPM pricing tied to iSpot or VideoAmp.", confidence: "HIGH" },
  { n: "05", body: "A measurable scatter-over-upfront shift in two of the top-10 advertiser categories (likely Retail and Auto) as brands preserve optionality.", confidence: "MED" },
  { n: "06", body: "Super Bowl LXI on NBC/Peacock commands the highest :30 price in Super Bowl history, sold largely as measurement-linked packages rather than standalone spots.", confidence: "HIGH" },
  { n: "07", body: "By end of 2026, AdCP becomes the de-facto interoperability standard for agentic buying across at least 60% of major DSPs.", confidence: "MED" },
];

// Make global
Object.assign(window, {
  ISSUE, CONTRIBUTORS, TOC, CALENDAR,
  MARKET_STATS, GROWTH_DATA, LINEAR_VERTICALS,
  CTV_STATS, STREAMING_SHARE, AVOD_MIX,
  LINEAR_STATS, LINEAR_REACH, LINEAR_Q3,
  AGENTIC_MILESTONES, AGENTIC_QUOTES, AGENTIC_STACK,
  ECONOMICS_POINTS, REGULATION_POINTS,
  SPORTS_DATA,
  NETWORKS,
  COMPETITIVE,
  ACTION_ITEMS,
  TAKE_RECS, TAKE_PREDICTIONS,
});
