

let input = document.querySelector("#box");
let list = document.querySelector(".list");
let btn1 = document.querySelector("#btn1");
let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    if(input.value ===""){
        alert("you must wright something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= input.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
        input.value="";
       
        
    }
    save();
});

btn.addEventListener("click",()=>{
    btn1.classList.remove("btnC");
})

btn1.addEventListener("click",()=>{
    list.innerHTML="";
     btn1.classList.add("btnC");


})





list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
save();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
   save();
    }


},
false

);
function save(){
    localStorage.setItem("data",list.innerHTML);

}

function show(){
    list.innerHTML= localStorage.grtItem("data")
}
show();


