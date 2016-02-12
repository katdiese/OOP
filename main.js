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

var cat = function(catName) {
  this.name = catName;
  this.legs = 4;
  this.meow = function() {
    console.log("MEEEEOOOOWWWWWW");
  }
}

var hoshi = new cat("Hoshi");
hoshi.meow();

