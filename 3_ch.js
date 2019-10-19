// Chapter 3: Functions

// Default values can be expressions
function getVal() {
  return 5;
}

function add(a, b = getVal()) {
  return a + b;
}

console.log(add(1, 1)); // 2
console.log(add(1)); // 6

function add1(a, b = a) {
  return a + b;
}

console.log(add1(1)); // 2

// Working with unnamed parameters
