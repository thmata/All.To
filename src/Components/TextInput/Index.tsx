import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function ComponentTextInput({placeholder}){
    return(
        <TextInput
        style={styles.input}
        placeholder={placeholder}
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
      borderRadius: 5
        },
  });