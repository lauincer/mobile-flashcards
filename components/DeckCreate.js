import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckCreate extends Component {
  render() {
    return (
      <View>
        <Text>Deck Create</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10
  }
})
