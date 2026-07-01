export{};
function calculatePrice(price: number,discountPercent: number):number{
    return price - (discountPercent/100*price);
}
let result: number = calculatePrice(1000,5);
console.log(result);