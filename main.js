"use strict";

let graph = document.querySelector("[data-graph]");
let amount = 10

updateAmount()
function updateAmount() {
    console.log(document.querySelector("[data-amount]").value);
    if (!(document.querySelector("[data-amount]").value == "")) {
        amount = document.querySelector("[data-amount]").value;
        console.log("pog");
    }

    console.log(amount);

    for (let i = 0; i < amount; i++) {
        let pillar = document.createElement("div");
        pillar.setAttribute("value", i);
        pillar.classList.add("pillar");
        pillar.style.height = i*20 + "px";
        graph.append(pillar);
    }
}

function shuffle() {

}

function sort() {

}