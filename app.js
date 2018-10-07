// const express = require("express");
// const app = express();
//
// app.use(express.static("public"));
//
// app.listen(4200, () => {
//   console.log("on 4200");
// });
("use strict");

function Person(first, last) {
    this.first = first
    this.last = last
}

Person.prototype.greet = function() {
    console.log('hello ' + this.first + ' ' + this.last)
}

var jerd = new Person('jurd', 'jerd')

jerd.greet()