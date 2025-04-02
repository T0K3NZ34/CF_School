"use strict";
let text = 43;
console.log(text);
//Types that are suppported by Type script
let done = true;
let decimal = 15;
let color = "blue";
//Arrays can be defined in two different ways
let myArray = ["Fido", "Fluffy", "Fiona"];
let myOtherarray = [42, 35, 64];
//The any type is there for when i dont know what type of data stored will be
let WeUseTheFallback = 1;
WeUseTheFallback = "We learn Typescript";
//The any type in programming allows a variable to hold any kind of data but sacrifices type safety, making it both flexible and risky.
//TYPE ASSERTION
let value = "Mario";
value = "Jimmy";
//value = 123;this will not work because we just specified that this variable is a string
//Scopes and Variaables
//Global scope
//as in js a variable thats created outside a function is a global bariable and can be used at anytime in the code
let num1 = 10;
function printnum() {
    console.log(num1);
}
printnum();
//Block scope
for (let i = 0; i < 5; i++) {
    let h = 0;
    console.log("i: " + i);
    console.log("h: " + i);
}
//console.log(i);this wont work because the valiable only exist inside of the loop
//console.log(h);this wont work because the valiable only exist inside of the loop
//THE FUNCTION SCOPE
function addnumbers() {
    let numb1 = 2;
    let numb2 = 3;
    return numb1 + numb2;
}
console.log(addnumbers());
//this will work in js but not in tsc, you always have to declare the varaible with let/cons/var in order of it to work
// in order for it to be TSC frindly it should look like this
function addnumbers2() {
    let numb1 = 2;
    let numb2 = 3;
    return numb1 + numb2;
}
console.log(addnumbers());
//VARIABLES
// "var" is old and should be avoided because it ignores block scope and can be redeclared.
// "let" is used when you need a variable that can change within a specific block of code.
// "const" is for values that should never change once assigned.
//"let" and "const" are pretty similar besides the fact that "consts" value cant be changed after its been declared and "let" can
//Strings
//in TSC its possible to write multilinestrings in diff. ways
let multiLineStrings = `
hello
world
how
are
you
LOL`;
document.write(`<pre> ${multiLineStrings} </pre>`);
//teh pre is needed, so that the white spaces are kept
//Variable substitution
let naem = "kenobi";
let lineofStrings = `
hello 
there
general
${naem}`;
document.write(`<pre>${lineofStrings}</pre>`);
