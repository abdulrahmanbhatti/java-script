let questions = document.querySelector(".question")
let optionBTN = document.querySelectorAll(".option_btn")
let next = document.querySelector("#next")
let previous = document.querySelector("#previous")



const QuizData = [
    {
        question:"javascript kis company  na banayi  thi ?",
        option :["google","Microsoft","Netscape","apple",],
        correct: "Microsoft" ,
    },
     {
        question:"Css kis lea use hoty ha ?",
        option :["database","styling","backend","security",],
        correct: "styling",
    },
];

let currentQuestion = 0;

let userAnswer = [];

function showQuestion(){
let q=QuizData[currentQuestion]
    let count=currentQuestion+1
questions.innerText = `${currentQuestion+1}. ${q.question}` ;


optionBTN.forEach((item,index) => {

    item.innerText=q.option[index];
});
}













let score = 0 ;
optionBTN.forEach((op)=>{
    op.addEventListener("click",()=>{

        if(op.innerText === QuizData[currentQuestion].correct){
            op.style.backgroundColor="green";
            score++;
        }
        else{
             op.style.backgroundColor="red";

        }
        op.disabled= true;
        
    });

});
showQuestion();