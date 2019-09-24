# React Native installation de test

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
