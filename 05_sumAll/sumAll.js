const sumAll = function(startingNum, endingNum) {
    if(!(Number.isInteger(startingNum) && Number.isInteger(endingNum) && startingNum >= 0 && endingNum >= 0))
    {
        return "ERROR";
    }

    const largerNum = Math.max(startingNum, endingNum);
    const smallerNum = Math.min(startingNum, endingNum);

 
    let currentSum = 0;
    for (let count = smallerNum; count <= largerNum; count++)
    {
        currentSum += count;
    }
    const finalSum = currentSum;
    return finalSum;
};

sumAll(-10, 4)

// Do not edit below this line
module.exports = sumAll;
