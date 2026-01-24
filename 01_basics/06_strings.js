const name ="Aviral verma"
const repocount=50

console.log(name + repocount +"value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  // Best method for write two string  and follow this syntax

const gameName =new String('AVIRAL-AV')


// STRINGS DIFFERENT TYPE OF METHOD 

console.log(gameName[0]);

console.log(gameName.__proto__);

// Find string Length

console.log(gameName.length);

// Convert string to a uPPER CASE

console.log(gameName.toUpperCase());

// Charcater location find using string.

console.log(gameName.charAt(2));

// index location find using a string 

console.log(gameName.indexOf('r'));

// find substring 

const newString=gameName.substring(0,4)
console.log(newString);

// slice 

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

// USE OF TRIM (eXTRA SPACE REMOVE KAR DETA HAI)  ANOTHER METHOD START TRIM END TRIM

const newStringOne ="   Hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim);

const url ="https://aviral.com/aviral%20verma"

console.log(url.replace('%20','_'));

// check include this thing in url yes or not if yes than output true and no than falce 

console.log(url.includes('aviral'))

// split method use (Converts string into array)

const name1 = "Aviral-kumar-Verma";
console.log(name.split("-"));


















