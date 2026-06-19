// const  employee = {
//     calText(){
//         console.log("tex rate is 10 ")
//     },

// }


// const AbdulRahman ={
//     salary : 5000,
//       calText(){
//         console.log("tex rate is 10 ")
//     },

// }


// AbdulRahman.__proto__=employee;

// // if object has same name of prototype this object method will be used


// class & object

class student {
    calavg(){
        let eng=Number(prompt("enter your english marks "));
        let com = Number(prompt("enter your computer marks "));
        let math =Number(prompt("enter your math marks "));
        let avg = (eng+com+math)/3;
        console.log(`your marks avg is ${avg}`);
    }

    semester(){
        let depart = "IS";
        let semesters="five";
        console.log(`${depart} and ${semesters}`)

    }

}

let st1 = new student();
st1.calavg();

let st2= new student();
st2.semester();






// class & object