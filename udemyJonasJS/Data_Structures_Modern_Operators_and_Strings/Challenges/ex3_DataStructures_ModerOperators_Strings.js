const gameEvents = new Map([
  [17, "β½ GOAL"],
  [36, "π Substitution"],
  [47, "β½ GOAL"],
  [61, "π Substitution"],
  [64, "πΆ Yellow card"],
  [69, "π΄ Red card"],
  [70, "π Substitution"],
  [72, "π Substitution"],
  [76, "β½ GOAL"],
  [80, "β½ GOAL"],
  [92, "πΆ Yellow card"],
]);

/* Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks: */

// 1. Create an array 'events' of the different game events that happened (no
// duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:β½GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
