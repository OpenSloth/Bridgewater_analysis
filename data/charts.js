// Data digitized from the slides in Bridgewater's Q3 2026 CIO call with Greg Jensen
// (YouTube: https://www.youtube.com/watch?v=57XYIdLlUqk, recorded 2026-10-14).
//
// accuracy:
//   "exact"  = number printed on the slide or said out loud in the talk
//   "approx" = read by eye off the chart line/bar; good for shape and rough level, not for precise work
//
// Forward-looking points ("needed", "discounted", "projected") are Bridgewater's own estimates.
window.BW_DATA = {
  meta: {
    title: "Bridgewater Q3 2026 Outlook — Greg Jensen",
    video: "https://www.youtube.com/watch?v=57XYIdLlUqk",
    recorded: "2026-10-14",
    length: "28:06",
    chapters: [
      { t: "0:45", title: "It's accelerating because it's interconnected" },
      { t: "6:00", title: "Artificial intelligence" },
      { t: "15:55", title: "Modern mercantilism" },
      { t: "24:40", title: "Reconciling market pricing" }
    ]
  },

  charts: {
    // ---------- Concentration & politics ----------
    largestCompany: {
      title: "Largest listed company, market cap as % of global GDP",
      slide: "Accelerating Concentration of Power, Wealth, and Compute", ts: "3:08", accuracy: "approx", unit: "%",
      points: [
        { x: 1900, y: 2.1, label: "Standard Oil" }, { x: 1910, y: 1.6 }, { x: 1920, y: 0.8 },
        { x: 1929, y: 1.7, label: "GM" }, { x: 1932, y: 0.6 }, { x: 1955, y: 1.8, label: "GM" },
        { x: 1965, y: 2.1, label: "AT&T" }, { x: 1970, y: 1.6, label: "IBM" }, { x: 1980, y: 0.8 },
        { x: 1990, y: 0.6 }, { x: 2000, y: 1.7, label: "Microsoft" }, { x: 2008, y: 0.6, label: "Exxon" },
        { x: 2012, y: 0.8 }, { x: 2018, y: 1.1 }, { x: 2021, y: 2.8, label: "Apple" }, { x: 2023, y: 2.3 },
        { x: 2025, y: 4.5, label: "Nvidia" }
      ]
    },
    wealthTop: {
      title: "Share of US personal wealth held by top 0.001%",
      slide: "Accelerating Concentration of Power, Wealth, and Compute", ts: "4:13", accuracy: "approx", unit: "%",
      points: [
        { x: 1913, y: 6.5 }, { x: 1918, y: 3.5 }, { x: 1922, y: 2.0 }, { x: 1929, y: 3.5 }, { x: 1935, y: 1.5 },
        { x: 1945, y: 0.8 }, { x: 1960, y: 1.0 }, { x: 1975, y: 0.8 }, { x: 1985, y: 1.5 }, { x: 1995, y: 2.8 },
        { x: 2000, y: 3.8 }, { x: 2008, y: 4.0 }, { x: 2015, y: 5.6 }, { x: 2020, y: 5.4 }, { x: 2025, y: 5.2 },
        { x: 2026, y: 6.5, label: "Timely estimate" }
      ]
    },
    populism: {
      title: "Europe populist vote share (population-weighted)",
      slide: "Changes Are Driving Populism and a Pivot to Self-Sufficiency", ts: "4:39", accuracy: "approx", unit: "%",
      years: [1995, 2000, 2002, 2005, 2010, 2013, 2015, 2018, 2020, 2022, 2024, 2025],
      series: {
        "All populist parties": [12, 9, 16, 16, 15, 19, 21, 23, 22, 25, 29, 30],
        "Far-right populist": [3, 3, 4, 5, 6, 8, 10, 12, 13, 15, 19, 20]
      }
    },
    usFavorability: {
      title: "Favourable view of the US among allies",
      slide: "Changes Are Driving Populism and a Pivot to Self-Sufficiency", ts: "5:06", accuracy: "exact (2023 & 2026), approx (2024–25)", unit: "%",
      years: [2023, 2024, 2025, 2026],
      series: {
        "South Korea": [79, 77, 60, 45],
        "UK": [59, 53, 44, 41],
        "Canada": [57, 52, 34, 33],
        "Germany": [57, 45, 33, 27]
      },
      note: "Average defence-spending increase FY25–27 (Canada, Germany, South Korea, UK): +29%"
    },
    realYield: {
      title: "US 30-year real yield",
      slide: "Real Yields Moving Higher and Squeezing the Rest of the Economy", ts: "5:42", accuracy: "approx", unit: "%",
      points: [
        [2000, 4.1], [2001, 3.9], [2002, 3.6], [2003, 3.0], [2004, 2.6], [2005, 2.0], [2006, 2.2], [2007, 2.3],
        [2008, 2.3], [2009, 1.6], [2010, 1.4], [2011, 1.0], [2012, 0.1], [2013, 0.9], [2014, 1.0], [2015, 0.8],
        [2016, 0.4], [2017, 0.7], [2018, 0.9], [2019, 0.4], [2020, -0.7], [2021, -0.4], [2022, 1.0], [2023, 1.7],
        [2024, 2.2], [2025, 2.5], [2026, 3.4]
      ]
    },

    // ---------- AI ----------
    aiBenchmarks: {
      title: "AI benchmark scores vs human expert",
      slide: "AI Is Crossing a Critical Threshold by Exceeding Human Capabilities Across More Domains", ts: "7:27", accuracy: "approx", unit: "%",
      labels: ["Math", "Science", "Cybersecurity", "Coding"],
      series: { "Human expert": [36, 70, 85, 88], "2025 models": [75, 92, 82, 72], "Latest models": [94, 96, 93, 94] }
    },
    epsIndex: {
      title: "Data-centre supply-chain EPS (consensus, indexed to end-2024)",
      slide: "An Exponential Boom is Priced-in", ts: "13:26", accuracy: "exact growth rates; path approx", unit: "x",
      labels: ["Dec-24", "Dec-25", "Dec-26", "Dec-27", "Dec-28"],
      values: [1.0, 1.6, 2.73, 3.82, 5.35],
      note: "'24–'26 EPS growth +173%, '26–'28 +96% (printed on slide)"
    },
    peRatio: {
      title: "Price / consensus 2028 EPS, data-centre supply chain",
      slide: "An Exponential Boom is Priced-in", ts: "13:30", accuracy: "approx", unit: "x",
      labels: ["Jan-25", "Apr-25", "Jul-25", "Oct-25", "Jan-26", "Mar-26", "May-26", "Jul-26", "Aug-26", "Sep-26"],
      values: [3.8, 3.0, 4.0, 7.0, 10.0, 14.0, 18.0, 14.0, 16.0, 15.5],
      note: "At P/E ~15x, >50% of equity value sits beyond 10 years (printed on slide)"
    },
    requiredSpend: {
      title: "Required US AI spending, relative to…",
      slide: "Where Can the Return on Investment Come From?", ts: "14:32", accuracy: "exact", unit: "%",
      labels: ["Total US wages", "Total US corporate profits", "US software sales"],
      series: { "Q2 2026": [1.5, 4.7, 30], "Q4 2028 (required)": [7.7, 22.3, 104] }
    },
    jobCuts: {
      title: "Job cuts required to fund breakeven AI adoption (% of private non-farm employment)",
      slide: "Where Can the Return on Investment Come From?", ts: "15:17", accuracy: "exact", unit: "%",
      labels: ["Required for breakeven AI (by 2028)", "Great Recession (2008–10)", "Dot-com bust (2001–03)"],
      values: [-7.0, -7.6, -3.0]
    },
    valueGrowth: {
      title: "Value growth needed to fund breakeven AI adoption (annual real growth)",
      slide: "Where Can the Return on Investment Come From?", ts: "15:31", accuracy: "exact", unit: "%",
      labels: ["Required (through 2028)", "Post-war boom 1947–73", "Internet era 1995–2000"],
      values: [4.0, 3.9, 4.1],
      note: "Trend growth is about 2.0%, so the requirement is roughly double trend."
    },

    // ---------- Mercantilism ----------
    chinaImports: {
      title: "China imports, % of GDP",
      slide: "China: Internal Self-Sufficiency, External Leverage", ts: "17:11", accuracy: "approx", unit: "% GDP",
      years: [1990, 1995, 2000, 2003, 2006, 2009, 2012, 2015, 2018, 2021, 2024, 2025],
      series: {
        "Total imports": [13, 16, 19, 25, 27, 20, 22, 16, 17, 15, 14, 13.5],
        "of which manufacturing": [9, 11, 13, 16, 18, 12, 11, 9, 8, 7, 6, 6]
      }
    },
    chokepoints: {
      title: "Potential chokepoints: share of products with >50% China export share",
      slide: "China: Internal Self-Sufficiency, External Leverage", ts: "17:29", accuracy: "approx", unit: "%",
      labels: ["Chemicals", "Machinery", "Metals & CMO processing", "Final manufactured goods", "Wood, rubber & plastics", "Agriculture & mining"],
      series: { "2017": [50, 42, 51, 52, 37, 32], "2024": [83, 73, 69, 63, 38, 29] }
    },
    chinaExportGrowth: {
      title: "China export growth by destination, cumulative since Jan 2025",
      slide: "Mercantilism is Coming for Middle Powers", ts: "18:15", accuracy: "approx", unit: "%",
      labels: ["To US", "To Europe", "To Japan"], values: [-14, 19, 10]
    },
    exportShare: {
      title: "Strategic exports market share (% of global non-commodity goods exports, change since 2000)",
      slide: "Mercantilism is Coming for Middle Powers", ts: "18:23", accuracy: "approx", unit: "pp",
      years: [2000, 2005, 2010, 2015, 2020, 2025],
      series: { "China": [0, 2, 5, 7.5, 9, 11], "Europe": [0, 0.5, -1.5, -2.5, -3, -4], "Japan": [0, -0.5, -1, -2, -2.5, -3] }
    },

    // ---------- Fiscal ----------
    govDebt: {
      title: "Total government debt, % of GDP (dashed = Bridgewater estimate)",
      slide: "More Fiscal Spending Will Bring Us Closer to Economic Limits", ts: "21:04", accuracy: "approx", unit: "% GDP",
      years: [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030],
      projectedFrom: 2025,
      series: {
        "USA": [80, 78, 72, 70, 65, 75, 80, 88, 70, 75, 95, 105, 128, 122, 140],
        "Japan": [null, 15, 22, 30, 50, 75, 70, 95, 140, 170, 185, 215, 235, 185, 175],
        "Europe": [null, null, null, null, null, null, null, 70, 68, 70, 85, 92, 98, 88, 95],
        "UK": [110, 95, 75, 50, 45, 45, 30, 45, 38, 40, 75, 88, 100, 100, 118],
        "Brazil": [null, null, null, null, null, null, null, 35, 65, 68, 60, 70, 88, 85, 120]
      },
      note: "Japan reached ~230–240% before hitting currency limits."
    },
    fiscalSustainability: {
      title: "Projected net issuance vs ability to absorb, % GDP, next 10 years",
      slide: "By Our Measures, Ability to Absorb Issuance Today Varies Meaningfully by Country", ts: "22:23", accuracy: "approx", unit: "% GDP",
      labels: ["Brazil", "USA", "UK", "Japan", "Europe", "Canada", "Australia"],
      series: {
        "Projected net issuance": [13.2, 7.8, 5.9, 4.0, 3.9, 1.7, 1.4],
        "With projected deficit cuts": [11.2, 7.8, 3.2, 3.6, 3.9, 1.7, 1.4],
        "Ability to absorb": [4.0, 6.6, 4.6, 4.5, 4.9, 4.3, 2.6]
      }
    },
    usYield: {
      title: "US 10-year Treasury yield",
      slide: "Today: US Policy Makers Face Tradeoffs in Devaluing Money", ts: "23:41", accuracy: "approx", unit: "%",
      points: [[2005, 4.3], [2007, 5.0], [2008, 3.7], [2010, 3.2], [2012, 1.8], [2013, 2.9], [2016, 1.6], [2018, 3.1],
               [2020, 0.7], [2022, 3.5], [2023, 4.8], [2024, 4.2], [2025, 4.4], [2026, 4.9]],
      needed: 3.4, neededNote: "~150bp lower = level at which the US grows out of its debt at current policy (from the talk)"
    },
    breakeven: {
      title: "US 10-year breakeven inflation",
      slide: "Today: US Policy Makers Face Tradeoffs in Devaluing Money", ts: "23:50", accuracy: "approx", unit: "%",
      points: [[2005, 2.5], [2008, 0.1], [2010, 2.2], [2013, 2.3], [2015, 1.6], [2018, 2.1], [2020, 1.1], [2021, 2.5],
               [2022, 2.9], [2024, 2.3], [2026, 2.4]],
      target: 2.0
    },
    usProductivity: {
      title: "US productivity growth (5-yr annualised)",
      slide: "Today: US Policy Makers Face Tradeoffs in Devaluing Money", ts: "24:13", accuracy: "approx", unit: "%",
      points: [[2005, 3.4], [2008, 2.0], [2010, 2.3], [2013, 1.2], [2016, 0.9], [2019, 1.4], [2021, 2.8], [2023, 1.6], [2025, 2.1]],
      needed: 3.0, neededNote: "Productivity 'in the threes' lets the US grow out of its debt"
    },

    // ---------- Market pricing ----------
    pricedIn: {
      title: "What different markets are pricing",
      slide: "Consensus and Broader Markets Imply More of the Same", ts: "26:06", unit: "%",
      labels: ["US productivity growth", "US real growth", "Corporate asset issuance (% GDP)", "Korea current account (% GDP)", "Taiwan current account (% GDP)"],
      accuracy: ["exact", "approx", "exact (AI) / approx", "exact (AI) / approx", "exact (AI) / approx"],
      series: {
        "Discounted in AI complex": [3.4, 3.5, 9.0, 28, 28],
        "Implied in broader macro markets": [2.0, 1.8, 6.5, 17, 20],
        "Consensus estimate": [1.8, 2.0, 1.5, null, null]
      }
    },
    termPremium: {
      title: "US 10-year term premium",
      slide: "Macro Markets Are Far from Pricing Disruptive Change", ts: "27:33", accuracy: "approx", unit: "%",
      points: [[1970, 0.5], [1975, 1.5], [1981, 4.5], [1985, 3.5], [1990, 2.0], [1995, 1.5], [2000, 1.0], [2005, 0.5],
               [2010, 1.5], [2015, 0.2], [2020, -0.8], [2023, 0.5], [2026, 0.9]],
      longTermAvg: 1.6
    }
  },

  scenarios: [
    { name: "Productivity miracle", tone: "good", text: "Capabilities keep spreading, regulation is good enough to avoid major accidents, growth surges. Debt problems shrink." },
    { name: "Productive muddle-through", tone: "mid", text: "Some progress, some regulation, back-and-forth. Benefits arrive, but not in the best possible way." },
    { name: "Bubble popped / populist backlash", tone: "warn", text: "Capability gains slow or voters push back; the capex build-out turns out to be a bubble." },
    { name: "Catastrophe", tone: "bad", text: "Unregulated progress continues until control of AI systems is lost." }
  ],
  hingePoints: ["Pace of advancement", "Regulation", "Adoption & displacement", "Accidents", "Government response"]
};
