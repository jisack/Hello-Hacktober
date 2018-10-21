"use strict";
const greetRate = 50;
function helloWorld(applause) {
  if (applause > 0) {
    console.log("Hello world!");
  }
  console.log("No applause :(");
}

function greedyWithName(name) {
  console.log("Greedy, " + name);
}

greedyWithName("Jack");
