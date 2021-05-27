//Récupération du stockage local
const camera_id = JSON.parse(localStorage.getItem("product_value_cameras")).selectedId;

//Récupération de l'API
fetch("http://localhost:3000/api/cameras/" + camera_id).then(function (result) {
    displayProductDetails(result);
}).catch(function (error) {
    console.log(error);
    alert("Une erreur est survenue");
});

//Affichage dynamique de la page
function displayProductDetails(productDetails) {

    //Récupération de l'élément parent de produits.html
    const $main = document.querySelector("main"); //Corps de la page : main


}