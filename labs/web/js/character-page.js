(function () {
  "use strict";

  const UI = window.UI;
  const GENERATE = window.GENERATE;
  const TABLES = window.TABLES;
  const nameInput = document.getElementById("name");
  const sheetMount = document.getElementById("sheet");
  const plain = document.getElementById("plain");
  const swapNote = document.getElementById("swap-note");
  let current = null;

  TABLES.attributes.forEach(function (key) {
    ["swap-a", "swap-b"].forEach(function (id) {
      document.getElementById(id).appendChild(UI.el("option", { value: key }, key));
    });
  });
  document.getElementById("swap-b").value = "DEX";

  function options() {
    return {
      classId: document.getElementById("class-id").value,
      level: document.getElementById("level").value,
      focus: document.getElementById("focus").checked,
      type: "PC"
    };
  }

  function render() {
    if (!current) return;
    const sheet = Object.assign({}, current.sheet, { name: nameInput.value });
    sheetMount.replaceChildren(UI.sheetArticle(sheet));
    plain.textContent = UI.plainSheet(sheet);
    if (current.state.swap) {
      swapNote.textContent = "Creation scores swapped: " + current.state.swap[0] + " and " + current.state.swap[1] + ". Level-up dice were kept and applied again.";
    } else {
      swapNote.textContent = "No swap yet. One pair of creation scores may be swapped.";
    }
  }

  document.getElementById("generate").addEventListener("click", function () {
    const keepName = document.getElementById("keep-name").checked && nameInput.value.trim();
    current = GENERATE.generateCharacter(Object.assign(options(), {
      name: keepName ? nameInput.value.trim() : undefined
    }));
    if (!keepName) nameInput.value = current.sheet.name;
    render();
  });

  nameInput.addEventListener("input", render);

  document.getElementById("apply-swap").addEventListener("click", function () {
    if (!current) {
      swapNote.textContent = "Roll a character first.";
      return;
    }
    const a = document.getElementById("swap-a").value;
    const b = document.getElementById("swap-b").value;
    if (a === b) {
      swapNote.textContent = "Choose two different attributes.";
      return;
    }
    current = GENERATE.withSwap(current.state, [a, b]);
    render();
  });

  document.getElementById("clear-swap").addEventListener("click", function () {
    if (!current) return;
    current = GENERATE.withSwap(current.state, null);
    render();
  });
})();
