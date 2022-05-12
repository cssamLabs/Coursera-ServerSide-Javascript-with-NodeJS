/**
Filterout the premium products.

Products with price above 300, are marked as Premium Products.

Apply a 15% discount on all the non-premium products.

create stock of each product type.
 */

const premiumProducts = products.filter(product => product[1] > 300);

console.log(premiumProducts);


const filteredProducts = product.filter(product => product[1] <= 300);
const nonPremimumProducts = filteredProducts.map(product => [product[0], product[1] - product[1]*15/100])

console.log(nonPremimumProducts);

let productStock = products.reduce(
(stocks, product) => {
 let stockItem = stocks.find(stock => stock[0] == product[0]);
if(!stockItem)
	stocks.push([product[0], 1])
else 
	++stockItem[1]

return stocks;
}, [])

console.log(productStock);