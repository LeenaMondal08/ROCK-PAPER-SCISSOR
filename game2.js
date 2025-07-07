let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game Draw : Play Again";
    msg.style.backgroundColor="#081b31";

};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        console.log("computer win");
        msg.innerText=`You Lost.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;

    }
};

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice= ",compChoice);
    // fight
    if(userChoice===compChoice){
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was cliked",userChoice);
        playGame(userChoice);

    });
});