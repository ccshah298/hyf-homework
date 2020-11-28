//Write a function that finds the shortest word of an array of words ex---
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWords(danishWords) {
let shortValue = danishWords[0];
   for(const shortWord of danishWords){
     if(shortValue.length > shortWord.length){
       shortValue = shortWord;
     }
   }
   return shortValue
  }
console.log("Shortest word from string array = "+ shortestWords(danishWords));


////Find the individual number and the total number of Danish letters in a string. ex---
const danishString = "Jeg har en blå bil";
//const danishString2 = "Blå grød med røde bær";
const danishString2 = "Bl grød med røde br";

function individualChar(danishString) {
let count = 0;
let countå = 0;
let countø = 0;
let countæ = 0;
let output = new Object();
  for (let i = 0; i < danishString.length; i++) {
    const stringsIndex = danishString[i];
    if (stringsIndex === "å") {
      count++;
      countå++;
      output.å = countå;

    } else if (stringsIndex === "ø") {
      count++;
      countø++;
      output.ø = countø;
    } else if (stringsIndex === "æ") {
      count++;
      countæ++;
      output.æ = countæ;
    }
}
output.total = count;
/*const output = {
  total: count,
  å: countå,
  ø: countø,
  æ: countæ,
}; */
return output;
}

console.log(individualChar(danishString2));


  //Spirit animal name generator ex---
  const body = document.querySelector("body");
  const myInput = document.getElementById("name");
  const hoverOption = document.getElementById("hover-option");
  const buttonOption = document.getElementById("button-option");
    const myButton = document.getElementById("spiritButton");
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
      const spiritAnimalString = [
        "Flying Butterfly",
        "Owl",
        "Frogs",
        "Spider",
        "Wolf",
        "Bats",
        "Crow",
        "Swans"
      ];
      const random = Math.floor(Math.random() * spiritAnimalString.length);
      const divElement = document.createElement("div");
      body.appendChild(divElement);
    
      if (myInput.value === "") {
      
        divElement.innerText = "empty: please enter a name";
      }
      else
      {
        divElement.innerText = `${myInput.value} - ${spiritAnimalString[random]}`;
      }
    
    }
    

  

  
  