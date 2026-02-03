function checkLastWordLenght(s){
    // Trim leading/trailing spaces, split on one-or-more whitespace, then take last word
    const trimmed = s.trim();
    if (trimmed === "") {
        console.log("The last word is  with length 0.");
        return;
    }
    const words = trimmed.split(" ");
    const lastWord = words[words.length - 1];
    console.log("The last word is " + lastWord + " with length " + lastWord.length + ".");

}

let sentence = "Hello World";
let sentence2 = " fly me to the moon ";

checkLastWordLenght(sentence); // Expected output: 5
checkLastWordLenght(sentence2); // Expected output: 4

// Check anagram
function checkAnagram(s1, s2){
    s1 = s1.trim().toLowerCase().split('').sort().join('');
    s2 = s2.trim().toLowerCase().split('').sort().join('');

if (s1 === s2) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
    
}

let word1 = "listen";
let word2 = "silent";
let word3 = "hello";
let word4 = "world";

checkAnagram(word1, word2);
checkAnagram(word3, word4);

