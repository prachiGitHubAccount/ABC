// Topics: Object, Spread Operator, Destructing, String Interpoliattaion
console.log("Topics: Object, JSON Operations, Spread Operator, Destructing, String Interpolation");
console.log("DAY 5"); 

//Object
let myDetails =  {
    fname : "Prachi", 
    lname: "Khandake",
    age : 25,
    skills : ['Admin', 'Apex', 'LWC']
}; // In object order doesn't matter but in Array it matters


let response =  {
   status : ['Under Review', 'ON HOLD', 'Closed']
}; // In object order doesn't matter but in Array it matters

let [one, two, three] = response.status;
console.log('one--', one);
console.log('two--', two);
console.log('three--', three); // India

console.log('myDetails--', myDetails);
console.log('typeof myDetails--', typeof myDetails); //Object

//Json.stringify
let jsonString = JSON.stringify(myDetails);
console.log('jsonString--', jsonString);
console.log('typeof jsonString--', typeof jsonString); //String

//Json.parse
let jsonObject = JSON.parse(jsonString);
console.log('jsonObject--', jsonObject);
console.log('typeof jsonObject--', typeof jsonObject);

//Modify the object 1) "." 2) []
myDetails.dob = '1998';
console.log('myDetails--', myDetails); //new property called dob is added

myDetails.age = 35;
console.log('myDetails--', myDetails); //  now age will be 35

//Property to be dynamic
myCountry = "Country";
myDetails[myCountry] = "India";
console.log('myDetails--', myDetails); // Country : India

//2'nd use case of [] - want the property name with space in between like City Name
//myDetails.City Name = 'Pune'; //gets error for space

myDetails["City Name"] = 'Pune';
console.log('myDetails--', myDetails); // City Name = 'Pune'

//Access the value from Object

let myCountry01 = myDetails.Country;
console.log('myCountry01--', myCountry01); // India

let mySkilss = myDetails.skills;
console.log('mySkilss--', mySkilss); // India

let myCountry02 = myDetails["age"];
console.log('myCountry02--', myCountry02); //35

//---Spread Operator---

let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];

//Concetanation of two Array
let combinedArray = [...numberOne, ...numberTwo]; // use [] for Array
console.log('combinedArray--' +combinedArray) // 1, 2, 3, 4, 5, 6

//Expand the Array
let myName = 'My Name is Prachi';
console.log('myName--', ...myName); // M y  N a m e  i s  P r a c h i

let myName01 = 'Prachi';
console.log('myName01--', ...myName01); // P r a c h i

//Add element in array
numberOne = [9, 7, 5, ...numberOne, 10, 11, 12];
console.log('numberOne--', ...numberOne);  // 9, 7, 5, 1, 2, 3, 10, 11, 12

//Concetanation of two Objects
let myObj01 = {fname : "Prachi", skills : ['apex', 'LWC']};
let myObj02 = {lname : "Khandake", age: 26};

let myCombinedObj = {...myObj01, ...myObj02}; //use {} for object 
console.log('myCombinedObj--', myCombinedObj)  


//Copy on Array and Object

let myFavFruits = ['Apple', 'Peru', 'DrgonFruit'];
let myFavFruitsCopy = myFavFruits; //traditional way

console.log('myFavFruits--', myFavFruits); //['Apple', 'Peru', 'DrgonFruit']
console.log('myFavFruitsCopy--', myFavFruitsCopy); //['Apple', 'Peru', 'DrgonFruit']

myFavFruitsCopy.push("Cherry"); 
// added cherry only in copy array but original array also got affected. 
//this is reffered as Deep Copy in JS. Because both these are sharing common ref in the memeory
console.log('myFavFruits--', myFavFruits); // ['Apple', 'Peru', 'DrgonFruit', 'Cherry']

console.log('myFavFruitsCopy--', myFavFruitsCopy); // ['Apple', 'Peru', 'DrgonFruit', 'Cherry']

//Using Spread Op - to avoid above issue -------------IMPPPPPPPPPPPPPPPP

let myFavFruits01 = ['Apple', 'Peru', 'DrgonFruit'];
let myFavFruitsCopy01 = [...myFavFruits01]; //Shallow copy

