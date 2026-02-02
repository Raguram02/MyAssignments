
function numberTypeDemo(number) {
     if (number > 0) {
        return "Positive";
     } else if (number < 0) {
        return "Negative";
     } else {
        return "Zero";
     }
}

console.log("The number 10 is " + numberTypeDemo(10) + ".");
console.log("The number -5 is " + numberTypeDemo(-5) + ".");
console.log("The number 0 is " + numberTypeDemo(0) + ".");

// Classroom example
let testNum = -15;
console.log("The number " + testNum + " is " + numberTypeDemo(testNum) + ".");