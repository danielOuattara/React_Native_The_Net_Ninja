import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";
// import AddTodoItem from "./components/AddTodoItem";
import SandBoxFlexBox from './components/FlexboxSandBox';

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
      Alert.alert("ERROR", "Minimum 3 characters long", [
        { text: "AGREE", onPress: () => console.log("Alert closed !") },
      ]);
    }
  };

  /* Note: Right now ToucheableWhithoutFeedBack allows to listen to touch anywhere 
         on the phone screen except Form & Button zones */
  return (
    <SandBoxFlexBox />
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     console.log("Phone Screen Touched !");
    //     Keyboard.dismiss();
    //   }}
    // >
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
    //       <AddTodoItem handleAddTodoItem={handleAddTodoItem} />
    //       <View style={styles.list}>
    //         <FlatList
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} handleRemoveItem={handleRemoveItem} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
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
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
