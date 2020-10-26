const firstWords =["Easy","Awsome","Corporate","Good","Bad","intense","Soft","Hard","bold","normal"];
const secondWords =["black","blue","red","white","triangle","round","square","pink","bus","train",];
const startupName = firstWords[Math.floor(Math.random() *10)] + " " + secondWords[Math.floor(Math.random() *10)];

console.log (" The Startup: "+ startupName + " " + "contains" + " " + startupName.length + " " + "characters");