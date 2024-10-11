// 

// let para=document.getElementsByTagName("p");
// console.dir(para);
// let Firstelements=document.querySelector("p");
// console.dir(Firstelements);

// let Allelements=document.querySelectorAll(".heading");
// console.dir(Allelements);
// let heading2 = document.querySelector("h2");
// console.dir(heading2.innerText);
// heading2.innerText=heading2.innerText+" from Shivam Raje";

// let divs= document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText=`New unique values ${idx}`;
//     idx++;
// }


// divs[0].innerText="new unique values 1 ";
// divs[1].innerText="new unique values 2 ";
// divs[2].innerText="new unique values 3 ";

// let div=document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));



// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.style.visibility="hidden";


// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);
// let div=document.querySelector("p");
// div.after(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi,I am new</i>";

// document.querySelector("body").prepend(newHeading);

// document.querySelector("p").remove();
// newHeading.remove();


let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
//comment
document.querySelector("body").prepend(newBtn);


//Q2

let para=document.querySelector("p");
para.classList.add("newClass");