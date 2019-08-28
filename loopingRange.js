/*Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/


function range (start, end, step) {
  var series = [];
    if( start === null || end === null || step === null || end < start || step < 0 ){
      series = [];
    } else {
      for(var i = start; i <= end; i = i + step){
        series.push(i);
      }
    }
    return series;
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));