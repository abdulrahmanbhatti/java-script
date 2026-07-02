// // // const  employee = {
// // //     calText(){
// // //         console.log("tex rate is 10 ")
// // //     },

// // // }


// // // const AbdulRahman ={
// // //     salary : 5000,
// // //       calText(){
// // //         console.log("tex rate is 10 ")
// // //     },

// // // }


// // // AbdulRahman.__proto__=employee;

// // // // if object has same name of prototype this object method will be used


// // // class & object

// // // class student {
    

// // //     constructor (name , roll){
// // //         console.log("this is a parameterize constructor ")
// // //        this.name = name;
// // //        this.roll=roll;
// // //        console.log(name )
// // //        console.log(roll)
// // //     }


// // //     calavg(){
// // //         let eng=Number(prompt("enter your english marks "));
// // //         let com = Number(prompt("enter your computer marks "));
// // //         let math =Number(prompt("enter your math marks "));
// // //         let avg = (eng+com+math)/3;
// // //         console.log(`your marks avg is ${avg}`);
// // //     }

// // //     semester(){
// // //         let depart = "IS";
// // //         let semesters="five";
// // //         console.log(`${depart} and ${semesters}`)

// // //     }

// // // }


// // // let st1 = new student("abdul rahman" , "salman");
// // // st1.calavg();

// // // console.log(st1);



// // // let st2= new student();
// // // st2.semester();



// // // class parson {
// // //     eat(){
// // //         console.log("this is a eat function ")
// // //     }


// // //     sleep(){
// // //         console.log("this is a sleep function")
// // //     }
// // // }

// // // class student extends parson{
// // //     work(){
// // //         console.log('this is a work function')
// // //     }
// // // }

// // // class teacher extends student{
// // //     salary(){
// // //         console.log("this is a salary function")

// // // }
// // // }



// // // let p1=  new parson;
// // // p1.sleep();


// // // let st1 = new student;

// // // st1.eat();
// // // st1.work();


// // // let tech1 = new teacher;
// // // tech1.eat();
// // // tech1.work();
// // // tech1.salary();



// // // let data  ="this is a data "

// // // class users{
// // //    constructor(name , email){
// // //     this.name= name ;
// // //     this.email=email;
// // //     // console.log(name);
// // //     // console.log(email)

// // //    }

// // //    showdata(){
// // //     console.log("this is a web data !");
// // //     console.log(data)
// // //    }
// // // }


// // // class admin{
    
// // // }

// // // let user1=new users("ali","ahmad");
// // // console.log(user1)

// // // user1.showdata();





// // // class & object


// // // console.log ("this is one question ")
// // // console.log ("this is two question ")
// // // console.log ("this is three question ")


// // // setTimeout(( )=>{
// // //    console.log("this program will be lode after time ")


// // // },3000);


// // //    console.log("this program will be lode 3s time ")



// // // function user ( name , age ){
// // //    console.log(`your name is ${name}
// // //        and age is ${age}`)
   
// // // }


// // // function setfun(name,age,Callback){


// // //    // let name="abdul";
// // //    // let age = 45;
// // //    Callback(name,age);

// // // }

// // // setfun("HGJH",45,user);

// // // function sum (a,b){
// // //    console.log(a+b)
// // // }

// // // function addSum (sum){
// // //    // a=Number(prompt("Enter Your First Number "))
// // //    // b=Number(prompt("Enter Your Second Number "))
// // //    // sum(a,b)
// // //    sum(12,32); 

// // // }

// // // addSum(sum)


// // // function foodorder(val){
// // //      console.log("that is timeout function for food preparing  !");

// // //    setTimeout(()=>{
// // //       console.log("that is timeout function !");
// // //       val();

// // //    },4000)
// // // }

// // // foodorder (()=>{
// // //    console.log("food order ! ")
// // // })


// // // function fetchData(callback){
// // //    console.log("that is a program ")

// // //    setTimeout(() => {
// // //       console.log("this is time ")
// // //       callback();
      
// // //    }, 8000);

