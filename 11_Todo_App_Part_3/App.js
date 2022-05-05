import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
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
      return prevTodos.filter((item) => item.key !== key);
    });
  };

  const handleAddTodoItem = (newTodoItem) => {
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        {
          text: newTodoItem,
          completed: false,
          key: Math.random().toString(),
        },
      ];
    });
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
