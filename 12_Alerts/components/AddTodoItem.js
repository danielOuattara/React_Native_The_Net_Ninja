import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTodoItem({ handleAddTodoItem }) {
  const [newItemTitle, setNewItemTitle] = useState("");

  const sendNewTodoItem = (newItemTitle) => {
    handleAddTodoItem(newItemTitle);
    setNewItemTitle("");
  };

  return (
    <View>
      <TextInput
        style={styles.todoInput}
        multiline
        placeholder="Enter a new todo ..."
        onChangeText={(value) => setNewItemTitle(value)}
        value={newItemTitle}
      />
      <TouchableOpacity onPress={() => sendNewTodoItem(newItemTitle)}>
        <Text style={styles.todoItem}> ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "coral",
  },

  todoInput: {
    borderBottomWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginBottom: 10,
    fontSize: 20,
  },
});
