const calculateTotalBillAfterDiscount = (billAmount, discountPercentage) => {
   
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(discountPercentage<=0){
                reject('Invalid discount percentatge')
            }
            resolve(billAmount - (billAmount*discountPercentage))
        }), 2000
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

calculateTotalBillAfterDiscount(billAmt, discountPercentage).then((result)=>{
    console.log('the discounted bill amount', result)
}, error =>{
    console.log(error)
})

validateBillAmount(billAmt);

/** 
 * run in the console
 * $ node calculateTotalBillPromise.js 4000 0.3
 * the result is
 * Valid bill amount
 * the discounted bill amount 2800
 * 
 * $ node calculateTotalBillPromise.js 4000 -2
 * Valid bill amount
 * Invalid discount percentatge
 */