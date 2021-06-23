import { toPrice } from './helpers'
//import { sendOrder } from './fetch'

//Récupération des produits via le localStorage
const storedCart = JSON.parse(localStorage.getItem("cart"));


displayOrder(storedCart);


function displayOrder(cart) {
    const main = document.querySelector('main .container-order');

    //si pas de cart, n'exécute pas la suite    
    if (!cart) {
        main.innerHTML = `<h2 class ="text-center mt-4 text-danger"> Votre panier est vide, veuillez selectionner un produit afin de poursuivre</h2><img src="./img/empty-cart.svg" class="d-block w-50 mt-4" alt="Votre panier est vide">`
        return;
    }

    const productsRows = cart.products.map(product => {
        return `
        <tr>
            <td><a role="button" data-product-id= "${product._id}" class="suppress-line btn btn-danger text-white"><i class="fas fa-trash-alt"></i></a></td>
            <td>${product.name}</td>
            <td>${product.lenses}</td>
            <td>${toPrice(product.price)}</td>
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
    main.innerHTML = `${render}`;
    displayForm();
}

//Retirer un article du panier
Array.from(document.querySelectorAll('.suppress-line')).forEach(button => {
    const productId = button.getAttribute('data-product-id')
    const storedCart = localStorage.getItem("cart");
    const cart = JSON.parse(storedCart)

    button.addEventListener('click', () => {
        if (confirm("Êtes-vous sûr de vouloir retirer cet article de votre panier ?")) {
            const productToRemove = cart.products.find(item => item._id === productId);
            cart.price = cart.price - productToRemove.price;
            cart.products = cart.products.filter((item) => item._id !== productId)
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = "panier.html";
        }
    })
})

//Vider le panier totalement
document.getElementById("empty-cart").addEventListener('click', () => {
    if (confirm("Êtes-vous sûr de vouloir vider votre panier ? \n\nVous perdrez toute votre sélection actuelle")) {
        localStorage.clear();
        window.location.href = "index.html";
    }
});



function displayForm() {
    const section = document.querySelector('section .container-form');

    const affichage = `

    <form class="row" form-method="post" name="contact-form" id="contact-form">
    <div class="col-12 col-md-6 text-primary ml-auto font-weight-bold was-validated">
    <h3 class="my-3 my-md-5 h6">Veuillez renseigner les informations suivantes pour l'envoi et la facturation de votre commande</h3>
    
    <div class="form-group">
    <label for="last-name">Nom : </label>
    <input type="text" class="form-control border-secondary" name="lastName" id="lastName" placeholder="Nom de famille" required>  
    </div>
    
    <div class="form-group">
    <label for="first-name">Prénom :</label>
    <input type="text"  class="form-control border-secondary" name="firstName" id="firstName" placeholder="Prénom(s)" required>
    </div>
    
    <div class="form-group">
    <label for="email">Email :</label>
    <input type="text" class="form-control border-secondary"   name="email" id="email"  placeholder="exemple@mail.com" required>
    </div>
    
    <div class="form-group">
    <label for="address">Adresse :</label>
    <input type="text" class="form-control border-secondary"  name="address" id="address"   placeholder="Ex: 30 avenue de..." required>
    </div>
    
    <div class="form-group">
    <label for="city">Ville :</label>
    <input type="text"  class="form-control border-secondary" name="city" id="city" placeholder="Ville de résidence" required>
    </div>
    
    <div class="form-group">
    <label for="postal">Code postal :</label>
    <input type="text"  class="form-control border-secondary" id="postal" placeholder="Ex: 33000" required>
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

    section.innerHTML = `<div class="col-12">${affichage}</div>`;
}

//contrôle du formulaire
document.getElementById("order-button").addEventListener('submit', function(event) {
    //const storedCart = JSON.parse(localStorage.getItem("cart"));
    const cart = JSON.parse(storedCart)
    var regexLastNameFirstNameAndCity = /^[A-Z][A-Za-z\é\è\ê\-\']+$/;
    var regexEmail = /(^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$)/;
    var regexAddress = /[0-9]{1,3}[ ][A-Za-z0-9À-ž' -]{5,}/;
    var regexPostal = /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/;
    var regex_ok = true;

    function isValid(element, regex) {
        if (regex.test(document.forms["contact-form"][element].value) == true) {
            document.getElementById("order-button").disabled = false;
            document.getElementById("error").innerHTML = "";
        } else {
            document.getElementById("order-button").disabled = true;
            document.getElementById("error").innerHTML = `<div class="col-12">"Les champs ne sont pas complétés"</div>`;
        };
    };
    //Vérification des champs du formulaire
    document.getElementById("lastName").addEventListener('input', function() {
        isValid("lastName", regexLastNameFirstNameAndCity);
    })
    document.getElementById("firstName").addEventListener('input', function() {
        isValid("firstName", regexLastNameFirstNameAndCity);
    })
    document.getElementById("email").addEventListener('input', function() {
        isValid("email", regexEmail);
    })
    document.getElementById("address").addEventListener('input', function() {
        isValid("address", regexAddress);
    })
    document.getElementById("city").addEventListener('input', function() {
        isValid("city", regexLastNameFirstNameAndCity);
    })
    document.getElementById("postal").addEventListener('input', function() {
        isValid("postal", regexPostal);
    })

    if (regex_ok) {

        event.preventDefault();

        const order = {
            contact: {
                firstName: document.forms['contact-form']['firstName'].value,
                lastName: document.forms['contact-form']['lastName'].value,
                address: document.forms['contact-form']['address'].value,
                city: document.forms['contact-form']['city'].value,
                email: document.forms['contact-form']['email'].value,
            },
            products: []
        }
        cart.products.forEach(element => {
            order.products.push(element.product._id)
        });

        fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Problème survenu lors de l'envoi des données");
            })
            .then((data) => {
                const main = document.querySelector('order-valide .container');
                window.location.href = "order-validation.html";
                main.innerHTML = `<p class="text-center id-confirmation">Votre numéro de commande:${data}</p>`
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

})