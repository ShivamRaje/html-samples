// console.log("Hello");
// console.log("abc".toUpperCase());
// [1,2,3].push(4);

// function myFunction(){
//     console.log("Welcome");
//     console.log("To the journey ");
// }
// myFunction();


// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love js");

// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let value=sum(1,1);
// console.log(value);

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }; 

//vowels s=function

// function vowelsfunc(s){
//   let count=0;
//   for(const char of s ){
    
//     if(char==="a"|| char==="e"||char==="i"|| char==="i"||char==="o"||char==="u"){
//         count++;
//     }
//   }
//   console.log(count);
// };

// const arrowVowels=(s)=>{
//     let count=0;
//   for(const char of s ){
    
//     if(char==="a"|| char==="e"||char==="i"|| char==="i"||char==="o"||char==="u"){
//         count++;
//     }
//   }
//   return count;
// }

// function abc(){
//     console.log("hello");
// };
// function myFunc(abc){
//     return abc;
// }

// let arr=["Delhi","Pune","Mumbai"];
// arr.forEach((val,idx)=>{
//     console.log(val.toUpperCase(),idx)
// });

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val)
// });


// let arr=[1,2,3,4,5];
// let newArray=arr.map((val)=>{
//     return val*val;
// }); 
// console.log(newArray);

// let num=[1,2,4,5,6,7,8,9];
// let filterNum=num.filter((val)=>{
//     return val%2===0;
// });
// console.log(filterNum);
// let array=[1,2,3,4];
// const output=array.reduce((result,current)=>{
//     return result+current;
// });
// console.log(output);

// let marks=[87,93,64,99,86];
// const output=marks.filter((val)=>{
//     return val>90;
// });
// console.log(output);

let n=prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
});

let product =arr.reduce((prev,curr)=>{
    return prev*curr
});
console.log(`Sum of an array ${sum} and product of an array is ${product}`);