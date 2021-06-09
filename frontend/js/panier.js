//Récupération des produits via le localStorage
/*const $storedCart = JSON.parse(localStorage.getItem("cart"));


storedCart(cart).then ((product) => {
    displayOrder(product);
    displayForm(order);

} )

function displayOrder (product) {
    const main = document.querySelector('main .container');

    const render = `
    <div class="col">
    <h2 class="mb-2 mt-4 font-weight-normal text-lg-right"><i class="fas fa-shopping-basket mr-3"></i> Finaliser ma commande</h2>
    <table class="table text-center align-middle mt-5">
    
    <thead class="bg-light text-primary">
     <tr>
     <th class="text-md-right">Produit${product.name}</th>
    <th class="d-none d-md-table-cell"></th>
    <th class="d-none d-md-table-cell">Prix unitaire</th>
    <th>Quantité</th>
    <th>Prix total</th>
    </tr>
    </thead>
    </table>
    </div>
    
    <div class="col-12 col-sm-6">
    <a role="button" id="empty-cart" class="btn btn-danger text-white ml-1 ml-lg-5 my-3 font-weight-bold"><i class="fas fa-trash-alt"></i> Vider mon panier</a>
    </div>
    <div class="col-12 col-sm-6">
    <p class="text-right ml-auto bg-light">
    <span class="text-primary font-weight-bold">TOTAL DU PANIER :</span>
    <span id="total-cart" class="font-weight-bold text-primary mr-3 mr-lg-5"></span>
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
        `
        main.innerHTML =`<div class="row">${render}</div>`; 

    
function displayForm(order) {
    const section = document.querySelector('section .container');

    const affichage = `

    <div class="container mt-5">
    <div class="col">
    <form class="row" id="contact-form">
    <div class="col-12 col-md-6 text-primary font-weight-bold was-validated">
    <h3 class="my-3 my-md-5 h6">Veuillez renseigner les informations suivantes</h3>
    
    <div class="form-group">
    <label for="last-name">Nom :</label>
    <input type="text" pattern="#[^0-9]#[A-Z][A-Za-z\é\è\ê\-\']" class="form-control border-secondary" id="last-name" placeholder="Nom de famille" required>  
    </div>
    
    <div class="form-group">
    <label for="first-name">Prénom :</label>
    <input type="text" pattern="#[^0-9]#[A-Z][A-Za-z\é\è\ê\-\']" class="form-control border-secondary" id="first-name" placeholder="Prénom(s)" required>
    </div>
    
    <div class="form-group">
    <label for="mail">Email :</label>
    <input id="mail" type="email" pattern="[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$)/;" class="form-control border-secondary"  placeholder="exemple@mail.com" required>
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
    <input type="submit" id="order-button" class="btn btn-success text-white font-weight-bold ml-3 my-5 px-3" value="Valider la commande">
    </form> 
    </div>
    </div>
    
    `;

    section.innerHTML ='${affichage}'; 


}



//Elément parent de panier.html
//const $order = document.querySelector('#order');

/*document.getElementById("empty-cart").addEventListener('click', function() {
    if( confirm( "Êtes-vous sûr de vouloir vider votre panier ? Vous perdrez toute votre sélection actuelle" )) {
        localStorage.clear();
        location.reload();
    }
})*/