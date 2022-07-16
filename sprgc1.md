
# Simple Role-Playing Game

  2021             SRPG v1

> A simple roleplaying game which is played with paper, pencils and dice

Simple Role-Playing Game

SRPG v1

# Overview

This document provides a simple roleplaying game which is played with paper, pencils and dice (d6).

It uses early Fantasy Roleplaying Game as a baseline and changes aspects to make it lite and generic.

# Game Mechanic

The Game Master (GM) creates a world. The world consists of characters, non-player characters (NPC), creatures, equipment, location and objectives.

The player uses a character to perform actions, equipment, combat and casting to interact with the world and achieve objectives. Characters have an initial class, attributes and skills.

The outcome of a character's action is resolved by checking an attribute.

**A player should roll below the attribute on a d6 to pass**.

Creatures don't make checks - a character must avoid their attacks by making a check, the only time a creature would roll is for damage.

The game is played in turns.

The game ends when the objectives are met (or the characters are dead). The GM awards experience allowing the characters to gain levels for future games in the world.

# Characters

The player choices of their character class from either; Manual Skilled, Combat Skilled & Knowledge Skilled.

The class determines how much damage you can do, your Hit Points (HP) and unique abilities.

The values for attributes are generated with a d6 in the following order.

- Strength (STR)

- Dexterity (DEX)

- Constitution (CON)

- Intelligence (INT)

- Wisdom (WIS)

- Charisma (CHA)

2 of the generated attributes may be swapped around.

## Combat skilled ("Warrior" or "Fighter") Class

The Combat skill modifies the basic attributes using the assumption that the character has acquired addition STR & DEX through practice and training of combat skills.

+-----------------+----------------------+-----------------------------------+
| **Attribute**   | **Value**            | **Notes**                         |
+=================+======================+===================================+
| Name            |                      |                                   |
+-----------------+----------------------+-----------------------------------+
| Type            | PC / NPC             |                                   |
+-----------------+----------------------+-----------------------------------+
| Class           | Combat               |                                   |
+-----------------+----------------------+-----------------------------------+
| Level           | 1                    |                                   |
+-----------------+----------------------+-----------------------------------+
| STR             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| DEX             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| CON             | d6 + 2               |                                   |
+-----------------+----------------------+-----------------------------------+
| INT             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| WIS             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| CHA             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| HP              | d6 + STR + CON + ARM | d6 is rolled at beginning of game |
+-----------------+----------------------+-----------------------------------+
| HP Recovery     | d6 -- 2 per Rest     |                                   |
+-----------------+----------------------+-----------------------------------+
| Armor (AP)      | 1                    | Clothing provides 1 AP            |
+-----------------+----------------------+-----------------------------------+
| Attack / Damage | d6 + Weapon          |                                   |
+-----------------+----------------------+-----------------------------------+
| Tools           | Basic 4              |                                   |
|                 |                      |                                   |
|                 | Weapons 6            |                                   |
|                 |                      |                                   |
|                 | Armor 6              |                                   |
|                 |                      |                                   |
|                 | Magic 1              |                                   |
|                 |                      |                                   |
|                 | Rations 6            |                                   |
+-----------------+----------------------+-----------------------------------+

### Features

- Once per hour, while in combat, the character can regain d6 lost HP.

- The Combat skill can make +1 attack per level.

- If the character fails a STR or DEX check and would be dealt damage from an attack, they can opt to sunder (destroy) their shield - if they have one equipped - and ignore the damage.

## Manual skilled ("Thief" or "Trades") Class

The manual skill modifies the basic attributes using the assumption that the character DEX and WIS has through Training or Practice.

+-----------------+----------------------+-----------------------------------+
| **Attribute**   | **Value**            | **Notes**                         |
+=================+======================+===================================+
| Name            |                      |                                   |
+-----------------+----------------------+-----------------------------------+
| Type            |                      |                                   |
+-----------------+----------------------+-----------------------------------+
| Class           | Manual               |                                   |
+-----------------+----------------------+-----------------------------------+
| Level           | 1                    |                                   |
+-----------------+----------------------+-----------------------------------+
| STR             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| DEX             | d6 + 2               |                                   |
+-----------------+----------------------+-----------------------------------+
| CON             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| INT             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| WIS             | d6 + 2               |                                   |
+-----------------+----------------------+-----------------------------------+
| CHA             | d6 + 2               |                                   |
+-----------------+----------------------+-----------------------------------+
| HP              | d6 + STR + CON + ARM | d6 is rolled at beginning of game |
+-----------------+----------------------+-----------------------------------+
| HP Recovery     | d6 per Rest          |                                   |
+-----------------+----------------------+-----------------------------------+
| Armor (AP)      | 1                    | Clothing provides 1 AP            |
+-----------------+----------------------+-----------------------------------+
| Attack / Damage | d6 + Weapon or Tool  |                                   |
+-----------------+----------------------+-----------------------------------+
| Tools           | Basic 6              |                                   |
|                 |                      |                                   |
|                 | Weapons 2            |                                   |
|                 |                      |                                   |
|                 | Armor 2              |                                   |
|                 |                      |                                   |
|                 | Magic 2              |                                   |
|                 |                      |                                   |
|                 | Rations 4            |                                   |
+-----------------+----------------------+-----------------------------------+

