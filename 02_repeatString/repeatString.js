const repeatString = function(stringInput, repeatCount) {
    let finalString = "";
    if (repeatCount < 0) {
        finalString = "ERROR";
    }
    else {
        for (let count = 0; count < repeatCount; count++) {
            finalString = finalString + stringInput;
        }
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
