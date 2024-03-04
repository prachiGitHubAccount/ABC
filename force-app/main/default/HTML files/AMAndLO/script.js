console.log('AMAndLO means Arithmetic and Logical operators');

//Truthy and Falsy

let myName;
console.log('myName', myName); //undefined
console.log('myName', typeof myName);  //undefined

if(myName) {
    console.log('Print my Name', myName); //doesn't execut because undefined is falsy value
} else {
    console.log('Error in if condition because myName is', myName);
}

let mySalaray =0;
console.log('mySalaray', mySalaray); //0
console.log('mySalaray', typeof mySalaray); //number

if(mySalaray) {
    console.log('Print my Salary', mySalaray); //doesn't execut because 0  is falsy value
} else {
    console.log('Salary must be greater than 0', mySalaray);
}   

//Logical Operators
let myNumber = 10;
let myNumber2 = "20";
console.log(typeof myNumber, typeof myNumber2); //number , string
console.log(myNumber + myNumber2); //1020
//using Number function
console.log(myNumber + Number(myNumber2)); //30

let myNumber3 = 10;
let myNumber4 = "20A";
console.log(typeof myNumber3, typeof myNumber4); //number , string
console.log(myNumber3 + myNumber4); //1020A

console.log(myNumber3 + Number(myNumber4)); //NaN
//To avoid Nan error, we use isNan function
if(isNaN(myNumber4)){
console.log('myNumber4 is not a number thus conversion is not possible')
} else {
    console.log(myNumber3 + Number(myNumber4));
}

let myNumber5 = "30";
let myNumber6 = 10;
console.log(typeof myNumber5, typeof myNumber6); 
console.log(myNumber5 - myNumber6); //20 Internally js performs conversion string to number
console.log(myNumber5 * myNumber6); //300
console.log(myNumber5 / myNumber6); //3
console.log(myNumber5 + myNumber6); //3010 //take a look

//comparison op
let myNumber7 = "30";
let myNumber8 = 10;
console.log( myNumber7 >  myNumber8);  //true

//Logical Op (&&, ||, !)
console.log(true && false); //false
console.log(true && true); //true

let myString = "Prachi";
let myString1 = "Khandake";
console.log(myString && myString1);  //Khandake - last opearnd

//Or op
let myString2 = "Prachi";
let myString3 = "Khandake";
console.log(myString2 || myString3);  //Prachi - first operand

//Not operator
let isSalaryCredited = false;
console.log('isSalaryCredited', isSalaryCredited);  //false
isSalaryCredited = !isSalaryCredited;
console.log('isSalaryCredited', isSalaryCredited); //true

//ternary op
let age = 21;
let op = (age < 18) ? "Too Young" : "Old enough";
console.log('op-->' +op) // Old enough

 //Equality (==) v/s Stric Equality (===)

 let myNumber9 = 3;
 let myNumber10 = 3;
 console.log(typeof myNumber9, typeof myNumber10); // number number
 console.log( myNumber9,  myNumber10); // 3 3
 console.log( myNumber9 == myNumber10); //true - checks value
 console.log( myNumber9 === myNumber10); //true - since value and data type is same

 let myNumber11 = 3;
 let myNumber12 = "3";
 console.log(typeof myNumber11, typeof myNumber12); // nuumber string
 console.log( myNumber11,  myNumber12); // 3 '3'
 console.log( myNumber11 == myNumber12); // true
 console.log( myNumber11 === myNumber12); // false

 console.log('Prachi' == 'prachi');  //false //different value because js is case sensitive
//first compare value then data type if value is false dt is not checked

//Null v/s Undefined
let myString4 = null;
let myString5 ;
console.log(typeof myString4, typeof myString5); // object undefined
console.log( myString4 == myString5); //true //take a look
console.log( myString4 === myString5); //false
