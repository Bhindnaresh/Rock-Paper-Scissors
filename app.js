let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

const gencompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const Idx = Math.floor(Math.random()*3); // here Math.floor means remove values after decimal.
    return options[Idx];
};

const drawGame = ()=>{
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreUpdate.innerText = userScore;
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreUpdate.innerText= compScore;
        msg.innerText = `You lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice)=>{
    const compChoice = gencompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //comp can choose = paper, scissor
            userWin = compChoice==="paper"?false: true;
        }else if(userChoice==="paper"){
            //comp can choose = rock, scissor
            userWin = compChoice==="scissors"?false: true;
        }else if(userChoice==="scissors") {
            //comp can choose = rock, paper
            userWin = compChoice==="rock"?false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});