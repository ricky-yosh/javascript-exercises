const palindromes = function (stringInput) {
    let changedString = stringInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let stringIsFull = stringInput.length;
    while(stringIsFull) {
        firstLetterIsLast = stringInput[0] === stringInput[stringInput.length - 1];
        if (!firstLetterIsLast) {
            return false;
        }
        stringInput.substring(1, stringInput.length - 1);
        stringIsFull = stringIsFull.length;
    }
    return true;
};

palindromes("applE!");

// Do not edit below this line
module.exports = palindromes;
