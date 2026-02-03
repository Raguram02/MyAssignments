
let number = 7;

function isOddOrEven (number){
  if(number % 2 === 0){
    return "Even";
  } else {
    return "Odd";
  }
}
console.log("The number " + number + " is " + isOddOrEven(number) + ".");

// Classroom example
let testNumber = 42;
console.log("The number " + testNumber + " is " + isOddOrEven(testNumber) + ".");