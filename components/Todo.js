import React from "react";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";

export default function Todo({ item, pressHandler }) {
  return (
    <TouchableOpacity style={styles.list} onPress={()=> pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  list: {
    marginTop: 40
  },
  item:{
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10

  }

});
