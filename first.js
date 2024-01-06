let userResult = 0;
let compResult = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");

const genCompScore = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw.Please try again!!";
    msg.style.backgroungColor = "yellow";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

  const playGame = (userChoice) => {
    const compChoice = genCompScore();
    if(userChoice==compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true;
        } else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        } else {
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
  };

  const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userResult++;
        userScore.innerText = userResult;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
  } else {
    compResult++;
    compScore.innerText = compResult;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  };