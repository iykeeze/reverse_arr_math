// Function to reverse a given string
function reverseString(inputString) {
  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

// Function to count the number of characters in a string
function countCharacters(inputString) {
  return inputString.length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

let inputStr = "hello world";
console.log("Reversed string:", reverseString(inputStr));
console.log("Number of characters:", countCharacters(inputStr));
console.log("Capitalized words:", capitalizeWords(inputStr));

// Function to find the maximum value in an array
function findMaximum(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum value in an array
function findMinimum(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to calculate the sum of all elements in an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function filterArray(arr, condition) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

let numbers = [1, 3, 7, 2, 9, 5];
console.log("Maximum value:", findMaximum(numbers));
console.log("Minimum value:", findMinimum(numbers));
console.log("Sum of array:", sumArray(numbers));
console.log(
  "Filtered array (even numbers):",
  filterArray(numbers, (num) => num % 2 === 0)
);

// Function to calculate the factorial of a given number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; //
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function fibonacciSequence(terms) {
  let sequence = [0, 1];

  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

let number = 5;
console.log("Factorial of", number + ":", factorial(number));

let numToCheck = 11;
console.log(numToCheck, "is prime?", isPrime(numToCheck));

let terms = 10;
console.log(
  "Fibonacci sequence up to",
  terms + " terms:",
  fibonacciSequence(terms)
);