### Features

- Check DEX to avoid damage or effects from traps and magical devices.

- Attacking from behind and deals d6 + Thief\'s level damage.

- Performing skilled tasks, climbing, hearing sounds, moving silently, understanding written languages and opening locks.

## Knowledge Skilled ("Cleric" or "Conjurer") Class

The Knowledge skill modifies the basic attributes using the assumption that the character is INT and has acquires WIS through Education or Study.

+-----------------+----------------------+-----------------------------------+
| **Attribute**   | **Value**            | **Notes**                         |
+=================+======================+===================================+
| Name            |                      |                                   |
+-----------------+----------------------+-----------------------------------+
| Type            |                      |                                   |
+-----------------+----------------------+-----------------------------------+
| Class           | Knowledge            |                                   |
+-----------------+----------------------+-----------------------------------+
| Level           | 1                    |                                   |
+-----------------+----------------------+-----------------------------------+
| STR             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| DEX             | d6                   |                                   |
+-----------------+----------------------+-----------------------------------+
| CON             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| INT             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| WIS             | d6 + 2               |                                   |
+-----------------+----------------------+-----------------------------------+
| CHA             | d6 + 1               |                                   |
+-----------------+----------------------+-----------------------------------+
| HP              | d6 + STR + CON + ARM | d6 is rolled at beginning of game |
+-----------------+----------------------+-----------------------------------+
| HP Recovery     | d6 + 2 per Rest      |                                   |
+-----------------+----------------------+-----------------------------------+
| Armor (AP)      | 1                    | Clothing provides 1 AP            |
+-----------------+----------------------+-----------------------------------+
| Attack / Damage | d6 + Weapon / Magic  |                                   |
+-----------------+----------------------+-----------------------------------+
| Tools           | Basic 5              |                                   |
|                 |                      |                                   |
|                 | Weapons 1            |                                   |
|                 |                      |                                   |
|                 | Armor 2              |                                   |
|                 |                      |                                   |
|                 | Magic 6              |                                   |
|                 |                      |                                   |
|                 | Rations 4            |                                   |
+-----------------+----------------------+-----------------------------------+

### Features

- Check CON to avoid damage or effects from poison or being paralyzed.

- Check INT to avoid damage or effects from spells or magical devices.

- The character can banish all nearby undead by checking their WIS and adding the creature\'s HD to the roll.

- Characters start with a book containing a total of 1d6 spells from the Level 1 and 2 Spell lists.

- At second level, the character can cast a number of spells per day.

# Equipment

Every new character starts with some basic equipment; set of clothes, one day rations and a one-handed weapon, as allowed by their class.

Characters have a purse which contains 1d6 x 10 coins with which to buy equipment.

