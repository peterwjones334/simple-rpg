# Simple Role-Playing Game (SRPG)

**A lightweight fantasy RPG played with paper, pencil and d6.**

Core resolution is a single roll-under attribute check on 1d6. Everything else is optional garnish.

---

## Core Mechanic

**Roll 1d6. Succeed if the result is lower than the relevant attribute.**

- Attributes of 7 or higher always succeed on an unmodified check.
- Attributes of 1 never succeed without Advantage or a GM ruling.
- Creatures do not make checks. Only characters do. Creatures only roll for damage.

### Advantage & Disadvantage

- **Advantage:** roll 2d6, keep the lower die.
- **Disadvantage:** roll 2d6, keep the higher die.
- Do not stack. If both apply, they cancel.

### Criticals

- **Critical hit (attack):** natural 1 always hits and doubles the damage dice. Armor still applies.
- **Critical failure (defense):** natural 6 always fails and the character takes double damage. Armor still applies.

---

## Character Creation

Choose a class, then generate attributes in order: STR, DEX, CON, INT, WIS, CHA. You may swap any two results.

### Combat Skilled (Warrior / Fighter)

| Attribute | Value |
|-----------|-------|
| STR | d6+1 |
| DEX | d6+1 |
| CON | d6+2 |
| INT | d6 |
| WIS | d6 |
| CHA | d6+1 |
| HP | d6 + STR + CON + AP |
| Armor | 1 (clothing) |
| Tools | Basic 4, Weapons 6, Armor 6, Magic 1, Rations 6 |

**Features:** Regain d6 HP once per hour in combat. Extra attack per level. Sunder shield to ignore damage from a failed STR/DEX check.

### Manual Skilled (Thief / Trades)

| Attribute | Value |
|-----------|-------|
| STR | d6 |
| DEX | d6+2 |
| CON | d6 |
| INT | d6 |
| WIS | d6+2 |
| CHA | d6+2 |
| HP | d6 + STR + CON + AP |
| Armor | 1 |
| Tools | Basic 6, Weapons 2, Armor 2, Magic 2, Rations 4 |

**Features:** DEX checks to avoid traps. Backstab deals d6 + level. Skilled tasks (climb, sneak, locks, languages).

### Knowledge Skilled (Cleric / Conjurer)

| Attribute | Value |
|-----------|-------|
| STR | d6 |
| DEX | d6 |
| CON | d6+1 |
| INT | d6+1 |
| WIS | d6+2 |
| CHA | d6+1 |
| HP | d6 + STR + CON + AP |
| Armor | 1 |
| Tools | Basic 5, Weapons 1, Armor 2, Magic 6, Rations 4 |

**Features:** CON vs poison/paralysis. INT vs spells. Banish undead (WIS + creature HD). Starts with 1d6 spells (levels 1–2). Spell slots from level 2.

Starting equipment: clothes, one day of rations, one-handed weapon, and 1d6×10 coins.

---

## Combat & Action

On your turn you may move Nearby and take one action (or forgo the action to move Far Away).

**Initiative:** Everyone checks DEX. Successes act first (in any order), then failures.

**Attacks:** Melee = roll under STR. Ranged = roll under DEX. To avoid an attack, the defender rolls the same way. Ranged attacks in Close range are at Disadvantage.

**Harder foes:** For every HD above your level, add +1 to every roll you make against that creature (worse for roll-under).

**Damage:** Based on class or creature HD. Armor Points reduce incoming damage. AP refreshes after an hour of rest.

**Out of Action:** At 0 HP you are unconscious. After the fight, roll 2d6 on the OOA table.

| 2d6 | Result |
|-----|--------|
| 2 | Knocked out |
| 3–5 | Concussed (Disadvantage for 1 hour) |
| 6–8 | Physically stressed (STR/DEX/CON –2 for a day) |
| 9–10 | Permanent impairment (STR or DEX –2) |
| 11 | Disfigured / shocked (CHA reduced to 4) |
| 12 | Dead |

---

## Movement & Time

Ranges: Close (0–5 ft / 0–2 m), Nearby (5–60 ft / 2–20 m), Far Away (60–120 ft / 20–50 m), Distant (beyond).

Moments = combat rounds. Minutes = exploration turns. The GM advances time as needed.

While travelling, the GM rolls 1d6 every ~20 minutes of real time. 1–2 = encounter. Then roll 2d6 for reaction:

| 2d6 | Reaction |
|-----|----------|
| 2–3 | Flee |
| 4–6 | Avoid |
| 7–8 | Confront and call reinforcements |
| 9 | Confront and attempt to capture/kill/eat |
| 10 | Mistake for friends or trick (re-roll) |
| 11–12 | Assist (trade items or information) |

---

## Equipment & Encumbrance

Carry capacity = STR. Over STR = Disadvantage on all checks and can only move Nearby. Cannot exceed 2× STR.

Armor reduces damage by its AP. Using armor outside your class tools adds the AP to attack/avoid rolls. Using weapons outside your class tools gives Disadvantage.

Usage dice: many items have limited uses. On use, roll the usage die; 1–2 degrades or destroys the item.

---

## Experience & Leveling

The GM awards levels for surviving sessions, quests, or major events. Pace is the GM’s choice and should stay consistent.

On level-up:

1. Add 1d6 to maximum HP.
2. For each attribute, roll 1d6. If higher than the current score, increase by 1.

Optional focus (GM may limit to key attributes):

- Combat: STR & DEX
- Manual: DEX & WIS
- Knowledge: INT & WIS

---

## Rest & Healing

- After ~1 hour rest: regain all Armor Points.
- Once per day after rest: roll a Hit Die and regain that many HP.
- Healing from spells/potions/abilities cannot exceed maximum HP and never goes below zero. Healing an OOA character starts from zero.

---

*SRPG v1 cleaned edition. Built from the original scattered markdown. Compatible with List RPG adventure generation.*
