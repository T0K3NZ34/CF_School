//There is something called an interface in typescript
interface Student {
  fname: string;
  age: number;
  isStudent: boolean;
  greet: Function;
  //YOU NEE TO DECLARE FUNCTIONS AS WELL!!by using the functions name
}
//you need to add the interface keyword before the name of the interface
//you can use the interface to create an object

let student1: Student = {
  fname: "John",
  age: 25,
  isStudent: true,
  greet() {
    console.log(`hello ${this.fname}`);
    //the this keyword refers to the object itself
  },
};

//you have to declare the type of the object elements after you crate the object
// let student2: Student = {
//   fname: "Jane",
//   age: 22,
//   isStudent: false,
// };

//This ic how you create a class in typescript

// class animal{
//     name: string;
//     age:number;
//     isWild: boolean;
//     constructor(name: string, age: number, isWild: boolean){
//         this.name = name;
//         this.age = age;
//         this.isWild = isWild;
            //the constructor is a special method that is called when you create an object of the class using the new keyword

//         //the this property is used to refet to the properties of the class
//     }
// }

interface Isanimal {
  Aname: string;
  age: number;
  isWild: boolean;
}

//crating an interface is ver usey useful for creating cards etc

class animal implements Isanimal {
  //the implement keyword is used to implement the interface
  constructor(
    public Aname: string,
    public age: number,
    public isWild: boolean,
    private id: string = Math.random().toString()
  ) {}

  present() {
    console.log(
      `hello ${this.Aname} is an animal with the age of ${this.age} and this is my id ${this.id}`
    );
  }
  //METHODS ARE JUST FUNCTIONS INSIDE A CLASS
}

class Dog extends animal {
  //the extends keyword is to take all that is inside the animal class and add it to the dog class (the constructor and the funtion method as well)
  constructor(
    public breed: string,
    name: string,
    age: number,
    isWild: boolean,
  ) {
    super(name, age, isWild);
    //the super keyword is used to call the constructor of the parent class here only comes the properties of the parent class and not the ones we added like breed
  }

  bark() {
    console.log(
      `${this.Aname} is barking`
    );
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

let dogs:Dog[] = [dog1, dog2, dog3];
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
const{breed} = dog1; //this is the same as the one avobe
