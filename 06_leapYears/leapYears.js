const leapYears = function(year) {
    let leapYearBoolean = false;
    const divisibleBy4 = year % 4 == 0;
    const divisibleBy100 = year % 100 == 0;
    const divisibleBy400 = year % 400 == 0;
    if (divisibleBy4 && !divisibleBy100 || divisibleBy400)
    {
        leapYearBoolean = true;
    }
    return leapYearBoolean;
};

leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
