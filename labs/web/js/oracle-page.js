(function () {
  "use strict";

  const UI = window.UI;
  const GENERATE = window.GENERATE;
  const log = [];
  const list = document.getElementById("log");
  const empty = document.getElementById("empty-log");

  function render() {
    empty.hidden = log.length > 0;
    list.replaceChildren.apply(list, log.map(function (item) {
      if (item.kind === "oracle") {
        const children = [
          UI.el("p", { class: "q" }, item.question || "Yes or no?"),
          UI.diceFaces(item.result.dice, item.result.kept),
          UI.el("p", { class: "outcome " + (item.result.kept <= 3 ? "success" : "failure") }, item.result.answer),
          UI.el("p", { class: "muted" }, item.result.mode === "advantage" ? "Likely: kept the lower die." : item.result.mode === "disadvantage" ? "Unlikely: kept the higher die." : "Even odds: one d6.")
        ];
        if (item.result.twist) children.push(UI.el("p", {}, "Spark: " + item.result.twist + "."));
        return UI.el("li", {}, children);
      }
      if (item.kind === "twist") {
        return UI.el("li", {}, UI.el("p", {}, "Spark: " + item.text + "."));
      }
      const children = [
        UI.el("p", {}, "Travel watch"),
        UI.diceFaces([item.watch.roll], item.watch.roll),
        UI.el("p", {}, item.watch.encounter ? "Encounter on the next turn." : "No encounter.")
      ];
      if (item.watch.reaction) children.push(UI.reactionBlock(item.watch.reaction));
      return UI.el("li", {}, children);
    }));
  }

  document.getElementById("ask-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const question = document.getElementById("question").value.trim();
    const likelihood = document.querySelector("input[name=odds]:checked").value;
    const mode = likelihood === "likely" ? "advantage" : likelihood === "unlikely" ? "disadvantage" : "normal";
    log.unshift({ kind: "oracle", question: question, result: GENERATE.rollOracle(mode) });
    if (log.length > 20) log.pop();
    render();
  });

  document.getElementById("spark").addEventListener("click", function () {
    log.unshift({ kind: "twist", text: GENERATE.rollTwist() });
    if (log.length > 20) log.pop();
    render();
  });

  document.getElementById("travel").addEventListener("click", function () {
    log.unshift({ kind: "travel", watch: GENERATE.travelWatch() });
    if (log.length > 20) log.pop();
    render();
  });
})();
