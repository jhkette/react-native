import React from "react";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
export default function Todo({ item, pressHandler }) {
  return (
    <TouchableOpacity  onPress={()=> pressHandler(item.key)}>
      <View style={styles.list}>
      <MaterialIcons name='delete' size={18} color='#333'/>
      <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  list: {
  
    flexDirection:'row',
    alignContent: 'flex-start',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },
  item:{
     
   marginLeft: 10
  }

});
