export{};
type Catagory = "Electronics" | "Clothing" | "Food";
interface Product{
    readonly id: Number;
    name:string;
    catagory:Catagory;
    price:number;
}
let products: Product[] = [
    {id:1,name:"Laptop",catagory:"Electronics",price:30000},
    {id:2,name:"Shirt",catagory:"Clothing",price:199},
    {id:3,name:"Starberry",catagory:"Food",price:30}
];
function filtercat(catagory:Catagory):Product[]{
    let catlist = []; 
    for(let i=0; i<products.length; i++){
        if(products[i].catagory===catagory)
            catlist.push(products[i]);
    }
    return catlist;
}
filtercat("Clothing");
console.log(filtercat("Food"));