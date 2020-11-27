"use strict"
// Ex-Voice assistant
// arry for do list
const listToDo =[];
//function that return a response of command
let name = '';
function getReply(command){
    //Hello my name is Benjamin
    let sentance = command.split (" ");
    
    if(command === 'Hello my name is Benjamin'){  
        if(name === '')
          {
              name = sentance[sentance.length - 1];
              return ("nice to meet you "+name);
          }
        else
         {
              return ("Repeat sentance");
         }
        }
//What is my name
     else if(command === 'What is my name?')
        {
               return ("Your name is "+name);
        }              
        
        
//Add fishing to my todo
//Add singing in the shower to my todo
else if(sentance[0] === 'Add')
   {
    listToDo.push(sentance.slice(1,sentance.indexOf('to')).join(' '));
    return (sentance.slice(1,sentance.indexOf('to')).join(' ') + " added to your todo");
   }

   //Remove fishing from my todo
   else if(sentance[0] === 'Remove'){
    
    listToDo.splice(listToDo.indexOf(sentance.slice(1,sentance.indexOf('from')).join(' ')),1);
    return ("Removed "+sentance.slice(1,sentance.indexOf('from')).join(' ')+" from your todo")
   }

   else if(sentance[0] === 'What' && sentance[sentance.length-1] === 'todo?')
        {
               return ("You have "+listToDo.length+ " todos - "+listToDo.join(' and '));
        } 
        //What day is it today?
         else if(command == 'what day is it today?'){
            let monthOfYear = ['january','february','march','april','may','june','july','august','september','november','december']
            let month = new Date().getMonth();
            month = monthOfYear[month];
            return (new Date().getDate()+'.of '+ month +' '+new Date().getFullYear());  
        }
        //Set a timer for 4 minutes
        
        else if(command == 'Set a timer for 4 minutes'){
            let time = command.substr(16,2);
            console.log("Timer set for "+time+" minutes");
            let timeToMiliseconds = time*60*1000;
            setTimeout(function(){console.log("Timer Done");}, timeToMiliseconds); 
        }
        // simple math
        else
        {
         return getmath(sentance);
        }
    }

function getmath(matheqa)
 { 
     const a = Number(matheqa[0]);
     const operator = matheqa[1];
     const b = Number(matheqa[2]);

     switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
    }
  

 }
    
    //reply of Hello my name is Benjamin ex-----
console.log(getReply('Hello my name is Benjamin'));
//console.log(getReply('Hello my name is Benjamin'));

// reply of what is my name ex----
console.log(getReply('What is my name?'));

//reply of Add fishing & singing to my todo ex----
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));

//Remove fishing from my todo ex-----
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"))
//console.log(getReply("What is on my todo?"));
//console.log(getReply("Remove singing in the shower from my todo"))
console.log(getReply("What is on my todo?"));

//What day is it today? ex-------
console.log(getReply('what day is it today?'));

//Set a timer for 4 minutes ex------
getReply('Set a timer for 4 minutes');

//simple math ex-----
console.log(getReply('3 + 3'));
console.log(getReply('4 * 3'));
