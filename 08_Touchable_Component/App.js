
import React,  {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';



export default function App() {

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

  const handlePress = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter( person => person.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={people}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <Text style={styles.person}>{item.name}</Text>
          </TouchableOpacity>
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
