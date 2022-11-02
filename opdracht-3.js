// Lijst tv merken.

function tvBrands(inventoryArray) {
    const brands = document.getElementById("brands");
    return inventoryArray.map((tvBrand) => {
        brands.innerHTML += `<li>${tvBrand.brand}</li>`;
    })
}

tvBrands(inventory);
