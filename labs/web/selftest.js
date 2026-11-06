/* Run with: node labs/web/selftest.js */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "js");
const sandbox = { console: console, Math: Math };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
["dice.js", "tables.js", "generate.js"].forEach(function (file) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
});

const SRPG = sandbox.SRPG;
const TABLES = sandbox.TABLES;
const GENERATE = sandbox.GENERATE;

let passed = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message || "assertion failed");
  passed += 1;
}

function faces() {
  const values = Array.prototype.slice.call(arguments);
  let index = 0;
  return function () {
    if (index >= values.length) throw new Error("rng exhausted at " + index);
    const face = values[index];
    index += 1;
    return (face - 0.5) / 6;
  };
}

function check(options) {
  return SRPG.rollCheck(options);
}

assert(check({ attribute: 4, rng: faces(3) }).success === true, "3 is below 4");
assert(check({ attribute: 4, rng: faces(4) }).success === false, "4 is not below 4");
assert(check({ attribute: 4, modifier: 1, rng: faces(3) }).success === false, "3+1 is not below 4");
assert(check({ attribute: 4, modifier: -1, rng: faces(4) }).success === true, "4-1 is below 4");

const advantage = check({ attribute: 4, mode: "advantage", rng: faces(5, 2) });
assert(advantage.kept === 2 && advantage.dice.join() === "5,2" && advantage.success, "advantage keeps the lower die");

const disadvantage = check({ attribute: 4, mode: "disadvantage", rng: faces(5, 2) });
assert(disadvantage.kept === 5 && disadvantage.success === false, "disadvantage keeps the higher die");

const cancelled = check({ attribute: 4, advantage: true, disadvantage: true, rng: faces(4) });
assert(cancelled.mode === "normal" && cancelled.cancelled && cancelled.dice.length === 1, "both conditions cancel");

const critHit = check({ attribute: 3, modifier: 5, kind: "attack", rng: faces(1) });
assert(critHit.success && critHit.critical === "hit" && critHit.total === 6, "natural 1 hits even when the total is not below");
assert(SRPG.explainCheck(critHit).headline === "Critical hit", "critical hit headline");

const critFail = check({ attribute: 9, modifier: -3, kind: "defense", rng: faces(6) });
assert(critFail.success === false && critFail.critical === "fail" && critFail.total === 3, "natural 6 fails a defense");
assert(SRPG.explainCheck(critFail).detail.indexOf("below 9") !== -1, "detail keeps the arithmetic");
assert(SRPG.explainCheck(critFail).headline === "Critical failure", "critical failure headline");

assert(check({ attribute: 7, rng: faces(6) }).success, "attribute 7 succeeds on a 6");
assert(check({ attribute: 1, mode: "advantage", rng: faces(1, 1) }).success === false, "attribute 1 still fails the roll-under test");
assert(SRPG.explainCheck(check({ attribute: 4, rng: faces(3) })).detail === "Kept 3 = 3, which is below 4.", "plain success wording");
assert(SRPG.explainCheck(check({ attribute: 4, modifier: 2, rng: faces(4) })).detail === "Kept 4 + 2 = 6, which is not below 4.", "modifier wording");

const damage = SRPG.rollDamage(1, 1, true, faces(4));
assert(damage.sum === 4 && damage.total === 9, "doubled damage die, modifier once");

const counts = {
  backgrounds: 10,
  objectives: 12,
  npcs: 12,
  encounters: 12,
  found: 12,
  food: 12,
  forage: 12,
  events: 12,
  weird: 20,
  sinister: 20,
  destinations: 12,
  destinationsWeird: 6,
  destinationsGrim: 6,
  bosses: 12,
  bossesTooMuch: 6,
  rewards: 20,
  conclusions: 20,
  narratives: 10
};
Object.keys(counts).forEach(function (id) {
  assert(TABLES.lists[id].items.length === counts[id], id + " count");
});
assert(TABLES.lists.backgrounds.items[0].name === "Medieval Kingdom", "first background");
assert(TABLES.lists.bosses.items.some(function (item) { return item.name === "The Lich Queen"; }), "lich queen");
assert(TABLES.spells.filter(function (spell) { return spell.level === 1; }).length === 9, "level 1 spells");
assert(TABLES.spells.filter(function (spell) { return spell.level === 2; }).length === 10, "level 2 spells");
assert(TABLES.creatures.length === 7, "seven creature types");
assert(TABLES.creatures[0].rows.length === 7 && TABLES.creatures[5].rows.length === 7, "rare rows");
assert(TABLES.creatures[1].rows.length === 6 && TABLES.creatures[6].rows.length === 6, "six-row types");

