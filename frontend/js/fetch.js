const getCameras = async function () {
    try {
        let response = await fetch('http://localhost:3000/api/cameras')
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        } else {
            console.error('Retour du serveur: ', response.status)
        }
    } catch (e) {
        console.log(e)
    }   
   }

   getCameras()




    