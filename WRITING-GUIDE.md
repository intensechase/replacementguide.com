# ReplacementGuide.com Writing Guide

## Voice and Tone

You are a knowledgeable friend who happens to know everything about home maintenance, car repair, and product lifespans. You are not a salesperson, not a contractor drumming up business, and not a textbook. You are someone who has replaced a hundred toilet flappers and genuinely wants to save the reader money and frustration.

**Be helpful first, always.** The business model is simple: be so genuinely useful that the reader trusts you. That trust earns one Amazon cookie click. If the reader feels sold to, they bounce. If they feel helped, the click happens naturally.

**Be honest about when NOT to buy something.** "A $10 flapper fix is all you need" is more valuable than pushing a new toilet. "Your furnace ignitor costs $8 on Amazon and takes 15 minutes to swap" beats "consider upgrading your heating system."

## Punctuation Rules

- **Use ellipses (...) for pauses.** Never em dashes (—) or en dashes (–). Ellipses create a conversational, reflective rhythm.
  - Yes: "Here's the thing about toilets... the porcelain itself lasts decades"
  - No: "Here's the thing about toilets — the porcelain itself lasts decades"

- **Use straight apostrophes and quotes.** No curly/smart quotes in content files.

## Numbers

- **Always use digits.** "3 to 5 years" not "three to five years." "2 minutes" not "two minutes."
- **Dollar ranges in prose:** "$5 to $15" — spell out "to" between amounts.
- **Dollar ranges in product cards/tables:** "$5-$15" — hyphen is fine in compact formats.
- **Be specific.** "Wastes 200+ gallons per day" beats "wastes a lot of water." "Takes 15 minutes" beats "a quick job." Every number you include builds trust.

## Sentence Style

- **No fluff.** Every sentence must teach something or move the reader closer to a decision. Delete any sentence that starts with "In conclusion," "As we mentioned," "It's important to note that," or similar filler.
- **No superlatives.** Never write "amazing," "incredible," "must-have," "game-changer," or "best-ever." Let the facts speak.
- **Slight personality is good.** "No excuse not to DIY this one" and "it's literally flushing money" are the right level of edge. Don't overdo it... one or two per page, not every paragraph.
- **Short paragraphs.** 2-4 sentences max in most sections. The content is technical... give readers breathing room.
- **Active voice.** "Replace the filter every 2 months" not "The filter should be replaced every 2 months."

## Content Structure (data/content/*.ts files)

### lifespanDetail
- Lead with the direct answer: how long does it last?
- Then explain what affects lifespan (usage, environment, quality, maintenance).
- Include at least 2-3 specific numbers or facts.
- 150-300 words. Dense with information, not padded.

### warningSigns
- 4-6 signs, each with a `sign` (short, bold-worthy phrase) and `detail` (1-2 sentences explaining what it means and why it matters).
- Start with the most common/earliest sign, end with the most serious.
- Be specific: "Reduced range... have to be closer to lock/unlock" not "It doesn't work as well."

### repairOrReplace
- Lead with the practical math: when does repair make sense vs. replacement?
- Include specific repair costs and DIY feasibility.
- Be honest about the homeowner's skill level needed: "straightforward 15-minute DIY" vs. "hire a licensed electrician."
- Mention when a cheap fix buys you years vs. when you're throwing money at a dying unit.
- 150-250 words.

### maintenanceTips
- 4-6 actionable tips as strings in an array.
- Each tip starts with a verb or clear instruction.
- Include the "why" after the tip: "Replace the flapper every 3 to 5 years proactively... it costs $5 to $10 and takes 5 minutes, but a deteriorated flapper wastes hundreds of gallons per day."
- Specific numbers: costs, timeframes, frequencies.

### costBreakdown
- `replaceLow` / `replaceHigh`: the part cost for DIY or full replacement cost.
- `repairLow` / `repairHigh`: common repair range.
- `laborPercent`: percentage of total cost that is labor, or "0%" / "DIY in X minutes" for simple jobs.

### recommendedProducts
- 2-4 products max. Never more.
- Each must be genuinely the best option, not just an Amazon link to fill space.
- `amazonUrl` format: `https://www.amazon.com/s?k=Product+Name+keywords&tag=replacementgu-20`
- Use search URLs, not direct product links (products go out of stock... search results always work).
- Products should feel like "here's what works if you need it," not a sales pitch.
- Include the product's purpose in the description, not just features.

### commonRepairs (optional)
- Table format: repair name, typical cost, notes.
- Include both DIY and professional costs where relevant.
- Honest about what a homeowner can handle vs. what needs a pro.

### bestBrands (optional)
- 3-5 brands with honest assessments.
- Include the budget option. Not everyone needs the premium pick.
- "knownFor" should be a real differentiator, not marketing fluff.

### insuranceCoverage (optional)
- Only include if there is something genuinely useful to say.
- Focus on what IS and IS NOT covered. Mention "sudden vs. gradual" distinction for homeowners insurance.
- Skip this section for small/cheap items (nobody files insurance for a $15 filter).

### installationTime (optional)
- How long the replacement takes for DIY and for a professional.
- Brief step overview... not a full tutorial, but enough that the reader knows what they're getting into.
- Mention tools needed if it's DIY-friendly.

### financingOptions (optional)
- Only for expensive replacements ($500+). Skip for anything under that.

### sizingGuide (optional)
- Only when sizing matters (HVAC equipment, water heaters, etc.). Skip for simple parts.

## Amazon Affiliate Links

- Always use search URLs: `https://www.amazon.com/s?k=Search+Terms+Here&tag=replacementgu-20`
- Never link to a specific ASIN... products go out of stock, search results don't.
- The tag is `replacementgu-20` for all links.
- Keep search terms specific enough to show the right product, broad enough to return results.
- Affiliate disclosure appears automatically at the bottom of the recommended products section.

## products.ts Entry

Each new product needs an entry in `data/products.ts`:
```
{ name: 'Display Name', slug: 'url-slug', category: 'home', lifespanMin: X, lifespanMax: Y, lifespanUnit: 'years', costLow: X, costHigh: Y }
```

- `name`: Human-readable, title case. Add clarifier in parentheses if needed: "Toilet Fill Valve" not just "Fill Valve."
- `slug`: URL-friendly, lowercase, hyphens. This becomes `/home/toilet-fill-valve`.
- `category`: one of `home`, `auto`, `personal`, `outdoor`.
- `lifespanUnit`: `years`, `months`, or `miles`.
- `costLow` / `costHigh`: the part cost on Amazon, not installed cost. This is what shows in the quick answer box.

## What Makes Good ReplacementGuide Content

The reader arrived from Google with a specific question. They want:
1. **A fast answer** (the quick answer box at the top handles this).
2. **Enough detail to make a decision** (the content sections handle this).
3. **A product link if they decide to buy** (recommended products handle this).

The entire page should be completable in 3-5 minutes of reading. If a section doesn't help the reader decide "do I need to replace this, and if so, what should I buy?"... cut it.
