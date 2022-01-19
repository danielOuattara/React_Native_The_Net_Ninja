import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [ people, setPeople] = useState([
    {name: 'Daniel',   key: '1'},
    {name: 'Julie',    key: '2'},
    {name: 'Gaïa',     key: '3'},
    {name: 'Amaya',    key: '4'},
    {name: 'Natalia',  key: '5'},
    {name: 'Raphaël',  key: '6'},
    {name: 'Daria',    key: '7'},
    {name: 'Gabriel',  key: '8'}, 
    {name: 'Nathan',   key: '9'},
    {name: 'Marouan',  key: '10'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((person) =>(
              <View key={person.key}>
                  <Text style={styles.person}>{person.name}</Text>
              </View>
            )
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  person: {
    marginTop:24,
    padding: 30,
    backgroundColor: "orange",
    fontSize:24
  }
});