// // // }

// // // fetchData(()=>{
// // //    console.log("after")
// // // })




// // // PRACTICE 

// function processUser(name, callback) {
//     console.log("User process ho raha hai: " + name);
//     callback(); 
// }

// processUser("Zeeshan", function() {
//     console.log("Callback Triggered: User successfully register ho gaya!");
// });


// function processUser(name,callback){
//    console.log("User processing " + name)
//    callback();
// }

// processUser("zeshan", function(){
//    console.log("calback ho rhe h a")


// });


// function selectItem(callback) {
//     console.log("1. Item select ho gaya.");
//     callback();
// }
// function makePayment(callback) {
//     console.log("2. Payment successfully ho gayi.");
//     callback();
// }
// function packProduct(callback) {
//     console.log("3. Product pack ho gaya.");
//     callback();
// }
// function shipProduct() {
//     console.log("4. Product ship ho gaya! Ghar pohnchne wala hai.");
// }
//  Call (Nesting)
// selectItem(() => {
//     makePayment(() => {
//         packProduct(() => {
//             shipProduct();
//         });
//     });
// });











// // Function 1: Pehle ye chalega, phir function 2 ko call karega
// function step1() {
//     setTimeout(() => {
//         console.log("Step 1 Done");
//         step2(); // 4 baar call karne ke liye yahan call kiya
//     }, 1000); // 1 second ka wait
// }

// function step2() {
//     setTimeout(() => {
//         console.log("Step 2 Done");
//         step3(); // Agla step call kiya
//     }, 1000);
// }

// function step3() {
//     setTimeout(() => {
//         console.log("Step 3 Done");
//         step4(); // Aakhri step call kiya
//     }, 1000);
// }

// function step4() {
//     setTimeout(() => {
//         console.log("Step 4 Done! Sab Khatam.");
//     }, 1000);
// }

// // ---- CODE KO CHALANE KA TAREEQA ----
// // Bas pehle function ko call karo, baqi khud ba khud chalenge
// // step1();



// Yeh 4 simple functions hain jo Promise banate hain
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 1 Done"); resolve(); }, 1000);
//     });
// }

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 2 Done"); resolve(); }, 1000);
//     });
// }

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 3 Done"); resolve(); }, 1000);
//     });
// }

// function step4() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 4 Done! Sab Khatam."); resolve(); }, 1000);
//     });
// }

// ---- CODE KO CHALANE KA TAREEQA ----
// .then() lagakar ek ke baad ek 4 baar call kiya
// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => step4());



// function step1(){
//    return new Promise((resolve)=>{
//       setTimeout(() => {
//           console.log("Step 1 Done");
// resolve();
//       },2000);
//    })
// }


// step1.then(()=>step2).then(()=>step3).




// function user ( name  ){
//    console.log(`your name is ${name}`)
   
// }


// function setfun(callback){


//    let name="abdul";

//   callback(name);

// }

// setfun(user);



// // Functions wahi hain jo upar Promises mein banye the



// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 1 Done"); resolve(); }, 1000);
//     });
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 2 Done"); resolve(); }, 1000);
//     });
// }
// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 3 Done"); resolve(); }, 1000);
//     });
// }
// function step4() {
//     return new Promise((resolve) => {
//         setTimeout(() => { console.log("Step 4 Done! Sab Khatam."); resolve(); }, 1000);
//     });
// }

// // ---- CODE KO CHALANE KA TAREEQA ----
// // Ek main function banaya uske andar 'await' lagakar 4 baar call kiya
// async function runAllSteps() {
//     await step1(); // Ruko jab tak step 1 poora na ho
//     await step2(); // Ruko jab tak step 2 poora na ho
//     await step3(); // Ruko jab tak step 3 poora na ho
//     await step4(); // Ruko jab tak step 4 poora na ho
// }

// // Main function ko chala diya
// runAllSteps();




// // // Ek function banaya jo internet se data layega
// async function getLiveUserData() {
//     try {
//         console.log("Internet se data la raha hu... Please wait...");

