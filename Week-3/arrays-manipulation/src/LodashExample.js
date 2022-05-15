
//import the lodash module
const lodash = require('lodash');


//Create a function to find a maximum value from number array.
function findMaxValue(values){
  return lodash.max(values);
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(values, second){
  let filtered = [];
  values.forEach(element => {
    if(lodash.gt(element, second)){
      filtered.push(element);
    }
  });
  return filtered;
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(values){
  let capitalNames = [];
  values.array.forEach(element => {
    capitalNames.push(lodash.capitalize(element));
  });
  return capitalNames;

}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
}
