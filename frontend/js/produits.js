import {getCameraById} from './fetch'


let params = new URLSearchParams (document.location.search);
let productId = params.get("product_id");

getCameraById(productId).then((product) => {
    displayProductInPage(product)

   const $addToCartButton = document.querySelector('.add-to-cart');

   const $selectedLenses = document.querySelector('.choseButton');

   const selectedProduct = {
    ...product,
    [product.lenses]:$selectedLenses,

} 
   $selectedLenses.addEventListener('click',(e) => { 
        $selectedProduct.lenses.push(e.target.innerText)
    })

    $addToCartButton.addEventListener('click',() => {
    addToCart(selectedProduct)
    if (confirm("Votre article a été ajouté dans votre panier ! \n\nSouhaitez-vous voir votre panier ?")) {
        window.location.href = "panier.html";
    } else if (confirm("Voulez-vous retourner sur la page des produits ?")) {
        window.location.href = "index.html";
    }
    
    })
})

function displayProductInPage(product) {
    const main = document.querySelector('main .container');
    
        const render = `
        <div class="col-12 col-lg-8 text-center">
        <div class="card mb-4 mb-lg-4 shadow">
        <img src="${product.imageUrl}" class="rounded"> 
        
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price/100} €</p>
        </div>
        </div>
        </div>

        <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-4 shadow text-center">
        <div class="card-body">
        <h5 class="card-title text-center">Choix des options</h5>
        <p class="card-text">Types de lentilles </p>
        <select class="card-text">${product.lenses}</select> <button type="button" class="btn btn-success btn-sm mb-2 choseButton">Choisir</button>  <button type="button" class="btn btn-danger btn-sm mb-2">Retirer</button></p></p>
        <p class="card-text">${product.lenses} <button type="button" class="btn btn-success btn-sm mb-2 choseButton">Choisir</button>  <button type="button" class="btn btn-danger btn-sm mb-2">Retirer</button></p>
        
        <div>
        <button 
            type="button"
            class="btn btn-info stretched-link rounded-pill text-center add-to-cart"
            aria label="Ajouter au panier">
            Ajouter au panier
        </button>
        </div>

        </div>
        </div>
        </div>
    `;
            
    
    main.innerHTML =`<div class="row">${render}</div>`;  

    }
    

function addToCart(product) {
    const storedCart = localStorage.getItem('cart')
    let cart;

    if (!storedCart) {
        cart = {
            products: [product],
            price: product.price,
        }

    } else {
        cart = JSON.parse(storedCart)
        cart.products.push(product)
        cart.price += product.price
    }
localStorage.setItem('cart', JSON.stringify(cart))
}

