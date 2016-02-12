//"setters" are methods which allow values to be set outside of the object
//"getters" are methods which allow the values to be retrieved once set
var person = {
  legs: 2,
  eyes: 2,
  arms: 2,
  firstName: "",
  lastName: "",
  greet: function() {
    console.log("Hello!");
  },
  setFirstName: function(firstName) {
    this.firstName = firstName;
  },
  setLastName: function(lastName) {
    this.lastName = lastName;
  },
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  addEyes: function(additionalEyes) {
    this.eyes += additionalEyes;
  },
  countEyes: function() {
    console.log(this.eyes);
  }
}


//Those variables created with = signs within the createPlant function are private, and can not be accessed besides through the publically declared method plantStatus
function createPlant() {
  var color = "green";
  var potted = true;
  var flowered = false;
  var growing = function() {
    return "growing";
  }
  return {
    plantStatus: function(numberOfDays) {
      console.log("This plant was watered " + numberOfDays + " days ago and this plant is currently " + growing());
    }
  }
}

var roomPlant = createPlant();
var roomPlant1 = new createPlant();

//Inheritance
//a Fruit is an object with hierarchical taxonomy, it inherits characteristics and methods
//level 1: living thing: needs fuel, oxygen, water and it grows
//level 2: plant: grows from a seed, converts sunlight to fuel, produces seeds
//level 3: fruit: edible to humans, can be juiced, has a color

var livingThing = function(name) {
  this.name = name;
  this.needsOxygen= true;
  this.needsWater= true;
  this.age = 0;
  this.timePass= function() {
    this.age += 1;
    console.log("The age is now " + this.age);
  }
}

var plant = new livingThing("Fruit Tree");
plant.timePass();
plant.needsOxygen = true;
plant.needsWater = true;
plant.beginning = "seed";

var apple = new livingThing("Apple");
apple.edible = true;
apple.juiceable = true;
apple.color = "red";



var cat = function(catName) {
  this.name = catName;
  this.legs = 4;
  this.meow = function() {
    console.log("MEEEEOOOOWWWWWW");
  }
}

var hoshi = new cat("Hoshi");
hoshi.meow();

//example of polymorphism, or overriding the method, but still retaining the same kind of output so that it is able to be used later in a function
var reader = function() {
  this.numberOfBooksRead = function(numberOfBooks) {
    for(i = 0; i <=numberOfBooks; i++) {
      console.log("Book conquered! ");
    }
  }
}

var slowReader = new reader();
var regularReader = new reader();
var fastReader = new reader();

slowReader.numberOfBooksRead = function(numberOfWeeks) {
  for(i = 0; i <= (numberOfWeeks/2); i++) {
    console.log("Finished a book. ");
  }
}
regularReader.numberOfBooksRead = function(numberOfWeeks) {
  for(i = 0; i <= numberOfWeeks; i++) {
    console.log("Finished a book. ");
  }
}
fastReader.numberOfBooksRead = function(numberOfWeeks) {
  for(i = 0; i <= (numberOfWeeks * 3); i++) {
    console.log("Finished a book. ")
  }
}

var howManyRead = function(reader, numberOfWeeks) {
  return reader.numberOfBooksRead(numberOfWeeks);
}

howManyRead(slowReader, 7);


