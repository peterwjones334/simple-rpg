/* Small DOM helpers. No network, no build. */
(function (root) {
  "use strict";

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    const props = attrs || {};
    Object.keys(props).forEach(function (key) {
      const value = props[key];
      if (value == null || value === false) return;
      if (key === "class") node.className = value;
      else if (typeof value === "function" && key.slice(0, 2) === "on") node.addEventListener(key.slice(2).toLowerCase(), value);
      else if (value === true) node.setAttribute(key, "");
      else node.setAttribute(key, String(value));
    });
    const list = Array.isArray(children) ? children : (children == null ? [] : [children]);
    list.forEach(function (child) {
      if (child == null || child === false) return;
      if (typeof child === "string" || typeof child === "number") node.appendChild(document.createTextNode(String(child)));
      else node.appendChild(child);
    });
    return node;
  }

  function diceFaces(dice, kept) {
    return el("div", { class: "dice" }, dice.map(function (face) {
      const marked = kept != null && face === kept;
      return el("span", { class: marked ? "die kept" : "die" }, String(face));
    }));
  }

  function notes(lines) {
    if (!lines || !lines.length) return null;
    return el("div", { class: "stack" }, lines.map(function (line) {
      return el("p", { class: "note" }, line);
    }));
  }

  function renderCheck(result) {
    const explained = root.SRPG.explainCheck(result);
    const tone = result.critical ? "critical" : (result.success ? "success" : "failure");
    return el("div", { class: "result stack" }, [
      diceFaces(result.dice, result.kept),
      el("p", { class: "outcome " + tone }, explained.headline),
      el("p", {}, explained.modeLine),
      el("p", {}, explained.detail),
      notes(explained.notes)
    ]);
  }

  function sheetArticle(sheet) {
    const str = sheet.attributes.filter(function (attr) { return attr.key === "STR"; })[0];
    const con = sheet.attributes.filter(function (attr) { return attr.key === "CON"; })[0];
    let hpNote = "Hit die " + sheet.hpDie + " + STR " + str.created + " + CON " + con.created + " + AP 1";
    if (sheet.log.length) {
      const gained = sheet.log.reduce(function (sum, step) { return sum + step.hpGain; }, 0);
      hpNote += ", then +" + gained + " from level-up";
    }
    const facts = [
      ["HP", String(sheet.hp), hpNote],
      ["Armor", String(sheet.ap), "Clothing. Rest restores Armor Points."],
      ["HP recovery", sheet.recovery, "Rolled when the character rests."],
      ["Attack", sheet.attack, "Starting weapon: " + sheet.weapon],
      ["Coins", String(sheet.coins), "1d6 (" + sheet.coinsDie + ") × 10"]
    ];
    const children = [
      el("h2", {}, sheet.name || "Unnamed"),
      el("p", { class: "muted" }, sheet.type + " · " + sheet.className + " (" + sheet.aka + ") · level " + sheet.level),
      el("dl", { class: "stats" }, sheet.attributes.map(function (attr) {
        return el("div", {}, [
          el("dt", {}, attr.key),
          el("dd", {}, String(attr.score)),
          el("small", {}, attr.note)
        ]);
      })),
      el("div", { class: "facts" }, facts.map(function (fact) {
        return el("div", { class: "fact" }, [
          el("strong", {}, fact[0]),
          fact[1],
          el("small", {}, fact[2])
        ]);
      })),
      el("h3", {}, "Tool ratings"),
      el("ul", { class: "clean" }, sheet.tools.map(function (tool) {
        return el("li", {}, tool.name + " " + tool.rating);
      })),
      el("h3", {}, "Starting gear"),
      el("ul", { class: "clean" }, sheet.gear.map(function (item) { return el("li", {}, item); })),
      el("h3", {}, "Class features"),
      el("ul", { class: "clean" }, sheet.features.map(function (feature) { return el("li", {}, feature); }))
    ];
    if (sheet.spells.length) {
      children.push(el("h3", {}, "Spell book"));
      children.push(el("p", { class: "muted" }, "1d6 spells from the level 1 and 2 lists. Rolled " + sheet.spellCount + "."));
      children.push(el("ul", { class: "clean" }, sheet.spells.map(function (spell) {
        return el("li", {}, "Level " + spell.level + " " + spell.name + ". " + spell.detail);
      })));
    }
    if (sheet.log.length) {
      const lines = [];
      sheet.log.forEach(function (step) {
        lines.push(el("li", {}, "Level " + step.level + ": +" + step.hpGain + " HP. " + step.lines.join(". ") + "."));
      });
      children.push(el("h3", {}, "Level-up dice"));
      children.push(el("ul", { class: "clean" }, lines));
    }
    return el("article", { class: "sheet" }, children);
  }

  function creatureArticle(creature) {
    const typeDie = creature.typeDie == null ? "chosen" : "rolled " + creature.typeDie;
    const children = [
      el("h2", {}, creature.name),
      el("p", { class: "muted" }, creature.typeId + " " + creature.typeName + " (" + typeDie + "). " + creature.typeBlurb),
      el("p", {}, "Creature die " + creature.natural + (creature.modifier ? " with modifier " + creature.modifier + " = " + creature.adjusted : "") + ". Using row " + creature.face + "."),
      diceFaces(creature.hpDice),
      el("div", { class: "facts" }, [
        el("div", { class: "fact" }, [el("strong", {}, "HD"), String(creature.hd), el("small", {}, "Table says " + creature.hdLabel + ". HP is that many d6.")]),
        el("div", { class: "fact" }, [el("strong", {}, "HP"), String(creature.hp), el("small", {}, "Dice " + creature.hpDice.join(", ") + ".")]),
        el("div", { class: "fact" }, [el("strong", {}, "Armor"), String(creature.ap), el("small", {}, "1 point for each HD above 1, maximum 10.")])
      ]),
      el("p", {}, creature.description)
    ];
    if (creature.actions) children.push(el("p", {}, "Actions column: " + creature.actions));
    if (creature.note) children.push(el("p", { class: "note" }, creature.note));
    children.push(el("p", { class: "muted" }, "Creatures do not make attribute checks. Only the damage roll uses their Hit Dice. If the description names different hit points, use that."));
    return el("article", { class: "sheet" }, children);
  }

  function reactionBlock(reaction) {
    return el("div", { class: "stack" }, reaction.chain.map(function (step, index) {
      const prefix = reaction.chain.length > 1 ? "Roll " + (index + 1) + ": " : "";
      return el("p", {}, prefix + step.dice[0] + " + " + step.dice[1] + " = " + step.total + ". " + step.text);
    }));
  }

  function entryBody(entry) {
    return [
      el("h3", {}, entry.name),
      entry.detail ? el("p", {}, entry.detail) : null,
      el("p", { class: "muted" }, entry.listTitle)
    ];
  }

  function plainSheet(sheet) {
    const lines = [
      sheet.name || "Unnamed",
      sheet.type + " · " + sheet.className + " (" + sheet.aka + ") · level " + sheet.level,
      ""
    ];
    sheet.attributes.forEach(function (attr) {
      lines.push(attr.key + " " + attr.score + " — " + attr.note);
    });
    lines.push("", "HP " + sheet.hp + " (hit die " + sheet.hpDie + ")", "AP " + sheet.ap, "HP recovery: " + sheet.recovery, "Attack: " + sheet.attack, "Coins: " + sheet.coins);
    lines.push("", "Tools: " + sheet.tools.map(function (tool) { return tool.name + " " + tool.rating; }).join(", "));
    lines.push("", "Gear:");
    sheet.gear.forEach(function (item) { lines.push("- " + item); });
    lines.push("", "Features:");
    sheet.features.forEach(function (feature) { lines.push("- " + feature); });
    if (sheet.spells.length) {
      lines.push("", "Spells:");
      sheet.spells.forEach(function (spell) { lines.push("- Level " + spell.level + " " + spell.name + ". " + spell.detail); });
    }
    if (sheet.log.length) {
      lines.push("", "Level-up:");
      sheet.log.forEach(function (step) {
        lines.push("- Level " + step.level + ": +" + step.hpGain + " HP. " + step.lines.join(". "));
      });
    }
    return lines.join("\n");
  }

  function plainAdventure(adventure) {
    function block(label, entry) {
      return label + ": " + entry.name + (entry.detail ? " — " + entry.detail : "") + " [" + entry.listTitle + "]";
    }
    const lines = [
      block("Background", adventure.background),
      block("Objective", adventure.objective),
      block("Destination", adventure.destination),
      block("Key NPC", adventure.npc),
      "",
      "Journey:"
    ];
    adventure.journey.forEach(function (entry, index) {
      lines.push((index + 1) + ". " + entry.name + (entry.detail ? " — " + entry.detail : "") + " [" + entry.listTitle + "]");
    });
    lines.push("", block("Boss", adventure.boss), block("Reward", adventure.reward), block("Conclusion", adventure.conclusion));
    lines.push("", "Resolve anything risky with a d6 roll-under check.");
    return lines.join("\n");
  }

  if (typeof document !== "undefined") {
    function applyTheme(theme) {
      document.body.classList.toggle("neon", theme === "neon");
      document.querySelectorAll("[data-theme]").forEach(function (button) {
        button.classList.toggle("active", button.getAttribute("data-theme") === theme);
        if (button.getAttribute("data-theme") === theme) button.setAttribute("aria-pressed", "true");
        else button.setAttribute("aria-pressed", "false");
      });
    }
    document.querySelectorAll("[data-theme]").forEach(function (button) {
      button.addEventListener("click", function () { applyTheme(button.getAttribute("data-theme")); });
    });
    applyTheme("paper");
  }

  root.UI = {
    el: el,
    diceFaces: diceFaces,
    notes: notes,
    renderCheck: renderCheck,
    sheetArticle: sheetArticle,
    creatureArticle: creatureArticle,
    reactionBlock: reactionBlock,
    entryBody: entryBody,
    plainSheet: plainSheet,
    plainAdventure: plainAdventure
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
