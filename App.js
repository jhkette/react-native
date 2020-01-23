import React, { useState } from "react";
import { StyleSheet, Keyboard,  View, Alert, FlatList, TouchableWithoutFeedback } from "react-native";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddToDo from "./components/addToDo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevtodos => {
      return prevtodos.filter(todo => todo.key != key);
    });
  };

  const textUpdate = text => {
    if (text.length > 2) {
      setTodos(prevtodos => {
        return [
          { text: text, key: (1+ (prevtodos.length + 1)).toString() },
          ...prevtodos
        ];
      });
    } else {
      Alert.alert("OOPS", "Text must be longer than this", [
        { text: "Ok", onPress: () => console.log("ok") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()}}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo textUpdate={textUpdate} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 40,
    flex: 1,
  }
});
