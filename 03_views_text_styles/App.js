import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.header}>
         <Text style={{fontSize: 30}}>Hello React Native !</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding:30,
  },
  body: {
    backgroundColor: "yellow",
    padding: 20

  }
});
