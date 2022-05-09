const swapDigits = (number)=>{
    let swappedNumber = 0

    //write logic here
    if(number == null){
        return swappedNumber;
    }
    else if(number < 0){
        return swappedNumber;
    }
    else {
        const numberString = number.toString();
        const length = numberString.length;
        let numberArray = numberString.split("");
        let newArray = [];
        if(length < 2){
            return swappedNumber;
        } else if ( length % 2 == 0){ // even
            for(let i=0; i < length; i=i+2){
                newArray.push(numberArray[i+1]);
                newArray.push(numberArray[i]);
            }
            newArray.map(x => parseInt(x));
            swappedNumber = +newArray.join("");
            return  swappedNumber; 

        } else { // odd
            newArray.push(numberArray[0]);
            for(let i=1; i < length; i=i+2){
                newArray.push(numberArray[i+1]);
                newArray.push(numberArray[i]);
            }
            swappedNumber = +newArray.join("");
            return swappedNumber;
        } 
    }  
}

module.exports = swapDigits
