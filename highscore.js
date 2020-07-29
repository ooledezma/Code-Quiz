
    console.log("test1")
    var userHighScoreElement = document.getElementById("userHighScoreList");
    console.log("test2")
    var lastUser = JSON.parse(localStorage.getItem("userScore"));
    console.log(lastUser);
  
   
    userHighScoreElement.textContent = lastUser.initials;
  
  