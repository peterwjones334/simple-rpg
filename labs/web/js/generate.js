/* Character, creature, adventure, and oracle generators. Procedures follow rules/. */
(function (root) {
  "use strict";

  const SRPG = root.SRPG;
  const TABLES = root.TABLES;
  const ATTRS = TABLES.attributes;

  function pick(items, rng) {
    return items[Math.floor(rng() * items.length)];
  }

  function shuffle(items, rng) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      const swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy;
  }

  function clampLevel(level) {
    const n = Math.floor(Number(level) || 1);
    if (n < 1) return 1;
    if (n > 20) return 20;
    return n;
  }

  function classSpec(classId) {
    return TABLES.classes[classId];
  }

  function randomName(rng) {
    return pick(TABLES.givenNames, rng) + " " + pick(TABLES.familyNames, rng);
  }

  function blankScores() {
    const scores = {};
    ATTRS.forEach(function (key) { scores[key] = 0; });
    return scores;
  }

  function rollCharacterState(options) {
    const rng = options.rng || Math.random;
    let classId = options.classId;
    if (!classId || classId === "random" || !TABLES.classes[classId]) {
      classId = pick(TABLES.classOrder, rng);
    }
    const spec = classSpec(classId);
    const level = clampLevel(options.level);
    const focus = !!options.focus;
    const creation = {};
    ATTRS.forEach(function (key) {
      creation[key] = { roll: SRPG.rollD6(rng) };
    });
    const hpDie = SRPG.rollD6(rng);
    const coinsDie = SRPG.rollD6(rng);
    const weapon = pick(spec.weapons, rng);
    let spellCount = 0;
    let spells = [];
    if (classId === "knowledge") {
      spellCount = SRPG.rollD6(rng);
      spells = shuffle(TABLES.spells, rng).slice(0, spellCount);
    }
    const levels = [];
    for (let lv = 2; lv <= level; lv += 1) {
      const rolls = {};
      ATTRS.forEach(function (key) {
        if (focus && spec.focus.indexOf(key) === -1) return;
        rolls[key] = SRPG.rollD6(rng);
      });
      levels.push({ level: lv, hpGain: SRPG.rollD6(rng), rolls: rolls });
    }
    let swap = null;
    if (options.swap && options.swap[0] && options.swap[1] && options.swap[0] !== options.swap[1]) {
      swap = [options.swap[0], options.swap[1]];
    }
    return {
      name: options.name || randomName(rng),
      type: options.type || "PC",
      classId: classId,
      level: level,
      focus: focus,
      creation: creation,
      hpDie: hpDie,
      coinsDie: coinsDie,
      weapon: weapon,
      spellCount: spellCount,
      spells: spells,
      levels: levels,
      swap: swap
    };
  }

  function derive(state) {
    const spec = classSpec(state.classId);
    const created = blankScores();
    ATTRS.forEach(function (key) {
      created[key] = state.creation[key].roll + spec.mods[key];
    });
    const scores = blankScores();
    ATTRS.forEach(function (key) { scores[key] = created[key]; });
    if (state.swap) {
      const a = state.swap[0];
      const b = state.swap[1];
      const tmp = scores[a];
      scores[a] = scores[b];
      scores[b] = tmp;
    }
    const atCreation = blankScores();
    ATTRS.forEach(function (key) { atCreation[key] = scores[key]; });
    let hp = state.hpDie + scores.STR + scores.CON + 1;
    const log = [];
    state.levels.forEach(function (step) {
      hp += step.hpGain;
      const lines = [];
      ATTRS.forEach(function (key) {
        if (step.rolls[key] == null) return;
        const roll = step.rolls[key];
        if (roll > scores[key]) {
          const from = scores[key];
          scores[key] += 1;
          lines.push(key + " " + from + " to " + scores[key] + " (rolled " + roll + ")");
        } else {
          lines.push(key + " stays " + scores[key] + " (rolled " + roll + ")");
        }
      });
      log.push({ level: step.level, hpGain: step.hpGain, lines: lines });
    });
    const attributes = ATTRS.map(function (key) {
      const mod = spec.mods[key];
      const modText = mod === 0 ? "+ 0" : (mod > 0 ? "+ " + mod : "− " + Math.abs(mod));
      let note = "Created " + atCreation[key] + " (d6 " + state.creation[key].roll + " " + modText + ")";
      if (state.swap && (state.swap[0] === key || state.swap[1] === key)) {
        const other = state.swap[0] === key ? state.swap[1] : state.swap[0];
        note = "Created " + atCreation[key] + " (swapped with " + other + ")";
      }
      if (scores[key] !== atCreation[key]) {
        note += ". Level-up raised it to " + scores[key];
      }
      return { key: key, score: scores[key], created: atCreation[key], note: note };
    });
    const gear = [
      "Clothes",
      "One day of rations",
      "One-handed weapon: " + state.weapon,
      (state.coinsDie * 10) + " coins"
    ];
    return {
      name: state.name,
      type: state.type,
      classId: state.classId,
      className: spec.name,
      aka: spec.aka,
      level: state.level,
      focus: state.focus,
      attributes: attributes,
      hp: hp,
      hpDie: state.hpDie,
      ap: 1,
      recovery: spec.recovery,
      attack: spec.attack,
      tools: spec.tools,
      weapon: state.weapon,
      coins: state.coinsDie * 10,
      coinsDie: state.coinsDie,
      gear: gear,
      features: spec.features,
      spells: state.spells,
      spellCount: state.spellCount,
      log: log,
      swap: state.swap
    };
  }

  function generateCharacter(options) {
    const state = rollCharacterState(options || {});
    return { state: state, sheet: derive(state) };
  }

  function withSwap(state, swap) {
    const next = Object.assign({}, state, {
      swap: swap && swap[0] && swap[1] && swap[0] !== swap[1] ? [swap[0], swap[1]] : null
    });
    return { state: next, sheet: derive(next) };
  }

  function lookupReaction(total) {
    return { total: total, text: TABLES.reactionText(total), reroll: total === 10 };
  }

  function rollReaction(rng) {
    const random = rng || Math.random;
    const chain = [];
    let guard = 0;
    let final = null;
    while (guard < 5) {
      guard += 1;
      const dice = [SRPG.rollD6(random), SRPG.rollD6(random)];
      const total = dice[0] + dice[1];
      const row = lookupReaction(total);
      chain.push({ dice: dice, total: total, text: row.text });
      final = chain[chain.length - 1];
      if (total !== 10) break;
    }
    return { chain: chain, final: final };
  }

  function travelWatch(rng) {
    const random = rng || Math.random;
    const roll = SRPG.rollD6(random);
    if (roll > 2) return { roll: roll, encounter: false, reaction: null };
    return { roll: roll, encounter: true, reaction: rollReaction(random) };
  }

  function rollRecovery(rng) {
    const random = rng || Math.random;
    const dice = [SRPG.rollD6(random), SRPG.rollD6(random)];
    const total = dice[0] + dice[1];
    const text = TABLES.recoveryText(total);
    if (total === 12) return { dice: dice, total: total, text: text, hp: null };
    const die = SRPG.rollD6(random);
    return { dice: dice, total: total, text: text, hp: { die: die, total: die - 2 } };
  }

  function rollCoins(rng) {
    const die = SRPG.rollD6(rng || Math.random);
    return { die: die, coins: die * 10 };
  }

  function creatureArmor(hd) {
    return Math.max(0, Math.min(10, hd - 1));
  }

  function rollHdValue(hd, rng) {
    if (typeof hd === "number") return hd;
    const span = hd.max - hd.min + 1;
    return hd.min + Math.floor(rng() * span);
  }

  function findCreatureRow(group, face) {
    let row = null;
    group.rows.forEach(function (candidate) {
      if (candidate.die === face) row = candidate;
    });
    return row;
  }

  function rollCreature(options) {
    const opts = options || {};
    const rng = opts.rng || Math.random;
    const modifier = Number(opts.modifier || 0);
    let type = opts.type;
    let typeDie = null;
    if (type == null) {
      typeDie = opts.constructs ? (Math.floor(rng() * 7) + 1) : SRPG.rollD6(rng);
      type = typeDie;
    }
    const group = TABLES.creatures[type - 1];
    if (!group) throw new Error("Creature type is out of range.");
    let natural = opts.face;
    if (natural == null) natural = SRPG.rollD6(rng);
    const adjusted = natural + modifier;
    let face = adjusted;
    let note = "";
    if (!findCreatureRow(group, face)) {
      if (face > 6) {
        face = findCreatureRow(group, 7) ? 7 : 6;
        if (face !== adjusted) note = "The modified roll was " + adjusted + ", past this table, so the result is row " + face + ".";
      } else if (face < 1) {
        face = 1;
        note = "The modified roll was " + adjusted + ", below this table, so the result is row 1.";
      }
    } else if (face === 7) {
      note = "A modified 7 lands on the rare row, where this table has one.";
    }
    const row = findCreatureRow(group, face);
    const hd = rollHdValue(row.hd, rng);
    const hpDice = [];
    for (let i = 0; i < hd; i += 1) hpDice.push(SRPG.rollD6(rng));
    const hp = hpDice.reduce(function (sum, die) { return sum + die; }, 0);
    return {
      typeId: group.id,
      typeName: group.name,
      typeBlurb: group.blurb,
      typeDie: typeDie,
      natural: natural,
      modifier: modifier,
      adjusted: adjusted,
      face: face,
      rare: !!row.rare,
      name: row.name,
      hd: hd,
      hdLabel: typeof row.hd === "number" ? String(row.hd) : row.hd.min + " to " + row.hd.max,
      hpDice: hpDice,
      hp: hp,
      ap: creatureArmor(hd),
      description: row.description,
      actions: row.actions,
      note: note
    };
  }

  function rollEntry(listId, rng) {
    const random = rng || Math.random;
    const table = TABLES.lists[listId];
    if (!table) throw new Error("Unknown list " + listId);
    const item = pick(table.items, random);
    return {
      listId: listId,
      listTitle: table.title,
      source: table.source,
      name: item.name,
      detail: item.detail
    };
  }

  function rollFrom(listIds, rng) {
    const pool = [];
    listIds.forEach(function (id) {
      TABLES.lists[id].items.forEach(function (item) {
        pool.push({
          listId: id,
          listTitle: TABLES.lists[id].title,
          source: TABLES.lists[id].source,
          name: item.name,
          detail: item.detail
        });
      });
    });
    return pick(pool, rng);
  }

  function rollAdventure(options) {
    const opts = options || {};
    const rng = opts.rng || Math.random;
    const destinations = opts.strange
      ? ["destinations", "destinationsWeird", "destinationsGrim"]
      : ["destinations"];
    const bosses = opts.unbeatable ? ["bossesTooMuch"] : ["bosses"];
    const fifth = rng() < 0.5 ? "found" : "events";
    return {
      background: rollFrom(["backgrounds"], rng),
      objective: rollFrom(["objectives"], rng),
      destination: rollFrom(destinations, rng),
      npc: rollFrom(["npcs"], rng),
      journey: [
        rollFrom(["encounters"], rng),
        rollFrom(["encounters"], rng),
        rollFrom(["weird"], rng),
        rollFrom(["sinister"], rng),
        rollFrom([fifth], rng)
      ],
      boss: rollFrom(bosses, rng),
      reward: rollFrom(["rewards"], rng),
      conclusion: rollFrom(["conclusions"], rng)
    };
  }

  function rerollSlot(adventure, slot, index, options) {
    const opts = options || {};
    const rng = opts.rng || Math.random;
    const next = Object.assign({}, adventure, { journey: adventure.journey.slice() });
    if (slot === "journey") {
      next.journey[index] = rollEntry(adventure.journey[index].listId, rng);
      return next;
    }
    if (slot === "destination") {
      const lists = opts.strange
        ? ["destinations", "destinationsWeird", "destinationsGrim"]
        : ["destinations"];
      next.destination = rollFrom(lists, rng);
      return next;
    }
    if (slot === "boss") {
      next.boss = rollFrom(opts.unbeatable ? ["bossesTooMuch"] : ["bosses"], rng);
      return next;
    }
    const listBySlot = {
      background: "backgrounds",
      objective: "objectives",
      npc: "npcs",
      reward: "rewards",
      conclusion: "conclusions"
    };
    next[slot] = rollEntry(listBySlot[slot], rng);
    return next;
  }

  function rollOracle(mode, rng) {
    const random = rng || Math.random;
    const kept = SRPG.rollKept(mode || "normal", random);
    const row = TABLES.oracle[kept.kept - 1];
    let twist = null;
    if (row.twist) {
      twist = pick(TABLES.twistActions, random) + " " + pick(TABLES.twistSubjects, random);
    }
    return {
      dice: kept.dice,
      kept: kept.kept,
      mode: kept.mode,
      answer: row.answer,
      twist: twist
    };
  }

  function rollTwist(rng) {
    const random = rng || Math.random;
    return pick(TABLES.twistActions, random) + " " + pick(TABLES.twistSubjects, random);
  }

  function generateNpc(options) {
    const opts = options || {};
    const rng = opts.rng || Math.random;
    const archetype = rollEntry("npcs", rng);
    const hook = rollEntry("objectives", rng);
    const reaction = rollReaction(rng);
    const character = generateCharacter({
      rng: rng,
      classId: opts.classId,
      level: opts.level,
      focus: opts.focus,
      type: "NPC",
      name: opts.name
    });
    return {
      archetype: archetype,
      hook: hook,
      reaction: reaction,
      character: character
    };
  }

  root.GENERATE = {
    clampLevel: clampLevel,
    randomName: randomName,
    generateCharacter: generateCharacter,
    derive: derive,
    withSwap: withSwap,
    lookupReaction: lookupReaction,
    rollReaction: rollReaction,
    travelWatch: travelWatch,
    rollRecovery: rollRecovery,
    rollCoins: rollCoins,
    creatureArmor: creatureArmor,
    rollCreature: rollCreature,
    rollEntry: rollEntry,
    rollAdventure: rollAdventure,
    rerollSlot: rerollSlot,
    rollOracle: rollOracle,
    rollTwist: rollTwist,
    generateNpc: generateNpc
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
