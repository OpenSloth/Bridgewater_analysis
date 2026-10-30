# Bridgewater Q3 2026 Outlook — interactive dashboard

An interactive dashboard of the charts from Bridgewater's **Q3 2026 CIO call with Managing CIO Greg Jensen**
([YouTube](https://www.youtube.com/watch?v=57XYIdLlUqk), recorded 14 Oct 2026, 28 min), with a summary and analysis of each chart.

## Run it

No build step. Open `index.html` in a browser, or turn on **GitHub Pages** (Settings → Pages → deploy from `main`, root) to get a shareable URL.
Charts use [Chart.js](https://www.chartjs.org/) from cdnjs, so an internet connection is needed.

```
index.html        the dashboard (tabs, charts, what-if slider, analysis notes)
data/charts.js    every number on the dashboard, with slide title, timestamp and accuracy flag
```

To change or add data, edit `data/charts.js`. Each chart's analysis text lives in the `TAKE` object in `index.html`.

## What's in it

| Tab | What it covers |
|---|---|
| Overview | Headline numbers, a **what-if slider** (your productivity forecast vs what each market prices), the four AI scenarios |
| AI boom | AI vs human-expert benchmarks, P/E on 2028 EPS, consensus EPS path, required AI spending, job-cut and growth requirements |
| Concentration & politics | Largest company vs global GDP, top-0.001% wealth share, European populism, allies' view of the US, US real yields |
| Mercantilism | China imports, chokepoint products, export diversion to Europe/Japan, strategic export market share |
| Fiscal limits | Government debt paths, issuance vs ability to absorb by country, US yields / breakevens / productivity vs what's needed |
| Market pricing | What AI stocks vs macro markets vs consensus imply; term premium; breakevens |
| Data | Every dataset with source slide, timestamp link, accuracy, and a CSV copy button |

## Summary of the talk

**Thesis:** AI and *modern mercantilism* (state-led pursuit of national wealth, self-sufficiency and leverage) reinforce each other. That accelerates change and concentrates power, wealth and compute.

1. **Interconnected acceleration.** Nvidia is the largest company ever relative to world GDP. Wealth concentration is at Gilded-Age levels. Populism is rising across Europe while allies' view of the US collapses. Defence, infrastructure and AI spending are driving real rates to pre-2008 levels.
2. **AI.** Models now exceed human experts in maths, science, cybersecurity and coding. The same capability creates rogue-agent and misuse risks. There are four paths: productivity miracle, muddle-through, bubble/backlash, catastrophe. On the investment side, today's prices require AI inference spend to reach ~7.7% of US wages / ~22% of profits / >100% of today's software sales by 2028. That money comes either from Great-Recession-sized job cuts or ~4% productivity growth.
3. **Mercantilism.** China has cut its dependence on imports while building chokepoints. US tariffs have redirected Chinese exports to Europe and Japan, forcing middle powers to rearm and reindustrialise, which means more government debt. Fiscal limits are set by inflation, currency and bubbles, not a debt/GDP number. Brazil is well past its limit; the US is slightly over.
4. **Market pricing.** AI equities ($30T) imply ~3.4% productivity growth; bonds, FX and breakevens imply ~2%. Markets outside AI are "far from pricing disruptive change".

## Analysis notes

- **The key chart** is *Where can the ROI come from?*: required AI spend of 104% of today's US software sales shows how aggressive current pricing is.
- **The cheap phase is over:** P/E on 2028 earnings went from ~3–4x to ~15x, so most equity value now depends on earnings more than 10 years out.
- **Internal inconsistency is the trade:** if AI delivers, bonds, Asian FX and AI-vulnerable companies are mispriced; if not, AI equities are. Jensen doesn't say which side Bridgewater holds.
- **Caveats:** forward-looking points ("required", "needed", "discounted") are Bridgewater model outputs, not data. The AI benchmark slide mixes unlike measures. The populism and inequality charts show correlation; the causal story is argued, not shown.

## Data accuracy

Numbers were digitised from the slide images shown in the video.
- `exact` — printed on the slide or said in the talk.
- `approx` — read by eye from the chart. Fine for shape and rough level; **don't use for precise work**.

All charts, data and views are Bridgewater Associates'. This is an unofficial study aid and not investment advice.
