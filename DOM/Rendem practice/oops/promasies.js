// let Pro = new Promise((resolve , reject)=>{
//     console.log("i am a promises")
//     reject("success")
// })


// Pro.then((res)=>{
//     console.log(res)
// })

// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(
//                 {
//                     name:"Abdul Rahman",
//                     age:20
//                 }
//             );
            
//         }, 2000);
//     });
// }

// getUser().then((use)=>{
//     console.log(use)
// });

// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//         console.log("Get User");
//         resolve("success");
            
//         }, 2000);

//     })
// }
// function getPost(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//          console.log("Get post");
//           resolve("success");
            
//         }, 2000);

//     })
// }
// function getComment(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("Get comment ");
//              resolve("success");
            
//         }, 2000);

//     })
// }

// getUser().then(()=>{
    
//     return getPost();
// }).then(()=>{
    
//     return getComment();
// }).then((res)=>{
//     console.log(res);
// })



// function login (){
//     return new Promise ((resolve,reject)=>{
//         let success  = Math.random()>0.5;
//         setTimeout(()=>{
//             if(success){
//                 resolve("login success")
//             }
//             else{
//                 reject("login Failed")
//             }

//         },2000)
//     })

// }

// // login().then(console.log).catch(console.log);
// login().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



// function workout ()
// {
//     return new Promise((resolve,reject)=>{
//          let success = true ;
//           setInterval(()=>{
//             if(success){
//                 resolve("task completesd")}
//                 else resolve("task not completed")},2000)
//             })
//         }



// workout().then(console.log).catch(console.log)





















// function getData(dataId){
//     return  new promises((resolve,reject)=>{
//         console.log("userID is ",dataId);
//         setTimeout(()=>{
//             console.log("data =  ",dataId)
//             resolve("success");
          

//         },2000)

//     });
// }


// getData(1).thin((res)=>{
//     console.log(res)
// })
