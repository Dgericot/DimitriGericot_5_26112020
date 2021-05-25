const products = [
    {_id: "5be1ed3f1c9d44000030b061", name: "Caméra Zurss 50S", description:"Descripton: orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:"Prix: 49 900", imageUrl:"http://localhost:3000/images/vcam_1.jpg"},
    {_id: "5be1ef211c9d44000030b062", name:"Caméra Hirsch 400DTS", description:"Descripton: orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:"Prix: 309 900", imageUrl: "http://localhost:3000/images/vcam_2.jpg"},
    {_id: "5be9bc241c9d440000a730e7", name:"Caméra Franck JS 105", description:"Descripton: orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:"Prix: 209 900", imageUrl: "http://localhost:3000/images/vcam_3.jpg"},
    {_id: "5be9c4471c9d440000a730e8", name:"Caméra Kuros TTS", description:"Descripton: orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:"Prix: 159 900", imageUrl: "http://localhost:3000/images/vcam_4.jpg"},
    {_id: "5be9c4c71c9d440000a730e9", name:"Caméra Katatone", description:"Descripton: orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:"Prix: 59 900", imageUrl: "http://localhost:3000/images/vcam_5.jpg"},
]


/*Affichage du carousel*/
const container = document.querySelector('.container-1');
const result =[]

products.forEach((product) => {
    const render =`
    <div class="row mb-4">
        <div class="col">
            <div class="jumbotron text-lg-center shadow">
                <h2 class="mb-4 font-weight-light decouvrir">Découvrez nos caméras vintage d'exception!</h2>
            
                    <div id="carouselControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner rounded-circle">
                    <div class="carousel-item active">
                    <img src="${product.imageUrl}" class="d-block w-100" alt="Caméra Zurss 50S">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </div>
            </div>
        </div>
      </div>

    `;
    result.push(render);
})
container.innerHTML = result.join('')
;

/*Affichage des cartes*/
const main = document.querySelector('.container-2');
const affichage =[]

products.forEach((product) => {
    const render = `
    <div class="col-12 col-lg-6 text-center">
            <div class="card mb-4 mb-lg-4 shadow">
                <img src="${product.imageUrl}"> 
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">${product.price}</p>
                  <a href="#" class="btn btn-info stretched-link rounded-pill">Obtenir plus d'information</a>
                </div>
              </div>
        </div>
        `;
        affichage.push(render);
})
main.innerHTML = affichage.join(''); 