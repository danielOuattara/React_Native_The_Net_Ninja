import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({ item, handleRemoveItem }) {
  return (
    <TouchableOpacity onPress={() => handleRemoveItem(item.key)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 12,
    marginTop: 16,
    color: "#606060",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "coral",
    borderRadius: 8,
    fontSize: 18,
    textTransform: "capitalize",
  },
});
