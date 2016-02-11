var person = {
  legs: 2,
  eyes: 2,
  arms: 2,
  name: "",
  greet: function() {
    console.log("Hello!");
  },
  changeName: function(newName) {
    this.name = newName;
  },
  getName: function() {
    console.log(this.name);
  },
  addEyes: function(additionalEyes) {
    this.eyes += additionalEyes;
  },
  countEyes: function() {
    console.log(this.eyes);
  }
}

person.greet();
person.addEyes(3);
person.countEyes();