//Flight booking fullname function
function getFullName(firstname,surname){
    return firstname + ' ' + surname;
}
 const fullname = getFullName( 'charmi','shah');
console.log(fullname);

 const fullname1 = getFullName ('Niaa', 'sharma');
 const fullname2 = getFullName ( 'shreya','goshal');
 console.log (fullname1);
 console.log (fullname2);


 //Formal fullname
function getFullName(firstname,surname,useFormalName){
 if(useFormalName){
     return 'lord' + ' '+ firstname + ' ' + surname;
 }
 else{
     return firstname + ' ' + surname;
 }
}
const fullname3 = getFullName ('Charmi' , 'Shah', true); 
const fullname4 = getFullName ('Chirag' , 'Riaan');
console.log (fullname3);
console.log (fullname4);


//Event application
const daysInWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday' , 'friday', 'saturday'];
function getEventWeekday (number){
    let dateT = new Date ();
    let dayT = dateT.getDay ();
    let eventDay = (dayT+number)%7;
    return daysInWeek[eventDay];
}
//today is wednesday
console.log (getEventWeekday(9)); //log out friday


//Weather wear
function WhichclothsToWear(temperature){
    if(temperature>=18)
    {console.log('wear shorts')}
    else
    {console.log('wear jacket')}     
}
WhichclothsToWear(18);


//Student manager

const class07Students = [];
let studentName;
function addStudentsToClass(studentName) {
    if((class07Students.length < 6 && studentName !== "") || studentName.toLowerCase === 'queen'){
        if(class07Students.includes(studentName)){
            console.log( studentName + " is already exist in list.")
        }
        else {
            class07Students.push(studentName)
            
        }
      }
   
}

addStudentsToClass("Charmi");
addStudentsToClass("Tithi");
addStudentsToClass("Rajani");
addStudentsToClass("Rajani");
addStudentsToClass("Jyothi");
addStudentsToClass("");
addStudentsToClass("Charmi");
addStudentsToClass("queen");
addStudentsToClass("Sandhana");  
addStudentsToClass("Sandhana");
addStudentsToClass("Abc");
addStudentsToClass("Xyz");
console.log(class07Students);
function getNumberOfStudents() {
    const totalStudents = class07Students.length;
  return totalStudents;

}


//Candy helper optional

var totalPrice=0;
var boughtCandyPrices = [];
function addCandy(candyType,weight){

if (candyType=='Sweet')
 { 
    boughtCandyPrices.push(weight*0.5);

 }
 else if (candyType=='Chocolate')
 {
     boughtCandyPrices.push(weight*0.7);
    
 }
 else if (candyType=='Toffee')
 {
    boughtCandyPrices.push(weight*1.1);
 }
 else if (candyType=='Chewing-gum')
 {
    boughtCandyPrices.push(weight*0.03);  
 }
 return boughtCandyPrices;

}

function calcultePrice() {
    let i = 0;
    while (i<boughtCandyPrices.length)
    {
        totalPrice=boughtCandyPrices[i]+totalPrice;
        i++;
        }
    return totalPrice;
}

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy(){
    
    if (amountToSpend>calcultePrice()){
       console.log(`You have ${amountToSpend} dkk & You spent ${totalPrice} dkk`);
       console.log("You can buy more, so please do!");
      
    }
    else{
        console.log(`You have ${amountToSpend} dkk & You spent ${totalPrice} dkk`);
        console.log("Enough candy for you!");
    }
    
}

addCandy('Toffee', 20);
addCandy ('Sweet',30);
addCandy ('Sweet',30);
addCandy('Toffee', 20);
addCandy ('Sweet',30);
canBuyMoreCandy();


