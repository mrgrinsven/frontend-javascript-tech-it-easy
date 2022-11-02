// Functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam]

function tvName(tvObject) {
    return `${tvObject.brand}  ${tvObject.type}  ${tvObject.name}`;
}

// functie die de prijs van één tv als parameter verwacht

function tvPrice(tvObject) {
    return `€${tvObject.price},-`;
}

// functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// 1 inch = 2.54 cm

function tvSize(tvObject) {
    let result = "";
    tvObject.availableSizes.map((size) => {
        if (result.length > 1) {
            result += ` | ${size} inch (${Math.round(size * 2.54)} cm)`;
        } else {
            result += `${size} inch (${Math.round(size * 2.54)} cm)`;
        }
    })
    return result;
}

// Script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina

const televisionObject = inventory[inventory.indexOf(inventory.find((model) => model.type === "43PUS6504/12"))];
const televisionObjectInfo = document.getElementById("television-object-info");
televisionObjectInfo.innerHTML = `
    <p>${tvName(televisionObject)}</p>
    <p>${tvPrice(televisionObject)}</p>
    <p>${tvSize(televisionObject)}</p> 
`;

// Functie die de informatie van alle tv's weergeeft op de pagina.

function allTelevisionsInfo(inventoryArray) {
    const allTelevisionsInfo = document.getElementById("all-televisions-info");
    allTelevisionsInfo.innerHTML = ``;
    return inventoryArray.map((tv) => {
        allTelevisionsInfo.innerHTML += `
    <div class="television-list">
        <p>${tvName(tv)}</p>
        <p>${tvPrice(tv)}</p>
        <p>${tvSize(tv)}</p> 
    </div>
`;
    })
}

allTelevisionsInfo(inventory);