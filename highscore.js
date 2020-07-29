//Grabs the go back Button from the high score page
var goBackButton = document.getElementById("goBackbtn");

//Grabs the clear High Score Button from the high score page
var clearHighScoreButton = document.getElementById("clearhighScorebtn");

//Grabs the High Score List Element
var userHighScoreElement = document.getElementById("userHighScoreList");

//Grabs the saved High Score
var lastUser = JSON.parse(localStorage.getItem("userScore"));

//Prints the High Score
userHighScoreElement.textContent = lastUser.initials + " : " + lastUser.score;

//Checks to see if the submit button was clicked on the final score page and saves score
goBackButton.addEventListener("click", function () {
  location.href = "index.html";
});

//Clears the High Scores 
clearHighScoreButton.addEventListener("click", function (event) {
  userHighScoreElement.innerHTML =""


});

