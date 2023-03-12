const leapYears = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    // if year is divisble by for &&  not divible by 100 || divisble by 400 it is a leap year.
};

// Do not edit below this line
module.exports = leapYears;
