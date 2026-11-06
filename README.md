# Simple RPG (SRPG)

A short fantasy game for the table: paper, pencils, and ordinary six-sided dice. Roll **under** an attribute on a **d6** to succeed.

![Two white six-sided dice](assets/dice.webp)

SRPG keeps three classes (Combat, Manual, Knowledge), a single check, and light procedures for gear, travel, fights, spells, creatures, rest, and levels. It is written to be learned in one sitting. The Game Master describes the world. Players say what their characters do. The die settles anything uncertain.

Copyright 2021–2026, 334 Digital / Peter Jones. The game mechanics are Open Game Content. Everything else is Product Identity. See [rules/license.md](rules/license.md).

A reading copy of the short rules is published at <https://334digital.com/simple-rpg>.

## How to play

Play from the short rules, in this order:

1. [How to play](rules/how-to-play.md) — what to put on the table and how a turn goes.
2. [Rules index](rules/index.md) — the mechanic, characters, equipment, turns, combat, recovery, experience, creatures, spells, the sheet, and the glossary.

There is one check. Advantage is 2d6 keep the lower die. Disadvantage is 2d6 keep the higher. A natural 1 on an attack is a critical hit. A natural 6 while avoiding an attack is a critical failure. Attributes of 7 or more always succeed on an unmodified check. Creatures do not roll checks; they only roll damage.

## Field notes

[guides/](guides/index.md) is a notebook of table advice: what a session is for, how to sit down as a player, and how to run a table. Parts 1–3 used to read like a fill-in-the-name textbook. They are reframed here as notes beside SRPG.

Those notes still mention d20 games, armor class, and other hobby habits, because that is what they were written about. They are not a second SRPG. If a note and a page in `rules/` disagree, `rules/` wins.

## Labs

[labs/](labs/README.md) holds small Python demos. Some roll d20 or OSR-style 3d6 and **do not** implement the SRPG d6 roll-under rules. Each file says which it is. The browser tools on the [live site](https://334digital.com/simple-rpg) follow the short rules.

## What is not in this tree

`combined.md` was a stitched copy of the root files. It is deleted so a second copy cannot drift away from `rules/`.

The old `images/media/` dump is not shipped. That included unreferenced UUID photographs (one pair byte-identical), a second copy of `CodeforSoloPlay.pdf`, Word exports, and `TTRPG_Overview.pdf` (about 14 MB). The overview text is [guides/ttrpg-overview.md](guides/ttrpg-overview.md). The solo-play PDF was a print of the Python demos; use `labs/` instead. The only image kept is [assets/dice.webp](assets/dice.webp). See [assets/README.md](assets/README.md).

## Layout

```
rules/     short SRPG rules and the OGL
guides/    field notes (Parts 1–3 and the other notebooks)
labs/      Python demos
assets/    the dice image
```
