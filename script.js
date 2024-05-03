let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg-container");
let msgPara=document.getElementById("msg");
let userdisplay=document.querySelector("#userdisplay");
let compdisplay=document.querySelector("#compdisplay");
var displayElement = document.querySelector('.display');
let userScoreDisplay=document.querySelector("#user-score");
let compScoreDisplay=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

let genCompChoice=()=>{
    let options=["Rock","Paper","Scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
let gameDrawn=(userChoice,compChoice)=>{
    userdisplay.innerText=`Your Choice is ${userChoice}`;
    compdisplay.innerText=`Computer Choice is ${compChoice}`;
    displayElement.classList.remove("hide");
    msgPara.innerText=` Oops! Game is Drawn`;
    msgPara.style.backgroundColor="orange";
    

}
let showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userdisplay.innerText=`Your Choice is ${userChoice}`;
    compdisplay.innerText=`Computer Choice is ${compChoice}`;
    displayElement.classList.remove("hide");
        msgPara.innerText=`You Won the Game!`;
        msgPara.style.backgroundColor="green";
        userScore++;
    userScoreDisplay.textContent=userScore;

    }
    else{
        userdisplay.innerText=`Your Choice is ${userChoice}`;
    compdisplay.innerText=`Computer Choice is ${compChoice}`;
    displayElement.classList.remove("hide");
        msgPara.innerText=`Oops! You Lost the Game`;
        msgPara.style.backgroundColor="red";
        compScore++;
        compScoreDisplay.textContent=compScore;

    }
       
}
let playGame=(userChoice,compChoice)=>{
        if(userChoice===compChoice)
        {
        gameDrawn(userChoice,compChoice);
        return;
        }
        let userWin=true;
        if(userChoice==="Rock")
        {
          userWin=compChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper")
        {
          userWin=compChoice==="Scissors"?false:true;
        }
        else{
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        let compChoice=genCompChoice();
        playGame(userChoice,compChoice);
        console.log(`you chose ${userChoice} and Computer chose ${compChoice}`);
});
});
