"use strict";

let graph = document.querySelector("[data-graph]");
let amount = 10

updateAmount()
function updateAmount() {
    if (!(document.querySelector("[data-amount]").value == "")) {
        amount = document.querySelector("[data-amount]").value;
    }

    while (graph.hasChildNodes()) {
        graph.removeChild(graph.firstChild);
      }

    for (let i = 0; i < amount; i++) {
        let pillar = document.createElement("div");
        pillar.setAttribute("value", i);
        pillar.classList.add("pillar");
        graph.append(pillar);
    }
    updateDisplay();
}

function updateDisplay() {
    for (let i = 0; i < amount; i++) {
        let pillar = graph.children[i];
        pillar.style.height = (pillar.getAttribute("value") + 1)*5 + "px";
    }
}

function shuffle() {
    console.log("shuffle");
    for (let i = 0; i < amount; i++) {
        let temp = graph.children[i].getAttribute("value");
        let rand = Math.floor(Math.random() * amount);
        console.log(temp + ", " + rand);
        graph.children[i].setAttribute("value", graph.children[rand].getAttribute("value"));
        graph.children[rand].setAttribute("value", temp);
        updateDisplay();
    }
    
}

function sort() {

}