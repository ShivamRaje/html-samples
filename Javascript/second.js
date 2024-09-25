// //Arithemetic operatirs
// let a=5;
// let b=2;
// console.log("a =  ",a);
// console.log("b = ",b);
// console.log("a+b = ",a+b);
// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ",a/b);
// console.log("a%b = ",a%b);
// console.log("a**b = ",a**b);
// console.log("a++ = ",a++);
// console.log("b++ = ",b++);

// let a=5;
// let b=2;
// console.log("a =  ",a);
// console.log("b = ",b);
// a++;
// console.log("a++ = ",a);
// b++;
// console.log("b++ = ",b);

// let a=5;
// let b=3;
// console.log(a>=b && b<=a);

//Conditional Statemtts
// let age=10;
// if(age>18){
//     console.log("You are eligible to vote");
// }
// if(age<18){
//     console.log("You are not eligible to vote");
// }

 let grade=prompt("Enter your marks  ");
//  if (result%5===0){
//     console.log(result," : Number is multiple of 5");
//  }
//  else{
//     console.log(result," : Number is not multiple of 5");
//  }
if(grade>=90 && grade<=100){
    console.log("Grade A");
}else if(grade>=70 && grade<=89){
    console.log("Grade B");
}
else if(grade>=60 && grade<=69){
    console.log("Grade C");
}
else if(grade>=50 && grade<=59){
    console.log("Grade D");
}
else{
    
        console.log("Grade F");
    
}
