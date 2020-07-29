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

//Grabs the Submit Button from the final Score Screen
var submitButton = document.getElementById("submitBtn");

//Grabs the display message element to fill
var displayMessageElement = document.getElementById("displaymessage");

//Initilizing Questions
var questionIndex = 0;
var secondsLeft = 60;

//Quiz Question Array
var quizQuestions = [
  {
    question: "Which built-in method sorts the elements of an array?",
    choice1: "changeOrder(order)",
    choice2: "order()",
    choice3: "sort()",
    choice4: "random()",
    correct: "sort()",
  },
  {
    question:
      "Which of the following is the correct syntax to display “Oscar is Awesome” in an alert box using JavaScript?",
    choice1: "alertbox(“Oscar is Awesome”)",
    choice2: "msg(“Oscar is Awesome”)",
    choice3: "msgbox(“Oscar is Awesome”)",
    choice4: "alert(“Oscar is Awesome”)",
    correct: "alert(“Oscar is Awesome”)",
  },
  {
    question:
      "Which is the correct if statements to execute certain code if “x” is equal to 2?",
    choice1: "if(x 2)",
    choice2: "if(x = 2)",
    choice3: "if(x == 2)",
    choice4: "if(x != 2 )",
    correct: "if(x == 2)",
  },
  {
    question:
      "What is the syntax for creating a function in JavaScript named Help",
    choice1: "function = Help()",
    choice2: "function Help()",
    choice3: "function := Help()",
    choice4: "function : Help()",
    correct: "function Help()",
  },
  {
    question: "What is the JavaScript syntax for printing values in Console?",
    choice1: "print(5)",
    choice2: "console.log(5);",
    choice3: "console.print(5);",
    choice4: "print.console(5);",
    correct: "console.log(5);",
  },

  {
    question: "How to initialize an array in JavaScript?",
    choice1: "var Oscar= “Oscar1”, “Oscar2”, “Oscar3”",
    choice2: "var Oscar=(1:Oscar1, 2:Oscar2, 3:Oscar3)",
    choice3: "var Oscar=(1=Oscar1, 2=Oscar2, 3=Oscar3)",
    choice4: "var Oscar=[“Oscar1”, “Oscar2”, “Oscar3”]",
    correct: "var Oscar=[“Oscar1”, “Oscar2”, “Oscar3”]",
  },
];

//Checks to see if the start button was pressed, if so starts the quiz

startButton.addEventListener("click", startQuiz);

//Starts the quiz and hides the Start Screen

function startQuiz() {
  setTime();

  mainScreenElement.classList.add("hide");
  questionScreenElement.classList.remove("hide");

  question();
}

//Start timing the quiz
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;

    timeElement.textContent = "Time: " + secondsLeft;

    //This code makes your score 0 if time goes negative.
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      timeElement.textContent = "Time: " + secondsLeft;
    }

    if (secondsLeft <= 0 || quizQuestions.length === questionIndex) {
      finalScore();
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Checks if the answer buttons were clicked
answer1Button.addEventListener("click", checkAnswer);
answer2Button.addEventListener("click", checkAnswer);
answer3Button.addEventListener("click", checkAnswer);
answer4Button.addEventListener("click", checkAnswer);

//Code for showing the questions as well as the choices

function question() {
  if (quizQuestions.length != questionIndex) {
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
  } else {
    finalScore();
  }
}

//Code to check if the correct answer was pressed
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

//Code to go to the final score screen
function finalScore(event) {
  questionScreenElement.classList.add("hide");
  finalscoreScreenElement.classList.remove("hide");
  scoreElement.textContent = "Your Final Score is: " + secondsLeft;
}

//Checks to see if the submit button was clicked on the final score page and saves score
submitButton.addEventListener("click", function () {
  //Grabs the highscore element for initials

  var userInitials = document.getElementById("inlineFormInput").value.trim();

  //Grabs the socre
  var userScore = { initials: userInitials, score: secondsLeft };

  if (userInitials === "") {
    displayMessageElement.textContent = "Initials cannot be blank!";
  } else {
    localStorage.setItem("userScore", JSON.stringify(userScore));

    location.href = "Highscore.html";
  }
});