//         // 1. fetch() internet se data lane ke liye request bhejta hai
//         // Humne 'await' lagaya taake jab tak data na aaye, code ruka rahe
//         let response = await fetch("https://api.github.com/users/github");

//         // 2. Jo data aaya hai, usay readable JSON format mein badlein
//         let data = await response.json();

//         // 3. Data ko console mein print karein
//         console.log("--- DATA AA GAYA ---");
//         console.log("User Ka Naam:", data.name);
//         console.log("Email Address:", data.email);
//         console.log("City Name:", data.address.city);

//     } catch (error) {
//         // Agar internet band ho ya link kharab ho, toh ye chalega
//         console.log("Kuch garbar hui hai:", error);
//     }
// }

// // ---- CODE KO CHALANE KA TAREEQA ----
// getLiveUserData();

// // Function banaya jo mausam ka data layega
// async function checkWeather() {
//     try {
//         console.log("Mausam ka haal nikal raha hu... Please wait...");

//         // 1. fetch() se humne open-meteo ki real API se London ka weather data mangwaya
//         let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true");

//         // 2. Jo data aaya, usay readable format (JSON) mein badla
//         let data = await response.json();

//         // 3. Data se Temperature aur Windspeed (hawa ki raftaar) nikaali
//         let temperature = data.current_weather.temperature;
//         let windSpeed = data.current_weather.windspeed;

//         // 4. Sab kuch screen par print kar diya
//         console.log("--- LONDON WEATHER REPORT ---");
//         console.log("Temperature (Garmi/Sardi): " + temperature + "°C");
//         console.log("Hawa Ki Raftaar (Wind Speed): " + windSpeed + " km/h");

//     } catch (error) {
//         // Agar internet ka masla ho ya link galat ho
//         console.log("Mausam ka data nahi mil saka:", error);
//     }
// }

// // ---- CODE KO CHALANE KA TAREEQA ----
// checkWeather();



// function greet( name ,calback){
  
//     console.log(`Hello ${name}`);
//     calback();
// }
// function js (){
//     console.log("this is a js prohgram ")
// }

// greet("AbdulRahman",js);




// function sum (a,b, calback){


//     calback(a,b);
// }
// function add(a,b){
//     console.log(a+b)
//     console.log("this is tha sum function ")
// }


// sum(10,23,add);


// function loding (calback){
//     console.log("loding.....")
//     calback();
    
// }

// function complete (){
//     setTimeout(()=>{
//         console.log("compled.");
//     },2000);
// }

// loding(complete);

// function login(calback)

// {
//     console.log("login")

//     calback();
// }


// function get(calback)

// {
//     setTimeout(()=>{
//             console.log("get Profile")
//              calback();

//     },2000)


   
// }

// function getpost(calback)

// {
//       setTimeout(()=>{
//          console.log("get post")

//     },2000)
   

   
// }


// login(()=>{
//     get(()=>{
//         getpost();
//     })
// })


// function order(calback)

// {
//     console.log("Order")
//     calback();
// }

// function cook(calback)

// {
//  setTimeout(()=>{
//     console.log("cook");
//        calback();
//  },2000)
// }

// function pack(calback)

// {
//  setTimeout(()=>{
//     console.log("pack");
//        calback();
//  },2000)
// }

// function deliver()

// {
//  setTimeout(()=>{
//     console.log("deliver");
       
//  },2000)
// }

// order(()=>{
//     cook(()=>{
//         pack(()=>{
//             deliver();
//         })
//     })
// })


// function data(id,calback ){
//     setTimeout(()=>{
//         console.log("data = ",id);

//         calback();
//     },2000)

// }

// data(1,()=>{
//     console.log("first funcrion ")
//     data(2,()=>{
//          console.log("second funcrion ")
//         data(3,()=>{
//              console.log("third funcrion ")
//             data(4,()=>{
//                  console.log("four funcrion ")
//                 data(5,()=>{
//                      console.log("five funcrion ")  
//                 });
//             });
//         });
//     });
// });
