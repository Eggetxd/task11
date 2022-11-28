"use strict";

let graph = document.querySelector("[data-graph]");
let amount = 10;

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
        let value = pillar.getAttribute("value");
        value++;
        pillar.style.height = value*5 + "px";
        pillar.style.backgroundColor = "black";
    }
}

function slep(milliseconds) {
    let time = Date.now();
    let newTime = Date.now();
    while (time + milliseconds > newTime) {
        newTime = Date.now();
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
        
        
        setTimeout(updateDisplay(), 1000);
    }
}

function sort() {
    console.log("sort");
    let sorted = true;
    while (sorted) {
        sorted = false;
        for (let i = 0; i < amount-1; i++) {
            if (graph.children[i].getAttribute("value") > graph.children[i+1].getAttribute("value")) {
                let temp = graph.children[i].getAttribute("value");
                graph.children[i].setAttribute("value", graph.children[i+1].getAttribute("value"));
                graph.children[i+1].setAttribute("value", temp);
                sorted = true;
            }
        }
    }
    updateDisplay();
}