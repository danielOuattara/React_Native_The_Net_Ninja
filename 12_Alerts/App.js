import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", completed: false, key: "1" },
    { text: "create an app", completed: false, completed: false, key: "2" },
    { text: "paly football", completed: false, key: "3" },
  ]);

  const handleRemoveItem = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((person) => person.key !== key);
    });
  };

  const handleAddTodoItem = (newTodoItemTitle) => {
    if (newTodoItemTitle.length > 3) {
      setTodos((previousTodos) => {
        return [
          ...previousTodos,
          {
            text: newTodoItemTitle,
            completed: false,
            key: String(previousTodos.length + 1),
          },
        ];
      });

    } else {
      Alert.alert("ERROR", "Minimum of 3 characters long", [
        {
          text: "AGREE",
          onPress: () => console.log("Alert closed !"),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoItem handleAddTodoItem={handleAddTodoItem} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handleRemoveItem={handleRemoveItem} />
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
    backgroundColor: "#fff",
    borderColor: "yellow",
    borderStyle: "solid",
    borderWidth: 2,
  },

  content: {
    // main
    padding: 40,
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  list: {
    marginTop: 20,
  },
});
