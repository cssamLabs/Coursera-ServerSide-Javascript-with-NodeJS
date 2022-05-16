/** Filterout the non-premium products
non-premium are priced less than 300
Convert all non-premium Product Types to upper case

calculate stock of each non-premium product type
*/

const nonPremiiumProducts = products.filter(product=>product[1]<=300)
.map(prod=>[prod[0].toUpperCase(), prod[1]])
.reduce((stocks, currentProduct)=>{
    let stockItem = stocks.find(item=>item[0]===currentProduct[0]);
    if(!stockItem)
        stocks.push([product[0], 1]);
    else 
        stockItem = ++stockItem[1];
    return stocks;
    },[])

console.log(nonPremiumProducts);
