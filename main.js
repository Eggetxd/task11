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
        pillar.style.height = (i+1)*5 + "px";
        graph.append(pillar);
    }
}

function shuffle() {
    console.log("shuffle");
    for (let i = 0; i < amount; i++) {
        let temp = graph. children[i];
        let rand = Math.floor(Math.random() * amount);
        console.log(temp.value + ", " + rand);
        graph.children[i].replaceChild(newNode, graph.children[rand]);
        graph.children[rand].replaceChild(newNode, temp);
    }
    
}

function sort() {

}