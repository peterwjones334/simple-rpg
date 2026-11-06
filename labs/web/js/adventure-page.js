(function () {
  "use strict";

  const UI = window.UI;
  const GENERATE = window.GENERATE;
  const TABLES = window.TABLES;
  const outline = document.getElementById("outline");
  const plain = document.getElementById("plain");
  const single = document.getElementById("single-result");
  const listSelect = document.getElementById("list-id");
  let adventure = null;

  Object.keys(TABLES.lists).forEach(function (id) {
    listSelect.appendChild(UI.el("option", { value: id }, TABLES.lists[id].title));
  });

  function options() {
    return {
      strange: document.getElementById("strange").checked,
      unbeatable: document.getElementById("unbeatable").checked
    };
  }

  function card(entry, slot, index) {
    const button = UI.el("button", {
      type: "button",
      class: "secondary",
      "data-slot": slot
    }, "Roll again");
    if (index != null) button.setAttribute("data-index", String(index));
    return UI.el("div", { class: "card" }, UI.entryBody(entry).concat(button));
  }

  function render() {
    if (!adventure) return;
    outline.replaceChildren(UI.el("div", {}, [
      card(adventure.background, "background"),
      card(adventure.objective, "objective"),
      card(adventure.destination, "destination"),
      card(adventure.npc, "npc"),
      UI.el("h2", {}, "Journey"),
      UI.el("div", {}, adventure.journey.map(function (entry, index) {
        return card(entry, "journey", index);
      })),
      card(adventure.boss, "boss"),
      card(adventure.reward, "reward"),
      card(adventure.conclusion, "conclusion"),
      UI.el("p", { class: "rule" }, "Resolve anything that can fail with the short rules: roll under an attribute on a d6.")
    ]));
    plain.textContent = UI.plainAdventure(adventure);
  }

  document.getElementById("roll-adventure").addEventListener("click", function () {
    adventure = GENERATE.rollAdventure(options());
    render();
  });

  outline.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-slot]");
    if (!button || !adventure) return;
    const slot = button.getAttribute("data-slot");
    const index = button.hasAttribute("data-index") ? Number(button.getAttribute("data-index")) : null;
    adventure = GENERATE.rerollSlot(adventure, slot, index, options());
    render();
  });

  document.getElementById("roll-one").addEventListener("click", function () {
    const entry = GENERATE.rollEntry(listSelect.value);
    single.replaceChildren(UI.el("div", { class: "card" }, UI.entryBody(entry)));
  });
})();
