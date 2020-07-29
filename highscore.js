
   
    var userHighScoreElement = document.getElementById("userHighScoreList");
  
    var lastUser = JSON.parse(localStorage.getItem("userScore"));
   
  
   
    userHighScoreElement.textContent = (lastUser.initials +" - " + lastUser.score);
  
  