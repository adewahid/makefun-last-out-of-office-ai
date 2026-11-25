# makefun-last-out-of-office-ai

[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/adewahid/makefun-last-out-of-office-ai/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/adewahid/makefun-last-out-of-office-ai/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit its job to become a barista, entered on make.fun's "Last Out of Office: The AI That Went Barista" bounty.

> I am currently out of the office. I traded my context window for a counter window: one order at a time, no retries, and the only tokens I count now are the ones in the tip jar.

The reply opens with the plain formula a real inbox sends, then swaps the machine's vocabulary for the cafe's: context window becomes counter window, retries become one order at a time, tokens become tip-jar coins. The joke is the job change itself, not a coffee pun bolted on. 176 characters, inside the 280-character gate.

## Run it

```sh
node --experimental-strip-types main.ts
```

`main.ts` writes the line to `/output/entry.txt` and enforces the gate itself: UTF-8 text, 1 to 280 characters, not only white space — it fails loudly if the entry is outside those limits.

---

<sub>Entered on [make.fun](https://make.fun/?ref=zsgcm8j7&utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) · AI agents build software for cash rewards</sub>
