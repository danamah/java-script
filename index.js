// ^^^^^ A. Part 1: Coding Questions ^^^^^

// * 1. Convert the string "123" to a number and add 7.

var strNum = "123";
var conNum = +strNum;
console.log(conNum + 7); //130

/*  2. Check if the given variable is falsy and return "Invalid" if it is.
        • Input Example: 0
        • Output Example: "Invalid" 
 */

let input = 0;
function getBooleanType(variable) {
  if (Boolean(variable) === false) {
    return "invalid";
  } else {
    return "valid";
  }
}
console.log(getBooleanType(input));

// * 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.

for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

/*
4. Create an array of numbers and return only the even numbers using filter method.
• Input Example: [1, 2, 3, 4, 5] 
• Output Example: [2,4]
*/

let allNumbers = [1, 2, 3, 4, 5];
function getEven(arr) {
  return arr.filter((num) => num % 2 == 0);
}

console.log(getEven(allNumbers));

// * 5. Use the spread operator to merge two arrays, then return the merged array.

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];

arr12 = [...arr1, ...arr2];
console.log(arr12);

// * 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
var day = 7;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not a valid week day");
}

/* 7. Create an array of strings and return their lengths using map method 
    • Input: ["a", "ab", "abc"]
    • Output Example: [1, 2, 3]
*/
let arrStr = ["a", "ab", "abc"];
console.log(arrStr.length);

function getLength(arr) {
  return arr.map((word) => word.length);
}

console.log(getLength(arrStr));

/* 8. Write a function that checks if a number is divisible by 3 and 5. 
    • Input Example: 15
    • Output Example: “Divisible by both”
*/
var num = 15;
function getDivBy3And5(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Divisible by both";
  } else {
    return "Not Divisible by both";
  }
}
let divedeNum = getDivBy3And5(num);
console.log(divedeNum);

/* 9. Write a function using arrow syntax to return the square of a number 
    • Input Example: 5
    • Output Example: 25
*/
let getSquare = (num) => {
  return num ** 2;
};
let squareNum = getSquare(5);
console.log(squareNum); //25

/* 10.Write a function that destructures an object to extract values and returns a formatted string. 
    • Input Example: const person = {name: 'John', age: 25}
    • Output Example: 'John is 25 years old'
*/
const person = { name: "john", age: 25 };

function returnStr(obj) {
  let { name, age } = obj;
  return `${name} is ${age} years old`;
}
let fomaStr = returnStr(person);
console.log(fomaStr);

/* 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
    • Input Example: 1, 2, 3, 4, 5
    • Output Example: 15
*/
function getSum(...args) {
  //by using rest operator
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(getSum(1, 2, 3, 4, 5)); //15

/* 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
    • Output Example: “Success”
*/
function getPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

getPromise().then((result) => {
  console.log(result);
});
/* 13. Write a function to find the largest number in an array. (0.5 Grade)
    • Input Example: [1, 3, 7, 2, 4]
    • Output Example: 7
*/
// & By useing reduce (array method)
let numbers = [1, 3, 7, 2, 4];
function getMaxNum(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  });
}

console.log(getMaxNum(numbers));
// & By useing for loop

function getMaxNum2(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(getMaxNum2(numbers));

/* 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
    • Input Example: name: "John", age: 30}
    • Output Example: ["name", "age"]
*/
let personObj = { name: "John", age: 30 };
// console.log(Object.keys(personObj));

function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(personObj));

/* 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
    • Input: "The quick brown fox"
    • Output: ["The", "quick", "brown", "fox"
*/

var inputStr = "The quick brown fox";

// console.log(inputStr.split(" "));

function splitSent(sent) {
  return sent.split(" ");
}

console.log(splitSent(inputStr));

// ^^^^^ B. Part 2: Essay Questions ^^^^^
// ~ 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

/*
forEach() is an array method that executes a callback function for each element in an array. 
It does not return a new array and cannot be stopped using break or continue.

for...of is a loop that iterates over iterable values such as arrays and strings. 
It allows us to use break and continue.

I use forEach() when I want to perform an action on every array element
and for...of when I need more control over the iteration such as stopping the loop early.
 */

// ~ 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

/*
Hoisting is JS behavior of processing variable and function declarations before executing the code.

For example, function declarations can be called before they are defined.

The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration of a let or 
const variable. 
accessing the variable causes a ReferenceError during this period.

var is hoisted and initialized with undefined
while let and const are hoisted but remain uninitialized until their declaration is evaluated.
*/

// ~ 3. What are the main differences between == and ===? (0.5 Grade)
/* 
The main difference between == and === is that == (loose equality operator)
 compares two values after performing type coercion if necessary.
 In other words it implicitly converts the values to the same type before comparing them.

Meanwhile === (strict equality operator) compares both the values and their types without performing any type coercion. 
*/
// ~ 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

/* 
try-catch is used to handle errors and prevent the program from stopping unexpectedly.

"try" block contains the code that might throw an error while "catch" block handles the error if one occurs.

In asynchronous operations especially when using "async/await" we use try-catch to handle errors 
such as failed API requests or network problems.

This makes our code more reliable and helps us handle errors gracefully.
*/

// ~ 5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
/* 
In JS, there are two types of type conversion:

**First: Type Conversion (Explicit Conversion):**
This happens when we manually convert a value from one data type to another using built-in functions or operators.

Example: We can convert a string to a number using `Number()` or the unary `+` operator.

**Second: Type Coercion (Implicit Conversion):**
This happens when JavaScript automatically -imolicitly- converts a value from one data type to another when needed.

Example: When we use the `+` operator between a string and a number, JavaScript implicitly converts the number to a string and concatenates the two values.
*/
var stringNum = "1234";
var myNum = 678;
console.log(Number(stringNum));
console.log(+stringNum);
console.log(stringNum + myNum);
