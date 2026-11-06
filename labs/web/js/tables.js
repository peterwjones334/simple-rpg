/* Lists ported from guides/list-rpg.md, plus the creature, spell, reaction, and recovery tables in rules/. */
(function (root) {
  "use strict";

  function list(title, source, items) {
    return { title: title, source: source, items: items };
  }

  function entry(name, detail) {
    return { name: name, detail: detail || "" };
  }

  const spells = [
    { level: 1, name: "Detect Magic", detail: "Everything nearby that is Evil or Charmed glows. 5 minutes." },
    { level: 1, name: "Light", detail: "Create dim light from a nearby spot or object. 1 hour." },
    { level: 1, name: "Cure", detail: "Heal HP. +1d6 HP." },
    { level: 1, name: "Purify", detail: "Removes all contamination from all Nearby food and drink." },
    { level: 1, name: "Protect", detail: "Advantage on all harmful checks from a source. 1 hour." },
    { level: 1, name: "Charm", detail: "Makes a Nearby target obey commands for a duration. Check WIS each turn." },
    { level: 1, name: "Missile", detail: "A Nearby, Far Away, or Distant target takes 1d6 damage per level." },
    { level: 1, name: "Shield", detail: "Increase AP by 2 per level." },
    { level: 1, name: "Sleep", detail: "Makes a Nearby target sleep for 8 hours. 4d6 HP." },
    { level: 2, name: "Detect Traps", detail: "Notice all nearby traps. 10 minutes." },
    { level: 2, name: "Darkness", detail: "Creates darkness covering a Nearby area that blocks vision. 1 hour." },
    { level: 2, name: "Bless", detail: "Nearby allies gain +1 to stats when making attacks and saves. 1 hour." },
    { level: 2, name: "Invisibility", detail: "A nearby creature is invisible until it attacks or the effect is dispelled." },
    { level: 2, name: "Knock", detail: "A Nearby door or lock is opened." },
    { level: 2, name: "Levitate", detail: "The caster floats up to 6 feet from the ground. 10 minutes." },
    { level: 2, name: "Web", detail: "Traps a Nearby area, stopping movement. Check WIS." },
    { level: 2, name: "Silence", detail: "Magical silence covering everything Nearby to a target. 1 hour." },
    { level: 2, name: "Hold Person", detail: "Paralyze 1d6 Nearby targets. Check WIS each turn to see if the effect lasts." },
    { level: 2, name: "Speak with Animals", detail: "Understand and talk with animals. 1 hour." }
  ];

  const classes = {
    combat: {
      id: "combat",
      name: "Combat",
      aka: "Warrior or Fighter",
      mods: { STR: 1, DEX: 1, CON: 2, INT: 0, WIS: 0, CHA: 1 },
      focus: ["STR", "DEX"],
      recovery: "d6 − 2 per Rest",
      attack: "d6 + Weapon",
      tools: [
        { name: "Basic", rating: 4 },
        { name: "Weapons", rating: 6 },
        { name: "Armor", rating: 6 },
        { name: "Magic", rating: 1 },
        { name: "Rations", rating: 6 }
      ],
      weapons: ["sword", "axe", "mace", "spear", "flail"],
      features: [
        "Once per hour, while in combat, regain d6 lost HP.",
        "+1 attack per level.",
        "If a STR or DEX check fails and the hit would deal damage, sunder an equipped shield to ignore that damage."
      ]
    },
    manual: {
      id: "manual",
      name: "Manual",
      aka: "Thief or Trades",
      mods: { STR: 0, DEX: 2, CON: 0, INT: 0, WIS: 2, CHA: 2 },
      focus: ["DEX", "WIS"],
      recovery: "d6 per Rest",
      attack: "d6 + Weapon or Tool",
      tools: [
        { name: "Basic", rating: 6 },
        { name: "Weapons", rating: 2 },
        { name: "Armor", rating: 2 },
        { name: "Magic", rating: 2 },
        { name: "Rations", rating: 4 }
      ],
      weapons: ["dagger", "club", "short sword", "hand axe", "sling"],
      features: [
        "Check DEX to avoid damage or effects from traps and magical devices.",
        "Attacking from behind deals d6 + the character's level damage.",
        "Skilled tasks: climbing, hearing sounds, moving silently, understanding written languages, and opening locks."
      ]
    },
    knowledge: {
      id: "knowledge",
      name: "Knowledge",
      aka: "Cleric or Conjurer",
      mods: { STR: 0, DEX: 0, CON: 1, INT: 1, WIS: 2, CHA: 1 },
      focus: ["INT", "WIS"],
      recovery: "d6 + 2 per Rest",
      attack: "d6 + Weapon / Magic",
      tools: [
        { name: "Basic", rating: 5 },
        { name: "Weapons", rating: 1 },
        { name: "Armor", rating: 2 },
        { name: "Magic", rating: 6 },
        { name: "Rations", rating: 4 }
      ],
      weapons: ["staff", "cudgel", "dagger", "sling"],
      features: [
        "Check CON to avoid damage or effects from poison or paralysis.",
        "Check INT to avoid damage or effects from spells or magical devices.",
        "Banish all nearby undead by checking WIS and adding the creature's HD to the roll.",
        "The character starts with 1d6 spells from the level 1 and 2 lists.",
        "At second level the character can cast spells per day. Slot counts are in rules/books.md."
      ]
    }
  };

  const creatures = [
    {
      id: "D1",
      name: "Human-like",
      blurb: "Human or human-like creatures, distorted by temperament, size, or predation.",
      rows: [
        { die: 1, name: "Human, Early Human", hd: 1, description: "Human, feral, unbalanced, or with malign intent.", actions: "" },
        { die: 2, name: "Goblin, Half-Human", hd: 1, description: "Tribal. Adapted for forest and underground.", actions: "1d6 HP" },
        { die: 3, name: "Hob Goblin", hd: 1, description: "Smart and organized. Usually has a backup shield if one is lost.", actions: "" },
        { die: 4, name: "Berserker or Bugbear", hd: 2, description: "Disadvantage on defense rolls when it attacks.", actions: "" },
        { die: 5, name: "Ogre or Giant", hd: 4, description: "Gives Advantage on all CHA checks made against it.", actions: "" },
        { die: 6, name: "Doppelganger or shapeshifter", hd: 3, description: "Changes form in a moment. Disadvantage against magic checks.", actions: "" },
        { die: 7, rare: true, name: "Succubus, Incubus, or Vampyre", hd: 6, description: "Rare. 2 claws or fangs 1d6. Advantage on magic checks, immune to non-magic weapons, level drain (−1) with a kiss. Can cast Charm once per hour.", actions: "1d6 HP" }
      ]
    },
    {
      id: "D2",
      name: "Creatures of the Night",
      blurb: "Folklore nocturnal creatures infected with were or Vampyre-like traits.",
      rows: [
        { die: 1, name: "Vampire Bat", hd: 1, description: "1d6 damage on the next moment after the attack.", actions: "1d6 HP" },
        { die: 2, name: "Wererat", hd: 2, description: "Cannot gain Advantage when attempting to surprise a wererat.", actions: "" },
        { die: 3, name: "Night Terror", hd: 2, description: "Removes the effect of Rest.", actions: "" },
        { die: 4, name: "Werewolf", hd: 4, description: "Only silver weapons can hurt it.", actions: "1d6 HP" },
        { die: 5, name: "Werebear", hd: 4, description: "2 claws 1d6. If both hit, hug for 1d2+2 damage.", actions: "" },
        { die: 6, name: "Vampire", hd: 4, description: "2 claws or fangs 1d6.", actions: "" }
      ]
    },
    {
      id: "D3",
      name: "Demons",
      blurb: "Creatures of the underworld, magic, and fire.",
      rows: [
        { die: 1, name: "Manes", hd: 1, description: "2 claws 1d6 + 1 bite 1d6. Half damage from non-magic weapons.", actions: "2d6 HP" },
        { die: 2, name: "Elemental, Fire", hd: 2, description: "Burn for 2d6 fire damage.", actions: "2d6 HP" },
        { die: 3, name: "Gargoyle", hd: 4, description: "Gargoyles are only found in or on buildings. A random gargoyle is an inert statue. 2 claws 1d6 + 1 bite 1d6 + 1 horn 1d6.", actions: "3d6 HP" },
        { die: 4, name: "Banshee", hd: 7, description: "Shriek: CON check or paralyzed for 2d6 moments.", actions: "" },
        { die: 5, name: "Balor", hd: 9, description: "Sword 2d6+2 + whip. DEX check or be pulled Close to the Balor and burnt for 3d6 fire damage.", actions: "3d6 HP" },
        { die: 6, name: "Hezrou", hd: 9, description: "2 claws 1d6 + 1 bite 2d6. Cause fear (as banish) or Darkness, each once per fight.", actions: "2d6 HP" }
      ]
    },
    {
      id: "D4",
      name: "Creepy-crawlies",
      blurb: "Insect-like creatures that have grown to a giant size with a bad attitude.",
      rows: [
        { die: 1, name: "Fire Beetle", hd: 1, description: "Light glands have a usage die of d6 when reused in a lantern.", actions: "" },
        { die: 2, name: "Deadly Centipede", hd: 2, description: "Bite, plus a CON check or Out of Action. Only has 1–2 HP.", actions: "" },
        { die: 3, name: "Giant Ant Warrior", hd: 2, description: "Poisonous bite 1d6 + CON check or add 2d6 damage to the attack.", actions: "1d6 HP" },
        { die: 4, name: "Giant Leech", hd: 2, description: "Drains a level the moment after dealing damage.", actions: "" },
        { die: 5, name: "Carrion Creeper", hd: 3, description: "Bite + 6 tentacles + CON check or paralyzed.", actions: "" },
        { die: 6, name: "Gelatinous Cube", hd: 4, description: "CON check on touch or be paralyzed. Immune to cold and lightning.", actions: "" },
        { die: 7, rare: true, name: "Giant Slug", hd: 12, description: "Rare. Spit acid: 1d6 Nearby targets take 2d6, check DEX for half damage.", actions: "1d6 HP" }
      ]
    },
    {
      id: "D5",
      name: "Supernatural",
      blurb: "Creatures that have been returned from the dead and are linked to a place.",
      rows: [
        { die: 1, name: "Ghoul", hd: 2, description: "2 claws 1d6 + 1 bite 1d6 + CON check or paralyzed.", actions: "2d6 HP" },
        { die: 2, name: "Shadow", hd: 3, description: "Touch 1d6 and −1 STR. Only hit by magic weapons.", actions: "1d6 HP" },
        { die: 3, name: "Wright", hd: 4, description: "Can only be hit by magical or silver weapons. Drain 1 level on a hit.", actions: "" },
        { die: 4, name: "Mummy", hd: 6, description: "Attacks stop healing until cure wounds is cast. Immune to normal weapons. Half damage from magic weapons.", actions: "" },
        { die: 5, name: "Djinni", hd: 7, description: "Can take gaseous form, create objects, create illusions, and cast Invisibility as an action.", actions: "" },
        { die: 6, name: "Specter", hd: 8, description: "A person killed by a specter becomes a specter in 1d6 minutes.", actions: "" }
      ]
    },
    {
      id: "D6",
      name: "Mythical beast",
      blurb: "Creatures of legend that have a real enough presence.",
      rows: [
        { die: 1, name: "Large Snake / Lizard", hd: 1, description: "2 claws 1d6 + 1 bite 1d6.", actions: "2d6 HP" },
        { die: 2, name: "Harpy", hd: 3, description: "Song: CHA check or the characters must move towards it.", actions: "" },
        { die: 3, name: "Owlbear", hd: 5, description: "2 claws 1d6 + 1 bite 2d6 + hug for 2d6 if the to-hit roll is 1–4.", actions: "5d6 HP" },
        { die: 4, name: "Cockatrice", hd: 5, description: "Bite 1d6 and CON check or petrified.", actions: "1d6 HP" },
        { die: 5, name: "Basilisk", hd: 6, description: "CON check on eye contact or be petrified.", actions: "" },
        { die: 6, name: "Chimera", hd: 8, description: "2 claws 1d6 + 2 goat horns 1d6 + 1 lion bite 2d6 + 1 dragon bite 3d6, or breathes fire as a dragon for 4d6.", actions: "7d6 HP" },
        { die: 7, rare: true, name: "Dragon", hd: { min: 9, max: 11 }, description: "Rare. 2 claws 2d6 + bite 3d6. Breathes fire: 1d6 Nearby targets take 4d6. Can cast 1d6−2 level 1 spells + 1d6−4 level 2 spells.", actions: "10d6 HP" }
      ]
    },
    {
      id: "D7",
      name: "Magic constructs",
      blurb: "Creatures that have been constructed by magic.",
      rows: [
        { die: 1, name: "Zombie", hd: 1, description: "Animated dead, unbound to a place and hungry.", actions: "1d6 HP" },
        { die: 2, name: "Automata", hd: 1, description: "Animated equipment, usually fixed to a place, with some defensive capability.", actions: "" },
        { die: 3, name: "Blink Dog", hd: 4, description: "Teleport Nearby once per fight.", actions: "1d6 HP" },
        { die: 4, name: "Black Pudding", hd: 10, description: "Metal objects that touch it melt on the next moment.", actions: "" },
        { die: 5, name: "Frost Giant", hd: 10, description: "Throws boulders or great chunks of ice.", actions: "3d6 HP" },
        { die: 6, name: "Stone Golem", hd: 12, description: "Only spells that affect rock or stone work. Weapons must be +2 or better to damage it.", actions: "3d6 HP" }
      ]
    }
  ];

  const lists = {
    backgrounds: list("Backgrounds", "guides/list-rpg.md", [
      entry("Medieval Kingdom", "A classic setting with knights, castles, and lords ruling over the realm."),
      entry("Dark Fantasy", "A bleak and grim setting with horrors lurking around every corner and moral ambiguity at every turn."),
      entry("High Fantasy", "A world filled with magic and wonder, where ancient artifacts and powerful beings shape the course of history."),
      entry("Steampunk", "A world where magic and technology blend together to create a unique and inventive society."),
      entry("Gothic Horror", "A setting of dark castles, haunted forests, and twisted creatures of the night."),
      entry("Mythic Greece", "A world inspired by the mythology of ancient Greece, filled with gods, heroes, and epic quests."),
      entry("Pirate Adventure", "A world of high seas and swashbuckling adventure, where players can captain their own ship and seek out treasure."),
      entry("Wild West", "A fantasy setting inspired by the American Old West, with magic and monsters adding a supernatural twist."),
      entry("Post Apocalypse", "A futuristic world where society has collapsed, advanced technology has failed, and artificial intelligence has changed the nature of society."),
      entry("Arabian Nights", "A world inspired by the tales of the Thousand and One Nights, filled with genies, flying carpets, and epic adventures in the desert.")
    ]),
    objectives: list("Objectives", "guides/list-rpg.md", [
      entry("Rescue Mission", "The players are tasked with rescuing someone who has been captured or kidnapped by an enemy or hostile force."),
      entry("Retrieve an Artifact", "The players must recover a valuable and powerful artifact that has been lost, stolen, or hidden away."),
      entry("Escort Mission", "The players are tasked with escorting an important NPC or valuable cargo across a dangerous or treacherous landscape."),
      entry("Investigate a Mystery", "The players must investigate a mystery or solve a puzzle, such as a murder or disappearance, to uncover the truth behind a strange occurrence."),
      entry("Stop a Threat", "The players must stop a dangerous threat, such as a bandit gang, a monster terrorizing a village, or a mad scientist conducting dangerous experiments."),
      entry("Clear a Dungeon", "The players must clear a dungeon or other location of monsters, traps, and obstacles to claim a valuable reward or uncover a hidden secret."),
      entry("Deliver a Message", "The players are tasked with delivering an important message or package to a far-off location, facing danger and obstacles along the way."),
      entry("Retrieve a Person", "The players must locate and retrieve a specific person who has gone missing, such as a lost child, a runaway spouse, or an important witness."),
      entry("Investigate a Curse", "The players must investigate a curse or supernatural phenomenon that is plaguing a town or region, discovering the source and finding a way to lift it."),
      entry("Help an Ally", "The players must help an ally or friend who is in trouble, such as aiding a wounded soldier, saving a family member, or rescuing a mentor."),
      entry("Discover a Lost City", "The players must discover a lost city, ruin, or other ancient location that is rumoured to hold great power or treasure."),
      entry("Stop a Conspiracy", "The players must uncover and stop a conspiracy or plot that threatens to disrupt the balance of power or plunge the world into chaos.")
    ]),
    npcs: list("Non-player characters", "guides/list-rpg.md", [
      entry("Grizzled Veteran", "An experienced warrior or adventurer who has seen their fair share of battles and is willing to share their knowledge and expertise with the players."),
      entry("Shady Merchant", "A merchant or trader who deals in illegal or forbidden goods and services, such as drugs, stolen items, or smuggling."),
      entry("Wise Elder", "An elderly person who possesses great wisdom and knowledge, and can offer guidance or advice to the players."),
      entry("Arrogant Noble", "A wealthy and entitled noble who looks down on those beneath them and expects to be treated with respect and deference."),
      entry("Skilled Artisan", "An artisan or craftsman who possesses great skill and talent in their trade, and may be able to create or repair valuable items for the players."),
      entry("Ambitious Politician", "A politician or public figure who is driven by ambition and is willing to do whatever it takes to achieve their goals, including manipulating and betraying others."),
      entry("Devoted Priest", "A religious figure who is devoted to their faith and may offer spiritual guidance or healing to the players."),
      entry("Mysterious Stranger", "A mysterious and enigmatic figure who seems to know more than they are letting on, and may be either an ally or an enemy."),
      entry("Jovial Entertainer", "An entertainer or performer who is skilled at entertaining crowds and lifting people's spirits, and may offer distraction or respite from the stresses of adventuring."),
      entry("Cunning Thief", "A skilled thief or rogue who is adept at stealing, sneaking, and avoiding detection, and may be able to offer valuable skills or services to the players."),
      entry("Nervous Scholar", "A scholar or academic who possesses great knowledge and expertise in a specific field, but may be nervous or anxious in social situations."),
      entry("Stubborn Farmer", "A farmer or rural worker who is hardworking and stubborn, but may have valuable knowledge of the local terrain and natural resources.")
    ]),
    encounters: list("Journey encounters", "guides/list-rpg.md", [
      entry("Ambush", "The players are ambushed by bandits, wild animals, or hostile creatures."),
      entry("Natural Obstacle", "The players encounter a natural obstacle such as a river, ravine, or rocky outcropping that must be navigated."),
      entry("Mysterious Structure", "The players stumble upon a mysterious structure such as an ancient ruin, abandoned fortress, or strange monument."),
      entry("Weather Event", "The players encounter a weather event such as a blizzard, sandstorm, or torrential downpour that hampers their progress."),
      entry("Lost Traveler", "The players encounter a lost traveler who may provide valuable information or ask for assistance."),
      entry("Roadblock", "The players come across a roadblock such as a fallen tree, landslide, or collapsed bridge that must be cleared."),
      entry("Non-Hostile Encounter", "The players encounter a non-hostile creature such as a herd of grazing animals, a friendly traveler, or a group of hunters."),
      entry("Hidden Cache", "The players discover a hidden cache of supplies, weapons, or treasure."),
      entry("Dangerous Terrain", "The players must navigate dangerous terrain such as a steep cliff, treacherous mountain pass, or unstable bog."),
      entry("Strange Phenomenon", "The players encounter a strange phenomenon such as a glowing fog, eerie silence, or mysterious aura."),
      entry("Quest Hook", "The players encounter an NPC who provides a quest or mission that will lead them to their next destination."),
      entry("Random Thoughts", "Make one up from the first thing that comes to mind.")
    ]),
    found: list("Found objects", "guides/list-rpg.md", [
      entry("Rusty weapon", "A rusty sword or other weapon, left behind by a long-dead warrior."),
      entry("Discarded pack", "A discarded backpack or other piece of equipment, lost by a previous adventurer."),
      entry("Strange crystal", "A strange rock or crystal, with mystical properties that could be harnessed for magical spells."),
      entry("Pile of bones", "A pile of bones or a skeleton, perhaps the remains of a creature or adventurer who met a gruesome end."),
      entry("Hidden cache", "A hidden cache of treasure, buried or secreted away by a previous adventurer or bandit."),
      entry("Ancient artifact", "A well-preserved ancient artifact, unearthed by erosion or shifting terrain."),
      entry("Edible plants", "A cluster of mushrooms or other edible plants, providing a much-needed source of food in the wilderness."),
      entry("Stone circle", "A mysterious stone circle or other ancient monument, whose purpose or significance has been lost to time."),
      entry("Discarded map", "A discarded map or parchment, perhaps revealing the location of a hidden treasure or secret dungeon."),
      entry("Broken machine", "A broken piece of machinery or other advanced technology, left behind by an advanced civilization."),
      entry("Fresh water", "A small stream or pool, offering a refreshing drink or the chance to catch fish for food."),
      entry("Ancient tree", "A gnarled and ancient tree, whose bark or wood may have mystical properties or offer shelter from the elements.")
    ]),
    food: list("Food and drink", "guides/list-rpg.md", [
      entry("Hardtack and Water", "A staple ration for long journeys, consisting of dry, hard bread and water."),
      entry("Roasted Meat and Ale", "A hearty meal of roasted meat and a mug of ale, perfect for a night around the campfire."),
      entry("Fresh Fruits and Juices", "A refreshing and healthy option, providing natural sugars and vitamins."),
      entry("Stale Bread and Sour Wine", "A less-than-ideal meal, consisting of dry, stale bread and a sour wine."),
      entry("Spicy Stew and Cider", "A warming meal, consisting of a hearty stew spiced with herbs and a mug of cider."),
      entry("Cheese and Mead", "A simple but satisfying meal, consisting of cheese and a mug of mead, a honey-based alcoholic drink."),
      entry("Bland Porridge and Water", "A basic meal of bland porridge and water, providing sustenance without much flavor."),
      entry("Fresh Fish and Wine", "A delicious and healthy option, consisting of freshly caught fish and a glass of wine."),
      entry("Savory Pie and Ale", "A filling and flavorful option, consisting of a savory meat pie and a mug of ale."),
      entry("Sweet Pastries and Tea", "A sweet and indulgent option, consisting of pastries filled with fruits or sweet cream and a cup of tea."),
      entry("Smoked Meat and Whiskey", "A hearty and flavorful option, consisting of smoked meat and a glass of whiskey."),
      entry("Exotic Spices and Herbal Tea", "An unusual and flavorful option, consisting of exotic spices and an herbal tea infusion.")
    ]),
    forage: list("Foraging and game", "guides/list-rpg.md", [
      entry("Berries", "A patch of wild berries, providing a sweet and nutritious snack."),
      entry("Rabbits", "A small game animal, providing a source of meat and fur."),
      entry("Nuts", "A grove of nut trees, providing a rich and flavorful snack."),
      entry("Squirrels", "A small game animal, providing a source of meat and fur."),
      entry("Mushrooms", "A cluster of edible mushrooms, providing a savory and nutritious addition to meals."),
      entry("Pheasants", "A game bird, providing a source of meat and feathers."),
      entry("Wild Greens", "A patch of edible greens, providing a healthy addition to meals."),
      entry("Deer", "A large game animal, providing a source of meat and hides."),
      entry("Fish", "A stream or pond teeming with fish, providing a source of protein."),
      entry("Wild Boar", "A large game animal, providing a source of meat and tusks."),
      entry("Roots", "A patch of edible roots, providing a starchy and filling addition to meals."),
      entry("Wolves", "A predator, providing a source of danger and excitement for skilled hunters.")
    ]),
    events: list("Random events", "guides/list-rpg.md", [
      entry("Natural Disaster", "A natural disaster such as a tornado, earthquake, or flood occurs."),
      entry("Encounter with a Rival", "The party encounters a rival group or individual, who may be friendly or hostile."),
      entry("Discovery", "The party discovers a new location, item, or information that could be useful to their goals."),
      entry("Traps or Obstacles", "The party encounters a trap or obstacle that they must overcome to continue on their journey."),
      entry("Theft", "The party's supplies or equipment are stolen or misplaced, requiring them to find or replace them."),
      entry("Assistance from Strangers", "The party receives assistance from strangers, who may offer food, shelter, or useful information."),
      entry("Betrayal", "One of the party members is betrayed by a trusted ally, resulting in a difficult situation."),
      entry("Magical Effect", "A magical effect occurs in the area, potentially causing unexpected consequences."),
      entry("Illness or Injury", "One or more party members become ill or injured, requiring medical attention or rest."),
      entry("Mysterious Happening", "Something strange or mysterious occurs, potentially leading to a new quest or adventure."),
      entry("Enemy Attack", "The party is attacked by an enemy or group of enemies, requiring them to defend themselves."),
      entry("Beneficial Event", "The party experiences a positive or beneficial event, such as finding a cache of treasure or a powerful magical item.")
    ]),
    weird: list("Weird encounters", "guides/list-rpg.md", [
      entry("The cheese-wheel play", "A group of goblins are seen performing a play about a giant cheese wheel that fell from the sky and destroyed their village."),
      entry("The greeting tree", "The party comes across a lone tree with a face carved into the trunk. It greets the party and offers them some of its fruit."),
      entry("The upside-down tree", "The sound of a beautiful voice leads the party to a clearing, where they find a tree growing upside down. The tree is singing a beautiful song."),
      entry("Chickens in boots", "A group of chickens are walking down the road wearing boots and hats. They do not appear to be scared of the party."),
      entry("The snail king", "The party sees a man riding a giant snail. He introduces himself as the king of the snails and invites the party to his castle."),
      entry("The acorn dance", "A group of squirrels are seen performing a ritual dance around a pile of acorns. They invite the party to join in the dance."),
      entry("The deer's antlers", "A talking deer asks the party to help him find his missing antlers, which were stolen by a mischievous group of goblins."),
      entry("Mushroom hosts", "A group of small, humanoid creatures with mushrooms growing out of their heads approach the party. They offer a feast of strange, delicious mushrooms."),
      entry("The frog monarch", "A giant frog wearing a crown and carrying a scepter hops up to the party and demands that they kneel before him."),
      entry("The cabbage argument", "The party sees a group of creatures that look like walking, talking cabbages. They are having a heated argument about who is the best dancer."),
      entry("The watching flowers", "The party comes across a field of flowers that all have eyes. They follow the party's movements with their gazes."),
      entry("The water choir", "The party sees a group of creatures made entirely out of water. They are singing a hauntingly beautiful song."),
      entry("The river king", "A man with a fish head introduces himself as the king of the river. He invites the party to his underwater palace."),
      entry("The fire dancers", "The party sees a group of creatures made entirely out of fire. They dance and flicker in the wind."),
      entry("The helpful ghost", "A friendly ghost offers to lead the party through a dangerous area. It warns them that it can only stay in this realm for a short time."),
      entry("The ice procession", "The party sees a group of creatures made entirely out of ice. They slide and glide across the landscape, leaving trails of frost in their wake."),
      entry("Tea in the tree", "The party comes across a strange, twisted tree with a door in its trunk. The door opens and a gnome invites the party in for tea."),
      entry("The sand folk", "The party sees a group of creatures made entirely out of sand. They shimmer and sparkle in the sunlight."),
      entry("The late rabbit", "A giant rabbit with a pocket watch hops by the party. It is late for an important date and is too busy to talk."),
      entry("The sunlight debate", "The party comes across a group of sentient trees that are having a heated debate about the merits of different types of sunlight.")
    ]),
    sinister: list("Sinister events", "guides/list-rpg.md", [
      entry("The rolling fog", "A thick fog rolls in, obscuring visibility and causing strange noises to echo through the area."),
      entry("The masked ritual", "The party comes across a group of people wearing masks and performing a bizarre ritual around a fire."),
      entry("The cracking earth", "A sudden earthquake shakes the ground, causing cracks to form and revealing strange, otherworldly creatures."),
      entry("The grasping tree", "A twisted, gnarled tree reaches out with grasping branches and seems to be trying to grab the party."),
      entry("The sacrifice", "The party encounters a group of cultists who are sacrificing a creature to a dark deity."),
      entry("The blood moon", "The moon turns blood red and strange, eldritch creatures begin to appear."),
      entry("The humming artifact", "The party finds a strange, ancient artifact that begins to hum and pulse with an otherworldly energy."),
      entry("The empty village", "The party comes across a village that is entirely deserted except for a single, sinister figure watching from a distance."),
      entry("Daylight gone", "The sky turns black as night, even though it is daytime, and the party hears the sound of flapping wings in the distance."),
      entry("Mutated animals", "A group of strange, mutated animals emerge from the shadows and begin to attack the party."),
      entry("The hidden laboratory", "The party discovers a hidden laboratory where an insane scientist has been conducting experiments on living creatures."),
      entry("The cursed task", "A ghostly figure appears before the party and tells them that they must complete a dangerous task in order to free themselves from a curse."),
      entry("The twisted place", "The party finds themselves in a twisted, otherworldly version of their surroundings, where everything is distorted and dangerous."),
      entry("The too-good deal", "A mysterious figure appears before the party and offers them a deal that seems too good to be true."),
      entry("The frenzy", "The party comes across a group of people who have been possessed by dark forces and are attacking each other in a frenzy."),
      entry("The disorienting music", "Strange, otherworldly music begins to fill the air, causing the party to feel disoriented and afraid."),
      entry("The living house", "The party comes across a house that is seemingly alive, with walls that shift and rooms that move."),
      entry("The shadow capture", "A group of shadowy figures emerge from the darkness, intent on capturing the party for some unknown purpose."),
      entry("The hidden portal", "The party discovers a hidden portal to another dimension, which seems to be filled with strange and dangerous creatures."),
      entry("The warning voice", "A mysterious voice begins to speak directly into the party's minds, warning them of an impending danger that they must stop at all costs.")
    ]),
    destinations: list("Destinations", "guides/list-rpg.md", [
      entry("The Lost City Under water City", "Deep beneath the ocean lies the fabled city of Atlantis, long forgotten by the surface world. The challenge is to explore the city and uncover its secrets, while also avoiding dangerous sea creatures and traps left behind by its ancient inhabitants."),
      entry("The Dark Forest", "This dense and foreboding forest is home to all manner of sinister creatures, including trolls, goblins, and dark elves. The challenge is to navigate the forest and avoid its many dangers, while also searching for a powerful artifact said to be hidden deep within its heart."),
      entry("The Frozen Wasteland", "In the far north lies a frozen wasteland, home to ice giants, frost dragons, and other dangerous creatures. The challenge is to survive the harsh environment, gather resources, and explore ancient ruins in search of lost treasure."),
      entry("The Underworld", "This subterranean realm is ruled by demons, undead, and other foul creatures. The challenge is to navigate its treacherous tunnels, avoid traps and ambushes, and defeat the powerful demon lords who rule over it."),
      entry("The Floating City", "This mysterious city floats high in the clouds, accessible only by airship or magical means. The challenge is to explore the city and uncover its secrets, while also dealing with the political intrigues and rival factions that vie for control."),
      entry("The Elemental Plane", "Each of the four elements — earth, air, fire, and water — has its own plane of existence. The challenge is to explore these planes and harness the power of the elements to defeat powerful elemental lords and their minions."),
      entry("The Shadow Realm", "This dark and twisted mirror of the real world is home to shadow creatures and evil spirits. The challenge is to navigate its shifting landscape and defeat the shadow lord who seeks to extend his influence into the real world."),
      entry("The Celestial Palace", "High above the clouds lies the Celestial Palace, home to the gods themselves. The challenge is to gain access to the palace, navigate its many chambers and challenges, and win the favor of the gods."),
      entry("The Timeless Library", "This ancient and mystical library contains knowledge from across time and space. The challenge is to navigate its labyrinthine halls and find the specific tome or artifact needed to solve a particular quest or problem."),
      entry("The Crystal Caves", "Deep beneath the earth lies a network of crystal caves, filled with glittering treasures and dangerous monsters. The challenge is to navigate the twisting tunnels and defeat the powerful crystal dragon who hoards the greatest treasure of them all."),
      entry("The Forbidden Island", "This isolated and uncharted island is said to be cursed by ancient gods. The challenge is to explore its rugged terrain, uncover its secrets, and confront the powerful priestesses who maintain the curse."),
      entry("The Living Dungeon", "This dungeon is alive and constantly evolving, with traps and monsters that shift and change from room to room. The challenge is to navigate the dungeon's ever-changing maze, defeat its guardians, and reach the treasure at the heart of the maze.")
    ]),
    destinationsWeird: list("Strange destinations", "guides/list-rpg.md", [
      entry("The Black Tower", "This ominous tower looms over the landscape, shrouded in dark magic. The challenge is to penetrate its defenses and reach the top, where an evil sorcerer resides."),
      entry("The Lost City of the Dead", "Hidden in a desolate wasteland, this ancient city is said to be cursed. The challenge is to navigate its twisted streets and discover the secrets that lie within, all while avoiding the undead guardians that roam its ruined halls."),
      entry("The Bloodwood", "This dark forest is said to be inhabited by malevolent spirits and ancient curses. The challenge is to survive its twisted paths and uncover the dark power that lurks at its heart."),
      entry("The Hollow Mountains", "These eerie peaks are home to a forgotten civilization, rumored to have been destroyed by a terrible curse. The challenge is to delve deep into the mountains and discover the secrets of that civilization."),
      entry("The Sunken City", "This ancient metropolis was once a hub of trade and culture, but now lies at the bottom of the sea. The challenge is to brave the depths and uncover the lost treasures, while avoiding the kraken and other dangers."),
      entry("The Dark Moon", "This mysterious satellite is shrouded in darkness and magic. The challenge is to reach its surface, where ancient ruins and powerful magic await, past god-like creatures and sorcerers who protect their secrets.")
    ]),
    destinationsGrim: list("No-win destinations", "guides/list-rpg.md", [
      entry("The Underworld", "A dark, cavernous realm ruled by a cruel and powerful demon lord. The players must navigate a maze of treacherous tunnels and face hordes of demonic minions to reach the throne room. Defeating him means taking his place as ruler of the Underworld, forever binding their souls to this infernal realm."),
      entry("The Dreamworld", "A realm of pure imagination and fantasy, created by a powerful dreamweaver. The players must retrieve a powerful artifact, but they are constantly pursued by the dreamweaver's nightmares and illusions. Success costs a cherished memory or aspect of themselves."),
      entry("The Celestial Realm", "A realm of radiant light and beauty, inhabited by powerful angels and divine beings. They demand complete loyalty and servitude. If the players refuse, they are cast out of the Celestial Realm forever."),
      entry("The Labyrinth", "A vast, twisting maze that shifts and changes constantly. A monstrous minotaur hunts the players. If they defeat it, the treasure is cursed and grants immense power at the cost of their sanity."),
      entry("The Abyss", "A bottomless pit that leads to an infinite realm of chaos and madness. The artifact there is a sentient, malevolent entity that seeks to use their bodies as vessels to escape and wreak havoc."),
      entry("The Island of the Dead", "An eerie, mist-shrouded island said to be the gateway to the afterlife. Retrieving a soul means fighting back through vengeful spirits and undead, and the escape demands a sacrifice of life force or soul.")
    ]),
    bosses: list("Bosses", "guides/list-rpg.md", [
      entry("The Dark Sorcerer", "A powerful mage who has spent years studying the forbidden arts of magic. He wields immense power and can control the elements themselves. His power is tied to a hidden talisman that, if destroyed, weakens him."),
      entry("The Corrupted King", "A once great ruler who was corrupted by dark magic. He rules his kingdom with an iron fist and has amassed an army of undead soldiers. His power comes from a cursed crown that, if removed, weakens him."),
      entry("The Demon Lord", "A demonic entity who seeks to destroy all life. He commands an army of demons and can control the minds of his enemies. His power is tied to a forbidden artifact that, if destroyed, weakens him."),
      entry("The Lich Queen", "A powerful necromancer who has achieved immortality through dark magic. She commands an army of undead and can drain the life force of her enemies. Her power is tied to a hidden phylactery that, if destroyed, weakens her."),
      entry("The Dragon Overlord", "A massive dragon who has enslaved an entire kingdom. He breathes fire and can fly, making him a formidable foe. His power comes from a magical amulet that, if stolen, weakens him."),
      entry("The Vampire Lord", "An ancient vampire who has lived for centuries. He can control the minds of his victims and drain their blood to sustain himself. His power is tied to a hidden coffin that, if destroyed, weakens him."),
      entry("The Titan King", "A colossal giant who rules over a race of giants. He wields a massive hammer and can cause earthquakes with his steps. His power is tied to a magical gemstone that, if shattered, weakens him."),
      entry("The Witch Queen", "A cunning sorceress who has made a pact with dark forces. She can summon demons and cast powerful spells. Her power is tied to a hidden ritual that, if disrupted, weakens her."),
      entry("The Warlord", "A ruthless conqueror who has amassed a massive army. He wields a massive sword and has no mercy for his enemies. His power comes from his loyal followers, who can be turned against him if convinced."),
      entry("The Shadow Master", "A mysterious figure who can control the shadows themselves. He can move through walls and attack from the shadows. His power is tied to a hidden artifact that, if exposed to light, weakens him."),
      entry("The Cult Leader", "A charismatic leader who has convinced his followers to worship dark gods. He can summon demons and control the minds of his enemies. His power is tied to a hidden altar that, if destroyed, weakens him."),
      entry("The Undead Empress", "A powerful undead sorceress who seeks to conquer the world. She commands an army of undead soldiers and can summon ghosts to do her bidding. Her power is tied to a hidden tomb that, if opened, weakens her.")
    ]),
    bossesTooMuch: list("Too strong to fight", "guides/list-rpg.md", [
      entry("The Leviathan", "A massive sea serpent that can swallow ships whole and controls the ocean currents. It cannot be defeated in battle. Outsmart it or divert its attention."),
      entry("The Behemoth", "A colossal beast that can trample cities and withstand any physical attack. Its only weakness is its slow speed. Flee and outmaneuver it."),
      entry("The Chimera", "A creature with multiple heads, each with a different breath weapon. It cannot be killed. Neutralize its heads or distract it long enough to escape."),
      entry("The Hydra", "A serpent-like monster with multiple regenerating heads. Cut off all its heads at once or avoid it altogether."),
      entry("The Roc", "A massive bird of prey with razor-sharp talons and gusts of wind. It cannot be defeated. Lure it away or find a way to ground it."),
      entry("The Juggernaut", "A massive slow-witted golem of indestructible metal. Its only weakness is its slow speed. Avoid it or find a way to slow it down.")
    ]),
    rewards: list("Rewards", "guides/list-rpg.md", [
      entry("A magical item of great power and potential."),
      entry("A rare and valuable material or resource."),
      entry("A powerful ally or companion for the party."),
      entry("A safe haven or base of operations."),
      entry("A treasure trove of gold, jewels, and other riches."),
      entry("A valuable piece of information or knowledge."),
      entry("An invitation to join a powerful and influential organization."),
      entry("A boon or blessing from a powerful deity or supernatural being."),
      entry("A rare and exotic creature or mount."),
      entry("A powerful weapon or piece of armour."),
      entry("A magical spell or ritual of great power."),
      entry("A title or noble rank within a kingdom or society."),
      entry("A powerful and loyal group of followers or henchmen."),
      entry("A piece of land or property of significant value."),
      entry("A map or guide to a hidden or lost location."),
      entry("A rare and powerful artifact or relic."),
      entry("A powerful and rare mount or vehicle."),
      entry("A powerful and mysterious mentor or teacher."),
      entry("A valuable and rare trade or craft skill."),
      entry("A special or unique ability or power.")
    ]),
    conclusions: list("Conclusions", "guides/list-rpg.md", [
      entry("The heroes successfully defeat the evil villain and save the world from destruction."),
      entry("The heroes fail to stop the villain, but they are able to save a few lives and prevent complete disaster."),
      entry("The heroes discover that the villain was actually working for a greater evil and the true battle has yet to be fought."),
      entry("The heroes are betrayed by one of their own and must confront them before continuing on their mission."),
      entry("The heroes realize that the true enemy was not who they thought it was and must change their strategy."),
      entry("The heroes uncover a conspiracy that reaches the highest levels of power and must decide whether to confront it head-on or work from the shadows."),
      entry("The heroes are hailed as heroes by the people they have saved and are given great rewards and recognition."),
      entry("The heroes must sacrifice one of their own in order to achieve their mission."),
      entry("The heroes must make a difficult moral decision that will have consequences for their future."),
      entry("The heroes discover a powerful artifact that can change the course of the world, but must keep it from falling into the wrong hands."),
      entry("The heroes must choose between their own personal interests and the greater good."),
      entry("The heroes are forced to make a temporary alliance with their enemies in order to stop a common threat."),
      entry("The heroes realize that they have been played all along and must confront the true puppet master behind the scenes."),
      entry("The heroes must navigate a treacherous political landscape in order to achieve their goals."),
      entry("The heroes face a moral dilemma that challenges their very beliefs and values."),
      entry("The heroes are forced to make a difficult decision that results in the death of a beloved NPC."),
      entry("The heroes discover that the villain was not evil, but misguided, and must help them see the error of their ways."),
      entry("The heroes are caught in a deadly trap and must use all their skills and ingenuity to escape."),
      entry("The heroes discover a hidden location that contains powerful secrets and knowledge."),
      entry("The heroes must face the consequences of their actions and decide how to make amends for their mistakes.")
    ]),
    narratives: list("Narratives", "guides/list-rpg.md", [
      entry("The Dark Lord's Return", "The ancient evil that was thought to be vanquished has returned, and the players must gather powerful artifacts and allies to defeat the Dark Lord and his minions before they plunge the world into eternal darkness."),
      entry("The Lost City", "Legends tell of a once-great city that disappeared from the face of the earth, leaving behind only ruins and forgotten secrets. The players must uncover the truth behind the city's disappearance and the mysterious forces that still guard its treasures."),
      entry("The Dragon's Curse", "A powerful dragon has laid a curse on the kingdom, causing crops to wither and die, and bringing famine and suffering to the people. The players must track down the dragon and find a way to break the curse before it is too late."),
      entry("The Feywild", "The players are transported to a magical realm of faeries and sprites, where they must navigate the whimsical and dangerous landscape, negotiate with the capricious fey lords, and unravel a web of ancient prophecies and rivalries."),
      entry("The Time Warp", "A powerful wizard's experiment has gone awry, trapping the players in a time loop that forces them to relive the same day over and over again. They must use their knowledge of past and future events to solve puzzles, overcome challenges, and break the wizard's spell."),
      entry("The Underworld", "The players descend into the dark, cavernous depths of the earth, where they must battle demons, undead, and other horrors to find a lost artifact that can save their world from destruction."),
      entry("The Elemental Crystals", "Four powerful elemental crystals have been scattered across the land, and the players must find them and use them to stop a rampaging elemental force that threatens to destroy everything in its path."),
      entry("The Necromancer's Tower", "A powerful necromancer has taken up residence in a forbidding tower, from which he sends his undead minions to terrorize the surrounding countryside. The players must infiltrate the tower, confront the necromancer, and put an end to his foul schemes."),
      entry("The Oracle's Prophecy", "An ancient oracle has foretold a great cataclysm that will soon befall the world, and the players must decipher her cryptic messages and undertake a perilous journey to prevent the disaster from coming to pass."),
      entry("The Pirate's Curse", "The players find themselves caught up in a struggle for a cursed treasure that has driven many a pirate to madness and death. They must navigate treacherous seas, battle rival pirate crews, and overcome the curse's dark power to claim the treasure for themselves.")
    ])
  };

  const givenNames = ["Ada", "Bram", "Cedric", "Dalla", "Eda", "Finn", "Greta", "Holt", "Ira", "Joss", "Kett", "Lark", "Mara", "Nils", "Oda", "Penn", "Quill", "Rook", "Sable", "Tamsin", "Ulric", "Vesper", "Wynn", "Yarrow"];
  const familyNames = ["Ash", "Briar", "Cole", "Dunn", "Fenn", "Hale", "Kerr", "Moss", "Pike", "Reed", "Shaw", "Vale", "Wick", "Yarn"];

  const oracle = [
    { face: 1, answer: "Yes, and", twist: true },
    { face: 2, answer: "Yes", twist: false },
    { face: 3, answer: "Yes, but", twist: true },
    { face: 4, answer: "No, but", twist: true },
    { face: 5, answer: "No", twist: false },
    { face: 6, answer: "No, and", twist: true }
  ];

  const twistActions = ["arrive", "bargain", "collapse", "flee", "reveal", "hunt"];
  const twistSubjects = ["a friend", "a rival", "a path", "an object", "a secret", "a creature"];

  function reactionText(total) {
    if (total <= 3) return "Flee";
    if (total <= 6) return "Avoid";
    if (total <= 8) return "Confront and call for reinforcements";
    if (total === 9) return "Confront and attempt to capture, kill, or eat the character";
    if (total === 10) return "Mistake the PC for friends or trick the PC (re-roll)";
    return "Provide assist, usually trade items or information";
  }

  function recoveryText(total) {
    if (total === 2) return "Knocked out.";
    if (total <= 5) return "Concussed. Disadvantage on all checks for the next hour.";
    if (total <= 8) return "Physically stressed. STR, DEX, and CON are −2 for the next day.";
    if (total <= 10) return "Physically impaired. STR or DEX is permanently reduced by 2.";
    if (total === 11) return "Disfigured or traumatically shocked. CHA is reduced to 4.";
    return "Dead.";
  }

  root.TABLES = {
    spells: spells,
    classes: classes,
    classOrder: ["combat", "manual", "knowledge"],
    attributes: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
    creatures: creatures,
    lists: lists,
    givenNames: givenNames,
    familyNames: familyNames,
    oracle: oracle,
    twistActions: twistActions,
    twistSubjects: twistSubjects,
    reactionText: reactionText,
    recoveryText: recoveryText
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
