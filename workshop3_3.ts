export{};

let stock: number[] = [15, 8, 20, 5, 30, 4, 9, 30, 74, 7];
function getRestockList(inventory: number[]):number[]{
    const restock: number[] = [];
    for(let i = 0; i<inventory.length; i++) {
        if (inventory[i]<5){
            restock.push(inventory[i]);
        }
    }
    return restock;
}

console.log(getRestockList(stock));