// Return the sum of the two numbers
const addNumbers = (number1, number2) => {
  if(typeof number1 !== 'number' || typeof number2 !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  } else {
    return number1+number2
  }
}
// Return the difference of the two numbers
const subNumbers = (number1, number2) => {
  if(typeof number1 !== 'number' || typeof number2 !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  } else {
    return number1-number2
  }
}
// Return the product of the two numbers
const mulNumbers = (number1, number2) => {
  if(typeof number1 !== 'number' || typeof number2 !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  } else {
    return number1*number2
  }
}
// Return the quotient of the two numbers, check if the second number is zero, then throw an Error
const divNumbers = (number1, number2) => {
  if(typeof number1 !== 'number' || typeof number2 !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  } 
  else if(number2 === 0) {
    throw new Error("ERROR::Divide by zero error..!")
  }
  else {
    return number1/number2
  }
}
// Return the mod of the two numbers, check if the second number is zero, then throw an Error
const moduloNumbers = (number1, number2) => {
  if(typeof number1 !== 'number' || typeof number2 !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  }
  else if(number2 === 0) {
    throw new Error("ERROR::Invalid number..!")
  }
  else {
    return number1%number2
  }
}

module.exports = {
  addNumbers, subNumbers, mulNumbers, divNumbers, moduloNumbers
}
