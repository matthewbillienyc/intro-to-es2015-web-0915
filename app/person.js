class Person {
  constructor(name, friends) {
    this.name = name;
    this.friends = friends;
  } 

  displayFriends() {
    console.log("Listening for friends for" + this.name);
    this.friends.forEach(friend => {
      console.log(`${friend} is friends with ${this.name}`);
    })
  }
}

var matt = new Person("Matt", ["Melissa", "Jay"]);
matt.displayFriends();
