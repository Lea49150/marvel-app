# Marvel App

## Installation

git clone url-du-projet
cd marvel-app

npm install

## Lancement

npm run dev

L'application est accessible à l'adresse affichée dans la console.


## Rechargement à chaud

L'application supporte le rechargement à chaud, ce qui signifie que les modifications du code source sont prises en compte sans avoir à recharger la page.


## Point d'entrée

Le point d'entrée de l'application est le fichier `index.html` situé à la racine du projet. C'est ce fichier qui est chargé dans le navigateur et qui charge ensuite le fichier `main.jsx` qui est le point d'entrée de l'application React.

## test unitaires

Installez Jest et React Testing Library en utilisant npm :

npm install --save-dev jest @testing-library/react @testing-library/jest-dom


Pour exécuter les tests, utilisez la commande suivante dans votre terminal :

npm test

npm run test:coverage