//Write a function that finds the shortest word of an array of words ex---
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const lengthOfArray = danishWords.length;
let firstValue = danishWords[0];
let shortestWord;
function shortestWords(danishWords) {
  for (let i = 0; i < lengthOfArray; i++) {
    let arraysIndexLen = danishWords[i].length;
    if (arraysIndexLen <= firstValue.length) {
      shortestWord = danishWords[i];
    }
  }
  return shortestWord;
}
console.log("Shortest word from string array = "+ shortestWords(danishWords));


////Find the individual number and the total number of Danish letters in a string. ex---
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
let count = 0;
let countå = 0;
let countø = 0;
let countæ = 0;
function individualChar(danishString) {
  for (let i = 0; i < danishString.length; i++) {
    let stringsIndex = danishString[i];
    if (stringsIndex.includes("å")) {
      count++;
      countå++;
    } else if (stringsIndex.includes("ø")) {
      count++;
      countø++;
    } else if (stringsIndex.includes("æ")) {
      count++;
      countæ++;
    }
}
let output = {
  total: count,
  å: countå,
  ø: countø,
  æ: countæ,
};
return output;
}

console.log(individualChar(danishString2));


  //Spirit animal name generator ex---
  let body = document.querySelector("body");
  let myInput = document.getElementById("name");
  const hoverOption = document.getElementById("hover-option");
  const buttonOption = document.getElementById("button-option");
    let myButton = document.getElementById("spiritButton");
  buttonOption.addEventListener("change", function() {  
    myInput.removeEventListener("mouseover",EventCall);    
    if (buttonOption.checked){
      myButton.addEventListener("click",EventCall);
    }
  });
  hoverOption.addEventListener("change", function() {   
    myButton.removeEventListener("click",EventCall);
    if (hoverOption.checked){
      myInput.focus();
      myInput.addEventListener("mouseover",EventCall);
    }
  });
 function EventCall() {
      let spiritAnimalString = [
        "Flying Butterfly",
        "Owl",
        "Frogs",
        "Spider",
        "Wolf",
        "Bats",
        "Crow",
        "Swans"
      ];
      let random = Math.floor(Math.random() * spiritAnimalString.length);
      let divElement = document.createElement("div");
      body.appendChild(divElement);
    
      if (myInput.value === "") {
      
        divElement.innerText = "empty: please enter a name";
      }
      else
      {
        divElement.innerText = `${myInput.value} - ${spiritAnimalString[random]}`;
      }
    
    }
    

  

  
  