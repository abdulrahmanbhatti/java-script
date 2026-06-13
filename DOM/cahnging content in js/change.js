// let title = document.getElementById("title");

// let btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
//     title.innerText="Welcome Abdul Rahman ";
// });box
// let box = document.getElementById("box");

// let btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{
//     box.innerHTML= `<h3>wellcome </h3>
// <p>this is a paragraph </p>`
// })

// let p = document.getElementById("mes");

// let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     if (p.innerText==="this is a paragraph"){
//         p.innerText="";
//         btn.innerText="show Message";
//     }else{
//           p.innerText="this is a paragraph";
//         btn.innerText="hide message";
//     }
// })


// let h = document.getElementById("heading");

// let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     h.innerText="dom ";
//     h.classList.add("red")
// })


// let tex = document.getElementById("box");

// let count = document.getElementById("count");


// tex.addEventListener("input",()=>{
//     count.innerText=tex.value.length;
// })


// let name= document.getElementById("name");

// let marks = document.getElementById("marks");

// let btn = document.getElementById("btn");

// let result = document.getElementById("result");

// btn.addEventListener("click",()=>{
//     const names = name.value;
//     const mark= Number(marks.value);
//     let status = "";
//     if(mark>= 50 ){
//         status = " pass";
//     }else{
//     status = " fail";
//     }

//     result.innerHTML=`
//      <h2>${names}</h2>
//      <p>marks : ${mark}</p>
//      <p>Status : ${status}</p>`;
// });


// let name= document.getElementById("name");

// let price = document.getElementById("price");

// document.getElementById("iphone").addEventListener("click",()=>{
//     name.innerText="iphone 15";
//     price.innerText="998"
    
// });
// document.getElementById("samsung").addEventListener("click",()=>{
//     name.innerText="samsung";
//     price.innerText="95"
// });


// let city = document.getElementById("city");
// let temp = document.getElementById("temp");

// document.getElementById("update").addEventListener("click",()=>{

//     city.innerText="Lahore";
//     temp.innerText="20C";

// });

// let para = document.getElementById("mes");
// let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     if(para.innerText==="Welcome"){
//         para.innerText="";
//         btn.innerText="show message"
//     }
//     else{
//         para.innerText="welcome user";
//         btn.innerText="hide message"
//     }
// })


// let div = document.getElementById("container");
// let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     const para = document.createElement("p");
//     para.innerText="hello";
// div.appendChild(para)

// })



// let input = document.getElementById("in");
// let btn = document.getElementById("btn");
// let divs = document.getElementById("list");


// btn.addEventListener("click",()=>{
//     if(input.value ==="")return;


//     const li = document.createElement("li");

//     li.textContent=input.value;


//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent="Delete";

//     deleteBtn.addEventListener("click",()=>{
//         li.remove();

//     });
//     li.appendChild(deleteBtn);
//     divs.appendChild(li);
//     input.value="";


// })
