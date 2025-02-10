"use strict"; // Aktiverer "strict mode", som hjælper med at finde fejl i koden

function addToCart(product) {
    // Finder inputfeltet med det givne produkt-id og omdanner værdien til et tal
    const quantity = parseInt(document.getElementById(product).value);

    // Lægger 1 til mængden af produktet i inputfeltet
    document.getElementById(product).value = quantity + 1;

    // Opdaterer den samlede pris for alle varer
    totalPrice();
}

function removeFromCart(product) {
    // Finder inputfeltet med det givne produkt-id og omdanner værdien til et tal
    const quantity = parseInt(document.getElementById(product).value);

    // Hvis der er mindst 1 af produktet, trækker vi 1 fra
    if (quantity > 0) {
        document.getElementById(product).value = quantity - 1;
    }

    // Opdaterer den samlede pris for alle varer
    updateTotalPrice(product);
}

function resetCart(product) {
    // Nulstiller antallet af produktet til 0
    document.getElementById(product).value = 0; 
}

// Funktion til at opdatere prisen for et specifikt produkt
function updateTotalPrice(product) {
    // Henter antal af produktet og prisen pr. enhed
    const quantity = parseInt(document.getElementById(product).value);
    const price = parseInt(document.getElementById(product + "-price").value);

    // Beregner totalprisen for det pågældende produkt
    const total = quantity * price;

    // Opdaterer totalprisen i det relevante inputfelt
    document.getElementById(product + "-total").value = total;

    // Opdaterer den samlede pris for alle varer
    totalPrice();
}

// Funktion til at beregne den samlede pris for alle varer i kurven
function totalPrice() {
    let totalSum = 0; // Opretter en variabel til at holde den samlede pris

    // Finder alle inputfelter, hvis id ender på "-total" (dvs. de, der viser totalpris for et produkt)
    const productElements = document.querySelectorAll("[id$=-total]");

    // Løber igennem alle fundne inputfelter og lægger deres værdier sammen
    productElements.forEach(productElem => {
        totalSum += parseInt(productElem.value);
    });

    // Opdaterer den samlede totalpris i et inputfelt med id 'totalSum'
    document.getElementById('totalSum').value = totalSum;
}