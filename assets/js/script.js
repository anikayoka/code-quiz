var timeLeft = 60;

var questions = [
  {
    question: "Commonly used data types do NOT include:",
    choices: ["a. Strings", "b. Booleans", "c. Alerts", "d. Numbers"],
    answer: "c. Alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["a. Quotes", "b. Parenthesis", "c. Curly Brackets", "d. Square Brackets"],
    answer: "b. Parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["a. Numbers and Strings", "b. Other Arrays", "c. Booleans", "d. All of the above"],
    answer: "d. All of the above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["a. Commas", "b. Curly Brackets", "c. Quotes", "d. Parenthesis"],
    answer: "c. Quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["a. JavaScript", "b. Terminal Bash", "c. for loops", "d. console.log"],
    answer: "d. console.log"
  }
];
var index = 0

var startQuiz = document.getElementById("start-quiz") 
var questionContainer = document.getElementById("questions-container")
var questionEl = document.getElementById("question")
var option1EL = document.getElementById("option1")
var option2EL = document.getElementById("option2")
var option3EL = document.getElementById("option3")
var option4EL = document.getElementById("option4")

var timerEl = document.getElementById('timer');

option1EL.addEventListener('click', checkAnswer)
option2EL.addEventListener('click', checkAnswer) 
option3EL.addEventListener('click', checkAnswer) 
option4EL.addEventListener('click', checkAnswer) 


function checkAnswer() {
  console.log(this.textContent)
}


// Timer that counts down from 60
function timer() {
 

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    console.log (timeLeft)
    timeLeft--

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'Time Up!!';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

startQuiz.addEventListener ("click",function(){
  questionContainer.classList.remove("hidden")
  document.getElementById("intro-container").classList.add("hidden")
  displayQuestions()
  timer()


})

function displayQuestions() {
  questionEl.textContent=questions[index].question
  option1EL.textContent=questions[index].choices[0]
  option2EL.textContent=questions[index].choices[1]
  option3EL.textContent=questions[index].choices[2]
  option4EL.textContent=questions[index].choices[3]
}