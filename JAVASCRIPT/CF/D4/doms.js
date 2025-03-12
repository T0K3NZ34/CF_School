//There are various ways to access the DOM from our script

//DOM selecting methods

//the getElementbyId()  this method of selection selects a single element based ot its id attribute EACH ID MUST BE UNIQUE!!

let first = document.getElementById("one");
// the " " are important when selecting the id
console.log(first);
//this will display the whole element including the id and the type of object "h1"

//  object selected+ "." member operator + method + parameter

//you always have to accsess individual elements via the document object who has a global scope
//the dot is the member operator, showing that a method is being applied to the object before it
// the getElementById() method finds an element by its id attribute

let second = document.getElementById("nd-heading");
//this is how we select an an element from our html and work with it
console.log(second.textContent);
//here we select the h2 element formo my html and display it in the console
//with the .textcontext  method we will display only the text of the h2

//THERE ARE A FEW THINGS I HAVE TO KNOW ABOUT THIS METHOD
// IT ONLY WORKS WITH UIQUE ID ATTRIBUTES, SO NO TWO ELEMENTS SHOULD HAVE THE SAME ID
//IT WILL RETURN NULL IF THE ELEMENT DOESN NOT EXIST
//THIS METHOS IS MAINLY USED TO FIND ELEMENTS AND NOT CHANGING THEM
//DOESNT WORK IF THE ID CHANGES DYNAMICALLY IN YOUR CODE
//ITS A SIMPLE AND QUICK METHOD TO FIND AN ELEMENT BY ITS ID

//The .getelementsbyclassname() method is there to select elements that have the same class

let theps = document.getElementsByClassName("yur");
console.log(theps);
//this will print a collection of your elements in the console
console.log(theps[0].textContent);
//sice the HTMLcollection is similar to an array you can sccess specific elements by its index
//is not very practilac to display elemets by by specifying theirindex maually, specially if you have dozens of elements, instead, create a loop to go triugh all of them
for (let ap of theps) {
  console.log(ap.textContent);
}
//the foreach loop goes to every element of theps and displays its text

//THINGS I SHOULD NOTE ABOUT THIS METHOD
//THIS MEHTOD GICES YOU ALL THE ELEMENTS WITH THE DSAME CLASS AND YOU CAN GET THEM BY THEIR INDEXEX ASWELL
//THE LIST OF ELEMENTS WILL UPDATE ID ELEMENTS ARE ADDED OR REMOVED
//YOU CAN LOOP THROUGH THE ELEMENTS, YOU CANT USE 'FOREACH' LOOOPS DIRECTLY HERE BUT YOU CAN USE A FOR LOOP OR A FO..OF LOOP TO GO TROUGH AL THE ELEMENTS

//THE GetElementsByTagname() this method is similar to the class method but instead of selecting the elements by its calss you select them by their tag name ('h1', 'li', 'h3', 'etc...')

let listel = document.getElementsByTagName("li");
for (const list of listel) {
  console.log(list.textContent);
}
//Need a loop to display each element separately

//THE queryselector() it is similar by the getelementbyid() method but instead of only selecting by id it allows you to use any valid css selector, this means you can use it to select by class or even more complicated sectors like preudo classes (:hover, :active,...)

let fruit = document.querySelector(".fruits");
console.log(fruit.textContent);

let lopa = document.querySelector("#lopa");
console.log(lopa.textContent);

let yur = document.querySelector("div");
console.log(yur.textContent); //displays the first div

//FOR ME TO BE ABLE TO DISPLAY ALL THE ELEMENTS OF "DIV" Or "FRUITS" I NEED TO USE THE

//.queryselectorall()

let alltheyur = document.querySelectorAll("div");
console.log(alltheyur);

alltheyur.forEach((fruit) => {
  console.log(fruit.textContent);
});
//the for each loop will also go trough the whoe array and display the content of what i tell it to
//the loop goes like this: arrayimgoingthrough.foreach(name of the varioable that is going trough all the elemets of the array =>{
// i display the value of the variable thats going trough the array
// }); i close the loop

//MANIPULATING ELEMENTS
//once ive selected an elemeent i can manipulate the element in many ways, like style attributes, add or remove classes etc.

let paragraph = document.querySelector("#textc");
console.log(paragraph.textContent);

//i can change the context of the text y selecting the parablabla.textcontex = what i want it to equalto ;
paragraph.textContent = "hello there mafacas";
console.log(paragraph.textContent);

//i can change teh hole html inside an element by adding .innerHTML
let eldiv = document.querySelector("#adiv");
console.log(eldiv.textContent);

eldiv.innerHTML = "<p>This is new content babyyyy<p>";
console.log(eldiv.textContent);

//I can also change the  Style of an element directly by adding .stye + .what i want to change + = what i want it to be
eldiv.style.backgroundColor = "lightblue";
//java scribt is lower and uppercase sensitive i have to make the c of colour uppercase in order for the style to work
//JUST WHENEVER THERE SHOULD BE AN SPACE IN BEWEEN WORDS MAKE THE FIRST LETTER AN UPPERCASE ONE
eldiv.style.textAlign = "center";
eldiv.style.fontSize = "30px";

//ADDING AND REMOVING CLASSES

let button = document.querySelector("#button").classList.add("highlight");
//by adding .classList.add we add a a new class to our button
//if i want to remove it i have to use the .remove() method
// button.classList.remove("newclass");


//I can modify attributes like the src: of an image as well as it size, width, etc..

let image = document.querySelector("img");
image.style.width = "400px";



//CREATING AND REMOVING ELEMENTS

let newParagraph = document.createElement("p");
//I createa new element
newParagraph.textContent = "HEllo this is a new element";
//Write what is inside of the element
eldiv.appendChild(newParagraph);
//Add the new element to somewhere in the page

// createElement()
// Creates a new HTML element.

// appendChild()
// Adds a new child element to an existing element.

// removeChild()
// Removes a child element from an existing element.

// setAttribute()
// Changes an attribute of an element (e.g., src, href).

// getAttribute()
// Retrieves the value of an element's attribute.

// classList.add()
// Adds a class to an element.

// classList.remove()
// Removes a class from an element.

//THESE ARW CALLED DOM MANIPULATION METHODS
