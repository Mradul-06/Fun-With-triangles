const quizForm = document.querySelector("#quizForm")
const submitBtn = document.querySelector("#btn-submit")
const outputDiv = document.querySelector(".output-div")

const quizAnswers = ["90°","rightangled","one right angle","14-15-26"]

function clickHandler(e){
    e.preventDefault()
    let score = 0
    let index = 0
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        console.log(value)
         if(value === quizAnswers[index]){
             score = score + 1;
        ``
         }
         index = index + 1;
        }
        console.log(score)
        outputDiv.innerText = `your score is ${score}`
}

submitBtn.addEventListener("click",clickHandler)

