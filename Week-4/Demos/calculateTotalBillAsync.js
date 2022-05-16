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

const totalBillAmount = async (billAmount, discountPercentage)=>{
    const amount = await validateBillAmount(billAmount)
    const total = await calculateTotalBillAfterDiscount(amount, discountPercentage)
    return total;
}

var billAmt = process.argv[2];
var discountPercentage = process.argv[3];

totalBillAmount(billAmt, discountPercentage).then((result)=>{
    console.log('The total bill after discount is ', result)
}).catch(error =>{
    console.log(error)
})


/** 
 * run in the console
 * $ node calculateTotalBillAsync.js  4000 0.4
 * the result is
 * The total bill after discount is  2400
 * 
 * $ node calculateTotalBillPromise.js 4000 -2
 * Invalid discount percentatge
 */
