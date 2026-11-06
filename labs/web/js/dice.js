/* Dice procedures for the browser labs. The check is the one in rules/. */
(function (root) {
  "use strict";

  function random() {
    return Math.random();
  }

  function rollDie(sides, rng) {
    const roll = (rng || random)();
    const n = Math.floor(roll * sides) + 1;
    if (n < 1) return 1;
    if (n > sides) return sides;
    return n;
  }

  function rollD6(rng) {
    return rollDie(6, rng);
  }

  function resolveMode(options) {
    if (options.advantage && options.disadvantage) {
      return { mode: "normal", cancelled: true };
    }
    if (options.mode === "advantage" || options.mode === "disadvantage" || options.mode === "normal") {
      return { mode: options.mode, cancelled: false };
    }
    if (options.advantage) return { mode: "advantage", cancelled: false };
    if (options.disadvantage) return { mode: "disadvantage", cancelled: false };
    return { mode: "normal", cancelled: false };
  }

  function rollKept(mode, rng) {
    if (mode === "advantage" || mode === "disadvantage") {
      const dice = [rollD6(rng), rollD6(rng)];
      const kept = mode === "advantage" ? Math.min(dice[0], dice[1]) : Math.max(dice[0], dice[1]);
      return { dice: dice, kept: kept, mode: mode };
    }
    const die = rollD6(rng);
    return { dice: [die], kept: die, mode: "normal" };
  }

  function rollCheck(options) {
    const opts = options || {};
    const rng = opts.rng || random;
    const attribute = Number(opts.attribute);
    const modifier = Number(opts.modifier || 0);
    const kind = opts.kind || "general";
    const resolved = resolveMode(opts);
    const keptRoll = rollKept(resolved.mode, rng);
    const total = keptRoll.kept + modifier;
    let success = total < attribute;
    let critical = null;
    if (kind === "attack" && keptRoll.kept === 1) {
      success = true;
      critical = "hit";
    }
    if (kind === "defense" && keptRoll.kept === 6) {
      success = false;
      critical = "fail";
    }
    return {
      dice: keptRoll.dice,
      kept: keptRoll.kept,
      modifier: modifier,
      total: total,
      attribute: attribute,
      mode: keptRoll.mode,
      cancelled: resolved.cancelled,
      kind: kind,
      success: success,
      critical: critical
    };
  }

  function explainCheck(result) {
    const below = result.total < result.attribute;
    const relation = below ? "below" : "not below";
    let modifierText = "";
    if (result.modifier > 0) modifierText = " + " + result.modifier;
    if (result.modifier < 0) modifierText = " - " + Math.abs(result.modifier);
    const detail = "Kept " + result.kept + modifierText + " = " + result.total + ", which is " + relation + " " + result.attribute + ".";
    let headline = result.success ? "Success" : "Failure";
    const notes = [];
    if (result.critical === "hit") {
      headline = "Critical hit";
      notes.push("A natural 1 on an attack always succeeds, and the damage dice are doubled. Armor Points still apply.");
    } else if (result.critical === "fail") {
      headline = "Critical failure";
      notes.push("A natural 6 on a defense check always fails, and the character takes double damage. Armor Points still apply.");
    }
    const modeLine = {
      advantage: "Advantage: rolled 2d6 and kept the lower die.",
      disadvantage: "Disadvantage: rolled 2d6 and kept the higher die.",
      normal: "Normal check: rolled 1d6."
    }[result.mode];
    if (result.cancelled) {
      notes.push("Advantage and Disadvantage were both in play, so they cancelled. This was a normal check.");
    }
    if (result.attribute >= 7 && result.modifier === 0 && result.success && result.critical !== "fail") {
      notes.push("With no modifier on the roll, an attribute of 7 or higher always succeeds. A d6 cannot show 7.");
    }
    if (result.attribute <= 1 && !result.success) {
      if (result.mode === "advantage") {
        notes.push("An attribute of 1 is never below a d6, so Advantage still fails the roll-under test. The rules say an attribute of 1 never succeeds without Advantage or a GM ruling.");
      } else {
        notes.push("An attribute of 1 never succeeds without Advantage or a GM ruling. The lowest face on a d6 is 1, which is not below 1.");
      }
    }
    return { headline: headline, detail: detail, modeLine: modeLine, notes: notes };
  }

  function rollPool(count, sides, modifier, rng) {
    const dice = [];
    const n = Math.max(0, count);
    for (let i = 0; i < n; i += 1) dice.push(rollDie(sides, rng));
    const sum = dice.reduce(function (total, face) { return total + face; }, 0);
    const mod = modifier || 0;
    return { dice: dice, sum: sum, modifier: mod, total: sum + mod };
  }

  function rollDamage(count, modifier, doubled, rng) {
    const pool = rollPool(count, 6, 0, rng);
    const diceTotal = doubled ? pool.sum * 2 : pool.sum;
    const mod = modifier || 0;
    return {
      dice: pool.dice,
      sum: pool.sum,
      doubled: !!doubled,
      modifier: mod,
      total: diceTotal + mod
    };
  }

  root.SRPG = {
    rollDie: rollDie,
    rollD6: rollD6,
    rollKept: rollKept,
    rollCheck: rollCheck,
    explainCheck: explainCheck,
    rollPool: rollPool,
    rollDamage: rollDamage
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
