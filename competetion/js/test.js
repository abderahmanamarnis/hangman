let myData;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    myData = data;

    let buttonFootbal = document.getElementById("football")
    buttonFootbal.addEventListener("click",function(){

      const questions = myData.Football;
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestion = questions[randomIndex];
 
      let pAnswer = document.querySelector('.insert-inputs');
      pAnswer.innerHTML = "";
      for (let i = 0; i < randomQuestion.answer.length; i++){
        console.log(randomQuestion.answer[i])
        let inputLetter = document.createElement("input");
        inputLetter.type = "text";
        inputLetter.className = "inputText";
        inputLetter.maxlength = 1;
        inputLetter.style.width = "30px";
        pAnswer.appendChild(inputLetter);
        buttons.forEach((button, index) => {
          button.addEventListener('click', function () {
            if (button.textContent === randomQuestion.answer[i].toLowerCase() ) {
              inputLetter.value = randomQuestion.answer[i];
              let 
            }
            else {

            }

          });
        })

      }

    })
    //
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });