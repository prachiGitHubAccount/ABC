console.log(`Topics:
Function Declaration
Function Expression
Arrow Functions
Callback Functions`);


//calling the function first before decalaration
//This is possible only in FD //tHIS IS CALLED HOISTING
console.log('Calling function before Declaration in FD ' +calc1(9,7));  

//Function Declaration
function calc1(number1, number2) {
let sum = number1 +number2;
return sum;
}

//calling calc1
console.log('Result of Declaration ' +calc1(9,7));


//calling the function first before decalaration
//This is NOT possible for FE
//console.log('Result of Expression ' +calc2(9,7)); //ERROR

//Function Expression
let calc2 = function(number1, number2) { //recommnded way in modern JS
    if(number2){
        let sum = number1 +number2;
        return sum;
    }else{
        return number1;
    }

}

//calling calc2
console.log('Result of Expression ' +calc2(9,7));

//parameters
console.log('Result of Expression ' +calc2(9)); 
//if else no then it will give NAN

//Arrow Functions - introduced in ES6
//modern way of writing down FE

let calc3 = (number1, number2) => { //function keyword replaced by arrow key afeter paramettrs
    if(number2){
        let sum = number1 +number2;
        return sum;
    } else{
        return number1;
    }
}
console.log(calc3(3,3));

let greetmsg = function (username) {  //This is basic FE
return `${username} Welcome to Bootcamp`; //check below to convert this to AF
}

let greetmsgwithArrowFunc =  username => `${username}, Welcome to Bootcamp`; 
//since single statement so we can remove return keyword and curly braces
//can remove () from paremter if only one parameter is passed
console.log(greetmsgwithArrowFunc("Prachi"));

let noPrametr = ()=> `With no parameters`;
console.log(noPrametr());

//Callback func - func passed as an argument to another

function welcomeMe(name, callMe){
    console.log(`hello ${name}`);
    callMe();
}

function greetMeToo(){
    console.log('Welcome to learning JS');
}

function sayGoodBye(){
console.log('See you again in future sessions');
}


welcomeMe('Prachi', greetMeToo); //call to callback func
welcomeMe('Prachi', sayGoodBye); //call to callback func

setTimeout(() => { 

}, 1000); //{ } this is another function here //used in lwc