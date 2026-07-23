var productPrices  = [600, 245, 18, 3000, 49]
console.log(productPrices)

var discountedPrices = productPrices.map(discount)
function discount(num) {
  return num-(num * 0.1);
}
console.log("Discount 10% :",discountedPrices)

var affordableProducts  = discountedPrices.filter((discountedPrices) => discountedPrices <50)
console.log("Price less than $50:",affordableProducts)

var sum = 0 
for (i =0; i<affordableProducts.length ; i++){
    sum += affordableProducts[i]
}
console.log("Total price:",sum.toFixed(2))
