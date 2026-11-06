# Labs

Browser tools that follow the short rules come first. They are plain HTML, CSS, and JavaScript: no install and no build step.

Open [labs/web/index.html](./web/index.html) in a browser. Relative links also work if you serve this repository, including GitHub Pages, at `labs/web/`.

| Page | What it does |
| --- | --- |
| [Checks](./web/dice.html) | d6 roll-under, Advantage, Disadvantage, modifiers, attack and defense criticals. Also the travel encounter, reaction, Out of Action, and starting-coin rolls from `rules/`. |
| [Character](./web/character.html) | Combat, Manual, or Knowledge from [rules/characters.md](../rules/characters.md). One pair of creation scores may be swapped. Levels above 1 use [Experience](../rules/experience.md). |
| [NPC](./web/npc.html) | A person on the same class tables, plus a creature from [rules/creatures.md](../rules/creatures.md). |
| [Adventure](./web/adventure.html) | List RPG prompt lists ported from [guides/list-rpg.md](../guides/list-rpg.md). Risky actions still use the d6 check. |
| [Solo oracle](./web/oracle.html) | A d6 yes/no aid (Likely is Advantage, Unlikely is Disadvantage). The travel watch on that page is the procedure in [Turns](../rules/turns.md). The yes/no bands themselves are a solo aid, not a rule. |

`node labs/web/selftest.js` checks the roll-under math, the class tables, and the list counts. It does not need a browser.

## Optional Python CLI demos

Small Python sketches that used to sit next to the rules. Run one with `python3 labs/<file>.py` from the repository root. They are not required to play, and they do not replace the browser tools or the short rules.

Several of them roll a **d20** or build **OSR** characters with 3d6 (often drop-lowest) and class floors around 8–18. **That is not Simple RPG.** SRPG attributes are a d6 plus a small class modifier, and a check succeeds when you roll **under** the attribute. Do not treat a lab’s output as a legal SRPG character or a legal SRPG combat round.

| File | What it does | Dice |
| --- | --- | --- |
| [character_generator.py](./character_generator.py) | Prints one random Fighter, Cleric, Thief, or Magic-User with 3d6 abilities and a class hit die (`d8` means one d8). | OSR-like, not SRPG |
| [OSR_CharacterGenerator.py](./OSR_CharacterGenerator.py) | 3d6 drop the lowest, then floors the scores for fighter, rogue, or wizard. The write-up is [osr-character-generator.md](./osr-character-generator.md). | OSR, not SRPG |
| [character_sheet.py](./character_sheet.py) | Formats one hardcoded character (attributes in the 10–18 range) as Markdown. | Example data, not SRPG |
| [npc_generator.py](./npc_generator.py) | Random race, class, gear, and five stats from 1 to 10. Use [labs/web/npc.html](./web/npc.html) for an SRPG person or creature. | Not the SRPG creature or class tables |
| [combat_resolution.py](./combat_resolution.py) | Trades flat damage until one side reaches 0 health. Asks for the numbers on stdin. | Not roll-under |
| [gm_simulator.py](./gm_simulator.py) | A solo oracle: yes/no, complications, and treasure from **d20** rolls. Interactive. The browser oracle is a d6. | d20, not SRPG |
| [dice_roll.py](./dice_roll.py) | Parses strings such as `2d6+1` and prints the rolls. The examples are commented out; call `roll_dice(...)` yourself. | Any die size |
| [dice_grid.py](./dice_grid.py) | Prints a numbered grid. The span is sides + count − 1; a `+N` on the sample expression is ignored so the file can run. | Not a check |
| [adventure_generator.py](./adventure_generator.py) | Prints a quest, a place, an NPC, and a few encounter stubs. The browser roller uses the List RPG lists instead. | No dice procedure |

`CodeforSoloPlay.pdf` (it was in the repo twice, about 7.5 MB each) was a print of this kind of material. It is not shipped. Use these files, or the browser labs, instead.
