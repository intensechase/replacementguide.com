export const guide = {
  slug: 'circuit-breaker-keeps-tripping',
  title: 'Circuit Breaker Keeps Tripping',
  metaTitle: 'Circuit Breaker Keeps Tripping — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'Circuit breaker keeps tripping? Here\'s how to figure out why and whether it\'s a simple overload or something that needs an electrician.',
  relatedProduct: { category: 'home', slug: 'electrical-panel', name: 'Electrical Panel' },
  intro: `A breaker that trips once is doing its job. A breaker that keeps tripping is telling you something is wrong. Don't just keep flipping it back on... let's figure out what's causing it so you don't end up with a real problem.`,
  steps: [
    {
      title: 'Identify which circuit is tripping',
      detail: 'Open your electrical panel and find the breaker that\'s tripped. It\'ll be in the middle position (not fully on, not fully off) or some breakers have a red indicator. Note which circuit it is... the label on the panel should tell you which rooms or appliances are on that circuit.',
      fix: 'Flip the breaker fully to the off position first, then flip it back on. If it holds, proceed to figure out what overloaded it. If it trips immediately when you flip it on, leave it off and call an electrician... you have a short circuit.',
    },
    {
      title: 'Check for an overloaded circuit',
      detail: 'The most common reason for a tripping breaker is too many things drawing power on one circuit. Most household circuits are 15 or 20 amps. A space heater alone can pull 12-15 amps... add a hair dryer and you\'re way over.',
      fix: 'Unplug everything on that circuit. Flip the breaker back on. Plug things back in one at a time. Redistribute high-draw appliances across different circuits. Space heaters, window AC units, hair dryers, and microwaves are the usual suspects.',
    },
    {
      title: 'Find the specific appliance causing the problem',
      detail: 'If unplugging everything and plugging back in one at a time reveals that one specific device trips the breaker, that device has an internal short or is pulling too much current.',
      fix: 'Stop using that appliance. If it\'s something with a motor (vacuum, washing machine, fridge), it might have a failing motor drawing excessive amps. Either get the appliance repaired or replace it. Don\'t just plug it into a different circuit... the problem follows the device.',
    },
    {
      title: 'Understand GFCI vs AFCI breakers',
      detail: 'GFCI breakers (required near water) trip when they detect current leaking to ground... like through water or a damaged cord. AFCI breakers (required in bedrooms and living areas) trip when they detect arcing... like from a damaged wire inside a wall. Both can be more sensitive than standard breakers.',
      fix: 'For GFCI trips, check for moisture in outlets, damaged cords, or appliances with worn plugs. For AFCI trips, the issue might be a loose connection in an outlet box or damaged wiring. AFCI breakers can sometimes trip from certain appliances (vacuums, treadmills)... if it only trips with one device, check if that device is compatible.',
    },
    {
      title: 'Check for a failing breaker',
      detail: 'Breakers do wear out, especially if they\'ve been tripped many times over the years. A failing breaker trips at lower amperages than it should, or it feels loose and won\'t stay in the on position. The breaker itself might feel warm to the touch.',
      fix: 'A warm breaker or one that won\'t stay on needs to be replaced by an electrician. This is a $150-250 repair. Don\'t ignore it... a failing breaker that can\'t trip when it should is a fire hazard.',
    },
  ],
  whenToReplace: `If your home has a Federal Pacific (FPE/Stab-Lok) or Zinsco electrical panel, replace the entire panel. These panels are known fire hazards... the breakers fail to trip during overloads. This isn't optional or something to put off. Budget $1,500-3,000 for a panel replacement. If your panel is any brand but over 40 years old and you're having regular tripping issues, it's also time to upgrade.`,
  whenToCallPro: `Call an electrician if a breaker trips immediately when flipped on (short circuit), if you see scorch marks or smell burning at the panel, if a breaker feels hot, or if you hear buzzing from the panel. Also call if a breaker trips with nothing plugged in on that circuit... that means the wiring itself has a problem.`,
  recommendedProducts: [
    { name: 'Klein Tools Circuit Breaker Finder', description: 'Tells you exactly which breaker controls which outlet... way easier than flipping breakers one at a time while someone yells from the other room.', priceRange: '$30-$50', amazonUrl: 'https://www.amazon.com/s?k=Klein+Tools+circuit+breaker+finder&tag=replacementgu-20' },
    { name: 'GFCI Outlet Tester', description: 'Plug it into any outlet and it instantly tells you if the wiring is correct, if the ground is good, and if the GFCI protection is working. Every homeowner should have one of these.', priceRange: '$10-$15', amazonUrl: 'https://www.amazon.com/s?k=GFCI+outlet+tester+with+indicator&tag=replacementgu-20' },
    { name: 'Whole House Surge Protector', description: 'Protects your entire electrical panel from power surges that can damage appliances and trip breakers. Installs at the panel and covers everything downstream.', priceRange: '$40-$80', amazonUrl: 'https://www.amazon.com/s?k=whole+house+surge+protector+panel&tag=replacementgu-20' },
  ],
}
