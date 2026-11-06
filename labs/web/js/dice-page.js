(function () {
  "use strict";

  const UI = window.UI;
  const SRPG = window.SRPG;
  const GENERATE = window.GENERATE;
  const checkForm = document.getElementById("check-form");
  const checkResult = document.getElementById("check-result");
  const extraResult = document.getElementById("extra-result");
  const poolResult = document.getElementById("pool-result");
  const damageResult = document.getElementById("damage-result");
  let lastCheck = null;

  function show(target, node) {
    target.replaceChildren(node);
  }

  checkForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const attribute = Number(document.getElementById("attribute").value);
    const modifier = Number(document.getElementById("modifier").value || 0);
    if (!Number.isFinite(attribute) || !Number.isFinite(modifier)) {
      checkResult.textContent = "Enter a number for the attribute and the modifier.";
      return;
    }
    lastCheck = SRPG.rollCheck({
      attribute: attribute,
      modifier: modifier,
      mode: checkForm.querySelector("input[name=mode]:checked").value,
      kind: checkForm.querySelector("input[name=kind]:checked").value
    });
    show(checkResult, UI.renderCheck(lastCheck));
    document.getElementById("doubled").checked = !!lastCheck.critical;
  });

  document.getElementById("damage-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const count = Number(document.getElementById("damage-count").value);
    const modifier = Number(document.getElementById("damage-mod").value || 0);
    if (!Number.isFinite(count) || count < 1) {
      damageResult.textContent = "Roll at least one d6.";
      return;
    }
    const doubled = document.getElementById("doubled").checked;
    const damage = SRPG.rollDamage(count, modifier, doubled, Math.random);
    const line = doubled
      ? "Dice " + damage.sum + ", doubled to " + (damage.sum * 2) + ", then modifier " + modifier + ". Total " + damage.total + "."
      : "Dice " + damage.sum + " with modifier " + modifier + ". Total " + damage.total + ".";
    show(damageResult, UI.el("div", { class: "stack" }, [
      UI.diceFaces(damage.dice),
      UI.el("p", {}, line),
      UI.el("p", { class: "muted" }, "Armor Points still reduce damage after this total. A critical doubles the dice, then adds a flat modifier once.")
    ]));
  });

  document.getElementById("pool-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const count = Number(document.getElementById("pool-count").value);
    const modifier = Number(document.getElementById("pool-mod").value || 0);
    if (!Number.isFinite(count) || count < 1) {
      poolResult.textContent = "Roll at least one d6.";
      return;
    }
    const pool = SRPG.rollPool(count, 6, modifier);
    show(poolResult, UI.el("div", { class: "stack" }, [
      UI.diceFaces(pool.dice),
      UI.el("p", {}, modifier
      ? "Total " + pool.total + " (dice " + pool.sum + ", modifier " + modifier + ")."
      : "Total " + pool.total + ".")
    ]));
  });

  document.getElementById("btn-encounter").addEventListener("click", function () {
    const watch = GENERATE.travelWatch();
    const children = [
      UI.diceFaces([watch.roll], watch.roll),
      UI.el("p", {}, watch.encounter
        ? "Encounter. A result of 1 or 2 means the next turn brings one."
        : "No encounter. Only a 1 or 2 brings one on the next turn.")
    ];
    if (watch.reaction) {
      children.push(UI.el("h3", {}, "Reaction"));
      children.push(UI.reactionBlock(watch.reaction));
    }
    show(extraResult, UI.el("div", {}, children));
  });

  document.getElementById("btn-reaction").addEventListener("click", function () {
    show(extraResult, UI.reactionBlock(GENERATE.rollReaction()));
  });

  document.getElementById("btn-ooa").addEventListener("click", function () {
    const roll = GENERATE.rollRecovery();
    const children = [
      UI.diceFaces(roll.dice),
      UI.el("p", { class: "outcome " + (roll.total === 12 ? "failure" : "success") }, roll.total + ". " + roll.text)
    ];
    if (roll.hp) {
      children.push(UI.el("p", {}, "A survivor gains 1d6−2 HP. Rolled " + roll.hp.die + ", so " + roll.hp.total + " HP."));
    }
    show(extraResult, UI.el("div", {}, children));
  });

  document.getElementById("btn-coins").addEventListener("click", function () {
    const coins = GENERATE.rollCoins();
    show(extraResult, UI.el("div", {}, [
      UI.diceFaces([coins.die]),
      UI.el("p", {}, coins.die + " × 10 = " + coins.coins + " coins.")
    ]));
  });
})();
