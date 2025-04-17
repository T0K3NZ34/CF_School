"use strict";
//you need to add the interface keyword before the name of the interface
//you can use the interface to create an object
let student1 = {
    fname: "John",
    age: 25,
    isStudent: true,
    greet() {
        console.log(`hello ${this.fname}`);
        //the this keyword refers to the object itself
    },
};
//crating an interface is ver usey useful for creating cards etc
class animal {
    //the implement keyword is used to implement the interface
    constructor(Aname, age, isWild, id = Math.random().toString()) {
        this.Aname = Aname;
        this.age = age;
        this.isWild = isWild;
        this.id = id;
    }
    present() {
        console.log(`hello ${this.Aname} is an animal with the age of ${this.age} and this is my id ${this.id}`);
    }
}
class Dog extends animal {
    //the extends keyword is to take all that is inside the animal class and add it to the dog class (the constructor and the funtion method as well)
    constructor(breed, name, age, isWild) {
        super(name, age, isWild);
        this.breed = breed;
        //the super keyword is used to call the constructor of the parent class here only comes the properties of the parent class and not the ones we added like breed
    }
    bark() {
        console.log(`${this.Aname} is barking`);
        //the id being private in the parent class means we cant access it here we would need to call the super.present() method to access it and we would ge the whole present funtion as well
    }
}
let lion = new animal("lion", 5, true);
lion.present();
let dog1 = new Dog("dogqwe", "dog", 2, false);
let dog2 = new Dog("doe", "dog", 2, false);
let dog3 = new Dog("de", "deg", 4, true);
let animal1 = new animal("animal", 3, true);
// animal1.id();
//the id property is private so we cant access it outside the class
//but we can access it inside the class
let dogs = [dog1, dog2, dog3];
//we can use the class as a type
console.log(dogs);
//this is desconstructuring of an object
// const breedOfdog1 = dog1.breed;
// const nameOfdog1 = dog1.name;
// const ageOfdog1 = dog1.age;
// const isWildOfdog1 = dog1.isWild;
//do this isntead/
// const { breed, Aname, age, isWild } = dog1;
console.log(dog1);
// const breed = dog1.breed;
const { breed } = dog1; //this is the same as the one avobe
