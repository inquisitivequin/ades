var arr1 = [1, 2, 3];

var dub = function(arr) {
  var arr2 = [];

  for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
  }
  return arr2;
};

console.log(arr1);
console.log(dub(arr1));
