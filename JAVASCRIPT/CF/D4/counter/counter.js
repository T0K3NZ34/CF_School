let counter = document.querySelector("#counter");
let incrementButton = document.querySelector("#increment");
let resetButton = document.querySelector("#reset");
let decrementButton = document.querySelector("#decrement");

let count = 0;

function counterupdate(){
    counter.textContent = count;
}

incrementButton.addEventListener('click', () => {
count++;
counterupdate();
}, false);
//we add an event listener .addeventlistener('when will the action happen', the action , false)
//here we create a whole nameless function to use

decrementButton.addEventListener('click', () =>{
    count--;
    counterupdate();
}, false);

resetButton.addEventListener('click', () =>{
    count = 0;
    counterupdate();

}, false)

