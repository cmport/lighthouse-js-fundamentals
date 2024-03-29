// We've sent out two researchers to determine, on a scale of 1-10, how much people like lighthouses and they are hitting the streets of Canada to find out what people think.

// Both researchers have stored their numbers in array for each location. This means that we have two different arrays of data for every single location, but we only want a single array for each location. We're going to have to concatenate the arrays from both researchers into a single array.

function concat(arr1, arr2){
  var arr3 = [];
  arr3 = arr1.concat(arr2);
  return arr3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);