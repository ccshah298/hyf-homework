//1) Log out the text- Called after 2.5 seconds,
//2.5 seconds after the script is loaded.ex------

const loadScript = () =>{
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500)};

document.addEventListener("DOMContentLoaded", (event) => {
  loadScript();
});

//2) Create a function that takes 2 parameters:ex-----
function delayLog(delay1, stringToLog){
  setTimeout(()=> {
      console.log(stringToLog);
      }, delay1*1000);
}
delayLog(5, "This string log after 5 sec");
delayLog(3, "This string logged after 3 sec");

//3)5 seconds after the button is clicked. ex-------
const btn = document.getElementById("clickMe");
btn.addEventListener("click",()=>{
    setTimeout(()=> {console.log("Log after 5 sec");}, 5000)
});

//4)Create two functions and assign them to two different variables & Try call the third function once with both ex-----
function earthLogger(){
  console.log("Earth");
}
function saturnLogger(){
   console.log("Saturn");
}
function planetLogFunction(callback1){
   callback1();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5) button is clicked the location (latitude, longitude) of the user ex----
let btn1 = document.getElementById("find-me");
let map1 = document.getElementById("map1")
btn1.addEventListener("click", geoFindme);
function geoFindme() {
    if('geolocation' in navigator ){
    console.log('geolocation is available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        document.getElementById("latitude").innerText = lat;
        document.getElementById("longitude").innerText = lng;
        //map1.innerHTML = `<div style="width: 100%"><iframe width="800" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=+(My%20location)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
    });
}
else {
    console.log("geolocation is not available");
}}

//7)different delays and different callback functions
function runAfterDelay(delay,callback2) {
  setTimeout(()=> {
    callback2();
    }, delay*1000);
}
runAfterDelay(4, function(){
    console.log("different ex: should be logged after 4 sec");
})
runAfterDelay(10, function(){
  let answer = 10 + 10;
 // answer++;
  console.log("differnt ex:",answer);
});

//8) double click ex----
//window.addEventListener("dblclick", () => console.log("Double click!"));//dblclick event js work here 
let lastClick = 0;
window.addEventListener("click", (e) => {
const thisClick = Date.now(); 
if (thisClick - lastClick < 500) {
    console.log('Double click!');
    return;
  }
lastClick = thisClick;
});


//9) jokeCreator ex---
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
  if (shouldTellFunnyJoke){
    logFunnyJoke();
}
else{
    logBadJoke();
}
};
function logFunnyJoke() {

    console.log("funny Joke");
};
function logBadJoke(){
    console.log("Bad Joke");
};
    jokeCreator(true,logFunnyJoke ,logBadJoke );
    jokeCreator(false,logFunnyJoke , logBadJoke);

    //Function as a variable ex-----
// array with 3 items & call all the functions......
      const arrayOfFunctions = [
        (a) => console.log("Hi"),
        (b) => console.log("Hello"),
        (c) => console.log("Hola"),
      ];
      const newFunctionsArray = arrayOfFunctions.forEach((allFunction) => allFunction());
      //create function as a const......
      const functionOfConst = () => console.log("Hey I am const function");
      // create function normally
      function randomFunction() {
        console.log("Hey I am normal Function");
      }
      functionOfConst();
      randomFunction();
      //Create an object that has a key whose value is a function. Try calling this function.....
     const objectFunction = {
       nameFun : function functionOfObject() {
                console.log("Hey I am key of object")
       }
      };
      objectFunction.nameFun();

  
    
    
    





