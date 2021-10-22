import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [ name, setName] = useState("Daniel");
  const [ age, setAge] = useState( 36);

  const clickHandlerOne = () => {
    setName("Daniel Ouattara");
  }
  const clickHandlerTwo = () => {
    setPerson({
      name: "Gaïa",
      age: 4
    })
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name : </Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder="example:  John Doe"
        onChangeText= {(val) => setName(val)}
      />

      <Text>Enter your age : </Text>
      <TextInput 
      keyboardType="numeric"
        style={styles.input} 
        placeholder="example:  77"
        onChangeText= {(val) => setAge(val)}
      />

      <Text>name: {name}, age: {age}</Text>
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
  buttonContainer: {
    marginTop: 5,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});
