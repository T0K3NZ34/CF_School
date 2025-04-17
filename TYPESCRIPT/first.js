"use strict";
//on ts you can be precise on what type of variable you are using
//when using booleans, strings or numbers you dont have to decrleare it
let fname = "John";
let number = 1;
let isTrue = true;
////////
let lname = "Doe"; //string
let dage = 30; //number
let isMarried = false; //boolean
///////
//YOU SHOULD Be DECLARING THE TYPE OF VARIABLE
console.log(number);
let arr = [1, 2, 3]; //this is how you declare an array
let arr2 = ["a", "b", "c"];
//in typescript arrays can only contain one type of data
let arr3 = [1, "a", 2, "b"]; //this is how you declare an array with multiple types of data
let arr4 = [1, "a", 2, "b"]; //this is another option for you declare an array with multiple types of data 
//Loops in TS
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//Ideal when you need to perform operations on specific indices of an array or perform a task a fixed number of times.
//The forEach loop goes through the entire array and executes the provided function for each element.
// The `element` represents the current value of the index in the array during each iteration.
let myArray2 = [6, 7, 8, 9, 0];
myArray2.forEach(element => {
    console.log(element); // Print the current value of the index
});
let myObject = {
    name: "John",
    dage: 30,
    isMarried: false
};
for (const key in myObject) {
    console.log(key);
}
//The for loops are meant to be used when going through OBJECTS!!!
//this code prints each of the keys in the object
//FUNCTIONS
function printInfo() {
    console.log("Hello World");
    //the void type indicates that the function does not return a value
    //if you want to return a value you have to declare the type of the value you are returning
    // return 1; if you want to return a number
}
printInfo();
function printInfo2(firstName, lastName, salary) {
    //the ? indicates that the parameter is optional, the optional parameter must come last
    if (salary) {
        console.log(`hello my name is ${firstName} ${lastName} and i earn ${salary}$`);
    }
    else {
        console.log(`hello my name is ${firstName} ${lastName}`);
    }
}
printInfo2("John", "Doe");
//there is something called any type
//this is a type that can be used when you are not sure what type of data you are going to be using
//but it is not recommended to use it, you should be as precise as possible with your types
//you can add a default value to a parameter by adding an equal sign and the value you want to set as default 
// function printInfo2(firstName:string, lastName:string, salary:number=2000): void {}
//in this case if you do not pass the salary parameter it will be set to 2000 by default and the ? sign is not needed
//the arrow function is a shorter way to write a function
let greetUser = (name) => {
    console.log(`Hello ${name}`);
};
greetUser("John");
//this is the same as the function above
