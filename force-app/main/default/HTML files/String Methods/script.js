console.log(`Topics:
Strung methods`);

let myString = 'My name is Prachi';
console.log('String ', myString);
console.log('String Lenght ', myString.length);

//Extracting String
let text = "Apple, Banana, Kiwi";
console.log(text);

//slice(start position, end position +1) [end not included] - can hadle negative values
//substring(start position, end position +1) - cannot handle negative value in position it will trated as 0
//substr(start position, lenght)

let sliceBanana = text.slice(7,13); //12+1 for end position since end not included
console.log(sliceBanana); //Banana

let sliceRemaingFruits = text.slice(7);
console.log(sliceRemaingFruits); // Banana, Kiwi

//slice with negative start position
let part = text.slice(-1);
console.log(part); //i //Conlusion: String starts with 0 from left and -1 from right

let part1 = text.slice(-12);
console.log(part1); // Banana, Kiwi

//substring(start position, end position) 
let subStringBanana = text.substring(7, 13);
console.log(subStringBanana); //Banana

let partSubString = text.substring(-1); //-1 is trated as 0
console.log(partSubString);  //Apple, Banana, Kiwi

//substr(start position, lenght)
let substrBanana = text.substr() //Depricated


//replace - It will only replace the FIRST match, It is case sensitive
//It will not modif exiisting string

let newFruitsString = text.replace('Banana', 'Mango');
console.log('newFruitsString-', newFruitsString); //Apple, Mango, Kiwi
console.log('Original String', text); //Apple, Banana, Kiwi - Original String is untouched

let cars = 'Audi, BMW, TATA, Forturner, TATA';
console.log('cars-', cars); //Audi, BMW, TATA, Forturner, TATA
let newCars = cars.replace('TATA', 'Swift');
console.log('newCars-', newCars); //Audi, BMW, Swift, Forturner, TATA - Only first TATA got replaced

//upperCase and lowerCase
console.log('TEXT--', text);
console.log('TEXT TO UPPER CASE--', text.toUpperCase());
console.log('TEXT TO LOWER CASE--', text.toLowerCase());

//concat
let text1 = "Hello";
let text2 = "Js";

let finalString = `${text1} ${text2}`; //String Interpolation
console.log('finalString ', finalString); //Hello Js

let text3 = text1.concat(" ", text2);
console.log('text3 ', text3); //Hello Js

//trim(), trimStart(), trimEnd();
let trimMe = "          Hello World            ";
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

//padStart(how much to add, what character), padEnd
let myNumber = '5'; //****5  
console.log(myNumber.padStart(5, '')); //****5
console.log(myNumber.padEnd(5, ' ' )); //5****

//split - It will return an array
let myCSVDetails = "Prachi,Anita,Avinash";
let myCSVDetailsArray = myCSVDetails.split(',');
console.log(myCSVDetails.split(',')); //['Prachi', 'Anita', 'Avinash']

let myCSVDetails1 = "Prachi,Anita,Avinash";
console.log(myCSVDetails1.split(' ')); //['Prachi', 'Anita', 'Avinash']


//Questions from Google
const pi = 3.1415326;
console.log('Data type', typeof(pi));

let obj = {
    Foo : 1,
    Bar: 2
}

let output = [];
for(let something in obj){
    output.push(something);
}
console.log(output);

//Convert Array to String //toString //join
let myTOSTRING = myCSVDetailsArray.toString();
console.log('myTOSTRING', myTOSTRING);

let joinString = myCSVDetailsArray.join('*');
console.log('joinString ', joinString) //Prachi*Anita*Avinash


//search the String
//indexOf(), - return the index position of a string/Not present = -1
//include() - if present return true, else false

console.log(text);
console.log(text.indexOf('Banana')); //7
console.log(text.indexOf('Mango')); //-1
console.log(text.includes('Banana'));  //True
console.log(text.includes('Mango')); //False

//startsWith()
console.log(text.startsWith('Apple')); //true
console.log(text.startsWith('Mango')); //false

//endWith
console.log(text.endsWith('Apple'));  //false
console.log(text.endsWith('Kiwi')); //true


var ownerId = "0053J000002qDzOQAU";
console.log('ownerId--?' +ownerId); 

var outputString =  ownerId.slice(1);

