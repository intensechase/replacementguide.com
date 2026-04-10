export const content = {
  slug: 'garage-door-remote',
  lifespanDetail: `Garage door remotes last 5 to 10 years, with battery life being the most common "failure" at 2 to 4 years. The remote itself is a simple radio transmitter... there's very little to wear out electronically. What kills remotes is battery corrosion (from leaving dead batteries in too long), physical damage (dropping on concrete), and water exposure (leaving it in a car cupholder where drinks spill). Most garage door remotes use a single CR2032 coin cell battery or a 12V battery (A23 or similar). When the remote range starts decreasing... you have to be closer to the door to make it work... the battery is dying, not the remote. Replace the battery before buying a new remote. Modern garage door openers since the mid-1990s use rolling code technology (Chamberlain/LiftMaster calls it Security+ or myQ, Genie calls it Intellicode). Each button press sends a different encrypted code. This means you can't just buy any universal remote... it has to be compatible with your opener's coding system. The three main systems are Chamberlain/LiftMaster Security+ and Security+ 2.0, Genie Intellicode, and older DIP switch systems (pre-1995). Check your opener brand before ordering a replacement remote.`,
  warningSigns: [
    { sign: 'Reduced range (have to be closer to work)', detail: 'The battery is dying. A fresh battery gives 30 to 50 feet of range. If you\'re pulling into the driveway and it doesn\'t work until you\'re 10 feet away, swap the battery first.' },
    { sign: 'Intermittent response (sometimes works, sometimes doesn\'t)', detail: 'Could be a dying battery, corroded battery contacts, or interference from nearby electronics. Try a fresh battery and cleaning the contacts before replacing the remote.' },
    { sign: 'Buttons feel mushy or don\'t click', detail: 'The rubber membrane under the buttons has worn out. The remote might still work with firm pressure, but it\'s on borrowed time.' },
    { sign: 'Battery corrosion visible inside', detail: 'Open the remote and look at the battery compartment. White or green crusty residue means the battery leaked. Clean with vinegar on a cotton swab. If the corrosion has eaten through the contacts, the remote is done.' },
    { sign: 'Remote was dropped in water or heavily rained on', detail: 'Water and electronics don\'t mix. If the remote got wet, remove the battery immediately and let it dry for 24 to 48 hours. It might survive. If it doesn\'t work after drying completely, it\'s dead.' },
  ],
  repairOrReplace: `Try the battery first. 9 out of 10 "dead" garage door remotes just need a $3 battery. Open the case (usually a coin or small screwdriver pries it apart), note the battery type, replace it, and test. If a new battery doesn't fix it, a replacement remote costs $20 to $50 depending on your opener brand. Multi-button remotes (operating 2 to 3 doors) cost $30 to $50. Single-button remotes cost $15 to $25. Universal remotes like the Chamberlain KLIK5U exist that work with most major brands, but they require a programming process that varies by opener model. Brand-specific remotes are easier to program... usually hold a button on the remote and the opener's "learn" button simultaneously. If you've lost all your remotes and don't have access to the opener's learn button, you'll need to clear the opener's memory and reprogram from scratch. Your owner's manual covers this process, or search your opener model number on YouTube. One more option: if your opener supports it, a myQ or Aladdin Connect smart garage controller ($30 to $50) lets you open the door from your phone. No remote needed. These work alongside existing remotes.`,
  maintenanceTips: [
    'Replace the battery proactively every 2 years even if it still works. A $3 battery is cheap insurance against being locked out of your garage.',
    'Don\'t store the remote in direct sunlight on your car visor. Heat degrades the battery and can warp the plastic case. A center console or glovebox is better.',
    'Keep a spare remote programmed and stored in the house. If your car remote fails, you have a backup that\'s already paired with the opener.',
    'Clean the battery contacts annually with a cotton swab and rubbing alcohol. This removes the thin oxidation layer that builds up and reduces the electrical connection.',
    'If you sell your house, reset the garage door opener and clear all programmed remotes. You don\'t want the previous owners still able to open your garage.',
  ],
  costBreakdown: {
    replaceLow: 20,
    replaceHigh: 50,
    repairLow: 3,
    repairHigh: 6,
    laborPercent: '0% (programming takes 2-5 minutes)',
  },
  recommendedProducts: [
    { name: 'Chamberlain KLIK5U-SS Universal Remote', description: 'Works with most major garage door opener brands (Chamberlain, LiftMaster, Craftsman, Genie, and others). 2-button design operates two different doors. The most versatile universal option.', priceRange: '$25-$35', amazonUrl: 'https://www.amazon.com/s?k=Chamberlain+KLIK5U+universal+garage+door+remote&tag=replacementgu-20' },
    { name: 'LiftMaster 893MAX 3-Button Remote', description: 'For LiftMaster and Chamberlain openers with Security+ 2.0. 3 buttons for up to 3 doors or gates. Rolling code security. The direct replacement if you have a LiftMaster system.', priceRange: '$25-$40', amazonUrl: 'https://www.amazon.com/s?k=LiftMaster+893MAX+3+button+remote&tag=replacementgu-20' },
    { name: 'Genie G3T-R Intellicode 2 Remote', description: 'For Genie and Overhead Door openers with Intellicode technology. 3-button design. Not compatible with Chamberlain/LiftMaster... make sure you know your opener brand.', priceRange: '$25-$35', amazonUrl: 'https://www.amazon.com/s?k=Genie+G3T-R+Intellicode+garage+remote&tag=replacementgu-20' },
  ],
  commonRepairs: [
    { repair: 'Replace battery', cost: '$3-$6', notes: 'The fix 90% of the time. CR2032 for most remotes. Takes 2 minutes.' },
    { repair: 'Clean battery contacts', cost: '$0', notes: 'Rubbing alcohol and a cotton swab. Fixes intermittent connection issues caused by oxidation.' },
    { repair: 'Buy replacement remote', cost: '$20-$50', notes: 'When the battery and contacts aren\'t the problem. Must match your opener brand\'s coding system.' },
    { repair: 'Reprogram remote', cost: '$0', notes: 'If the remote lost its programming (battery was dead too long), reprogram it using the opener\'s learn button. 2-5 minutes.' },
    { repair: 'Smart garage controller', cost: '$30-$50', notes: 'Chamberlain myQ or Aladdin Connect. Use your phone instead of a remote. Works alongside existing remotes.' },
  ],
  bestBrands: [
    { name: 'Chamberlain/LiftMaster', knownFor: 'The largest garage door opener manufacturer. Their remotes work with Chamberlain, LiftMaster, and most Craftsman openers. The KLIK5U universal remote is the go-to for multi-brand compatibility.' },
    { name: 'Genie', knownFor: 'The second largest opener brand. Their Intellicode remotes work with Genie and Overhead Door openers. Not cross-compatible with Chamberlain... you need the right brand.' },
    { name: 'Skylink', knownFor: 'Makes affordable universal remotes compatible with most major brands. Simpler programming process than some competitors. Good budget option.' },
  ],
  installationTime: `Battery replacement: 2 minutes. Pry open the case, swap the battery, snap it closed.\n\nProgramming a new remote: 2 to 5 minutes. The general process: press and release the "learn" button on the back or side of the garage door opener (you'll need a ladder), then within 30 seconds press the button on the new remote. The opener light will blink or click to confirm programming. Test the remote.\n\nThe learn button location varies by brand. Chamberlain/LiftMaster: usually a yellow, purple, or orange button near the antenna wire. Genie: usually a round button near the back of the motor housing.\n\nIf you're programming a universal remote, follow the brand-specific instructions that come with it. Universal remotes require entering a code sequence for your opener model before the learn button process.\n\nClearing all remotes (security precaution): hold the learn button for 10+ seconds until the indicator light goes out. This erases all programmed remotes... you'll need to reprogram every remote and keypad.`,
}
