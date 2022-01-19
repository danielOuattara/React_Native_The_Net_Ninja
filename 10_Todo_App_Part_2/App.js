
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  Header from './components/Header'
import TodoItem from './components/TodoItem';

export default function App() {

  const [ todos, setTodos ] = useState([
    {text: 'buy coffee', completed: false, key: '1'},
    {text: 'create an app', completed: false, completed: false, key: '2'},
    {text: 'paly football', completed: false, key: '3'},
  ]);

  const handleRemoveItem = (key) => {
    setTodos((prevPeople) => {
      return prevPeople.filter(person => person.key !== key);
    });
  }

  return (
    <View style={styles.container}> 
       < Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem 
                item={item}
                handleRemoveItem={handleRemoveItem}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // body
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 3
  },

  content: {
    // main
    padding: 40,
    borderColor: 'green',
    borderStyle:'solid',
    borderWidth: 2,
    marginBottom: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  list: {
    marginTop: 20,
  },
});
