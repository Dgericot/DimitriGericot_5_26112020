//Récupération des produits via le localStorage
$storedCart = JSON.parse(localStorage.getItem("cart"));


//Elément parent de panier.html
const $order = document.querySelector('#order');


const $container1 = document.createElement("div");
$container1.className = "container";
$container1.setAttribute("id", "container1");
$command.appendChild($container1);

const $title = document.createElement("h1");
$title.innerText = "\nLe détail de votre panier.\n\n";
$container1.appendChild($title);

