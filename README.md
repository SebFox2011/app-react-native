# React Native installation de test

Documentation:
https://facebook.github.io/react-native/docs/getting-started

## Installation

expo init app-react-native

Pour utiliser les fichier .env, installer la commande suivante:
npm install --save-dev babel-preset-expo babel-plugin-inline-dotenv
puis créer le fichier .babelrc à la racine du projet et y mettre ces lignes de code

{
  "presets": ["babel-preset-expo"],
  "plugins": ["inline-dotenv"]
}

puis créer le fichier .env et ses variables

npm install expo-constant
permet d'utiliser statusBarHeight pour démarrer l'affichage en dessous de la barre des taches.

## Creer des vues
Creer un dossier screen dans lequel seront posés les fiocheirs d'écran