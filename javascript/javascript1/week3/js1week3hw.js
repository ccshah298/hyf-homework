
//Ex-Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  /*const nameToRemove = "Ahmad";
  names.splice(1,1)//find the position of Ahmad in index=1 & ,1= 0nly remove one Ahmed
  console.log (names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']----->changes done*/

  
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
        break;
    }
}
console.log(names);


  //Ex-When will we be there??
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function getTravelTime(travelInformation){
    const travelTime =
    travelInformation.destinationDistance / travelInformation.speed;
    const travelHours = parseInt(Number(travelTime));
    const travelMin = Math.round((Number(travelTime) - travelHours) * 60);
    return `${travelHours} hours and ${travelMin} minutes`;

  }
  const travelTime = getTravelTime(travelInformation);
console.log(`${travelTime} takes total in journey`);


//Ex-Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Friends",
      days: 4,
      hours: 2,
      minutes: 0,
    },
    {
      title: "Breathe",
      days: 3,
      hours: 22,
      minutes: 0,
    },
  ];
  function logOutSeriesText(){
    const noOfYearsInHours = 80 * 365 * 24;
    let totalOfTime = 0;
    for(i=0; i<seriesDurations.length; i++){
        const daysHours = seriesDurations[i].days*24;
        const hours = seriesDurations[i].hours;
        const seriesTitle = seriesDurations[i].title;
        const totalPersantage = ((daysHours+hours)/noOfYearsInHours)*100
        totalOfTime += totalPersantage;
        console.log(`${totalPersantage.toFixed(3)} % takes ${seriesTitle}`);
} 
console.log(`${totalOfTime.toFixed(3)} % total series takes time in my life`);
}

logOutSeriesText();


//Ex- Save a note
const notes = []
function saveNote(content,id){
    const myNote = {
      content: content,
      id: id,
    };
   notes.push(myNote)
    }  
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// Get a note
function getNote(id) {
  for(i=0;i<notes.length;i++){
    //if(id === isNaN() && content === 'string' ){-----> changes done
      if(id === isNaN()){
      return 'you enterd valid formate'
    }
    else if(id === (notes[i].id)){
      return notes[i];
    }
    else{
      return error;
    }
  }  
}
const firstNote = getNote(1);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted(){
  for(i=0; i<notes.length; i++){
      console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
      
  }
}
logOutNotesFormatted();


//Ex-CactusIO-interactive (Smart phone usage app) optional
// addActivity & improve that in function accordingly requirment in optional exercises
let activities = [];
function addActivity( dt,act, dur){
  let addedActivities = {date: new Date(),
     activity: act,
      duration: dur};
  if (typeof act === "string" && typeof dt === "string" && typeof dur === "number"){
      return activities.push(addedActivities);
  }
  else{
      return console.log("activity should be string and duration is number");
  }
}
addActivity( "","FACEBOOK", 10);
addActivity( "","INSTAGRAM", 30);
addActivity( "","YOUTUBE", 40);
console.log(activities)


//Show my status & Usage limit
showStatus(activities);

function showStatus(acti){
  let maxLimit = 100;
  let totalDuration = 0;
  for(let i=0;i<acti.length;i++){
    totalDuration += acti[i].duration;
   
}
console.log (`You have added ${acti.length} activities. They amount to ${totalDuration}min. of usage`);
if(totalDuration > maxLimit){

  console.log(`You have reached your limit, no more smartphoning for you`);
  }
  else{
      console.log(`you can use more smartphone :)`);
  }
}
//extra ex
function mostConsumingAct() {
  let maxDuration = 0;
  let myAct;
  for (let i = 0; i < activities.length; i++) {
      if (activities[i].duration > maxDuration) {
          maxDuration = activities[i].duration;
          myAct = activities[i].activity;
      }
  }
  return myAct;
}

let maxUse = mostConsumingAct();
console.log(`your most of the time spent on ${maxUse}.`); 
