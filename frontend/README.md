# Oricamera

Projet 5 du parcours de Développeur Web chez Openclassrooms: Construire un site e-commerce

## Installation

```
npm install
```

## Compilation du projet

```
npm run build
```

Pour voir le rendu du projet, lancer un serveur local sur le fichier `dist/index.html`

## Architecture générale

L’application web est composée de 4 pages : </br>
● Une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;</br>
● Une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;</br>
● Une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end. Par exemple, pas de texte dans les champs date ;</br>
● Une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.</br>

## Validation des données

Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
firstName, lastName, address, city et email. Le tableau des produits envoyé au
backend doit être un array de strings product_id. Les types de ces champs et leur
présence doivent être validés avant l’envoi des données au serveur.

