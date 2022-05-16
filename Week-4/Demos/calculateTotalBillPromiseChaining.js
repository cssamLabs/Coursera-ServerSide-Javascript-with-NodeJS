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
    return new Promise((resolve, reject)=>{
        if(billAmount <=0){
            reject('Invalid bill amount')
        } 
        resolve(billAmount)
    })
}

var billAmt = process.argv[2];
var discountPercentage = process.argv[3];

validateBillAmount(billAmt).then((amount)=>{
    return calculateTotalBillAfterDiscount(amount, discountPercentage)
}).then((result)=>{
    console.log('the discounted price is ', result)
}).catch(error => {
    console.log('error: ', error)
})

/** 
 * run in the console
 * $ node calculateTotalBillPromiseChaining.js 4000 0.3
 * the result is
 * the discounted price is  2800
 * 
 * $ node calculateTotalBillPromise.js 4000 -2
 * Invalid discount percentatge
 */