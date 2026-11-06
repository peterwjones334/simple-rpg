# Labs

Small Python demos that were stored next to the rules. Run one with `python3 labs/<file>.py` from the repository root.

They are sketches. Several of them roll a **d20** or build **OSR** characters with 3d6 (often drop-lowest) and class floors around 8–18. **That is not Simple RPG.** SRPG attributes are a d6 plus a small class modifier, and a check succeeds when you roll **under** the attribute. Do not treat a lab’s output as a legal SRPG character or a legal SRPG combat round.

The browser tools on <https://334digital.com/simple-rpg> follow the short rules. These scripts do not replace them.

| File | What it does | Dice |
| --- | --- | --- |
| [character_generator.py](./character_generator.py) | Prints one random Fighter, Cleric, Thief, or Magic-User with 3d6 abilities and a class hit die (`d8` means one d8). | OSR-like, not SRPG |
| [OSR_CharacterGenerator.py](./OSR_CharacterGenerator.py) | 3d6 drop the lowest, then floors the scores for fighter, rogue, or wizard. The write-up is [osr-character-generator.md](./osr-character-generator.md). | OSR, not SRPG |
| [character_sheet.py](./character_sheet.py) | Formats one hardcoded character (attributes in the 10–18 range) as Markdown. | Example data, not SRPG |
| [npc_generator.py](./npc_generator.py) | Random race, class, gear, and five stats from 1 to 10. | Not the SRPG creature or class tables |
| [combat_resolution.py](./combat_resolution.py) | Trades flat damage until one side reaches 0 health. Asks for the numbers on stdin. | Not roll-under |
| [gm_simulator.py](./gm_simulator.py) | A solo oracle: yes/no, complications, and treasure from **d20** rolls. Interactive. | d20, not SRPG |
| [dice_roll.py](./dice_roll.py) | Parses strings such as `2d6+1` and prints the rolls. The examples are commented out; call `roll_dice(...)` yourself. | Any die size |
| [dice_grid.py](./dice_grid.py) | Prints a numbered grid. The span is sides + count − 1; a `+N` on the sample expression is ignored so the file can run. | Not a check |
| [adventure_generator.py](./adventure_generator.py) | Prints a quest, a place, an NPC, and a few encounter stubs. System-agnostic prompts. | No dice procedure |

`CodeforSoloPlay.pdf` (it was in the repo twice, about 7.5 MB each) was a print of this kind of material. It is not shipped. Use these files.
