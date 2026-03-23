// Задача: https://www.codewars.com/kata/58e43389acfd3e81d5000a88

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}


// Задача: https://www.codewars.com/kata/5722b3f0bd5583cf44001000

function giveMeFive(obj){
  let result = [];
  for(let key in obj) {
    let value = obj[key];

    if(key.length == 5) result.push(key);
    if(value.length == 5) result.push(value);
  }
  return result;
}