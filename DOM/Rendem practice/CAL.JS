// function add(){
//     let a = Number(document.getElementById("num1").value);
//     let b = Number(document.getElementById("num2").value);

//     document.getElementById("result").innerHTML=a+b;
// }

// counter app 

// let count=0;

// function increment (){
//     count ++;
//     document.getElementById("count").innerHTML= count;
// }


 setInterval(()=>{
    let time = new date();
    document.getElementById("clock").innerHTML=time.toLocaleTimeString();
 },1000);