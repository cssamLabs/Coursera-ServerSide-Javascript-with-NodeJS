const util = require('./util');

var myStringArray = ['JHON', 'jeNNy', 'Ben', 'micky', 'William'];

function getCapital(myStringArray) {
    return util.getInUpperCase(myStringArray);
}

console.log(getCapital(myStringArray));

function getLower(myStringArray) {
    return util.getInLowerCase(myStringArray)
}

console.log(getLower(myStringArray));

function getPosition(myStringArray, element){
    return util.getIndexPosition(myStringArray, element);
}

console.log(getPosition(myStringArray, 'Ben'))
