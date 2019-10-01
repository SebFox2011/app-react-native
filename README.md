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
Creer un dossier screen dans lequel seront posés les fichiers d'écran

## Navigation
npm install react-navigation et npm install react-navigation-drawer
npm install react-native-gesture-handler
npm install react-native-reanimated
npm install react-native-screens
expo install react-native-gesture-handler react-native-reanimated

Créer un dossier navigation et un fichier AppNavigator
pour un tabNavigator

Ajouter de la configuration menu comme indiquée dans navigation.png :
npm install react-navigation-stack

## Modifier le header bar
https://reactnavigation.org/docs/en/headers.html


## linear gradient
https://docs.expo.io/versions/latest/sdk/linear-gradient/

## sensors
https://docs.expo.io/versions/latest/sdk/accelerometer/
npm install expo-sensors // capteurs accelerometer et gyroscope

https://docs.expo.io/versions/v32.0.0/sdk/location/
expo install expo-location // gps
expo install expo-permissions // permission d'accéder au gps

## Navigation tab
npm install react-navigation-tabs

## Image picker pour gérer les images ou la caméra
https://docs.expo.io/versions/v35.0.0/sdk/imagepicker/
expo install expo-image-picker

## pour créer un fichier apk redistribuable
expo build:android -t apk
cette commande lance le process de build sur le server distant de expo (attention pour compiler et télécharger prévoir 3h !!)
une fois télécharger, installer via le packager android. Attention le play store ne reconnait l'application, faire installer
quand meme.

utiliser la clé "clé apk android" pour signer l'application

## Installation de NativeBase (bootstrap) pour react native
npm install native-base --save
import { ...} from 'native-base';
