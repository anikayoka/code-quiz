var timeLeft = 45;
var timeInterval;
var results = 0;

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
    choices: ["a. Numbers & Strings", "b. Other Arrays", "c. Booleans", "d. All of the above"],
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


// MAIN PAGE
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

var correctAnswer = 0


var resultsContainer = document.getElementById("results-container")
var finalScore = document.getElementById("final-score")
var initialsEl = document.getElementById("results-initials")
var submitBtn = document.getElementById("initlas-btn")


var viewHighscore = document.getElementById("view-hs")
var highscoreContainer = document.getElementById("hs-container")
var scoreList = document.getElementById("highscores")
var backBtn = document.getElementById("back")
var clearBtn = document.getElementById("clear")

// var score = timeLeft

function checkAnswer() {
  console.log(this.textContent)
  var answerCorrect = this.textContent
  if (answerCorrect == questions[index].answer) {
    correctAnswer += 5
    document.getElementById("correct").classList.remove("hidden")
  } else {
    document.getElementById("wrong").classList.remove("hidden")
    timeLeft -= 5
  }
  if (index < questions.length - 1) {
    index++
    setTimeout(function(){
    displayQuestions()
    },1000)
  } else {
      displayResults();

    clearInterval(timeInterval);
    
    displayMessage();
  }
}

// Timer that counts down from 45
function timer() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
   timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    console.log(timeLeft)
    timeLeft--

    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '0';

      displayResults();
      
      clearInterval(timeInterval);
     
      displayMessage();
    }
  }, 1000);
  

}

startQuiz.addEventListener("click", function () {
  questionContainer.classList.remove("hidden")
  document.getElementById("intro-container").classList.add("hidden")
  displayQuestions()
  timer()


})

function displayQuestions() {
  questionEl.textContent = questions[index].question
  option1EL.textContent = questions[index].choices[0]
  option2EL.textContent = questions[index].choices[1]
  option3EL.textContent = questions[index].choices[2]
  option4EL.textContent = questions[index].choices[3]
  document.getElementById("correct").classList.add("hidden")
  document.getElementById("wrong").classList.add("hidden")
}

function displayMessage() {
  questionContainer.classList.add("hidden")
}

function displayResults() {
  document.getElementById("results-container").classList.remove("hidden")
  console.log(finalScore)
  finalScore.textContent = timeLeft;
}

function highScore() {
  submitBtn.addEventListener('click', function () {
  
    var id = initialsEl.value
    var score = timeLeft;
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    if(id.length > 0) {
      var newScore = {
        id,
        score
      }
      console.log(id)
      scoreList.classList.remove('hidden')
      highscoreContainer.classList.add('hidden')
      scoreList.classList.add('hidden')
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));

      if (highscores !== undefined) {
        highscores.sort(function(a,b) {
          return b.score - a.score
        })
        highscores.forEach(function(score) { 
          console.log(score)
          var li = document.createElement("li");
          li.innerHTML = "<h4>" + score.id + " " +score.score + "</h4>"
          var ulEl = document.getElementById('newScores');
          ulEl.appendChild(li)
        })
      }
    }
    console.log(highscores);
  })     
};

