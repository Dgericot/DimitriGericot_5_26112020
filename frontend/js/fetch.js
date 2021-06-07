export const getCameras = async function () {
    try {
        let response = await fetch('http://localhost:3000/api/cameras')
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }   
   }

 



   export const getCameraById = async function (id) {
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' +id)
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }   
   }   

  

   /*

export const getCameraById = async function () {
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' +id)
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }   
   }   

   getCameraById()



   fetch("http://localhost:3000/api/cameras").then(function (result) {
    displayCameras(result);
}).catch(function (error) {
    console.log(error);
    alert("Une erreur est survenue");
});

function displayCameras(cameras) {  
//éléments parents de index.html
const $carousel = document.querySelector("#carousel");
const $productsList = document.querySelector("#products-list");
const $productCard = document.querySelector ("#product-card");


//Boucle permettant d'insérer les éléments du backend
for (let i = 0; i < cameras.length; i++) {
    const camera = cameras[i];
    console.log(cameras[i]);

    //Stocke en local les éléments du backend
    const saveToLocalStorage = () => {
        let data = localStorage.getItem("product_value_cameras")
        if (!data) {
            data = {
                selectedId: "",
                orders: []
            }
        } else {
            data = JSON.parse(data);
        }
        data.selectedId = camera._id;
        const storageObj = JSON.stringify(data);
        localStorage.setItem("product_value_cameras", storageObj);
        console.log(saveToLocalStorage);
    }
}  */