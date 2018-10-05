function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
}

var jerd = new Person('erd', 'jerd');

console.log(jerd);

var b = 4;

console.log(Object.prototype.toString.call(b));

var obj = {};

Object.defineProperty('FAV_NUM', {
  value: 32,
  writable: false,
  configurable: false
});

console.log(obj.FAV_NUM);
