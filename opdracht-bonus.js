// Functie die een array verwacht en een array met alle uitverkochte objecten teruggeeft.

function outOfStock(inventoryArray) {
    return inventoryArray.filter((tv) => tv.sold === tv.originalStock);
}


// Functie die een array verwacht en een array met alle AmbiLight objecten teruggeeft.
function ambiTv(inventoryArray) {
    return inventoryArray.filter((ambiLightTv) => ambiLightTv.options.ambiLight === true);
}

// Functie die een array verwacht en een array gesorteerd van laagste naar hoogste prijs teruggeeft

function sortTv(inventoryArray) {
    return inventoryArray.slice().sort((a,b) => a.price - b.price);
}
