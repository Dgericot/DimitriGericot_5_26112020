export const getCameras = async function() {
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


export const getCameraById = async function(id) {
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' + id)
        if (response.ok) {
            return await response.json()
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

export const sendOrder = async function(order) {

    fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Problème survenu lors de l'envoi des données");
        })
        .catch((error) => {
            console.log(error.message);
        });
}