[2, 3].forEach(function (total) { assert(TABLES.reactionText(total) === "Flee", "flee " + total); });
[4, 5, 6].forEach(function (total) { assert(TABLES.reactionText(total) === "Avoid", "avoid " + total); });
[7, 8].forEach(function (total) { assert(TABLES.reactionText(total).indexOf("reinforcements") !== -1, "reinforcements " + total); });
assert(TABLES.reactionText(9).indexOf("capture") !== -1, "capture");
assert(TABLES.reactionText(10).indexOf("re-roll") !== -1, "reroll");
[11, 12].forEach(function (total) { assert(TABLES.reactionText(total).indexOf("assist") !== -1, "assist " + total); });
assert(TABLES.recoveryText(2).indexOf("Knocked out") !== -1, "ooa 2");
assert(TABLES.recoveryText(5).indexOf("Concussed") !== -1, "ooa 5");
assert(TABLES.recoveryText(8).indexOf("stressed") !== -1, "ooa 8");
assert(TABLES.recoveryText(10).indexOf("Impaired") !== -1 || TABLES.recoveryText(10).indexOf("impaired") !== -1, "ooa 10");
assert(TABLES.recoveryText(11).indexOf("CHA") !== -1, "ooa 11");
assert(TABLES.recoveryText(12) === "Dead.", "ooa 12");

const quiet = GENERATE.travelWatch(faces(3));
assert(quiet.encounter === false && quiet.reaction === null, "travel 3 is quiet");
const meeting = GENERATE.travelWatch(faces(1, 6, 6));
assert(meeting.encounter && meeting.reaction.final.total === 12, "travel 1 then reaction 12");
const trick = GENERATE.rollReaction(faces(4, 6, 1, 1));
assert(trick.chain.length === 2 && trick.chain[0].total === 10 && trick.final.text === "Flee", "reaction 10 rerolls");
const dead = GENERATE.rollRecovery(faces(6, 6));
assert(dead.total === 12 && dead.hp === null, "dead skips the HP die");
const knocked = GENERATE.rollRecovery(faces(1, 1, 1));
assert(knocked.total === 2 && knocked.hp.total === -1, "survivor gains 1d6-2");

function constant(value) {
  return function () { return value; };
}

const fighter = GENERATE.generateCharacter({ classId: "combat", level: 1, name: "Rook Ash", rng: constant(0) });
assert(fighter.sheet.attributes.map(function (attr) { return attr.score; }).join() === "2,2,3,1,1,2", "combat minimum scores");
assert(fighter.sheet.hp === 7 && fighter.sheet.coins === 10 && fighter.sheet.ap === 1, "combat minimum HP and coins");
assert(fighter.sheet.spells.length === 0, "combat has no spell book");

const fighterHigh = GENERATE.generateCharacter({ classId: "combat", level: 1, name: "Rook Ash", rng: constant(0.999) });
assert(fighterHigh.sheet.attributes.map(function (attr) { return attr.score; }).join() === "7,7,8,6,6,7", "combat maximum scores");
assert(fighterHigh.sheet.hp === 22, "combat maximum HP");

const thief = GENERATE.generateCharacter({ classId: "manual", level: 1, name: "Lark", rng: constant(0) });
assert(thief.sheet.attributes.map(function (attr) { return attr.score; }).join() === "1,3,1,1,3,3", "manual minimum scores");

const scholar = GENERATE.generateCharacter({ classId: "knowledge", level: 1, name: "Quill", rng: constant(0) });
assert(scholar.sheet.attributes.map(function (attr) { return attr.score; }).join() === "1,1,2,2,3,2", "knowledge minimum scores");
assert(scholar.sheet.hp === 5, "knowledge minimum HP");
assert(scholar.sheet.spells.length === 1, "1d6 spells can be one");

const book = GENERATE.generateCharacter({ classId: "knowledge", level: 1, name: "Quill", rng: constant(0.999) });
const spellNames = book.sheet.spells.map(function (spell) { return spell.name; });
assert(book.sheet.spells.length === 6, "six spells");
assert(new Set(spellNames).size === 6, "spells are unique");
book.sheet.spells.forEach(function (spell) {
  assert(spell.level === 1 || spell.level === 2, "starting spells are level 1 or 2");
});

const focused = GENERATE.generateCharacter({ classId: "combat", level: 2, focus: true, name: "Rook", rng: constant(0) });
assert(Object.keys(focused.state.levels[0].rolls).join() === "STR,DEX", "optional focus rolls only key attributes");

