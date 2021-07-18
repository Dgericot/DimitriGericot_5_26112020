const apiUrl = 'http://localhost:3000/api/cameras'

//Récupère les infos des produits pour affichage du carousel et des cartes sur index.html
export const getCameras = async function() {
    try {
        let response = await fetch(apiUrl)
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

//Récupère l'Id du produit sélectionné pour affichage sur la page produits.html
export const getCameraById = async function(id) {
    try {
        let response = await fetch(apiUrl + '/' + id)
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

//Envoi l'order avec les infos de l'utilisateur et le tableau de produits afin de récupérer l'id de commande
export const sendOrder = async function(order) {
    try {
        const response = await fetch(apiUrl + "/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        })
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
            throw new Error("Problème survenu lors de l'envoi des données");
        }
    } catch (e) {
        console.log(e.message)
    }
}