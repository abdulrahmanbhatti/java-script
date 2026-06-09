// let heading = document.getElementById("title");
// console.log(heading);


// let item = document.getElementsByClassName("text");
// console.log(item)

// console.log(item[0]);

// let item = document.querySelectorAll(".text");
// console.log(item)


// document.getElementById("title").innerText="bye bye "


// document.getElementById("box").innerHTML=
// "<h2>New  Heading </h2>"
  
// let text = document.getElementById("title").textContent;
// console.log(text);

// let text = document.getElementById("title");
// text.style.color="red";

// let url = document.getElementById("link").getAttribute("href");
// console.log(url)

// let url = document.getElementById("link").setAttribute("href ","http://youtube.com");

// function changeText(){
//     let heading = document.getElementById("title");
//     heading.textContent="bye bye";
// }


// function changeColor(){
//     let item = document.getElementsByClassName("item");
//     for(let i=0;i<item.length;i++){
//         item[i].style.color="red";
//     }

// }

// function highlight(){
//     let items = document.querySelectorAll("#text");
//     for(let i=0;i<items.length;i++){
//         items[i].style.color="yellow";
//     }
// }


// function colorChang(){
//     let col=document.querySelectorAll("#text");
//    col.forEach( (p)=>{
//     p.style.color="green";
//    });
// }

// let button =document.getElementById("btn");
// button.addEventListener("click",function(){
//     let student = document .querySelectorAll(".student");
//     student.forEach(function(stu){
//         stu.style.backgroundColor="black";
//     });
// });

// let button = document.querySelectorAll(".btn");
//   button.forEach(function(but){
//     but.addEventListener("click",function(){
//         let product = this.parentElement.querySelector("h3").textContent;
//         alert("You Selected ",+ product )
//     });
//   });

//  let search = document.querySelector("#Search");

//  search.addEventListener("keyup",function(){
//   let value = search.value.toLowerCase();
//   let student = document.querySelectorAll(".student");
//   student.forEach(function (student){
//     let text =student.textContent.toLowerCase();
// if(text.includes(value)){
//   student.style.display = "block";

// }else{
//   student.style.display="none";
// }
//   });

//  });


// let dark = document.getElementById("darkbtn");
// let light = document.getElementById("lightbtn");

// dark.addEventListener("click",function(){

//   document.body.style.backgroundColor="black";

//   document.body.style.color="white";

// });

// light.addEventListener("click", function(){

//   document.body.style.backgroundColor="white";

//   document.body.style.color="black";
// });



// let question = document.querySelectorAll(".question");

// question.forEach((q)=>{
//   q.addEventListener("click",function(){
//     let answer = q.nextElementSibling;
//     if(answer.style.display==="block"){
//       answer.style.display = "none";
//     }else{
//       answer.style.display="block";
//     }
//   });
// });

// let count =0;
// let counter = document.querySelector("#count");
// let button = document.querySelectorAll(".Cart");
// button.forEach(function (btn){
//   btn.addEventListener("click",function(){
//     count ++;
//     counter.textContent = count;
//   });
// });



// let stu = document.querySelectorAll(".student");
// let pre = document.querySelectorAll(".present");
// pre.forEach(function(p){
//   p.addEventListener("click", function(){
//     let student = p.parentElement;
//     student.style.background = "lightgrey";
//   })
// })



// let Dbutton = document.querySelectorAll(".dbtn");
// Dbutton.forEach(btn=>{
//   btn.addEventListener("click",()=>{
//     btn.parentElement.remove();
//   })
// })


let clare = document.querySelector("#4button");

clare.addEventListener("click",()=>{
  let not = document.querySelectorAll(".notification");
  not.forEach(item=>{
    item.remove();

  });
  document.querySelector("#total").textContent = 0;
})


