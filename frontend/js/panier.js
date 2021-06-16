import {toPrice} from './helpers'
import {sendOrder} from './fetch'

//Récupération des produits via le localStorage
const storedCart = JSON.parse(localStorage.getItem("cart"));


displayOrder(storedCart);
displayForm();
sendOrder(createJsonBody, getInfosFromClient);

//Retirer un article du panier
document.getElementById("suppress-line").addEventListener('click',() => {
    if( confirm( "Êtes-vous sûr de vouloir retirer cet article de votre panier ?"  )) {
        localStorage.clear("selectedProduct");
        window.location.href = "panier.html";
         }
      } )

//Vider le panier totalement
document.getElementById("empty-cart").addEventListener('click', () => {
    if( confirm( "Êtes-vous sûr de vouloir vider votre panier ? \n\nVous perdrez toute votre sélection actuelle" )) {
        localStorage.clear();
        window.location.href = "index.html";
           
     }  
/*
//Envoi l'order et récupère l'Id de commande
document.getElementById("order-button").addEventListener('click', (event) => { 
    if (document.getElementById("contact-form")) {
        event.preventDefault();
        sendOrder(createJsonBody(), getInfosFromClient());
        window.location.href = "order-validation.html";
    }*/

});


function displayOrder (cart) {
    const main = document.querySelector('main .container-order');

    const productsRows = cart.products.map(product => {
        return `
        <tr>
            <td><a role="button" id="suppress-line" class="btn btn-danger text-white"><i class="fas fa-trash-alt"></i></a></td>
            <td>${product.name}</td>
            <td>${product.lenses}</td>
            <td>${toPrice(product.price)}</td>
            <td>1</td>
            <td>${toPrice(product.price)}</td>
        </tr>

        `
    })
    const render = `
    <div class="col-12 ">
    <h2 class="mb-2 mt-4 ml-2 font-italic text-left text-info"><i class="fas fa-shopping-basket mr-3"></i> Finaliser ma commande</h2>
    <table class="table text-center align-middle mt-5">
    
    <thead class="bg-light text-primary">
        <tr>
            <th>Retirer article</th>
            <th class="text-md-center">Produit</th>
            <th>Lentille</th>
            <th class="d-none d-md-table-cell">Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
        </tr>
    </thead>
    <tbody>
        ${productsRows.join('')}
    </tbody>
    </table>
    </div>
    <div class="row">
    <div class="col-12 col-sm-6">
    <a role="button" id="empty-cart" class="btn btn-danger text-white ml-1 ml-lg-5 my-5 font-weight-bold"><i class="fas fa-trash-alt"></i> Vider mon panier</a>
    </div>
    <div class="col-12 col-sm-6">
    <p class="text-right ml-auto bg-light">
    <span class="text-primary font-weight-bold">TOTAL DU PANIER :</span>
    <span id="total-cart" class="font-weight-bold text-primary mr-3 mr-lg-5">${toPrice(cart.price)}</span>
    </p>
    <p class="text-right ml-auto">
    <span class="text-primary">TVA incluse </span>
    <span id="TVA" class="text-primary mr-3 mr-lg-5"></span>
    </p>
    <p class="text-right ml-auto border-bottom">
    <span class="text-primary font-weight-bold">LIVRAISON :</span>
    <span class="font-weight-bold text-primary mr-3 mr-lg-5">INCLUSE DANS LE TARIF</span>
    </p>
    </div>
    </div>
    </div>
        `
        main.innerHTML =`${render}`; 

        }

    
function displayForm() {
    const section = document.querySelector('section .container-form');

    const affichage = `

    
    <form class="row" id="contact-form">
    <div class="col-12 col-md-6 text-primary ml-auto font-weight-bold was-validated">
    <h3 class="my-3 my-md-5 h6">Veuillez renseigner les informations suivantes pour l'envoi et la facturation de votre commande</h3>
    
    <div class="form-group">
    <label for="last-name">Nom :</label>
    <input type="text" pattern="#[^0-9]#[A-Z][A-Za-z\é\è\ê\-\']" class="form-control border-secondary" id="lastName" placeholder="Nom de famille" required>  
    </div>
    
    <div class="form-group">
    <label for="first-name">Prénom :</label>
    <input type="text" pattern="#[^0-9]#[A-Z][A-Za-z\é\è\ê\-\']" class="form-control border-secondary" id="firstName" placeholder="Prénom(s)" required>
    </div>
    
    <div class="form-group">
    <label for="email">Email :</label>
    <input id="email" type="email" pattern="[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$)/;" class="form-control border-secondary"  placeholder="exemple@mail.com" required>
    </div>
    
    <div class="form-group">
    <label for="address">Adresse :</label>
    <input type="text" pattern="[0-9]{1,3}[ ][A-Za-z0-9À-ž' -]{5,}" id="address" class="form-control border-secondary"  placeholder="Ex: 30 avenue de..." required>
    </div>
    
    <div class="form-group">
    <label for="city">Ville :</label>
    <input type="text" pattern="#[^0-9]#[A-Z][A-Za-z\é\è\ê\-\']" class="form-control border-secondary" id="city" placeholder="Ville de résidence" required>
    </div>
    
    <div class="form-group">
    <label for="postal">Code postal :</label>
    <input type="text" pattern="[0-9]{,5}" class="form-control border-secondary" id="postal" placeholder="Ex: 33000" required>
    </div>
    </div>
    
    <div class="col-12 col-md-5 text-primary font-weight-bold ml-auto">
    <h3 class="my-3 my-md-5 h6">Modalités de paiement</h3>
    
    <div class="form-check h5">
    <input type="radio" id="paypal" class="form-check-input" name="radio" value="optionPaypal">
    <label for="paypal" class="form-check-label"> <i class="fab fa-paypal mx-3"></i> PayPal </label>
    </div>
    
    <div class="form-check h5 my-3">
    <input type="radio" id="bank" class="form-check-input" name="radio" value="optionCarte">
    <label for="bank" class="form-check-label"> <i class="fab fa-cc-visa ml-3"></i> <i class="fab fa-cc-mastercard mx-1"></i>  Carte bancaire </label>
    </div>
                
    </div>
    <p id="error" class="h5 text-danger"></p>
    <input type="submit" id="order-button" class="btn btn-success text-white font-weight-bold ml-5 my-5 px-3" value="Valider la commande">
    </form> 
    `;

    section.innerHTML =`<div class="col-12">${affichage}</div>`; 

}

let productArray = JSON.parse(localStorage.getItem("products"));

function createIdArray(productObject) {
    let product_id = productObject.map((product) => product.prodId);
    return product_id;
}

function createJsonBody() {
    let jsonBody = {
        contact: getInfosFromClient(),
        products: createIdArray(productArray),
    };
    return jsonBody;
}

function getInfosFromClient() {
    let clientInfos = {
        firstName: document.getElementById("firstName"),
        lastName: document.getElementById("lastName"),
        address: document.getElementById("address"),
        city: document.getElementById("city"),
        email: document.getElementById("email"),
    };
    return clientInfos;
}

function cartEmpty() {
    if (localStorage.getItem("products") === null) {
        return true;
    } else {
        const cart = JSON.parse(localStorage.getItem("products"));
        return cart == 0;
    }
}

