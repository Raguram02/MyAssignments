// let number = 30;
// for(let i = 0; i <= number; i++){
//    if(i % 2 != 0){
//       console.log("Odd number: " + i);
//    }
// }

// let name = "MADAM";
// let revName = name.split('').reverse().join('');
// console.log("Reversed Name: " + revName);


// classroom 2 example
let fullName = "Raguram Anbalagan";
let targetChar = 'a';
let charCount = 0;

for(let i = 0; i < fullName.length; i++){
    if(fullName[i].toLowerCase() === targetChar.toLowerCase()){
        charCount++;
    }
}

console.log("The character '" + targetChar + "' appears " + charCount + " times in the name '" + fullName + "'.");