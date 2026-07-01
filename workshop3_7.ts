export{};

type Status = "Available" | "Out of Stock";

interface Product {
    id: number;
    name: string;
    price: number;
}
function ProductSummary(item: Product, currentStatus: Status): void {
    let id: number = item.id;
    let name: string = item.name;
    let price: number = item.price;
    console.log("Product ID: " , id ,", Name: " , name , ", Price: $" , price , " | Status: " , currentStatus);
}
let product: Product = {
    id: 112,
    name: "Wireless Mouse",
    price: 690
};
let productStatus: Status = "Out of Stock";
console.log(product,productStatus)