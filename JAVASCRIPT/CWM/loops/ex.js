//create a function that returns the biggest number given

let number = maximium(6, 9);
console.log(number);

function maximium(a, b) {
  return a > b ? a : b;
  //conditional operator
  //(condition) ? if the contidion is met use this value : else use this value
}

// if width is bigger than height then return true else return false

function landscape(width, height) {
  return width > height;
  //this will still return the value of the condition, there is no need to specify that it returns true of false
}

let islandscape = landscape(20, 29);
console.log(islandscape);

//if divisible by 3 => Fizz
//if divisible by 5 => Buzz
//if divisible by 15 => FizzBuzz
//if is not divisible by 3 or 5 => input
//if the input is not a number => NaN

// const output = fizzBuzz();
// console.log(output);

// function fizzBuzz(input) {
//     let bee = '';
//      if (typeof input != 'number' ){
//         bee = NaN;
//     }
//     else if (input%15 == 0){
//         bee = 'FizzBuzz';
//     } else if (input%3 == 0) {
//         bee = 'Fizz';
//     } else if (input%5 == 0){
//         bee = 'Buzz';
//     }  else if (input%3 !== 0 && input%5 !== 0 && input%15 !== 0){
//         bee = input;
//     }
//     return bee;
// }

//speedlimit = 70 ok
//+5km = +1 point
//Math.floor
//more than 12 points -> suspended

function checkSpeed(speed) {
  let speedlimit = 70;
  let startingPoints = 0;
  if (speed < speedlimit) {
    console.log("OK");
    return;
  }
  startingPoints = Math.floor((speed - speedlimit) / 5);
  if (startingPoints >= 12) console.log("Suspended");
  else console.log("Points", startingPoints);
}

checkSpeed(69);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 == 0) console.log(i, "Even");
    // else console.log(i, "ODD");
    const result = i % 2 == 0 ? console.log(i, "Even") : console.log(i, "ODD");
  }
}
showNumbers(10);

//////////
//count the number of truthy values in a array
//list of falsy values:
//undefined
//null
// ''
// false
// 0
// NaN

// function countTruthy(array){
//   let i = 0;
//   let arrl = array.length;
//   for (let i = 0; i < array.length; i++) {
//     const detec = array[i];

//     if (detec == 0 || detec == null || detec == false || detec == '' || detec == undefined || detec == NaN){
//       arrl = arrl - 1;
//     }
//   }
//   console.log(arrl);
// }

// countTruthy([NaN]);
//NaN is not working here
let array = [NaN];
function countTruthy(array) {
  let i = 0;
  //for aof goes trough all the elements of the array
  for (let value of array)
    if (value)
      // I dont need to type all of the fifferent falsy values
      //if i dont specify the value of something the engine will try to interpret the, in this case the array as a boolean
      i++;
  return i;
}
console.log(countTruthy(array));

///
let obj = {
  name: "jorge",
  age: 22,
  height: 180,
  gf: "nina",
};

function showProperties(obj) {
  for (const key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
//Typeof gives you the type of somethig
//typeof gives you the type of something
//typeof gives you the type of something
showProperties(obj);

/////
// create a function of that returns all teh multiples of 3 and 5 from cero up to the given limit

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
}
console.log(sum(10));

///

const marks = [80, 60, 70];

function calcGrade(marks) {
  let letter = "";
  let allgrade = marks.length;
  let markSum = 0;

  for (let i of marks) {
    markSum += i;
    i++;
  }

  let finalgrade = markSum / allgrade;

  if (finalgrade >= 1 && finalgrade <= 59) {
    letter = "F";
  } else if (finalgrade >= 60 && finalgrade <= 69) {
    letter = "D";
  } else if (finalgrade >= 70 && finalgrade <= 79) {
    letter = "C";
  } else if (finalgrade >= 80 && finalgrade <= 89) {
    letter = "B";
  } else if (finalgrade >= 90 && finalgrade <= 100) {
    letter = "A";
  }
  return letter;
}
console.log(calcGrade(marks));

///
// Creata a function that displays the ammount of rows given with the ammount of stars aw well

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
    //.repeat makes it possible to repeat the *, i dont need the \n because console log already does that for me
  }
}
showStars(5);

//
//Create a function that takes a limit and show all the prime numbers until its limit

// Prime number (whose factors are only 1 and itself) its anumber that can only be devided by itself and the number one
//Composite number: is a number that can be devided by many numbers and have the reminder of 0

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    let isprime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) console.log(number);
    
  }
}
