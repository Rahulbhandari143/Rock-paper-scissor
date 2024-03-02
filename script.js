let userscore=0;
let compscore=0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector(".Your-score");
const compScorePara = document.querySelector(".Comp-score");


const genCompChoices = () => {
    const option = ["rock","paper","scissor"];
    const randIx = Math.floor(Math.random() * 3);
    return option[randIx];
}


drawGame = () =>{
    msg.innerText= "Game was Draw, Play Again!";
    msg.style.color = "white";
}

const playgame = (userChoice) => {
   const compChoice = genCompChoices();
   imageChange2(compChoice);
   if(userChoice == compChoice)
   {
    drawGame();
   }

   else
   {
    let userWin = true;
    if(userChoice == "rock")
    {
        if(compChoice == "paper")
        {
         userWin = false;
        }
        else
        {
            userWin = true;
        }
    }

    if(userChoice == "paper")
    {
        if(compChoice == "scissor")
        {
         userWin = false;
        }
        else
        {
            userWin = true;
        }
    }

    if(userChoice == "scissor")
    {
        if(compChoice == "rock")
        {
         userWin = false;
        }
        else
        {
            userWin = true;
        }
    }
    showWinner(userWin, userChoice, compChoice);
   }  
}


const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats computer ${compChoice}`;
        msg.style.color = "green";  
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost! Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.color = "#a60000"; 
    }
}

function imageChange(userChoice) {
    if(userChoice == "rock")
    {
        document.querySelector("#myimg1").src = 'rock.png';
    }
    if(userChoice == "paper")
    {
        document.querySelector("#myimg1").src = 'paper.png';
    }
    if(userChoice == "scissor")
    {
        document.querySelector("#myimg1").src = 'scissor.png';
    }
}

function imageChange2(compChoice) {
    if(compChoice == "rock")
    {
        document.querySelector("#myimg2").src = 'rockrev.png';
    }
    if(compChoice == "paper")
    {
        document.querySelector("#myimg2").src = 'paperrev.png';
    }
    if(compChoice == "scissor")
    {
        document.querySelector("#myimg2").src = 'scissorrev.png';
    }
}








Choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
       const userChoice = choice.getAttribute("id");
       imageChange(userChoice);
       playgame(userChoice);
    });
  });

  