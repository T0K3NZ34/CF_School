const moreInfo = document.querySelector("#more_info");
const result = document.querySelector("#result");
const cars = [
  {
    name: "Toyota Corolla",
    brand: "Toyota",
    color: "Blue",
    image:
      "https://cdn.pixabay.com/photo/2019/08/22/02/35/toyota-4422348_1280.jpg",
    info: function () {
      return `${this.name} and ${this.brand} and ${this.color}`;
    },
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    color: "Red",
    image:
      "https://cdn.pixabay.com/photo/2020/01/24/04/47/traffic-4789271_1280.jpg",
    info: function () {
      return `${this.color} ${this.name} `;
    },
  },
  {
    name: "Ford Mustang",
    brand: "Ford",
    color: "Black",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
    info: function () {
      return `${this.color} ${this.name}`;
    },
  },
  {
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    color: "Yellow",
    image:
      "https://cdn.pixabay.com/photo/2017/02/23/01/14/chevrolet-2091084_1280.jpg",
    info: function () {
      return `${this.color} ${this.name}`;
    },
  },
];

// First we create a card for each of the objects in the array, i'll use bootstrap cards
// Bbut you can use whatever you want.
cars.forEach((car) => {
  // note that we pack the actual card with another div with class myCard.
  // and the button for more details has the class bigimg-btn
  result.innerHTML += `
    <div class="p-3">
        <div class="card">
            <img src="${car.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">${car.info()}</p>
                <button class="btn btn-primary bigimg-btn">Show more</button>
            </div>
        </div>
    </div>
    `;
});

// 3) When the user clicks on the car name you should display the div with the big photo
// and all details about the car, like on the image below (you should also provide the feature to hide the big div)

// now that the cards exist we can get all of the buttons, this must happen after we added them as innerHTML to e.g. the result div.
const btns = document.querySelectorAll(".bigimg-btn");

// here we use the arrow function to easily get the index of the element as the index is the same as in our array
// so the index of the button is the same index as in the original cars array
btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    moreInfo.innerHTML = `
        <div class="card">
            <img src="${cars[index].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cars[index].name}</h5>
                <p class="card-text">${cars[index].info()}</p>
            </div>
        </div>
        `;
  });
});
