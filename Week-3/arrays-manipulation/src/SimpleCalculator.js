

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
function addNumbers(a, b){
  return a+b;
}

//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
function subNumbers(a, b){
  return a-b;
}


//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
function mulNumbers(a, b){
  return a*b;
}

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
function divNumbers(a, b){
    if(b == null || b == 0){
      return "Please provide valid numbers..!";
    } else {
      return a/b;
    }
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}