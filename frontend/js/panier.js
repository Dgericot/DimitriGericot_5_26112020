import { toPrice } from './helpers'
import { sendOrder } from './fetch'

//Récupération des produits via le localStorage
const storedCart = JSON.parse(localStorage.getItem("cart"));


displayOrder(storedCart);

//Affichage des produits présents dans le localStorage au sein du tableau
function displayOrder(cart) {
    const main = document.querySelector('main .container-order');

    //si pas de cart, n'exécute pas la suite de la fonction   
    if (!cart || cart.products.length === 0) {
        main.innerHTML = `<div class= "col-12 text-center"> <h2 class ="text-cart-empty mt-5 text-danger"> Votre panier est vide, veuillez sélectionner un produit afin de poursuivre</h2>
        <img src="/empty-cart.svg" class=" w-50 mt-4 ml-2" alt="Votre panier est vide"></div>`
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
    <div class="col-12">
    <h2 class="mb-2 mt-4 font-italic text-left bg-light text-primary"><i class="fas fa-shopping-basket mr-3 text-info"></i> Finaliser ma commande</h2>
    <table class="table text-center align-middle mt-5">
    
    <thead class="bg-light text-primary">
        <tr>
            <th>Retirer article</th>
            <th class="text-md-center">Produit</th>
            <th>Lentille</th>
            <th>Prix unitaire</th>
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

//Retirer un article du panier via son id
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

//Vider le panier totalement et retour vers la page d'accueil
const emptyCartButton = document.getElementById("empty-cart");
if (emptyCartButton) {
    emptyCartButton.addEventListener('click', () => {
        if (confirm("Êtes-vous sûr de vouloir vider votre panier ? \n\nVous perdrez toute votre sélection actuelle")) {
            localStorage.clear();
            window.location.href = "index.html";
        }
    });
}

//Affichage du formulaire pour finalisation de commande
function displayForm() {
    const section = document.querySelector('section .container-form');

    const affichage = `

    <form class="col-8" name="contact-form" id="contact-form">
    <div class="col-12 text-primary ml-auto font-weight-bold was-validated">
    <h3 class="my-3 my-md-5 h6">Veuillez renseigner les informations suivantes pour l'envoi et la facturation de votre commande</h3>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="last-name">Nom : </label> <input type="text" class="form-control border-secondary"  name="lastName" id="lastName" placeholder="Nom de famille" required></div> 
    </div>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="first-name">Prénom :</label> <input type="text"  class="form-control border-secondary" name="firstName" id="firstName" placeholder="Prénom(s)" required></div>
    </div>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="email">Email :</label> <input type="text" class="form-control border-secondary"   name="email" id="email"  placeholder="exemple@mail.com" required></div>
    </div>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="address">Adresse :</label> <input type="text" class="form-control border-secondary"  name="address" id="address"   placeholder="Ex: 30 avenue de..." required></div>
    </div>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="city">Ville :</label> <input type="text"  class="form-control border-secondary" name="city" id="city" placeholder="Ville de résidence" required></div>
    </div>
    
    <div class="form-group">
    
    <div class="formData" data-error="Ce champ est incomplet" 
    <label for="postal">Code postal :</label> <input type="text"  class="form-control border-secondary" id="postal" placeholder="Ex: 33000" required></div>
    </div>
    </div>
    
    
    <p id="error" class="h5 text-danger"></p>
    <input type="submit" id="order-button" class="bouton-order btn btn-success text-white font-weight-bold ml-2 my-5 px-3" value="Valider la commande">
    </form> 
    `;

    section.innerHTML = `<div class="col-12">${affichage}</div>`;
}

//Regex permettant de contrôler la saisie de l'utilisateur
var regexLastNameFirstNameAndCity = /^[A-Za-z\é\è\ê\-\']+$/;
var regexEmail = /(^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$)/;
var regexAddress = /^[A-Za-z0-9\é\è\ê\s]{5,50}$/;
var regexPostal = /[0-9]{4,5}/;

//Permettant de vérifier que chacun des champs du formulaire est conforme aux regex
function isValid(element, regex) {
    document.forms["contact-form"][element].parentElement.setAttribute('data-show-error', 'true');

    if (regex.test(document.forms["contact-form"][element].value) == true) {
        console.log(element + 'est valide')
        document.getElementById("order-button").removeAttribute('disabled');
        document.forms["contact-form"][element].parentElement.removeAttribute('data-error');
        document.forms["contact-form"][element].parentElement.removeAttribute('data-show-error');


    } else {
        console.log(element + 'est invalide')
        document.getElementById("order-button").setAttribute('disabled', 'disabled');
        document.forms["contact-form"][element].parentElement.setAttribute('data-error', 'La saisie est incorrect');
    };
};

const form = document.getElementById("contact-form");

if (form) {

    //Vérification des champs du formulaire par le biais de la fonction isValid
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
        //Soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Crée un clone de storedCart
        const cart = {...storedCart };

        //Order qui sera envoyé au serveur pour obtention de l'id de commande
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
        cart.products.forEach(product => {
            order.products.push(product._id)
        });

        //Envoi l'order à l'API et conserve l'id de commande et le prix total du panier dans le localStorage
        sendOrder(order)
            .then((data) => {
                localStorage.setItem("orderId", JSON.stringify(data.orderId));
                localStorage.setItem("cartTotalPrice", JSON.parse(cart.price));
                window.location.href = "order-validation.html";
            })
            .catch((error) => {
                console.log(error.message);
            });

    })
}