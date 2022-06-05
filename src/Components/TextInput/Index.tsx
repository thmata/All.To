import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default function ComponentTextInput({placeholder}: any){
    return(
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#969CB2"
        />
    )

}

const styles = StyleSheet.create({
    input: {
      height: 62,
      backgroundColor: '#fff',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });