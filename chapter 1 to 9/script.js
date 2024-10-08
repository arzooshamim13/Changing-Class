

// // 1. Alert Chapter

// // What does the alert function do in JavaScript?
// // Answer: The alert function displays a pop-up dialog box with a message for the user to read.

// alert("Welcome to my website!"); // Code to display an alert

// // What happens if you capitalize the alert keyword?
// // Answer: JavaScript is case-sensitive, so "Alert" will result in an error.

// alert("Hello, world!"); // Correct syntax to display "Hello, world!"


// // 2. Variables for Strings

// var message = "Hello, world!";
// alert(message);

// var age;
// age = 25;
// alert(age);

// var greeting = "Good morning!";
// alert(greeting);
// greeting = "Good evening!";
// alert(greeting);

// var favoriteColor = "blue";
// alert("My favorite color is " + favoriteColor);


// // 3. Variables for Numbers

// var height = 170;
// var newHeight = height + 10;
// alert(newHeight);

// var num1 = 50;
// var num2 = 30;
// var sum = num1 + num2;
// alert(sum);

// var price = 120;
// var totalPrice = price + (price * 0.1);
// alert(totalPrice);


// // 4. Variables with camelCase

// var myAddress = "Karachi";
// alert(myAddress);

// var userName = "JohnDoe";
// var userEmail = "john@example.com";
// var userPassword = "password123";
// alert(userName + ", " + userEmail + ", " + userPassword);

// var userAddress = "Somewhere";
// alert(userAddress);


// // 5. Math expressions

// var sum = 25 + 30;
// alert(sum);

// var modulusResult = 27 % 4;
// alert(modulusResult);


// // 6. Math expressions: Unfamiliar operators

// var num = 3;
// var newNum = num++;
// alert(num);    // 4
// alert(newNum); // 3

// var counter = 10;
// counter++;
// counter++;
// alert(counter); // 12

// var points = 20;
// points--;
// ++points;
// alert(points); // 20

// var number = 0;
// ++number;
// ++number;
// ++number;
// alert(number); // 3


// // 7. Math expressions: Eliminating ambiguity

// var calculation = (20 % 6) + 4;
// alert(calculation); // 6

// var expressionValue = (6 + 2) * (5 - 3);
// alert(expressionValue); // 16


// // 8. Prompts

// var userName = prompt("What is your name?");
// alert("Hello, " + userName + "!");

// var age = prompt("How old are you?");
// if (age) {
//     alert("You are " + age + " years old.");
// } else {
//     alert("No age provided.");
// }

// var pets = prompt("How many pets do you have?");
// if (pets === "") {
//     alert("You didn't enter anything.");
// } else {
//     alert("You have " + pets + " pets.");
// }

// var userNumber = prompt("Enter a number between 1 and 10");
// userNumber = Number(userNumber) * 2;
// alert("The result is " + userNumber);

// var favNum = prompt("What is your favorite number?");
// if (!favNum) {
//     favNum = 7;
// }
// alert("Your favorite number is " + favNum);


// // 9. if statements

// var capitalOfFrance = prompt("What is the capital of France?");
// if (capitalOfFrance.toLowerCase() === "paris") {
//     alert("Correct!");
// } else {
//     alert("Try again!");
// }

// if (capitalOfFrance.toLowerCase() === "paris") {
//     alert("Correct!");
// } else {
//     alert("Incorrect, the correct answer is Paris.");
// }

// var capitalOfUK = prompt("What is the capital of the United Kingdom?");
// if (capitalOfUK.toLowerCase() === "london" || capitalOfUK.toLowerCase() === "the united kingdom") {
//     alert("Correct!");
// } else {
//     alert("Incorrect.");

// var score = 0;
// var answer = prompt("What is 2 + 2?");
// if (answer == 4) {
//     score++;
// }
// alert("Your score is: " + score);

// var capitalOfGermany = prompt("What is the capital of Germany?");
// var mathAnswer = prompt("What is 10 + 10?");
// if (capitalOfGermany.toLowerCase() === "berlin" && mathAnswer == 20) {
//     alert("You got both right!");
// } else if (capitalOfGermany.toLowerCase() === "berlin" || mathAnswer == 20) {
//     alert("You got one correct!");
// } else {
//     alert("Both answers are incorrect.");
// }
// """


