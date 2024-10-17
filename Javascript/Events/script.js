// let btn1 =document.querySelector("#btn1");
// // btn1.onclick=()=>{
// //      console.log("Button was click");
// //      let a=25;
// //      a++;
// //      console.log(a);
// // }
// let box=document.querySelector("#box1");
// // box.onmouseover=()=>{
// //     console.log("You are in box");
// // }

// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked");
// })
// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked 2");
// })

let modebtn=document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",() =>{
    if(currmode==="light"){
        currmode="dark;"
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        currmode="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
})