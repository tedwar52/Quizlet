const start = document.getElementById('startbtn')
const questionsElement = document.getElementById('question-container')
start.addEventListener('click', startQuiz)
function startQuiz() {
    console.log("started")
    startButton.classList.add('hide')
    questionsElement.classList.remove('hide')
    setNextQuestion()
}

var button = document.querySelector("button");
var questions = [
    {
        question: "What is 2+2?",
        answers: [A = "1", B = "2", C = "3", D = "4"],
        correctAnswer = D
    },
    {
        question = "What is 2-2?",
        answers =[A = "0", B = "1", C = "2", D = "3"],
        correctAnswer = A
    },
    {
        question = "What is 2*2?",
        answers =[A = "2", B = "4", C = "6", D = "8"],
        correctAnswer = B
    },
];
console.log(correctAnswer1)
function StartTimer() {
    button.addEventListener("click")
    var sec = 60
}

var highscores =[]



