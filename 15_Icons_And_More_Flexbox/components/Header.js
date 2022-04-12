import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 6,
    backgroundColor: "coral",
    borderColor: "magenta",
    borderStyle: "solid",
    borderWidth: 3,
    marginBottom: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 20,
  },

  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
