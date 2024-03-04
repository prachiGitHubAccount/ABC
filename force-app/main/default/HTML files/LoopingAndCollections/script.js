console.log('Looping and Collection');
console.log('DAY 6');

let myFavCars = ['Audi', 'BMW', 'Maruti', 'Hyundai', 'TATA'];
console.log('myFavCars.length ' +myFavCars.length);
let myObject = {
    fname: 'Prachi',
    lname: 'Khandake',
    Age: '25'
};

//for for(initilization, condition , increment/decrement)
for(let i=0; i< myFavCars.length; i++) {
    console.log(`${i+1}. ${myFavCars[i]}`); // 1. Audi 2. BMW 3. Maruti 4. Hyndai 5. TATA
}

//while while(condition)
let j =0;
while(j< myFavCars.length){
    console.log(`${j+1}. ${myFavCars[j]}`); 

    j++;
}

//do while
/*do{

}while();*/
do{
    console.log('DO WHILE LOOP');
}while(1==2);

//for of - loop [JS new loop]
//for(let item of list) - same like apex for loop without datatype
for (let k of myFavCars){
    console.log('cars ' +k); //here only values will come  to get index add entries
}                            //check below for loop // or use for in loop for only getting keys

for (let k of myFavCars.entries()){
    console.log('cars with index ' +k); //0,Audi  1,BMW  2,Maruti  3,Hyndai  4,TATA
}                                        //This is Array.. lets do destructuring in next for loop 

for (let [index, car] of myFavCars.entries()){
    console.log(`${index}. ${car}`); 
}  
 
//With object
/*for(let i of myObject){
console.log('i' +i); // myObject is not iterable 
}*/

/* To make object iterable, we have 3 methods
1) Object.keys  - gives all the property
2) Object.values -  gives all the values of the property
3) Object.entries - it will give you both  property and values
*/

for(let i of Object.keys(myObject)){
    console.log('Propert name ' +i);  //fname lname age - getting all properties
    console.log('Property value ' +myObject[i]); //Prachi Khandake 25
}  //on based of keys we can access property values but vice versa is not possible 

for(let i of Object.values(myObject)){
        console.log('i' +i);  //Prachi Khandake 25 - getting all values
}

for(let [key, value] of Object.entries(myObject)){
    console.log(`${key}-> ${value}`);  //fname-> Prachi  lname-> Khandake  Age-> 25
}

//for in 
/*
for(let item in collection){

}
*/
//With object - use for in loop since its is in iterable format only
for(let i in myFavCars){
    console.log('i-'+i); //get here keys
    console.log(i, myFavCars[i]); 
}

for(let i in myObject){
    console.log(i);
}

let openingHours = {
    fri : {open : '10 AM', close: '5 PM'},
    sat : {open : '9 AM', close: '4 PM'},
    sun : {open : '11 AM', close: '6 PM'},
};

for(let item in openingHours){
console.log(item); // fri sat sun
console.log(openingHours[item]); // {open : 10 AM, close: 5PM}........
let {open, close} = openingHours[item];
 console.log(open, close);
 console.log(`On ${item} office starts at ${open} and closes at ${close}`);
}

//for of loop
 for (let [day, {open, close}] of Object.entries(openingHours)){
    console.log(day, open, close);
 }

 //MAP

 let newMap = new Map();
 newMap.set('fname', 'Prachi');
 newMap.set(2, 50);
 newMap.set(true, 'trainer');
 console.log(newMap); 

//to access values from Map
console.log(newMap.get(2));

//size of the map
console.log(newMap.size);

let favPlaces = new Map([
    ['Karnatake', 'Bangalore'],
    ['Maharasthra', 'Pune'],
    ['Kerala', 'Munnar']
]);
console.log(favPlaces);

for (let [key, value] of favPlaces){
console.log(key, value);
}

for (let item of favPlaces.keys()){
    console.log(item);
}

for (let item of favPlaces.values()){
        console.log(item);
 }

//Set
let mySet = new Set(['Pasta', 'Ghar Ka Khana']);

mySet.add('Burger');
mySet.add('Pizza');
mySet.add('Burger');
mySet.add('Diet food');
console.log(mySet);

 //check if sandwich is present in the set

 console.log(mySet.has('Sandwich')); //false

 mySet.delete('Pizza');
 console.log(mySet);

 for(let item of mySet){   //in doesn't work bcz in iterates on index 
    console.log(item);     //set only have values
 }

 