console.log('myFavFruits--', myFavFruits01); //['Apple', 'Peru', 'DrgonFruit']
console.log('myFavFruitsCopy01--', myFavFruitsCopy01); //['Apple', 'Peru', 'DrgonFruit']

myFavFruitsCopy01.push("Cherry"); 
console.log('myFavFruits01--', myFavFruits01); // ['Apple', 'Peru', 'DrgonFruit']
console.log('myFavFruitsCopy01--', myFavFruitsCopy01);  //['Apple', 'Peru', 'DrgonFruit', Cherry]


let newObj =   {
    label: 'Copy main heading',  fieldName: 'NewColumn', type: 'button', initialWidth: 135, 
    typeAttributes: { label: 'Copy', name: 'copy_details', title: 'Click to copy Details'}
}
let newObjCopy = {...newObj.typeAttributes};
console.log('BEFOEEEE--'); 
console.log('newObj--', newObj); 
console.log('newObjCopy--', newObjCopy); 
newObjCopy.label = 'Copppieedd';
console.log('AFTER--'); 
console.log('newObj--', newObj); 
console.log('newObjCopy--', newObjCopy); 

let mainObj = {
    label: 'Copy main heading',
    fieldName: 'NewColumn',
    type: 'button',
    typeAttributes: { label: 'Copy', name: 'copy_details', title: 'Click to copy Details' }
};

let newObjCopy1 = { typeAttributes: Object.assign({}, mainObj.typeAttributes) };
console.log('newObjCopy1--', newObjCopy1); 
newObjCopy1.typeAttributes.label = 'Copiedddd';

console.log('newObjCopy1--', newObjCopy1); 

let toassignobj = {
label: mainObj.label,
fieldName: mainObj.fieldName,
type: mainObj.type,
typeAttributes : newObjCopy1.typeAttributes
}

console.log('MAIN OBJ--'+JSON.stringify(mainObj));
console.log('toassignobj--'+JSON.stringify(toassignobj));






//SAme goes with Object - use spread op to not impact the original

//---Destructuriing Assignment---
//Destructuriing Array
let myhobbies = ['Badminton', 'Dance', 'Sleep', 'Eat'];

//let myhobbies01 = myhobbies[0]; //Traditional way to access array elements
//let myhobbies02 = myhobbies[1];
//let myhobbies03 = myhobbies[2];

let [myhobbies01, myhobbies02, myhobbies03] = myhobbies; //Destructing Array in 1 statement
console.log('myhobbies01--', myhobbies01); //Badminton
console.log('myhobbies02--', myhobbies02); //Dance
console.log('myhobbies03--', myhobbies03); //Sleep

let [myhobbies04, , myhobbies05] = myhobbies;  //leave space for Dance - to only extract Badminton and Sleep
console.log('myhobbies04--', myhobbies04); //Badminton
console.log('myhobbies05--', myhobbies05); // Sleep

let [myhobbies06, myhobbies07, ...remaining] =myhobbies;
console.log('remaining--', remaining); // sleep Eat

//let [...rest, , ...remaining] =myhobbies; //not possible

//Destructuriing Object ---------need to discuss
let myNewDetails =  {
    fname : "Anita", 
    lname: "Khandake",
    age : 50
}; 
let {fname, lname, age} = myNewDetails; //Need to give exact same name as Property Name
console.log('fname--', fname); //Anita
console.log('lname--', lname); //Khandake
console.log('age--', age); //50

//Aliasone 
let myNewDetails2 =  {
    fNname : "Avinash", 
    lNname: "Khandake",
    Agee : 59
}; 
let {fNname : FirstName, lNname: LastName, Agee: MyAge} = myNewDetails2; //Need to give exact same name as Property Name
console.log('FirstName--', FirstName); //Avinash
console.log('LastName--', LastName); //Khandake
console.log('MyAge--', MyAge); //59


//---String Interpolation

let myString6 = "My name is";
let myString7 = "Prachi";
let myString8 = "I stay in";
let myString9 = "Nippani";
let caclculateAge = 2023 - 1998;
let myString10 = "age is ";

let myFinalString = `My name is ${myString7}. ${myString8} Nippani. My age's is ${caclculateAge}.`
console.log(myFinalString);


















































