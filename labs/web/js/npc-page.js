(function () {
  "use strict";

  const UI = window.UI;
  const GENERATE = window.GENERATE;
  const personMount = document.getElementById("person");
  const creatureMount = document.getElementById("creature");
  const typeSelect = document.getElementById("creature-type");
  window.TABLES.creatures.forEach(function (group, index) {
    typeSelect.appendChild(UI.el("option", { value: String(index + 1) }, group.id + " " + group.name));
  });

  document.getElementById("person-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const npc = GENERATE.generateNpc({
      classId: document.getElementById("class-id").value,
      level: document.getElementById("level").value,
      focus: document.getElementById("focus").checked,
      type: "NPC"
    });
    const sheet = npc.character.sheet;
    personMount.replaceChildren(UI.el("div", {}, [
      UI.el("article", { class: "sheet" }, [
        UI.el("h2", {}, sheet.name),
        UI.el("p", {}, npc.archetype.name),
        UI.el("p", {}, npc.archetype.detail),
        UI.el("h3", {}, "First reaction"),
        UI.reactionBlock(npc.reaction),
        UI.el("h3", {}, "Hook"),
        UI.el("p", {}, npc.hook.name + ". " + npc.hook.detail)
      ]),
      UI.sheetArticle(sheet)
    ]));
  });

  document.getElementById("creature-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const choice = document.getElementById("creature-type").value;
    const modifier = Number(document.getElementById("creature-mod").value || 0);
    if (!Number.isFinite(modifier)) {
      creatureMount.textContent = "Enter a number for the modifier.";
      return;
    }
    const options = { modifier: modifier };
    if (choice === "roll7") options.constructs = true;
    else if (choice !== "roll6") options.type = Number(choice);
    creatureMount.replaceChildren(UI.creatureArticle(GENERATE.rollCreature(options)));
  });
})();
