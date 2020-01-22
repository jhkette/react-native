import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from "react-native";

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

  return (
    <View style={styles.container}>
      {/* flat list only renders first items on screen
      so it is quicker */}
    <FlatList
        keyExtractor={people.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
