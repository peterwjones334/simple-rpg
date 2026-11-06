# DIFF-SUMMARY — SRPG rules contradiction fix

**Date:** 2026-11-06 (Europe/London)  
**Scope:** short SRPG rules Markdown at the repo root.  
**Left unchanged:** Python scripts, `license.md`, Parts 1–3, `TTRPG Overview.md`, and `combined.md`.

## What was wrong

The short rules advertised a **d6 roll-under** core (`game-mechanic.md`) but combat text still spoke like a d20 game: Advantage via an ambiguous “additional 3d6”, and a critical miss on a natural **20**. A leveling “HP Increase” table that listed attribute dice was pasted into combat. Level-up used **3d6** vs attributes, which races scores past 6 and breaks roll-under on a d6. The 2d6 reaction table overlapped on result 2. Index link text had “Adavantage / Initaive”.

## Resolution model chosen

**Keep SRPG’s identity: one attribute check = roll 1d6, succeed if below the attribute.**

- **Advantage:** roll 2d6, keep the **lower** die.  
- **Disadvantage:** roll 2d6, keep the **higher** die.  
- **Critical hit (attack):** natural **1** → success and double damage dice (AP still counts).  
- **Critical failure (defense):** natural **6** when avoiding → failure and double damage (AP still counts).  
- **Harder foes:** +1 per HD above character level **added to the check die** (worse under roll-under).  
- **Level-up HP:** +1d6 to maximum HP.  
- **Level-up attributes:** 1d6 vs each score; increase by 1 if higher. **No hard cap** — scores above 6 auto-succeed on unmodified checks.  

This stays lite, needs only d6s, and matches the rest of the short chain (damage dice, creatures, spells that already say Advantage/Disadvantage).

## File-by-file

| File | Change |
|------|--------|
| `game-mechanic.md` | Clarified core; pointed to `action.md` for Adv/Dis/crits; noted attrs ≥7 always succeed unmodified, attr 1 never without help. |
| `action.md` | Full rewrite of Adv/Dis (2d6), crits (1 / 6), removed misplaced HP table, kept initiative/attacks/effects/OOA, documented HD penalty. |
| `experience.md` | Replaced the “HP Increase” attribute table with +1d6 HP; switched stat gains from 3d6 to 1d6. **No hard cap.** Optional class key-attribute focus table. |
| `turns.md` | Reaction table: removed overlap — **2–3** Flee, **4–6** Avoid. |
| `index.md` | Fixed “Advantage, Initiative & Combat” spelling. |
| `glossary.md` | Filled empty `d6` / check / Advantage / Disadvantage rows; light cleanup. |
| `CONTRADICTIONS.md` | Inventory of issues found (short rules, plus longform notes left untouched). |
| `DIFF-SUMMARY.md` | This file. |
| Other short copies (`characters.md`, `creatures.md`, `books.md`, `equipment.md`, `recovery.md`, …) | Unchanged (already compatible once Adv/Dis is defined). |

## Peter's decisions (applied)

1. **Attributes above 6:** allowed; auto-succeed on unmodified d6 checks (not hard-capped).
2. **Natural-1 crits:** kept (~16.7%).
3. **Level-up:** keep +1d6 HP and 1d6-vs-attribute gains.
4. **Flee:** reaction **2–3** Flee, **4–6** Avoid.

## How to review

Read `game-mechanic.md`, then `action.md`, then `experience.md`. The issue list is in `CONTRADICTIONS.md`.
