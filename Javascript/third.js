// for(let i=1;i<=5;i++){
//     console.log("Shivam Raje");
// }

//Calculate the sum of 1 to n 
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum = ",sum);
// let i=1;
// while(i<=5){
//     console.log("i = ",i);
//     i++;
// }

//for of loop
// let str="Shivam Raje";
// let size=0;
// for(let i of str ){
//     console.log("i = ",i);
//     size++;
// }
// console.log("size of str  = ",size);

//for in loop

// let student = {
//     name:"Shivam Raje",
//     age:22,
//     cgpa:7.95,
//     isPass:true

// };
// for (let i in student){
//     console.log("Key = ",i," value = ",student[i]);
// }

// for(let i=1;i<=100;i++)
// {
//    if(i%2==0){
//     console.log("Even numbers are = ",i);
//    }
// }

// let gameNum=25;
// let userNum=prompt("Guess the game number : ");
// while(userNum != gameNum){
//     userNum=prompt("You enter the wrong number.Guess again  :");
// }
// console.log("Congratulation you enter the right number");

// let str ="Shivam RAje";
// let srt='Shivam';
// console.log(str.length);


//template literals

// let obj={
//     name:"pen",
//     price:10
// };
// let output=`This  is a  ${obj.name} and price is ${obj.price}`
// console.log(output);
//Example


let username=prompt("Enter user name ");
username=username.trim();
console.log("@"+username+username.length);