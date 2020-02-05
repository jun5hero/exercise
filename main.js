///asssignment1 - change color of box4 by clicking box1

///step1 - give the box1 element in the html document a function when clicking the box
///step2 - declare the function in your javascript file (here)
let box4=document.getElementById("b4");

function changeColor(){

  box4.style.backgroundImage="";
  //var box4=document.getElementById("b4");
  box4.style.backgroundColor=
  "PaleGoldenRod";
}
///step3 - create a variable that is containing box4

  //var box4=document.getElementById("b4");

///step4 - change the style.backgroundColor of that variable inside that function

///----

///assignment2 -  change color of box4 to a new color when hovering over box2

//Get HTML Object from Document
let box2=document.getElementById("b2");
//let box2=document.getElementsByClassName("box2")[0];

//add mouseover event listener
box2.addEventListener("mouseover", function(){
  //alert("event listener attached!")
  //change box4 background color
  box4.style.backgroundColor=
  "darkOrchid";
})

//console.log("my Javascript is connected")

//add mouseout event listener
box2.addEventListener("mouseout", function(){
  box4.style.backgroundImage=
  'url("https://i.imgur.com/KBZYWe9.jpg")';
  box4.style.backgroundSize="cover";
})

///step1 - give the box2 element in the html document a function when hovering the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is entering the box - onmouseenter)
///step1.2 - (!! here you need to give the box a second function when the mouse is leaving the box - onmouseleave)
///step2 - declare the two functions in your javascript file (here)
///step3 - create a variable that is containing box2 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions

///----

///assignment3 - change the color of box4 ONLY when the mouse is clicked down on box2

let box3=document.getElementById("b3");

//Store the previous state
let prevBackgroundColor;
let prevBackgroundImg;
box2.addEventListener("mousedown", function(){
  prevBackgroundColor=
  box4.style.backgroundColor;
  //prevBackgroundImg=
  //box4.style.bbackgroundImage;
  //console.log(prevBackgroundColor);
  //console.log(prevBackgroundImg);
  box4.style.backgroundColor=
  "aliceBlue";

  //step 3 change bbackground color of Box3
  box3.style.backgroundColor=
  "Coral"
})


box2.addEventListener("mouseup", function(){
  box4.style.backgroundColor=
    prevBackgroundColor;
})
//function mouseDown(){
  //box4.style.backgroundColor=
  //"aliceBlue";
  //box3.style.backgroundColor=
  //"Coral";
//}

//function mouseUp(){
  //box4.style.backgroundColor="";
  //box3.style.backgroundColor=
  //"Fuchsia";
//}

///step1 - give the box2 element in the html document a function when clicking DOWN on the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is clicking down the box - onmousedown)
///step1.2 - (!! here you need to give the box a second function when the mouse stopping to click the box - onmouseup)
///step2 - declare the two functions in your javascript file (here)


///step3 - create a variable that is containing box3 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions


///----

///assignment4 - add font size to header1 when moving the mouse around over box5

let header1=document.getElementById("header");
//let box5=document.getElementById("b5");
//box5.addEventListener("mousemove", increaseFontSize);

//function increaseFontSize({
//console.log("increaseFontSize Triggered")
//counter++;
//header.style.fontSize=counter +"px";
//})



let counter1=20;
function mouseMove(){
	header1.style.fontSize=counter1++ + "px";
}

///step1 - declare a variable that is a counter with a starting value of 20
///step2 - give the box5 element in the html document a function when moving around the mouse over it - onmousemove
///step3 - declare the function in your javascript file (here)
///step4 - add 1 to the counter every time the funciton is triggered
///step5 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter (remember to add + "px"  in the end)

///----

///assignment5 - remove font size to header1 when moving the mouse around over box6

///step1 - give the box6 element in the html document a function when moving around the mouse over it - onmousemove
///step2 - declare the function in your javascript file (here)
function mouseMove2(){
  header1.style.fontSize=counter1-- +"px";
}

//let box6=document.getElementById("b6");
//box6.addEventListener("mousemove", decreaseFontSize);
//function decreaseFontSize(){
//counter--;
//header.style.fontSize=counter +"px"
//}


///step3 - remove 1 from  the counter every time the funciton is triggered
///step4 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter
