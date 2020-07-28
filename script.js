//Grabs Start Button Element
var startButton = document.getElementById("startBtn");

//Grabs NavBar Time Element
var timeElement = document.getElementById("time");

//Grabs Main Screen Element
var mainScreenElement = document.getElementById("mainScreen");

//Grabs Question Screen Element
var questionScreenElement = document.getElementById("questionScreen");

//Grabs the Question Element to fill
var questionElement = document.getElementById("question");

//Grabs Answer buttons Element
var answerButtonsElement = document.getElementById("answerButtons");

//Grabs all Answer Button Elements to fill
var answer1Button = document.getElementById("answer1btn");
var answer2Button = document.getElementById("answer2btn");
var answer3Button = document.getElementById("answer3btn");
var answer4Button = document.getElementById("answer4btn");

//Grabs the response Element to fill
var responseElement = document.getElementById("response");

//Grabs the final score screen
var finalscoreScreenElement = document.getElementById("finalscoreScreen");

//Grabs the final score Element to fill
var scoreElement = document.getElementById("score");

//Quiz Question Array
var quizQuestions = [
  {
    question: "Question 1?",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    choice4: "d",
    correct: "a",
  },
  {
    question: "Question 2?",
    choice1: "e",
    choice2: "f",
    choice3: "g",
    choice4: "h",
    correct: "f",
  },
  {
    question: "Question 3?",
    choice1: "i",
    choice2: "j",
    choice3: "k",
    choice4: "l",
    correct: "k",
  },
  {
    question: "Question 4?",
    choice1: "m",
    choice2: "n",
    choice3: "o",
    choice4: "p",
    correct: "p",
  },
  {
    question: "Question 5?",
    choice1: "m",
    choice2: "n",
    choice3: "o",
    choice4: "p",
    correct: "p",
  },

  {
    question: "Question 6?",
    choice1: "m",
    choice2: "n",
    choice3: "o",
    choice4: "p",
    correct: "p",
  },
];

//Initilizing Questions
var questionIndex = 0;
var secondsLeft = 60;

//Pressing the start button, starts the quiz
startButton.addEventListener("click", startQuiz);

//Starts the quiz and hides the Start Screen

function startQuiz() {
  setTime();

  mainScreenElement.classList.add("hide");
  questionScreenElement.classList.remove("hide");

  question();
}

//Starts timing the quiz

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      finalScore();
    }

    // if (secondsLeft <= 0) {
    //   timerInterval = 0;
    // }
  }, 1000);
}

//Checks if the answer buttons were clicked
answer1Button.addEventListener("click", checkAnswer);
answer2Button.addEventListener("click", checkAnswer);
answer3Button.addEventListener("click", checkAnswer);
answer4Button.addEventListener("click", checkAnswer);

//Code for showing the next question as well as the choices

function question() {
  questionElement.textContent = quizQuestions[questionIndex].question;

  answer1Button.textContent = quizQuestions[questionIndex].choice1;
  answer1Button.setAttribute(
    "data-answer",
    quizQuestions[questionIndex].choice1
  );

  answer2Button.textContent = quizQuestions[questionIndex].choice2;
  answer2Button.setAttribute(
    "data-answer",
    quizQuestions[questionIndex].choice2
  );

  answer3Button.textContent = quizQuestions[questionIndex].choice3;
  answer3Button.setAttribute(
    "data-answer",
    quizQuestions[questionIndex].choice3
  );

  answer4Button.textContent = quizQuestions[questionIndex].choice4;
  answer4Button.setAttribute(
    "data-answer",
    quizQuestions[questionIndex].choice4
  );
}

//Code to check the correct answer
function checkAnswer() {
  var answer = quizQuestions[questionIndex].correct;

  if (answer === event.target.getAttribute("data-answer")) {
    responseElement.textContent = "Correct!";
    questionIndex++;
    question();
  } else {
    secondsLeft = secondsLeft - 10;
    responseElement.textContent = "Wrong!";
    questionIndex++;
    question();
  }
}

//Code to check the correct answer
function finalScore() {
  questionScreenElement.classList.add("hide");
  finalscoreScreenElement.classList.remove("hide");
  scoreElement.textContent = "Your Final Score is: " + secondsLeft;
}
