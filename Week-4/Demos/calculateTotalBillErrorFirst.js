const calculateTotalBillAfterDiscount = (error, billAmount, discountPercentage) => {
    if(error){
        return console.log('Error encountered')
    }
    console.log(billAmount- (billAmount*discountPercentage))
}

const validateBillAmount = (billAmount)=>{
    if(billAmount <=0){
        console.log('Invalid bill amount')
    } else {
        console.log('Valid bill amount')
    }
}

var billAmt = process.argv[2];
var discountPercentage = process.argv[3];

setTimeout(calculateTotalBillAfterDiscount, 2000, "error", billAmt, discountPercentage)
validateBillAmount(billAmt);

/** 
 * run in the console
 * $ node calculateTotalBillErrorFirst.js 4000 0.3
 * the result is
 * Valid bill amount
 * Error encountered
 */