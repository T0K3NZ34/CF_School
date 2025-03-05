//this is how you comment in js
console.log("hello mate");
//this is my first java script code!
//java script is used to IMPLEMENT BEHAVIOR

//Variables//
// we use variables to store data temporarily
let n = "Jorge De la Torre";
let i = 24;

console.log(n);

console.log(i + 2);

//Variables can not be a reserved keyword, you dont have to memorize nothing if you use a reserved keyword you will get a error
//always use meaningfull names
//they can't never start with a number
//they cant contain a space or a -
// They are case sensitive, it means hello and Hello are not the same

//a constant is a value a, which value cant be changed!!
//this should only be used when you are sure that you wont change the value at all
const intrestrate = 0.3;

//Primitive/Value types

// Strings, a combination of many characters
let nombre = "George";

// Number, just mumbers, there are not like in c two types of numbers like floaters (3.2, 1/4), all numbers are numbers
let age = 32;

//Boolean, sets the value to either true or false
let approved = false;

//Undifined, the value is not defined YET
let undi;

//Null, the value is set to nothing, is used tomake the user input something
let selectedcolor = null;

//Java script is a dynamic language this means that the TYPE OF VARIABLES can be changed











// Reference Types//

// Object, is like a box where you can store different variables
let person = {
  name: "Gerald",
  age: 34,
};

//Dot notation
//with the Dot notation you are able to change the value of the variable as well as accessing the value of an specific variable

// person.name = "John";
console.log(person.name);


// console.log(person.name);

//console.log(person.age);




// Array
//an array is there for to store multiple values in a single variable, ARRAYS ARE ALSO AN OBJECT!!
let selecteditems = [ 'carrot', 'apple'];
selecteditems[2] = 'banana';
console.log(selecteditems.length);




// Functions
//Funcion is a set of statements that perfoms a task or solves an equation

//This function is performing a task
function greet(name, lastname) {
    //the name between the first () is called a Parameter
    //the name variable is only meaningfull inside of this function
    console.log('hello ' + name + " " + lastname);
}

greet("John", "Mayers"); //we call the function by putting John as an argument!
greet('Marry', 'Poppins');

//Parameter: is a variable that acts like a placeholder for the value thet will be passed to the function
//Argument: the value that is given to the Parameter when calling the function

function square(number){
    return number * number;
}

console.log(square(2));

//Mini summary:

// Commented your code to explain various concepts and steps.

// Logged messages to the console using console.log().

// Declared and assigned variables using let and const.

// Described rules for naming variables, including avoiding reserved keywords, starting with numbers, and using meaningful names.

// Introduced primitive data types such as strings, numbers, booleans, undefined, and null.

// Explained dynamic typing in JavaScript.

// Defined and manipulated objects using dot notation.

// Created arrays to store multiple values and modified their contents.

// Defined functions and explained the use of parameters and arguments.

// Utilized functions to perform tasks and return values.

// Summarized the key points learned in your JavaScript journey so far.