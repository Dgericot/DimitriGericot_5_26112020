import { getCameras } from './fetch'
import { toPrice } from './helpers'

getCameras().then((products) => {
    displayCarousel(products);
    displayProductsCards(products);

})

function displayCarousel(products) {
    const container = document.querySelector('.container-1');
    const result = []

    products.forEach((product, index) => {
        const render = `
    <div class="carousel-item ${index == 0 ? 'active' : ''}">
        <div style="width: 100%; height: 600px">
            <img src="${product.imageUrl}" style="object-fit:cover; width:100%; height: 100%;" class="d-block w-100" alt="Caméras vintage">
        </div>
    </div>
    `;
        result.push(render);
    });
    container.innerHTML =
        `<div class="row mb-4">
    <div class="col">
    <div class="jumbotron text-lg-center shadow">
    <h2 class="mb-4 decouvrir">Découvrez nos caméras vintage d'exception!</h2>
            
    <div id="carouselControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner rounded-circle">
    ${result.join('')}
    </div>
    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>          
    </div>
    </div>
    </div>
    </div>
    `
}

function displayProductsCards(products) {
    const main = document.querySelector('.container-2');
    const affichage = []

    products.forEach((product) => {
        const render = `
        <div class="col-12 col-lg-6 text-center">
        <div class="card mb-4 mb-lg-4 shadow">
        <img src="${product.imageUrl}" class="rounded"> 
        
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${toPrice(product.price)}</p>
        <a href="/produits.html?product_id=${product._id}" class="btn btn-info stretched-link rounded-pill">Obtenir plus d'information</a>
        </div>
        </div>
        </div>
    `;
        affichage.push(render);
    })
    main.innerHTML = `<div class="row">${affichage.join('')}</div>`;
}