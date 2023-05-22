const fibonacci = function(fibIndex) {
    let finalNum = 1;
    let prevNum = 0;
    let temp;
    let inputZeroOrMore = fibIndex >= 0;
    let counter = 1;

    if (inputZeroOrMore) {
        while (counter < fibIndex) {
            temp = finalNum;
            finalNum += prevNum;
            prevNum = temp;
            counter++;
        }
    } else {
        finalNum = "OOPS";
    }
    return finalNum;
};

fibonacci(3);

// Do not edit below this line
module.exports = fibonacci;
