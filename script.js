/*
Brainstorm

Vision:
Menu navigation -- all content appears in one space
No Scrolling needed

Step 1
 - on load add event listeners to each of the menu options
 - make an empty array called currentDiv = []
>>>>>>it can only ever show one thing so array length cannot exceed 1

when the menu option is clicked then add the class show to the div that was clicked



*/
var defaultContent = document.getElementsByClassName("show")[0];
var contentShown = [defaultContent];
var menuOptions = document.getElementsByClassName("option");

// console.log(menuOptions);

for(var i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener("click", selectContent)
}

function selectContent(e) {
  var selectedOption = e.target.innerText.toLowerCase().replace(/\s+/g, '')
  var selectedContent = document.getElementsByClassName(`${selectedOption}-content`)[0]

  makeVisible(selectedContent)

}

function makeVisible(divToShow){
  console.log(contentShown)
  if(!contentShown.length) {
    contentShown.push(divToShow)
  }
  else {
    contentShown[0].classList.remove("show");
    contentShown.length = 0;
    divToShow.classList.add("show");
    contentShown.push(divToShow);
  }

}


//DYNAMICALLY ALTER CSS
//TRACK WINDOW RESIZING

let heightOutput;
let widthOutput;
const contentDiv = document.querySelector('.content');
const contentDivRect = contentDiv.getBoundingClientRect();
let contentDivHt
let contentDivWth


window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
  heightOutput  = window.innerHeight;
  widthOutput = window.innerWidth;

  console.log(heightOutput, widthOutput)
}

// function adjustAbsElements (){
//   if(heighOutput <= 700){

//   }
// }
