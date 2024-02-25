let myItem = document.getElementsByClassName("display");
const inputBtn = document.querySelectorAll('#test1');
let myExit = document.querySelector("#exit");
let myExit1 = document.querySelector("#exit1");
let myExit2 = document.querySelector("#exit2");
let myRemove = document.getElementsByClassName("remove");
let myRemove1 = document.getElementsByClassName("remove2");
let myRemove2 = document.getElementsByClassName("remove3");

// Delete items from the cart
function toExit(){
    myRemove[0].remove();
}
function toExit1(){
    myRemove1[0].remove();
}
function toExit2(){
    myRemove2[0].remove();
}

myExit.addEventListener("click", toExit)
myExit1.addEventListener("click", toExit1);
myExit2.addEventListener("click",toExit2);

//  clickable heart-shaped button 
var btn =document.getElementsByClassName("btn");
var btn1 = document.getElementsByClassName("btn2")
var btn2 = document.getElementsByClassName("btn3")
function toggle(){
    if (btn[0].style.color == 'red'){btn[0].style.color = 'grey'}
    else (btn[0].style.color = 'red')
}
function toggle1(){
    if (btn1[0].style.color == 'red'){btn1[0].style.color = 'grey'}
    else (btn1[0].style.color = 'red')
}
function toggle2(){
    if (btn2[0].style.color == 'red'){btn2[0].style.color = 'grey'}
    else (btn2[0].style.color = 'red')
}
btn[0].addEventListener("click", toggle);
btn1[0].addEventListener("click", toggle1);
btn2[0].addEventListener("click", toggle2)

//total price
