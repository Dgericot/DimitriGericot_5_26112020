import {getCameraById} from './fetch'


const productId = URL.getParam('product_id')
getCameraById(productId).then((product) => {
    displayProductInPage(product);

})

function displayProductInPage(product) {
    const main = document.querySelector('.container');
    const result =[]

    products.forEach((product) => {
        const render = `
        <div class="col-12 col-lg-6 text-center">
        <div class="card mb-4 mb-lg-4 shadow">
        <img src="${product.imageUrl}" class="rounded"> 
        
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price/100} €</p>
        <a href="/produits.html?id=${product._id}" class="btn btn-info stretched-link rounded-pill">Obtenir plus d'information</a>
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
        <a href="#" class="btn btn-info stretched-link rounded-pill text-center">Ajouter au panier</a>
        </div>
        </div>
        </div>
        `;
                    result.push(render);
    })
    main.innerHTML=`<div class="row mt-4>${result.join('')}</div>`;

    }

