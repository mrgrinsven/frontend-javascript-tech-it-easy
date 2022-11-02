// Array met tv-type namen en uitkomst in console loggen.
const tvTypes = inventory.map((tvType) => tvType.type);

console.log(tvTypes);

// Array met alle uitverkochte objecten en uitkomst in de console loggen.

const soldOutTelevisions = inventory.filter((soldOutTelevision) => soldOutTelevision.sold === soldOutTelevision.originalStock);

console.log(soldOutTelevisions);

// Array met alle TV objecten die AmbiLight hebben en uitkomst in de console loggen.

const ambiLightTelevisions = inventory.filter((ambiLightTelevision) => ambiLightTelevision.options.ambiLight === true);

console.log(ambiLightTelevisions);

// Sorteer Array inventory op prijs van laagste naar hoogste prijs

const sortInventory = inventory.slice().sort((a,b) => a.price - b.price);

console.log(sortInventory);