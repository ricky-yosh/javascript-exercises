const findTheOldest = function(people) {
    const ages = people.reduce((firstPerson, secondPerson) => {
        const firstAge = (firstPerson.yearOfDeath != null ? firstPerson.yearOfDeath: 2023) - firstPerson.yearOfBirth;
        const secondAge = (secondPerson.yearOfDeath != null ? secondPerson.yearOfDeath: 2023) - secondPerson.yearOfBirth;
        return firstAge > secondAge ? firstPerson : secondPerson;
    });
    const returnObject = ages;
    return returnObject;
};

// Do not edit below this line
module.exports = findTheOldest;
