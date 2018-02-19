import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

function SubmitButton ({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPress}>
        <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  )
}

export default class DeckCreate extends Component {
  state = {
    deckName: ''
  }

  handleTextChange = (input) => {
    this.setState({
      deckName: input
    })
  }

  render() {
    const { deckName } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={deckName}
          placeholder="name"
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
        <SubmitButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: 'center',
    width: 300
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: 100
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 40
  }
})
