// 20.03.2026

// Задача: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

function stringToArray(string) {
  return string.split(" ");
}

// Задача: https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Задача: https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Задача: https://www.codewars.com/kata/544a54fd18b8e06d240005c0

function min(arr, toReturn) {
  let min = Math.min(...arr);
  return toReturn == "value" ? min : arr.indexOf(min);
}