//If else statements
//If hour is between 6am, and 12pm: Goood evening
//If it is between 12pm and 6pm: good afternoon!
//Oherwhise good evening!

let hour = 22;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else if (hour >= 18 && hour < 22) console.log("Good evening!!");
//if none of the other conditions are not true then execute this
else console.log("Good night!!");

//if we are not puting more statements its better to delete the braces

//Switch case
let role;

switch (role) {
  case "guest":
    console.log("Guest user");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

//With switch and case you compare the value of a variable against other values

//IT IS WAYY BETTER TO USE IF AND ELSE

// if (role === "guest") console.log("Guest user");
// else if (role === "moderator") console.log("Mod user");
// else console.log("Unknown user");

//If i only have one statement i can leave the curly braces

//FOR LOOP

for (let i = 0; i <= 5; i++) {
  if (i % 2 != 0) console.log(i);
  //this displays the odd numbers
}
// 3 statements!!
// the initial expression let i = ...;
// condition
// what happens if the condition has not been met

//WHILE LOOP

let o = 0;

while (o <= 5) {
  if (o % 2 != 0) console.log(o);
  o++;
}

//DO WHILE LOOP
let c = 0;

do {
  if (c % 2 != 0) console.log(c);
  c++;
} while (c <= 5);

//A `while` loop checks the condition before executing the loop body, whereas a `do-while` loop executes the loop body at least once before checking the condition.
//I wont be using the do while loops in the modern day


//Infinite loop
// let b = 0;

// while (b < 5) {
//   console.log(b);
// }
//this is will crash the browser


//FOR IN LOOP

const person = {
  name:'Jorge',
  age: 22
};

for (const key in person) {
  console.log(key, person[key]);
}
//key is a new variable i created that takes the values of age name and age

//the for in loop should not be used for going though arrays


//FOR OF

const colors = ['Green', 'Blue', 'Red']

for (const color of colors) {
  console.log(color);
}

// For of is used when you try to go trough an array