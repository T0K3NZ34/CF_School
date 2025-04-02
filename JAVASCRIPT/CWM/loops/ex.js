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
