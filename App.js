import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";


export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" }
  ]);

  const pressHandler = (id) => {
    console.log(id)
    // automatically takes previous state as a
    // paramater
    setPeople((person) => {
      return person.filter((p) => p.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/* flat list only renders first items on screen
      so it is quicker */}
      {/* also adds columns */}
    <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>
         <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>}
      />
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.id} style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  item: {
    margin: 30,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
