import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from "expo-constants/src/Constants";
import Home from "./screens/Home"

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb664',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Constants.statusBarHeight// Permet de définir l'écran de l'application
    // en dessous de la barre des taches pour android et Ios
  },
  text:{
    color:'red'
  }
});
