import { getCameraById } from "./fetch";
import { toPrice } from './helpers'

let params = new URLSearchParams(document.location.search);
let productId = params.get("product_id");

getCameraById(productId).then((product) => {
    displayProductInPage(product)

    //Bouton d'ajout au panier
    const $addToCartButton = document.querySelector(".add-to-cart");

    //Volet déroulant pour sélection de lentille
    const $selectedLenses = document.querySelector(".lenses-options");

    //Afin d'éviter que la première valeur du volet déroulant de selection de lentilles soit considérer comme null
    const selectedProduct = {
        ...product,
        lenses: product.lenses[0],
    }

    //Pour prendre en compte le choix de lentille
    $selectedLenses.addEventListener("change", (e) => {
        selectedProduct.lenses = e.target.value
    })

    //Ajoute le produit au panier et redirige vers la page panier ou retour vers la page produits
    $addToCartButton.addEventListener("click", () => {
        addToCart(selectedProduct);
        if (
            confirm(
                "Votre article a été ajouté dans votre panier ! \n\nSouhaitez-vous voir votre panier ?"
            )
        ) {
            window.location.href = "panier.html";
        } else if (confirm("Voulez-vous retourner sur la page des produits ?")) {
            window.location.href = "index.html";
        }
    });
});

//Affiche la carte du produit sélectionné avec le choix de lentille et le bouton d'ajout au panier
function displayProductInPage(product) {
    const main = document.querySelector("main .container");

    const productLenses = product.lenses.map((lens) => {
        return `<option value="${lens}">${lens}</option>`
    })

    const render = `
        <div class="col-12 col-lg-8 text-center">
        <div class="card mb-4 mb-lg-4 shadow">
        <img src="${product.imageUrl}" class="rounded"> 
        
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${toPrice(product.price)}</p>
        </div>
        </div>
        </div>

        <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-4 shadow text-center">
        <div class="card-body">
        <h5 class="card-title text-center">Choix des options</h5>
        <p class="card-text">Veuillez selectionner votre lentille </p>
        <select class="card-text lenses-options">
          ${productLenses.join('')}
          </select>
        <div>

        <button 
            type="button"
            class="btn mt-4 btn-info stretched-link rounded-pill text-center add-to-cart"
            aria-label="Ajouter au panier">
            Ajouter au panier
        </button>
        </div>

        </div>
        </div>
        </div>
    `;

    main.innerHTML = `<div class="row">${render}</div>`;
}

//Ajoute le ou les produits au localStorage dans l'objet cart - empêche d'ajouter au panier 2 fois le même produit
function addToCart(product) {
    const storedCart = localStorage.getItem("cart");
    let cart;

    if (!storedCart) {
        cart = {
            products: [product],
            price: product.price,
        };
    } else {
        cart = JSON.parse(storedCart);
        if (!cart.products.find(item => item._id === product._id)) {
            cart.products.push(product);
            cart.price += product.price;
        }

    }
    localStorage.setItem("cart", JSON.stringify(cart));
}