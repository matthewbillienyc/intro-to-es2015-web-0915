"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
  function Person(name, friends) {
    _classCallCheck(this, Person);

    this.name = name;
    this.friends = friends;
  }

  _createClass(Person, [{
    key: "displayFriends",
    value: function displayFriends() {
      var _this = this;

      console.log("Listening for friends for" + this.name);
      this.friends.forEach(function (friend) {
        console.log(friend + " is friends with " + _this.name);
      });
    }
  }]);

  return Person;
})();

var matt = new Person("Matt", ["Melissa", "Jay"]);
matt.displayFriends();
