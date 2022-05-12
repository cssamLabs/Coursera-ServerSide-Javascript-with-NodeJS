/** Create an appropriate data structure to  model product and perform operations such as:
Filter out premium products
Convert all the Product Names to Upper Case
Create a stock of each premium product
*/

const products = [];

let premiumProducts = products.filter(product => product.price > 300)
    .map(product => {
        return {productName: product.productName.toUpperCase(), price: productName.price}
    })
    .reduce((stocks, curreProduct)=>{
	    let stockItem = stocks.find(product => product.productName === currentProduct.productName);
        if(stockItem)
	        ++stockItem.stock;
        else 
	        stocks.push({productName: currentProduct.productName, stock: 1})
	    return stocks;
        },
    [])

console.log(premiumProducts);
