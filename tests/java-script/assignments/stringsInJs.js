

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

function checkPolindrome(reversed,str) {
    if (reversed === str) {
        console.log("The string is a palindrome.");
    }
    else {
        console.log("The string is not a palindrome.");
    }
}
let str1 = "MADAM";
let reversedString = reverseString(str1);
console.log("Reversed String: " + reversedString);
checkPolindrome(reversedString,str1); 

let str2 = "Raguram Anbalagan";
let reversedString2 = reverseString(str2);
console.log("Reversed String: " + reversedString2);
checkPolindrome(reversedString2,str2);


