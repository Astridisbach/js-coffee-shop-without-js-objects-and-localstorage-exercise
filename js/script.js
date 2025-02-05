"use strict"; //aktiverer JS-strikt mode

function addToCart(product) {
    //hent nuværende værdi fra inputfeltet (med specifikt id) og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value);

    //øg quantity med 1 - læg én til eksisterende værdi
    document.getElementById(product).value = quantity + 1;

}

function removeFromCart(product) {
    //hent nuværende værdi fra inputfeltet (med specifikt id) og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value);

    if(quantity > 0){
    //formindsk quantity med 1 - træk én fra den eksisterende værdi 
    document.getElementById(product).value = quantity - 1;
    }
}

function resetCart(product){
   //sæt quantity til 0 - nulstil de produkter man har i cart
   document.getElementById(product).value = 0; 
}

//funktion som opdaterer prisen for den enkelte vare/kaffeprodukt
function updateTotalPrice(product){
    //hent mængden (quantity) og pris-inputfeltet for den specifikke vare/kaffeprodukt
    const quantity = parseInt(document.getElementById(product).value);

    const price = parseInt(document.getElementById(product +"-price").value);

    //beregn totalprisen for denne specifikke vare
    const total = quantity * price;

    document.getElementById(product + "-total").value = total;

}

//funktion til at beregne og opdatere den samlede totalpris for alle varer i kurven 
function totalPrice(){
    //variabel til at holde styr på den samlede totalpris 
    let totalSum = 0;

    
}
