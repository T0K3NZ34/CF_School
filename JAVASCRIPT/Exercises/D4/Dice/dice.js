let name1 = prompt("Player 1 name");
let name2 = prompt("Player 2 name");
//i ask the users for their names

let buttonr = document.getElementById("reset");
//create a button that resets the dice
document.querySelector("#versus").innerHTML = `${name1} VS. ${name2}`;
document.querySelector("#p1").innerHTML = name1;
document.querySelector("#p2").innerHTML = name2;
//select the html elements and bring them to js

let roll1;
let roll2;
//create the rolls variables

document.querySelector("#p1-btn").addEventListener("click", () =>{
if (roll1 === undefined) {
    roll1 = Math.floor(Math.random() * 6) +1;
    document.querySelector("#p1-roll").innerHTML = roll1;
}
checkwin();
});
//create a event listener that changes the value of the start of the roll
document.querySelector("#p2-btn").addEventListener("click", () =>{
    if (roll2 === undefined) {
        roll2 = Math.floor(Math.random() * 6) +1;
        document.querySelector("#p2-roll").innerHTML = roll2;
    }
    checkwin();
    });
//create a event listener that changes the value of the start of the roll

function checkwin(){
    if (roll1 != undefined && roll2 != undefined) {
        if (roll1 === roll2) {
            document.querySelector("#result").innerHTML = "DRAW";
        } else {
            if (roll1 > roll2) {
                document.querySelector("#result").innerHTML= `${name1} Wins!!`
            } else {
                document.querySelector("#result").innerHTML = `${name2} Wins!!`
            }
        }
    }
}
//create a function that checks who won and desplay the winner!!
buttonr.addEventListener("click", () =>{
    roll1 = undefined;
    roll2 = undefined;
    document.querySelector("#p1-roll").innerHTML = `ROLL THE DICE`;
    document.querySelector("#p2-roll").innerHTML = `ROLL THE DICE`;
    document.querySelector("#result").innerHTML = "Both players have to roll";
})
//function that makes the reset button work!!