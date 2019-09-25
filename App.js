import React from 'react';
import { StyleSheet, Text, View, Platform,KeyboardAvoidingView } from 'react-native';
import Constants from "expo-constants/src/Constants";
import Home from "./screens/Home"
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
      //KeyboardAvoindinfView, pousse le contenu vers le haut si le clavier s'affiche.
    <KeyboardAvoidingView style={styles.container} behavior="padding" >
      <AppNavigator/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb664',
    // alignItems: 'center', // A enlever pour afficher les menus
    justifyContent: 'center',
    marginTop:Constants.statusBarHeight// Permet de définir l'écran de l'application
    // en dessous de la barre des taches pour android et Ios
  },
  text:{
    color:'red'
  }
});