Equipment is bought from NPC in a shop, stolen or traded with another character.

  -----------------------------------------------------------------------------------------------------------------------
  *Attribute*                                               *Uses*   *Cost*   *Mass*   *Level*   *Benefit*
  --------------------------------------------------------- -------- -------- -------- --------- ------------------------
  Pack / Sack, blanket                                               5        1        1         \+ 2 Carry

  Work Tools, Hammers, knives                               d6       5        1        1         +1 DEX

  Rope (50'), Spikes                                        1        1        1        1

  Food, Wine, Beer                                          1        1        1        1

  Food Luxury / Herbs/ Medicines                            1        5        1        2         +1 heal

  Fire Maker                                                         1                 1         Light Torch or Lantern

  Torch                                                     1        1        1        1

  Lantern                                                            10       1        2

  Oil                                                       1        2        1        2         Fill Lantern

  Pole / Staff                                                       1        2

  1 Handed Weapon                                                    10       1

  2 Handed Weapon                                                    50       2        2

  Small items, Holy Symbols, Lucky charms, Vials, Mirrors   d6       25       1        2         +1 WIS when banishing

  Clothes                                                            10       1        1

  Leather                                                            20       1        1         +1 AP

  Small Shield                                                       10       1        1         +1 AP

  Chain                                                              50       2        1         +2 AP

  Plate                                                              100      3        2         +2 AP

  Large Shield                                                       50       2        2         +2 AP

  Knight (Fitted Chain, Plate, Shield)                               200      6        3         +6 AP

Magic Armor                                                        0        0        3         x 2 AP
  -----------------------------------------------------------------------------------------------------------------------

All Equipment is consumable and has limited use. When that item is used the next (turn) its Usage die is rolled. If the roll is 1-2 then the benefit is lost. Usage is downgraded with continue use.

A character can carry the number of items equal to their STR with no issues. Carrying over this amount means they are encumbered, and all attribute checks are taken with disadvantage - you can also only ever move to somewhere Nearby. They simply cannot carry more than double their STR.

Armor provides protection by reducing all incoming damage. Each type will reduce damage by a limited amount. Armor Points are regained after rest. Once the characters armor has absorbed its maximum HP, the Character is too tired or wounded to make effective use of it again - they then begin taking full damage. If a character wears armor that is not listed in their class, they add their total Armor points to any rolls to Attack or Avoid Damage.

Larger, more deadly weapons deal additional damage, but are also harder to hit with. Add +2 to any dice rolled with them.

When using a weapon not listed in their class, combat checks have Disadvantage.

Creatures have 1 point of armor for every HD above 1, to figure this out quickly simply -1 from their HD -- Human based creatures can also carry shields. (All to a maximum of 10).

# Turn, Time, Movement, Encounters & Reactions

During a player's turn a character may move and perform an action. They could attack, look for a clue, talk with an NPC, cast a spell - interacting with the world is an action. Often, they will check their attributes to determine the outcome.

There are 2 types of tracked time - Moments (rounds) and Minutes (turns).

- Moments are used during combat and fast paced scenes of danger.

- Minutes are used when exploring and adventuring.

A GM may advance the clock as they need substituting Minutes for Hours, Days or even Months, should the game require it.

Movement uses ranges for measuring distances; Close, Nearby, Far Away and Distant.

On their turn every character can move somewhere Nearby as part of an action, performing that action at any stage of the move. They can forgo their action and move somewhere Far Away instead. Anything beyond Far Away can be classified as Distant and would take 3 moves to get to.

This supports the narrative 'theatre of the mind' style of play and is less concerned about tracking squares and distances. For converting existing movement rates or measures use the following.

  -----------------------------------------------------------------------
  **Distance**            **Feet**                **Meters**
  ----------------------- ----------------------- -----------------------
  Close                   0 - 5                   0 - 2

  Nearby                  5 - 60                  2 - 20

Far Away                60 -120                 20 - 50
  -----------------------------------------------------------------------

Some creatures and NPCs will have pre-determined personalities and goals that will guide a GM when choosing their actions towards the characters.

When the characters are on travelling, The GM should roll a 1d6 every 20 minutes of real-world play. A result of 1-2 means the players will encounter a randomly generated creature or distraction in the next turn. Randomly encountered creatures will react to the characters, make a 2d6 Reaction roll.

  -------------------------------------------------------------------------
  **Result**   **Reaction**
  ------------ ------------------------------------------------------------
  1-2          Flee

  2-6          Avoid

  7-8          Confront and Call for Reinforcements

  9            Confront and attempt to capture, kill or Eat the Character

  10           Mistake the PC for friends or Trick the PC (re-reroll)

11-12        Provide assist, usually trade items or information
  -------------------------------------------------------------------------

The likelihood of a meeting, and to some extent the reaction, will depending on the terrain, time of day and outcomes of previous encounters.

# Advantage, Initiative & Combat

A GM may decide that a particular course of action or task has a higher or lower chance of success. They should ask a player to roll an additional 3d6 when making a check - with advantage the lower result is used and with disadvantage, the higher.

If combat breaks out, everyone must be sorted into an order so they each get to act and react in turn. Every character checks their DEX, those that succeed, take their turn before their opponents, they must then act as a group - deciding their own order for actions. Those that fail their DEX checks, go after their opponents.

When a character attacks a creature, they must roll below their STR stat for a Melee Attack or DEX for a Ranged Attack. Likewise, when a creature attacks, the character must roll below its STR against a Melee Attack and DEX against a Ranged Attack to avoid taking damage. A GM will often give the stat required for the check. The damage an attack deals is based on the character's class or the number of HD a creature has.

To make a Melee Attack an opponent must be Close. Ranged Attacks against Close opponents are possible, but the attacker suffers a Disadvantage.

Creatures deal damage based on their HD.

If a player making an attack rolls a 1, they double the result of the damage dice they roll. If they roll a 20 when avoiding an attack, they take double damage. Armor Points are used normally.

  ------------------------------------------------------------------------
  **Creature HD**              **Roll**              **Damage**
  ---------------------------- --------------------- ---------------------
  1-3                          1d6                   3

  4-6                          2d6-2                 5

  7                            2d6                   7

  7-10                         2d6+2                 9

11-12                        3d6                   10
  ------------------------------------------------------------------------

For every HD above the character's level, add +1 to every roll the player makes for any attribute check that would determine the outcome of a conflict between them and an NPC. For example, a level 3 character defending against a HD 5 creatures attack would add +2 to their roll.

The player should roll an attribute check when any spell, trap or effect would impact them.

  --------------------------------------------------------------------------
  **Attribute**   **Effect**
  --------------- ----------------------------------------------------------
  STR             Physical Harm that cannot be avoided

  DEX             Physical Harm that can be avoided

  CON             Poison, Disease or Death.

  INT             Resisting Spells and Magic

  WIS             Deception and Illusions

CHA             Charming effects
  --------------------------------------------------------------------------

When a character is reduced to zero Hit Points (HP) they are taken Out of Action (OOA), they are unconscious and cannot make any actions.

# Rest and Healing

When the fight is over/are out of danger, a character that is taken OOA can roll 2d6 on the table to see what happens to them. If they survive, they gain 1d6-2 HP.

  ---------------------------------------------------------------------------
  Roll
  ---------- ----------------------------------------------------------------
  2          Knocked out

  3-5        Concuss, Disadvantage on all checks for the next hour.

  6-8        Physically Stressed. STR, DEX and CON are -2 for the next day.

  9-10       Physically Impaired .STR or DEX is permanently reduced by 2

  11         Disfigured or traumatically shocked - CHA reduced to 4

  12        Dead
  ---------------------------------------------------------------------------

If all the characters lose the fight or are unable to recover the body of the character, they are lost (Dead)

When characters rest for about an hour, they regain the use of all their Armor points.

Once per day, after resting, they may roll a Hit Die associated with their class and regain that many HP.

Characters can gain Hit Points from Spells, Potions, and Abilities. They can never gain more than their maximum - and can never go below zero either. When healing a character who is OOA, just start at zero and count up. That character is now back on their feet and no longer OOA.

# Experience and Gaining Levels

Characters learn through meet objectives and overcoming obstacles.

Killing one Goblin won't bring a revelation or Knowledge. Surviving a dungeon, completing a quest or simply living to tell the tale will bring perspective and growth.

GM should be clear and upfront with the player, so they know what the objectives of the game are. For every session, level, quest or major event the character survives, it should contribute to gaining a level. The GM should decide the advancement, it is recommended that the decision remains mostly constant throughout the campaign.

When a character levels up, their maximum Hit Points increase by rolling the Hit Die for the class.

  -----------------------------------------------------------------------
  **Class**                           **HP Increase**
  ----------------------------------- -----------------------------------
  Combat                              2d6 for STR and DEX.

  Manual                              2d6 for DEX and WIS.

 Knowledge                           2d6 for INT or WIS
  -----------------------------------------------------------------------

A player should roll a 3d6 for each Stat, if the result is higher - that Stat increases by 1.

# Creatures

HD represents a creature\'s level and the number of d6 rolled to determine its HP.

Creatures deal damage based on their HD.

For Random creature encounters, roll 1d6 for type and 1d6 for the creature.

Apply a +/- modifier to change.

## D1 Human Like

Human or human like creatures, distorted by temperament, size or predation.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**                   **Description**                                                                                                                                                **HD**   **Actions**
  --------- ------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------- -------- -------------
  D1D1      Human, Early Human             Human, feral, unbalanced or with malign intent                                                                                                                 1

  D1D2      Goblin, Half-Human             Tribal, Adapted for forest and underground                                                                                                                     1        1d6 HP

  D1D3      Hob Goblin                     Smart and organized, usually has a backup shield if one lost                                                                                                   1

  D1D4      Berserker or Bugbear           Disadvantage on defense rolls when attacks.                                                                                                                    2

  D1D5      Ogre or Giant                  Gives advantage on all CHA checks made against it                                                                                                              4

  D1D6      Doppelganger or shapeshifter   Change form in a moment, disadvantage against magic checks.                                                                                                    3

D1D 6+1   Succubus, Incubus or Vampyre   Rare. 2 Claws or Fangs 1d6, Advantage on magic checks, immune to non-magic weapons, level drain (-1) with kiss. Can cast Charm person (spell) once per hour.   6        1d6 HP
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## D2 Creatures of the Night

Folklore Nocturnal creatures infected with were or with Vampyre like traits.

  -------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**   **Description**                                               **HD**   **Actions**
  --------- -------------- ------------------------------------------------------------- -------- -------------
  D2D1      Vampire Bat    1d6 damage next moment after attack.                          1        1d6 HP

  D2D2      Wererat        Cannot gain Advantage when attempting to surprise a Wererat   2

  D2D3      Night Terror   Removes the effect of Rest                                    2

  D2D4      Werewolf       Only silver weapons can hurt it.                              4        1d6 HP

  D2D5      Werebear       2 claws 1d6 if both hit hug for 1d2+2 damage                  4

D2D6      Vampire        2 Claws or Fangs 1d6                                          4
  -------------------------------------------------------------------------------------------------------------

## D3 Demons

Creatures of the underworld, Magic and Fire

+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| **2d6** | **Creature**    | **Description**                                                                                                             | **HD** | **Actions** |
+=========+=================+=============================================================================================================================+========+=============+
| D3D 1   | Manes           | 2 Claws 1d6 + 1 Bite 1d6, Half damage from non-magic weapons                                                                | 1      | 2d6 HP      |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| D3D2    | Elemental, Fire | Burn for 2d6 fire damage.                                                                                                   | 2      | 2d6 HP      |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| D3D3    | Gargoyle        | Gargoyles are only found in / or on buildings. A random gargoyle is an inert statue. 2 claws 1d6 + 1 bite 1d6 + 1 horn 1d6. | 4      | 3d6 HP      |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| D3D4    | Banshee         | Shriek - CON check or Paralyzed for 2d6 moments.                                                                            | 7      |             |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| D3D5    | Balor           | Sword 2d6+2 + Whip (0) DEX check or be pulled close to the Balor and burnt for 3d6 fire damage.                             | 9      | 3d6 HP      |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+
| D3D6    | Hezrou          | 2 Claws 1d6 + 1 Bite 2d6,                                                                                                   | 9      | 2d6 HP      |
|         |                 |                                                                                                                             |        |             |
|         |                 | Cause Fear (as per Banish) or Darkness (spell) - each once per fight                                                        |        |             |
+---------+-----------------+-----------------------------------------------------------------------------------------------------------------------------+--------+-------------+

## D4 Creepy-Crawlies

Insect like creatures that have grown to a giant size with a bad attitude.

  --------------------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**        **Description**                                                       **HD**   **Actions**
  --------- ------------------- --------------------------------------------------------------------- -------- -------------
  D4D1      Fire Beetle         Light glands have a usage die of d6 when reused in a lantern          1

  D4D2      Deadly Centipede    Bite (0) plus CON check or 'OOA' - only has 1-2hp.                    2

  D4D3      Giant Ant Warrior   Poisonous Bite 1d6 + CON check or add 2d6 damage to the attack        2        1d6 HP

  D4D4      Giant Leech         Drains a Level the moment after dealing damage.                       2

  D4D5      Carrion Creeper     Bite (1) + 6 Tentacles (0) + CON check or Paralyzed.                  3

  D4D6      Gelatinous Cube     CON check on touch or be Paralyzed, immune to cold and lightning.     4

D4D6+1    Giant Slug          Rare. Spit Acid -- 1d6 nearby targets 2d6 check DEX for 1/2 damage.   12       1d6 HP
  --------------------------------------------------------------------------------------------------------------------------

## D5 Supernatural

Creatures that have been returned from the dead and are linked to place.

  --------------------------------------------------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**   **Description**                                                                                          **HD**   **Actions**
  --------- -------------- -------------------------------------------------------------------------------------------------------- -------- -------------
  D5D1      Ghoul          2 claws 1d6 + 1 bite 1d6 + CON Check or paralyzed.                                                       2        2d6 HP

  D5D2      Shadow         Touch 1d6 and -1 STR, only hit by magic weapons.                                                         3        1d6 HP

  D5D3      Wright         Can only be hit by magical or silver weapons, Drain 1 Level with Hit                                     4

  D5D4      Mummy          Attacks stop healing until cure wounds cast, immune to normal weapons, half damage from magic weapons.   6

  D5D5      Djinni         Can take Gaseous Form, Create Objects, Create Illusions, Cast Invisibility (spell) as action.            7

D5D6      Specter        A person killed by a Specter will become a Specter in 1d6 minutes.                                       8
  --------------------------------------------------------------------------------------------------------------------------------------------------------

## D6 Mythical Beast

Creatures of legend that have a real enough presence.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**           **Description**                                                                                                              **HD**    **Actions**
  --------- ---------------------- ---------------------------------------------------------------------------------------------------------------------------- --------- -------------
  D6D1      Large Snake / Lizard   2 claws 1d6 + 1 bite 1d6                                                                                                     1         2d6 HP

  D6D2      Harpy                  Song - CHA check or PCs must move towards it.                                                                                3

  D6D3      Owlbear                2 claws 1d6 + 1 bite 2d6 + Hug for 2d6 if to-hit roll is 1-4.                                                                5         5d6 HP

  D6D4      Cockatrice             Bite 1d6 and CON check or Petrified.                                                                                         5         1d6 HP

  D6D5      Basilisk               CON check on eye contact or be petrified.                                                                                    6

  D6D6      Chimera                2 Claws 1d6 + 2 Goat horns 1d6 + 1 Lion bite 2d6 + 1 Dragon bite 3d6 or Breathes fire as a Dragon 4d6.                       8         7d6 HP

D6D6+1    Dragon                 Rare. 2 Claws 2d6 + Bite 3d6, Breathes fire -- 1d6 nearby targets 4d6. Can cast 1d6-2 level1 spells + 1d6-4 level2 spells.   9 to 11   10d6 HP
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## D7 Magic Constructs

Creatures that have been constructed from the use of magic.

  ----------------------------------------------------------------------------------------------------------------------------------------------
  **2d6**   **Creature**    **Description**                                                                               **HD**   **Actions**
  --------- --------------- --------------------------------------------------------------------------------------------- -------- -------------
  D7D1      Zombie          Animated dead, unbound to place and hungry                                                    1        1d6 HP

  D7D2      Automata        Animated Equipment, usually fixed to a place with some defensive capability                   1

  D7D3      Blink Dog       Teleport nearby once per fight.                                                               4        1d6 HP

  D7D4      Black Pudding   Metal objects that touch it melt the next moment.                                             10

  D7D5      Frost Giant     Throws boulders or great chunks of ice.                                                       10       3d6 HP

D7D6      Stone Golem     Only spells that affect rock or stone will work, weapons must be +2 or better to damage it.   12       3d6 HP
  ----------------------------------------------------------------------------------------------------------------------------------------------

# Books & Spells

The Knowledge skill allows the player of the character to use their faith, innate or learned or abilities to pray or cast a "spell" that is chosen from a list in their book.

They can cast what they know by reading from a book (or can memorize from a book) equal to their Level.

They have several \'slots\' that they can cast each day. These represent a user\'s \'energy\' and the taxing nature of casting. When they run out of slots, they cannot cast.

+-----------------+-------+-------+-------+-------+-------+-------+-------+
| **Spell Level** | **1** | **2** | **3** | **4** | **5** | **6** | **7** |
|                 |       |       |       |       |       |       |       |
| **CHR level**   |       |       |       |       |       |       |       |
+=================+=======+=======+=======+=======+=======+=======+=======+
| 1               | 1     |       |       |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 2               | 1     |       |       |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 3               | 2     | 1     |       |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 4               | 2     | 2     |       |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 5               | 2     | 2     | 1     |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 6               | 2     | 2     | 2     |       |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 7               | 2     | 2     | 2     | 1     |       |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 8               | 2     | 2     | 2     | 2     | 1     |       |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 9               | 3     | 3     | 2     | 2     | 2     | 1     |       |
+-----------------+-------+-------+-------+-------+-------+-------+-------+
| 10              | 4     | 3     | 3     | 2     | 2     | 2     | 1     |
+-----------------+-------+-------+-------+-------+-------+-------+-------+

Once a spell is cast it should be checked against their WIS/INT - adding its level to the roll. If they fail, then they reduce the number of \'slots\' corresponding to the spell level just cast by 1. When a memorized spell is cast it is not forgotten.

After roughly 8 hours rest, the number of \'slots\' a character has refreshes to its maximum.

Magic weapons add +1 to any attribute being checked whilst using the weapon and +1 to each damage dice rolled. More powerful weapons (+2/3) at the GM discretion.

Magic applies to armor adds to its AP. It operates per the normal AP rules.

*Traditional OSR games deal with magic items by adding +1 or +2 to attack rolls and AC. If the GM intends to give out stronger magic armor (+2/3) to high level players, then consider tripling the Armor Points.*

If a spell calls for a creature to make a save, the character must check their INT or WIS - to see if the magic cast was powerful enough to overcome their defenses (remember the Powerful Opponents rule).

  ---------------------------------------------------------------------------------------------------------------------------------------------------
  **level**   **Name**                 **Description**                                                                **Effect**
  ----------- ------------------------ ------------------------------------------------------------------------------ -------------------------------
  D1D1        Detect Magic             Everything nearby that is Evil or Charmed glows                                5mins.

  D1D2        Light                    Create dim light from a nearby spot or object                                  1hr.

  D1D3        Cure                     Heal HP                                                                        \+ 1d6 HP

  D1D4        Purify                   Removes all contamination from all Nearby food and drink

  D1D5        Protect                  Advantage on all harmful checks from a source                                  1hr.

  D1D6        Charm                    Makes a Nearby target obey commands for a duration                             Check WIS each turn

  D1D7        Missile                  A Nearby, far away or distant target takes damage                              1d6 per level

  D1D8        Shield                   Increase AP                                                                    2AP per level

  D1D9        Sleep                    Makes a Nearby target sleep for 8 hrs.                                         4d6 HP

  D2D1        Detect Traps             Notice all nearby traps                                                        10mins.

  D2D2        Darkness                 Creates darkness covering a Nearby area that blocks all types of vision        1hr.

  D2D3        Bless                    Nearby allies gain +1 to stats when making attacks and saves                   1hr.

  D2D4        Invisibility             A nearby creature is made invisible until it attacks or dispelled.

  D2D5        Knock                    A Nearby door or lock is opened.

  D2D6        Levitate                 The caster floats up to 6 feet from the ground                                 10mins.

  D2D7        Web                      Traps a Nearby area, stopping movement. Check WIS

  D2D8        Silence                  Magical silence covering everything Nearby to a target                         1hr.

  D2D9        Hold Person              Paralyze 1d6 Nearby targets. Check WIS each turn to see if the effect lasts.

  D2D10       Speak with Animals       Can understand and talk with animals                                           1hr.

  D3D1        Daylight                 A nearby area is illuminated by sunlight                                       1hr.

  D3D2        Cure Disease             Cures a Nearby target of all diseases.

  D3D3        Locate Object            Sense direction of a known object                                              1min.

  D3D4        Prayer                   All Nearby allies defend against attacks with Advantage                        1d6 moments.

  D3D5        Remove Curse             Removes a curse from a Nearby target.

  D3D6        Speak with the Dead      Ask a Nearby corpse 3 questions.

  D3D7        Darkvision               See in absolute darkness                                                       10mins.

  D3D8        Dispel Magic             Removes a Nearby Arcane spell.

  D3D9        Fireball                 1d6 Nearby creatures take 1d6

  D3D10       Read Language or Magic   Read all languages and magic                                                    10mins.

  D3D11       Magic Mouth              Creates an illusory mouth that repeats a phrase to all Nearby creatures.

  D4D1        Create Food

  D4D2        Cure Serious Wounds      Heal 4d6+3 HP to a Nearby target.

  D4D3        Neutralize Poison        Remove

  D4D4        Protection from Evil     Nearby allies gain 6 temp AP against evil creatures                            10mins.

  D4D5        Confusion                2d6 Nearby targets immediately make a Reaction roll.

  D4D6        Dimension Door           Teleport a target to a Distant Location.

  D4D7        Polymorph Self           Transform a creature to have the appearance of another.

  D4D8        Remove Curse             Removes a curse from a Nearby target.

  D4D9        Wall of Fire or Ice      Wall covers a Nearby area, WIS to attack Close targets 3d6                      10mins.

  D4D10       Wall of Stone or Iron    A wall covers a Nearby area - 1hr.                                              1hr.

  D5D1        Commune                  The Cleric\'s deity truthfully answers 3 questions                             10mins.

  D5D2        Dispel Evil              Removes a Nearby Divine (Evil) spell.

  D6D3        Finger of Death          Choose a Nearby target and check WIS, if a pass the target is OOA.

  D6D4        Plague                   Check WIS for all Nearby targets, they lose 2d6 HP for the next 1d6 turns.

  D6D5        Quest                    Force a Nearby creature to obey an order.

  D6D6        Raise Dead               Return a Nearby willing target to life, who\'s died within the last 7 days.

  D6D7        Animate Dead             Create 1d6+1 Skeletons

  D6D8        Cloud kill               Anyone with less than 5HD that touches it must check INT or be OOA              1hr.

  D6D9        Conjure Elemental        Create an Elemental of chosen type with 2d6 HD.

  D6D10       Contact Higher Plane     Ask 1 question

  D6D11       Feeble mind              Reduce a Nearby target\'s INT to 4                                             10mins

  D6D12       Telekinesis              Move Nearby objects                                                            1hr.

  D6D13       Teleport                 Transports a Nearby target to any place known to the caster.

  D7D1        Animate an Object        Give a Nearby object motion and a simple intelligence                          10mins.

  D7D2        Blade Barrier            Wall covers a Nearby area, WIS to attack Close targets (3d8)                   10mins.

  D7D3        Conjure Elemental        Summons an elemental with HD equal to caster\'s level                          1hr.

  D7D4        Find Path                The path to a chosen location is made known                                    1hr.

  D7D5        Speak with Creatures     Can understand and talk with creatures                                         1hr.

  D7D6        Word of Recall           Give ability to teleport back to the location this spell was cast              1year.

  D7D8        Anti-Magic Shell         Creates a Nearby Zone around the caster blocking all magic.

  D7D9        Death Spell              2d6 Nearby targets with 7HD or fewer die.

  D7D10       Disintegrate             Makes one Nearby target or object turn into a fine powder.

  D7D11       Invisible Stalker        Summons an extra dimensional creature to perform one task.

  D7D12       Stone to Flesh           Turns a Nearby target into stone (or vice versa).

  D8D1        Aerial Servant           Summons a servant to recover a distant object.

  D8D2        Astral Spell             Projects an avatar of the caster onto a chosen plane                           1hr.

  D8D3        Control Weather          Control the Nearby weather to all extremes                                     10mins.

  D8D4        Earthquake               Check WIS for all Nearby creatures, passes are taken OOA.

  D8D5        Holy Word                Nearby creatures with less than 5HD die, 6                                     10HD paralysed for 1d6 turns.

  D8D6        Wind Walk                Turn into mist and back, at will                                               1day.

  D8D7        Restoration              Returns all levels lost to creatures with level drain.

  D8D8        Limited Wish             Change reality in a limited way or time.

  D8D9        Power Word, Kill         A Nearby target with 50HP or fewer dies and cannot be resurrected.

  D8D10       Conjuration of Demons    Summons a Demon with 2HD

  D8D11       Meteor Swarm             Effects the same as casting Fireball 4 times.

D8D12       Time Stop                Stops time completely in a Nearby area                                         1d4+1 Moments
  ---------------------------------------------------------------------------------------------------------------------------------------------------

Knowledge skills can attempt to banish all nearby undead as an action. They must successfully check their WIS for each group of creatures they are attempting to banish, adding the creature\'s HD to the roll. A GM will determine which creatures are banished. Undead creatures that are Banished must spend all their movement (and convert actions to movement) to move away from the character for 2d4 Moments after being Banished.

# Character Sheet

+-----------------+-----------------------------------------------------------------------------------+--------------+
| Name            |                                                                                   |              |
+=================+===================================================================================+==============+
| Type            | PC                                                                                |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| Class           |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| Level           |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |              |
|                 |                                                                                   |              |
|                 |                                                                                   |              |
|                 |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| STR             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| DEX             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| CON             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| INT             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| WIS             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| CHA             |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| HP              |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| HP Recovery     |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| Armor (AP)      |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| Attack / Damage |                                                                                   |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+
| Tools           |   -----------------------------------------------------------------------         |              |
|                 |   Basic                                                                           |              |
|                 |   -------------------- --------------------------------------------------         |              |
|                 |   Weapons                                                                         |              |
|                 |                                                                                   |              |
|                 |   Armor                                                                           |              |
|                 |                                                                                   |              |
|                 |   Magic                                                                           |              |
|                 |                                                                                   |              |
|                 |   Rations                                                                         |              |
|                 |                                                                                   |              |
|                 |                                                                                   |              |
|                 |   -----------------------------------------------------------------------         |              |
+-----------------+-----------------------------------------------------------------------------------+--------------+

# Glossary

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Acronym
  ---------- ---------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------
  AP         Armor Point

  CHA        Charisma

             Creature               

  CON        Constitution

  d6

  DEX        Dexterity

  GM         Game Master

  HD         Hit Die

  HP         Hit Point

  INT        Intelligence

  NPC        Non-Player Character   A character used by the GM to effect action on the player character. For example, to set objectives, provide information, direction and sell Equipment.

  OOA        Out of Action

  PC         Player Character

  STR        Strength

WIS        Wisdom
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

\+
