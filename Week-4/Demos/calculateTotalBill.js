const calculateTotalBillAfterDiscount = (billAmount, discountPercentage) => {
    setTimeout(()=>{
        console.log(billAmount- (billAmount*discountPercentage)), 2000
    })
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

calculateTotalBillAfterDiscount(billAmt, discountPercentage);
validateBillAmount(billAmt);

/** 
 * run in the console
 * $ node calculateTotalBill.js 2000 0.25
 * the result is
 * Valid bill amount
 * 1500
 */