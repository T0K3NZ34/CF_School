//Operators

//Arithmetic operators are used to perform calculations

let x = 10;
let y = 100;

// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(x % y);
// console.log(x % y); //the % gives you the remiinder of the division
// console.log(x ** y); //this is exponentiation it means "to the power of"


//Increment operator (++) this adds the variable plus one
console.log(++x); // if you put the (++) before the variable the console will display the value after adding 1 to the variable

 console.log(y++); //if you put the (++) it after the variable the console will display the value of the variable and you'll need another console log to display the new value
console.log(y);


//Decrement (--)
//It is the same as the increment one




// ASSIGMENT OPERATOR is there to change the value of our variable

let z = 10;
z += 5;
z -= 5;
z *= 5;
z /= 5;
z %= 5;




//Comparation operators

let comp = 1;

console.log(comp > 0);
console.log(comp >= 1);
console.log(comp < 1);
console.log(comp <= 1);

//Equality, to see if the variable is equal to another value
console.log(comp === 1);

//Not equal
console.log(comp !== 1);


// this is a STRICT EQUALITY OPERATOR IT MEANS (same type and same value)m you should use this more often
console.log(1 === 1);
console.log('1' === 1);

//this is a LOSE EQUALITY it means it checks at the value of the left side and changes the type of variable of the right side to whatever type the first variable has, this equality will only check for the VALUES
console.log('1' == 1);
console.log(1 == 1);
console.log(true == 1);



//Ternary/Conditional Operator

let point = 110;
let type = point > 100 ? 'gold ' : 'silver ';
// type equals to: if the ponts are higher than 100 then display gold otherwhise display silver
console.log('You have a ' + type + 'membership');



//Logical operators

// Logical AND (&&)
// it returns true if both operators are true and false if they arent
let gincome = true;
let cscore = true;
let eligible = gincome && cscore;

console.log(eligible);



//Logical or (||)
// This returns true if ONE of the operators is TRUE
let gincom = true;
let cscores = false;
let eligibl = gincom || cscores;

console.log(eligibl);


// Logical NOT4

let highincome = false;
let goodcs =  true;
let eligibleforloan= highincome || goodcs;
console.log('eligible', eligibleforloan);

let applicationrefused = !eligibleforloan
console.log('Application refused', applicationrefused);

//you are gonna get a true value if the applicatiuon is refused  and a false if the application goes through

