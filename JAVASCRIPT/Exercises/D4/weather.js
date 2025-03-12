let weatherDiv = document.getElementById("weather");
let tempDisplay = document.querySelector(".temp");
let descriptionDisplay = document.querySelector(".description");
//we create variables taht select our already created ids or classes!
function weather(mintemp, maxtemp) { //this function will allow our website to work
  let randomnumb = Math.floor(
    Math.random() * (maxtemp - mintemp + 1) + mintemp
  );
  //this equation is tho one that genetrates a random number between the max and min of temperature given
  let description = "";
//we set the description to nothing at the start
  if (randomnumb <= 0) {
    description = "The weather is freezing!";
  } else if (randomnumb <= 15) {
    description = "The weather is cold!";
  } else if (randomnumb <= 25) {
    description = "The weather is moderate!";
  } else if (randomnumb <= 32) {
    description = "The Weather is warm!";
  } else {
    description = "The weather is hot!!";
  }
  //we write a bunch of if else statements in order to change the value of our description accordingly
tempDisplay.textContent = `Temperature ${randomnumb}ºC`;
//after getting our value, the value of the temerature is display this way 
descriptionDisplay.textContent = description;
//and then at the end it displays how the
return randomnumb;
//the randomnumb is not necessary for displaying what we wish to display but in case we want to use the value of the randomnumb somewhere eelse
}

weather(-20, 40);
//this are the parameters of the weather