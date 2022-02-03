const getSumOfIntegers = function(num) {
    return num.toString().split('').reduce((acc, el)=> {
        return +acc + +el;
    });
};

module.exports = getSumOfIntegers;

