let myData;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    myData = data;
  })


function createButton(letter) {
   var button = document.createElement("button");
   button.className = "button";
   button.textContent = letter;
   return button;
 }
var buttonsContainer = document.querySelector(".buttons-container");

var line1 = document.querySelector(".line-1");
var line2 = document.querySelector(".line-2");
var line3 = document.querySelector(".line-3");

var lettersLine1 = ["a", "b", "c", "d", "e", "f", "j", "h", "i"];
var lettersLine2 = ["g", "k", "l", "m", "n", "o", "p", "q"];
var lettersLine3 = ["r", "s", "t", "u", "v", "w", "x", "y", "z"];

var buttons = [];

lettersLine1.forEach(function (letter) {
  var button = createButton(letter);
  line1.appendChild(button);
  buttons.push(button);
});

lettersLine2.forEach(function (letter) {
  var button = createButton(letter);
  line2.appendChild(button);
  buttons.push(button);
});

lettersLine3.forEach(function (letter) {
  var button = createButton(letter);
  line3.appendChild(button);
  buttons.push(button);
});
