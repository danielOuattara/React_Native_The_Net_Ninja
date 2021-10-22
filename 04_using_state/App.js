import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [ name, setName] = useState("Daniel");
  const [ person, setPerson] = useState( {
    name:"Julie", 
    age: 36,
  });

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
      <Text style={{fontSize: 30, margin: 40}}>Using State!</Text>
      {/* <StatusBar style="auto" /> */}
      <Text>My name is {name}</Text>
      <View style= {styles.buttonContainer}>
        <Button title="update state" onPress= {clickHandlerOne}/>
      </View>
      <Text>My name is {person.name} I am {person.age} y.o</Text>
      <View style= {styles.buttonContainer}>
        <Button title="update state" onPress= {clickHandlerTwo}/>
      </View>
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
  }
});
