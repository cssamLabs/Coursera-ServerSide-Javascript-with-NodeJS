// Return the ceil value of the number, check if the number is < or = zero, then throw an Error
const computeCeil = (number) => {
  if(typeof number !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  }
  else if(number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!')
  } else {
    return Math.ceil(number)
  }
}
// Return the floor value of the number, check if the number is < or = zero, then throw an Error
const computeFloor = (number) => {
  if(typeof number !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  }
  else if(number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!')
  } else {
    return Math.floor(number)
  }
}
// Return the square root of the number, check if the number is < or = zero, then throw an Error
const computeSquareRoot = (number) => {
  if(typeof number !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  }
  else if(number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!')
  } else {
    return Math.sqrt(number)
  }
}
// Return the exponent value of the number, check if the number is < or = zero, then throw an Error
const computePower = (number, powerOf) => {
  if(typeof number !== 'number' || typeof powerOf !== 'number'){
    throw new Error('ERROR::Invalid number..!')
  }
  else if(number <= 0 || powerOf <=0) {
    throw new Error("ERROR::Number or power is less than or equal to zero")
  } else {
    return Math.pow(number, powerOf)
  }
}

module.exports = {
  computeCeil, computeFloor, computeSquareRoot, computePower
}
