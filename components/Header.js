import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todos list</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        height: 120,
        paddingTop: 38,
        backgroundColor: 'coral',
        padding: 20
    },
    title:{
        fontSize: 40,
        fontWeight:'900',
        textAlign: 'center'
    }

})