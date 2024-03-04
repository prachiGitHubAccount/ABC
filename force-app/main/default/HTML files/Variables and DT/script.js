console.log("Hiiiiiiiiiiii");
console.log("hello");

//console types
console.error('Errror while loading js file');
console.warn('Video is Buffering');

//Variables

//let 
//let keyword can reaasigned
//let keyword  cannot be redeclared

 let myName = 'Prachi';
 console.log("myName -->", myName);

 myName = 'Anita';
 console.log("myName -->", myName);

 //let myName = 'Avinash'; -- Uncaught error

//const
//const cannot be reassigned/updated
//const cannot be redeclared

const myName1 = 'PK';
console.log("myName1 -->", myName1);

//myName1 = 'Prachi'; Uncaught error - assignment to const variable

const myObject = {fname: "Prachi", lname: "Khandake"}
console.log("myObject -->", myObject);
myObject.fname = "Avinash";
console.log("myObject after only updating 1 attribute -->", myObject);

//myObject = {fname: "Priyanka", lname: "Whaval"} // ERROR [Since updating whole]
//console.log("myObject -->", myObject);

//var
//var can be reassigned/updated
//var can be redeclared

var bootcamp = "LWC";
console.log("bootcamp -->", bootcamp);
bootcamp = "LWC is easy"; //reassigning
console.log("bootcamp -->", bootcamp);

var bootcamp = "LWC day 3"; //redeclaring
console.log("bootcamp -->", bootcamp);
console.log(window.bootcamp);


//Data Types
//String, Number, Boolean, Undefined, Null, Object, Array

let myNickName = 'Prachi';
console.log('myNickName-->', myNickName, 'type of-->', typeof(myNickName));

myNickName = 17;
console.log('myNickName-->', myNickName, 'type of-->', typeof(myNickName));

myNickName = true;
console.log('myNickName-->', myNickName, 'type of-->', typeof myNickName);

let myDetails = {};
console.log("myDetails", myDetails);
console.log("myDetails:", typeof(myDetails)); // object

let myDetailsArray = [];
console.log("myDetailsArray", myDetailsArray);
console.log("myDetailsArray:", typeof(myDetailsArray)); //object

let myNullVariable = null;
console.log("myNullVariable", myNullVariable);
console.log("myNullVariable:", typeof(myNullVariable));// object

let myUndefinnedVariable;
console.log("myUndefinnedVariable", myUndefinnedVariable);
console.log("myUndefinnedVariable:", typeof(myUndefinnedVariable)); //undefined

let output = 16+4+"volvo"
console.log("output", output); // 20volvo

let output1 = "Volvo" +16+4;
console.log("output1", output1); // Volvo164

let output2 = 25 +  "Volvo" +16;
console.log("output2", output2); //25Volvo16

let myNumber = "1";
console.log("myNumber:", typeof(myNumber)); //string

let myNumber1 = "1" + "5"
console.log("myNumber1:", myNumber1); //15

let myNumber2 = "1" + 5
console.log("myNumber2:", myNumber2) //15

let myNumber3 = 1 + "5"
console.log("myNumber3:", myNumber3) //15


