
// // 10. Functions

// // 1. Sum of Two Numbers
// function sumOfTwoNumbers(a, b) {
//     return a + b;
// }

// // 2. Convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// // 3. Check for Prime Number
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // 4. Reverse a String
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // 5. Factorial of a Number
// function factorial(n) {
//     var result = 1;
//     for (var i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// // 6. Greet User (No Parameters)
// function greetUser() {
//     console.log("Hello, welcome!");
// }

// // 7. Greet by Name (With Parameter)
// function greetByName(name) {
//     console.log("Hello, " + name + "!");
// }

// // 8. Sum of Two Numbers (With Parameters)
// function sum(a, b) {
//     return a + b;
// }

// // 9. Random Number Generator (No Parameters)
// function generateRandomNumber() {
//     return Math.floor(Math.random() * 101);
// }

// // 10. Check Age for Voting (With Parameter)
// function checkVotingEligibility(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


// // 11. Arrow Functions

// // 1. Square of a Number
// var square = (num) => {
//     return num * num;
// };

// // 2. Array of Even Numbers
// var getEvenNumbers = (arr) => {
//     return arr.filter(function(num) {
//         return num % 2 === 0;
//     });
// };

// // 3. Concatenate Strings
// var concatenateStrings = (str1, str2) => {
//     return str1 + str2;
// };

// // 4. Find Maximum Number in an Array
// var findMax = (arr) => {
//     return Math.max.apply(null, arr);
// };

// // 5. Sum of All Numbers in an Array
// var sumArray = (arr) => {
//     return arr.reduce(function(acc, num) {
//         return acc + num;
//     }, 0);
// };

// // 6. Print "Hello World" (No Parameters)
// var helloWorld = () => {
//     console.log("Hello World");
// };

// // 7. Calculate Square of a Number (With Parameter)
// var calculateSquare = (num) => {
//     return num * num;
// };

// // 8. Check if Number is Positive (With Parameter)
// var isPositive = (num) => {
//     return num > 0;
// };

// // 9. Generate a Random Number (No Parameters)
// var randomNum = () => {
//     return Math.floor(Math.random() * 50) + 1;
// };

// // 10. Convert Minutes to Seconds (With Parameter)
// var minutesToSeconds = (minutes) => {
//     return minutes * 60;
// };


// // 12. Anonymous Functions

// // 1. Print "Hello" (No Parameters)
// (function() {
//     console.log("Hello");
// })();

// // 2. Sum of Two Numbers (With Parameters)
// var anonymousSum = function(a, b) {
//     return a + b;
// };

// // 3. Array Sorting (With Parameters)
// var sortedArray = [5, 2, 9, 1, 5].sort(function(a, b) {
//     return a - b;
// });

// // 4. Greeting Message (With Parameter)
// (function(name) {
//     console.log("Hello, " + name + "!");
// })("Arzoo");

// // 5. Check if Number is Even or Odd (With Parameter)
// var checkEvenOdd = function(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };

// // 6. Filter Odd Numbers from an Array (With Parameters)
// var oddNumbers = [1, 2, 3, 4, 5, 6].filter(function(num) {
//     return num % 2 !== 0;
// });

// // 7. Factorial Calculation (With Parameter)
// var anonymousFactorial = function(n) {
//     var result = 1;
//     for (var i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };

// // 8. Anonymous Function in Timeout (No Parameters)
// setTimeout(function() {
//     console.log("Time's up!");
// }, 2000);

// // 9. Sum of All Elements in an Array (With Parameter)
// var sumOfElements = [1, 2, 3, 4, 5].reduce(function(acc, num) {
//     return acc + num;
// }, 0);

// // 10. Check Voting Eligibility (With Parameter)
// (function(age) {
//     if (age >= 18) {
//         console.log("Eligible to vote");
//     } else {
//         console.log("Not eligible to vote");
//     }
// })(20);
