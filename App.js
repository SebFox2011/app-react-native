import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World !</Text>
      <Text>{process.env.API_URL}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb664',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
