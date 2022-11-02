// Bereken het aantal verkochte TV's en log deze in de console.

const soldTelevisions = inventory.map((soldTelevision) => soldTelevision.sold);
let sumSoldTelevisions = 0;

for (let i = 0; i < soldTelevisions.length; i++) {
    sumSoldTelevisions += soldTelevisions[i];
}

console.log(sumSoldTelevisions);

const totalSoldTelevisions = document.getElementById("total-sold-televisions");

totalSoldTelevisions.textContent = sumSoldTelevisions;

// Bereken het aantal ingekochte TV's en log deze in de console.

const originalStock = inventory.map((stock) => stock.originalStock);
let sumOriginalStock = 0;

for (let i = 0; i < originalStock.length; i++) {
    sumOriginalStock += originalStock[i];
    console.log(sumOriginalStock)
}

console.log(sumOriginalStock);

const totalOriginalStock = document.getElementById("total-original-stock");

totalOriginalStock.textContent = sumOriginalStock;

// Aantal tv's die nog verkocht moeten worden.

const stockLeftToSell = document.getElementById("stock-left-to-sell");

stockLeftToSell.textContent = sumOriginalStock - sumSoldTelevisions;