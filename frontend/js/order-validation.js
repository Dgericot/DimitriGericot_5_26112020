import { toPrice } from './helpers'

displayOrderId();

function displayOrderId() {
    const main = document.querySelector('#order-valide .container');
    let data = localStorage.getItem("orderId");
    let totalOrderAmount = localStorage.getItem("cartTotalPrice")
    const pageConfirmation = `
            
            <h1 class="text-center">Nous vous remercions d'avoir effectué votre achat chez Orinoco!</h1>
            <p class="text-center">Votre commande à été validée et vous recevrez un email de confirmation dans quelques minutes</p>
            <p class="text-center id-confirmation">Votre numéro de commande est le suivant:${data}</p>
            <p class="text-center id-confirmation">Le montant total de votre commande est de ${toPrice(totalOrderAmount)}</p> 
            <img src="/completed.svg" class="w-50 mt-4" alt="Votre commande est validée">
    `
    main.innerHTML = `<div class = "col-12 text-center">${pageConfirmation}</div>`
    localStorage.clear();
}