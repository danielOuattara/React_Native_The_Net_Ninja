import { StatusBar } from 'expo-status-bar';   // ??
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello React Native on Android Studio</Text>
      <Text style={{color:"blue", backgroundColor:'#aaa', padding:10, margin:20}}>I am  glad to learn React Native</Text>
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
});
