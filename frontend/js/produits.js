import {getCameraById} from './fetch'


/*const urlParam = new URLSearchParams(window.location.search);
Let Id = urlParam.get('product_id');*/

/*const productId = urlParam.get('product_id') 
getCameraById(productId).then((product) => { 
    displayProductInPage(product)

})*/

let params = new URLSearchParams (document.location.search);
let productId = params.get("product_id");

getCameraById(productId).then((product) => {
    displayProductInPage(product)

   const $addToCartButton = document.querySelector('.add-to-cart');
    $addToCartButton.addEventListener('click',() => {
    addToCart(product)
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
        <p class="card-text"><strong>35mm 1.4</strong> <button type="button" class="btn btn-success btn-sm mb-2">Choisir</button>  <button type="button" class="btn btn-danger btn-sm mb-2">Retirer</button></p></p>
        <p class="card-text"><strong>50mm 1.6</strong> <button type="button" class="btn btn-success btn-sm mb-2">Choisir</button>  <button type="button" class="btn btn-danger btn-sm mb-2">Retirer</button></p>
        
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
    

    /*const cart = {   
        products: [
        {_id: "5be1ed3f1c9d44000030b061", name: "Caméra Zurss 50S", price:"49 900", lenses: ["35mm 1.4", "50mm 1.6"] },
        {_id: "5be1ef211c9d44000030b062", name:"Caméra Hirsch 400DTS",  price:"309 900", lenses: ["50mm 1.8", "60mm 2.8", "24-60mm 2.8/4.5"] },
        {_id: "5be9bc241c9d440000a730e7", name:"Caméra Franck JS 105",  price:"209 900", lenses: "25mm 4.5" },
        {_id: "5be9c4471c9d440000a730e8", name:"Caméra Kuros TTS",  price:"159 900", lenses: ["50mm 1.7", "35mm 1.4"]},
        {_id: "5be9c4c71c9d440000a730e9", name:"Caméra Katatone",  price:"59 900", lenses: ["50mm 1.4", "35mm 1.8", "28-200mm 2.8/4.5"] },
    ],
    price: "49 900 + 309 900 + 209 900 + 159 900 + 59 900",
}*/


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

/*$AddToCartButton.addEventListener('click', () => {
    myCart.addToCart(product)
})*/

/*
**************************************************

//Ajouter un article dans la page panier
$AddToCartButton.addEventListener("click", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("cart"));


 //Stocker en local, ajout article
 localStorage.setItem("cart", JSON.stringify(data));

 //Demande de redirection de page
 if (confirm("Votre article a été ajouté dans votre panier ! \n\nSouhaitez-vous voir votre panier ?")) {
     window.location.href = "panier.html";
 } else if (confirm("Voulez-vous retourner sur la page des produits ?")) {
     window.location.href = "index.html";
 }
});*/