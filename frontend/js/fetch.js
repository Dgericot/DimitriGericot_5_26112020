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

  

   