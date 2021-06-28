displayOrderId();

function displayOrderId() {
    const main = document.querySelector('#order-valide .container');
    let data = localStorage.getItem("orderId");
    const pageConfirmation = `
            <h1 class="text-center">Nous vous remercions d'avoir effectué votre achat chez Orinoco!</h1>
            <p class="text-center">Votre commande à été validée et vous recevrez un email de confirmation dans quelques minutes</p>
            <p class="text-center id-confirmation">Votre numéro de commande est le suivant:${data}</p>
            <img src="/completed.svg" class="d-block w-50 mt-4 ml-5" alt="Votre commande est validée">
    `
    main.innerHTML = `${pageConfirmation}`
    localStorage.clear();
}