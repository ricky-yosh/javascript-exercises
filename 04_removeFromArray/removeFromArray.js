const removeFromArray = function(arrayInput, ...elementsToRemove) {
    let currentArray = [];
    const removableElementsArray = Array.from(elementsToRemove);
    for (const inputElement of arrayInput)
    {
        if(!elementsToRemove.includes(inputElement))
        {
            currentArray.push(inputElement);
        }
    }
    const finalArray = currentArray;
    return finalArray
};

// Do not edit below this line
module.exports = removeFromArray;