const swappedState = {
  name: "Test",
  type: "PC",
  classId: "combat",
  level: 2,
  focus: false,
  creation: {
    STR: { roll: 1 },
    DEX: { roll: 1 },
    CON: { roll: 1 },
    INT: { roll: 6 },
    WIS: { roll: 1 },
    CHA: { roll: 1 }
  },
  hpDie: 3,
  coinsDie: 2,
  weapon: "sword",
  spellCount: 0,
  spells: [],
  levels: [{
    level: 2,
    hpGain: 5,
    rolls: { STR: 3, DEX: 1, CON: 1, INT: 5, WIS: 6, CHA: 1 }
  }],
  swap: ["STR", "INT"]
};
const swapped = GENERATE.derive(swappedState);
assert(swapped.attributes.map(function (attr) { return attr.score; }).join() === "6,2,3,3,2,2", "swap then level-up");
assert(swapped.hp === 18, "HP uses swapped STR and does not rebuild after level-up");
const unswapped = GENERATE.derive(Object.assign({}, swappedState, { swap: null }));
assert(unswapped.attributes.map(function (attr) { return attr.score; }).join() === "3,2,3,6,2,2", "level-up without the swap");
assert(unswapped.hp === 14, "creation HP before the attribute bump");

for (let i = 0; i < 40; i += 1) {
  TABLES.classOrder.forEach(function (classId) {
    const sheet = GENERATE.generateCharacter({ classId: classId, level: 1, name: "Sample" }).sheet;
    const mods = TABLES.classes[classId].mods;
    sheet.attributes.forEach(function (attr) {
      const mod = mods[attr.key];
      assert(attr.score >= 1 + mod && attr.score <= 6 + mod, classId + " " + attr.key + " in range");
    });
    assert(sheet.hp === sheet.hpDie + sheet.attributes[0].score + sheet.attributes[2].score + 1, "HP formula");
    assert(sheet.gear[0] === "Clothes" && sheet.coins >= 10 && sheet.coins <= 60 && sheet.coins % 10 === 0, "starting gear");
  });
}

const dragon = GENERATE.rollCreature({ type: 6, face: 6, modifier: 1, rng: constant(0) });
assert(dragon.name === "Dragon" && dragon.hd === 9 && dragon.hp === 9 && dragon.ap === 8, "rare dragon row");
const succubus = GENERATE.rollCreature({ type: 1, face: 6, modifier: 1, rng: constant(0) });
assert(succubus.name.indexOf("Succubus") === 0 && succubus.hp === 6 && succubus.ap === 5, "rare human-like row");
const vampire = GENERATE.rollCreature({ type: 2, face: 6, modifier: 1, rng: constant(0) });
assert(vampire.name === "Vampire" && vampire.note.indexOf("past this table") !== -1, "clamp when there is no rare row");
const human = GENERATE.rollCreature({ type: 1, face: 1, modifier: -3, rng: constant(0) });
assert(human.name.indexOf("Human") === 0 && human.face === 1, "clamp below the table");

const adventure = GENERATE.rollAdventure({ rng: constant(0) });
assert(adventure.background.name === "Medieval Kingdom", "adventure background");
assert(adventure.objective.name === "Rescue Mission", "adventure objective");
assert(adventure.npc.name === "Grizzled Veteran", "adventure npc");
assert(adventure.destination.name.indexOf("Lost City") !== -1, "adventure destination");
assert(adventure.boss.name === "The Dark Sorcerer", "adventure boss");
assert(adventure.journey.length === 5, "five journey cards");
assert(adventure.journey[0].name === "Ambush", "first journey card");
assert(adventure.journey[4].listId === "found", "fifth card follows the coin flip");
assert(adventure.reward.name.indexOf("magical item") !== -1, "reward");

const oracleYes = GENERATE.rollOracle("normal", faces(1, 1, 1));
assert(oracleYes.answer === "Yes, and" && oracleYes.twist, "oracle 1");
assert(GENERATE.rollOracle("normal", faces(6, 1, 1)).answer === "No, and", "oracle 6");
assert(GENERATE.rollOracle("advantage", faces(6, 2)).answer === "Yes", "likely keeps the lower");
assert(GENERATE.rollOracle("disadvantage", faces(2, 6, 1, 1)).answer === "No, and", "unlikely keeps the higher");

const npc = GENERATE.generateNpc({ classId: "manual", level: 1, name: "Sable Moss", rng: constant(0) });
assert(npc.character.sheet.type === "NPC" && npc.character.sheet.className === "Manual", "npc uses the class procedure");
assert(npc.archetype.listId === "npcs" && npc.hook.listId === "objectives", "npc hook comes from the lists");
assert(npc.reaction.final, "npc has a reaction");

console.log("selftest passed (" + passed + " checks)");
