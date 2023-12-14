let myData;
let footballButton = document.getElementById("btn-football");
let basketballButton = document.getElementById("btn-basketball");
let questionElement = document.querySelector(".question");
let buttons = [];
let pAnswer = document.querySelector(".answer-inputs");

// let attempts = 0;
// const maxAttempts = 3;
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    myData = data;

    footballButton.addEventListener("click", () => {
      const randomFootballQuestion = generateRandomQuestion("Football");
      const question = randomFootballQuestion.question;
      const answer = randomFootballQuestion.answer;
      let attempts = 3; // Initialize the attempts
    
      questionElement.innerHTML = question;
    
      pAnswer.innerHTML = "";
      const inputLetters = []; // Array to store input elements
    
      for (let i = 0; i < answer.length; i++) {
        let inputLetter = document.createElement("input");
        inputLetter.type = "text";
        inputLetter.className = "inputText";
        inputLetter.maxLength = 1;
        inputLetter.style.width = "30px";
        pAnswer.appendChild(inputLetter);
        inputLetters.push(inputLetter);
      }
    
      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          const clickedLetter = button.textContent.toLowerCase();
          let correct = false; // Variable to track if the button was correct
    
          for (let i = 0; i < answer.length; i++) {
            if (clickedLetter === answer[i].toLowerCase()) {
              inputLetters[i].value = answer[i];
              inputLetters[i].style.backgroundColor = "rgba(204, 237, 75, 1)";
              inputLetters[i].style.color = "black";
              correct = true; // Set the variable to true if the button was correct
            }
          }
    
          // Check if the button was incorrect
          if (!correct) {
            if(attempts ===0 ){
              questionElement.innerHTML = "Game Over";
              
            }
            attempts--
            console.log(attempts);

          }
        });
      });
    });

    basketballButton.addEventListener("click", () => {
    
      const randomFootballQuestion= generateRandomQuestion("Basketball");
      const question = randomFootballQuestion.question;
      const answer = randomFootballQuestion.answer;
      questionElement.innerHTML = question;

      pAnswer.innerHTML = "";
      for (let i = 0; i < answer.length; i++) {
        let inputLetter = document.createElement("input");
        inputLetter.type = "text";
        inputLetter.className = "inputText";
        inputLetter.maxLength = 1;
        inputLetter.style.width = "30px";
        pAnswer.appendChild(inputLetter);

        buttons.forEach((button) => {
          button.addEventListener("click", function () {
            if (button.textContent === answer[i].toLowerCase()) {
              inputLetter.value = answer[i];
              inputLetter.style.backgroundColor = "rgba(204, 237, 75, 1)";
              inputLetter.style.color = "black";
            }
          });
        });
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function generateRandomQuestion(category) {
  const questions = myData[category];
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  return { question: randomQuestion.question, answer: randomQuestion.answer  };
}

function getButtonText() {
  buttons.forEach((button) => {
    button.addEventListener("click", (b) => {
      const buttonText = b.target.textContent;
      console.log(buttonText);
    });
  });
}
// function handleAttempt() {
//   attempts++;
//   if (attempts === maxAttempts) {
//     questionElement.innerHTML = "Game Over";
//   }
// }


function createButton(letter) {
  let button = document.createElement("button");
  button.className = "button";
  button.textContent = letter;
  return button;
}
let buttonsContainer = document.querySelector(".buttons-container");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");

let lettersLine1 = ["a", "b", "c", "d", "e", "f", "j", "h", "i"];
let lettersLine2 = ["g", "k", "l", "m", "n", "o", "p", "q"];
let lettersLine3 = ["r", "s", "t", "u", "v", "w", "x", "y", "z"];

lettersLine1.forEach(function (letter) {
  let button = createButton(letter);
  line1.appendChild(button);
  buttons.push(button);
});

lettersLine2.forEach(function (letter) {
  let button = createButton(letter);
  line2.appendChild(button);
  buttons.push(button);
});

lettersLine3.forEach(function (letter) {
  let button = createButton(letter);
  line3.appendChild(button);
  buttons.push(button);
});

