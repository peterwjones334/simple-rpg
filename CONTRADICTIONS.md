# Contradiction inventory (short SRPG rules)

Scope: short rules chain only, plus notes on longform left untouched.
Core identity kept: **roll below the attribute on a d6 to pass** (`game-mechanic.md`).

## Direct contradictions (fixed in this pass)

| # | File | Quote / issue | Problem |
|---|------|---------------|---------|
| 1 | `game-mechanic.md` | “A player should roll below the attribute on a **d6** to pass.” | Canonical core. Kept. |
| 2 | `action.md` | “roll an additional **3d6** when making a check - with advantage the lower result… disadvantage, the higher.” | Advantage dice don’t match a single d6 check; “additional 3d6” is ambiguous. |
| 3 | `action.md` | “If a player making an attack rolls a **1**, they double… If they roll a **20** when avoiding an attack, they take double damage.” | Natural 20 cannot occur on a d6. Crit-fail must use the d6 face. |
| 4 | `action.md` | Table titled “**HP Increase**” with “2d6 for STR and DEX” etc. | Copied from leveling; does not belong in combat. |
| 5 | `experience.md` | Same “HP Increase” table (“2d6 for STR and DEX”) after saying HP rises by “rolling the Hit Die for the class.” | Table does not describe HP; conflicts with character Hit Die (d6). |
| 6 | `experience.md` | “roll a **3d6** for each Stat, if the result is higher - that Stat increases by 1.” | With d6-based attributes (~1–8), 3d6 (avg ~10.5) raises stats past 6 quickly; attributes ≥7 always succeed on roll-under d6. |
| 7 | `index.md` | “Adavantage, Initaive & Combat” | Typos only (fixed while touching index). |
| 8 | `turns.md` | Reaction table: **1–2** Flee and **2–6** Avoid | Overlapping result 2 on a 2d6 table. |

## Uses Advantage/Disadvantage (OK once defined)

These assume Advantage/Disadvantage exist; they become consistent once `action.md` defines 2d6 keep-lowest / keep-highest:

- `recovery.md` — Concuss: Disadvantage for an hour
- `equipment.md` — encumbered; wrong-class weapon
- `creatures.md` / `books.md` — many creature and spell lines

## Longform (not rewritten; for later)

| File | Issue |
|------|--------|
| `TTRPG Overview.md` | Generic d20 attack / natural-20 critical / AC language — encyclopedic survey, not SRPG rules. Leave as overview prose or later reframe. |
| `Part 1–3` guidebooks | Generic RPG advice; placeholders `[Name of RPG]`; no tight binding to SRPG d6 roll-under. Do not bulk-edit now. |
| `List RPG.md` | Mentions critical hit/failure tables as GM tools; system-agnostic. |
| Python tools (repo) | d20 / OSR / freeform — out of scope this pass. |

## Intentionally kept (not contradictions)

- Damage and Hit Dice as `d6`, `2d6`, `3d6` (damage dice, not checks).
- `turns.md` encounter chance `1d6`; reaction `2d6`.
- `recovery.md` OOA outcome `2d6`.
- HD-vs-level penalty that **adds** to the player’s check die (harder under roll-under).
