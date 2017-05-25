// person.js
// Aspen Hollyer

// Given this Person type:

// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };
//
// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };

// Rewrite the above type as a class.
class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  addFriend(friend) {
    this.friends.push(friend);
  }
  createGreeting(other) {
    return `Yo ${other.name}! I'm ${this.name}.`;
  }
  greet(other) {
    console.log(this.createGreeting(other));
  }
  lazyGreet(other) {
    setTimeout(() => {this.greet(other)}, 2000);
  }
  createGreetingsForFriends() {
    console.log(this.friends);
    return this.friends.map((friend) => {
      return this.createGreeting(friend);
    });
  }
}

// These thises
// Given the Person type above, add to it a lazyGreet method which will print out the same greeting, but only after 2 seconds.
var me = new Person('Aspen');
var you = new Person('Mufasa');

me.greet(you);
me.lazyGreet(you);

// These thises 2
// Add to Person a createGreetingsForFriends method which will return an array of strings. Each string in the array is a greeting generated by the createGreeting method. Do this using the map method rather than a loop.
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
console.log(alfie.createGreetingsForFriends());
//["Yo Anushka! from Alfie.", "Yo Henrique! from Alfie."]
