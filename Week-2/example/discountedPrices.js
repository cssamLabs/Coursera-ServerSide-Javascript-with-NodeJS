/** 1st method using for loop
which modifies existing array;
*/

const calculateDicountedPrice = discount => {
    for(let i=0; i<products.length; i++){
        products[i][1] = products[i][1] - products[i][1] * discount/100;
	}
}

calculatedDiscountedPrice(10);
console.log(products);


/** 2nd method using array.map()
which preserves original array;
*/

const calculatedDiscountedPrices = discount => products.map(
	product => [product[0], product[1]=product[1]*discount/100]
)

console.log(products);
console.log(calculatedDiscountedPrices);

