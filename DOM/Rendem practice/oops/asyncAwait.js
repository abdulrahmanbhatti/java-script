// function api(){
//     return new Promise((resolve,reject)=>{
//               setTimeout(()=>{

//                 console.log("weather data");
//                 resolve(200)

//     },2000)

//     });
      

//     }

//     async function getdata(){
//         await api();
//         await api();
//     }

//     getdata();


// function getdata(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",id);
//          let res= resolve("success")
//         },2000)
//     })
// } 

// async function data() {
  
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4).then((res)=>{
//         console.log(res);
//     })
// }

// data();

// function getUser(){
//     return Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("this is timeOut");
//         },2000)
//     })
// }

