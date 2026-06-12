






let selectField = document.getElementsByClassName("selectField")

let selectText = document.getElementById("selectText");

let options = document.getElementsByClassName("option");

let selectText = document.getElementById("selectText");

for(option of  options){
option.onclick=function(){
    selectText.innerHTML=this.textContent;
}
}


