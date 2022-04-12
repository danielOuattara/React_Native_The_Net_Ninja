import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AddTodoItem({ handleAddTodoItem }) {
  const [newItemTitle, setNewItemTitle] = useState("");

  const HandleReturnTitle = (newItemTitle) => {
    handleAddTodoItem(newItemTitle);
    if (newItemTitle.length > 3) {
      textInput.clear();
    }
    setNewItemTitle("");
  };

  return (
    <View>
      <TextInput
        style={styles.todoInput}
        multiline
        placeholder="Enter a new todo ..."
        onChangeText={(value) => setNewItemTitle(value)}
        ref={(input) => (textInput = input)}
      />
      <TouchableOpacity onPress={() => HandleReturnTitle(newItemTitle)}>
        <Text style={styles.todoItem}>
          {" "}
          ADD TODO
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    borderBottomWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginBottom: 10,
    fontSize: 20,
  },
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
});
