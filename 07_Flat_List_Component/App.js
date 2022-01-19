
import React,  {useState} from 'react';
import { StyleSheet, Text, View, /* ScrollView */ FlatList } from 'react-native';

export default function App() {

  // const [ people, setPeople] = useState([
  //   {name: 'Daniel',   key: '1'},
  //   {name: 'Julie',    key: '2'},
  //   {name: 'Gaïa',     key: '3'},
  //   {name: 'Amaya',    key: '4'},
  //   {name: 'Natalia',  key: '5'},
  //   {name: 'Raphaël',  key: '6'},
  //   {name: 'Daria',    key: '7'},
  //   {name: 'Gabriel',  key: '8'},
  //   {name: 'Nathan',   key: '9'},
  //   {name: 'Marouan',  key: '10'},
  // ]);

  const [ people, setPeople] = useState([
    {name: 'Daniel',   id: '1'},
    {name: 'Julie',    id: '2'},
    {name: 'Gaïa',     id: '3'},
    {name: 'Amaya',    id: '4'},
    {name: 'Natalia',  id: '5'},
    {name: 'Raphaël',  id: '6'},
    {name: 'Daria',    id: '7'},
    {name: 'Gabriel',  id: '8'},
    {name: 'Nathan',   id: '9'},
    {name: 'Marouan',  id: '10'},
  ]);


  return (
    // <View style={styles.container}>
    // ---------------------------------------------------------------
      
    // <View style={styles.container}>
    //   <FlatList 
    //     data={people}
    //     renderItem={({ item }) => (
    //       <Text style={styles.person}>{item.name}</Text>
    //     )}
    //   />
    // </View>

    // ---------------------------------------------------------------
      
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        data={people}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />
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
    backgroundColor: "pink",
    fontSize:18,
    marginHorizontal: 10
  }
});
