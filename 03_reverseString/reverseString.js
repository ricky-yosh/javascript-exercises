const reverseString = function(stringInput) {
    let reversedString = "";
    for(let index = stringInput.length - 1; index >= 0; index--) {
        let currentLetter = stringInput[index];
        reversedString = reversedString + currentLetter;
    }
    return reversedString;
};
// Testing Purposes
// let answer = reverseString("apple");

// Do not edit below this line
module.exports = reverseString;
