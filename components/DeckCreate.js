import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckCreate extends Component {
  state = {
    deckName: 'name'
  }

  handleTextChange = (input) => {
    this.setState({
      deckName: input
    })
  }

  render() {
    const { deckName } = this.state;

    return (
      <View>
        <Text>Deck Create</Text>
        <TextInput
          value={deckName}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'teal'
  }
})
