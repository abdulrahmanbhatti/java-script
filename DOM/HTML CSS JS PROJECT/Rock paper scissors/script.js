
let choices = document.querySelectorAll(".images");

let you_player = document.querySelector(".you_player");

let comp_player = document.querySelector(".comp_player");

let para = document.querySelector(".result");


let selectField = document.querySelector(".selectField")

let list =document.querySelector("#lister");

let selectText = document.querySelector("#selectText")

let options = document.querySelectorAll(".option");

selectField.onclick=()=>{
    list.classList.toggle("hide");

}

for(op of  options){
    op.onclick=function(){
        selectText.innerHTML=this.textContent;
        winningPoint=parseInt(this.textContent)
        list.classList.toggle("hide");
        resetGame();
    }
}

let userScore = 0;
let compScore = 0 ; 
let winningPoint = 5;
let isGameOver=false;


const resetGame=()=>{
    userScore = 0;
    compScore = 0;
    isGameOver= false;
    you_player.innerText=userScore;
    comp_player.innerText=compScore;
    para.innerText="Start Your Game";
    para.style.backgroundColor="#081b31";
}

 const checkFinalWinner =()=>{
    if(userScore===winningPoint){
        para.innerText="GAME OVER ! You are the ultimate winner ";
        para.style.backgroundColor="blue";
        isGameOver=true;
    }
    else if(compScore===winningPoint){
        para.innerText="GAME OVER ! Computer are winner ";
        para.style.backgroundColor="red";
        isGameOver=true;

    }
 }


const getCompChoice = ()=>{
    const options = ["Rock","Paper","Scissors"];
    const randomIDx=Math.floor(Math.random()*3);
    return options[randomIDx];

}

const drawGame = ()=>{
    console.log("Game was draw")
    para.innerText="Game Was Draw ! Play again ";
     para.style.backgroundColor= "red";
   
}
const showWinner = (userWin,userChoice,compChoice)=>{


    if(userWin){
        you_player.innerText=userScore++;
        console.log("You win")
         para.innerText=`You winner. ${userChoice} Beats ${compChoice}`;
         para.style.backgroundColor= "green";

    }else{
        comp_player.innerText=compScore++;
        console.log("You lose")
         para.innerText=`You loss. ${compChoice} Beats  Your${userChoice}`;
          para.style.backgroundColor= "orange";
    }
    checkFinalWinner();

}

const playGame = (userChoice)=>{
    if(isGameOver){
        alert("Game Is Over ! please Reset winning point  ");
    selectText.innerText="Set Winning Point";

    }
    console.log("User choice is ",userChoice)

    const compChoice = getCompChoice();
    console.log("computer choice is " , compChoice);

    if ( userChoice===compChoice){
        drawGame();

    }
    else{

        let userWinner = true;
        if(userChoice==="Rock") {

            userWinner  = compChoice === "Paper" ? false : true;

            // console.log(userWinner);

        }else if (userChoice==="Paper"){

            userWinner = compChoice==="Rock"? true : false; 


        }else if (userChoice==="Scissors"){

            userWinner = compChoice==="Rock"? false : true; 

        }
        showWinner(userWinner , userChoice,compChoice );
    }
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})
