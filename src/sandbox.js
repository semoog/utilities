last = function(array, n) {
  var newArr = [];
  if (n > 0 && n < array.length) {
    for (var i = array.length - n; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
  else if (n > array.length) {
    return array;
  }
  else {
    return array[array.length - 1];
  }
};

console.log(last([1,2,3,4,5], 2));
