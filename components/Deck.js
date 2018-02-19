import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function AddCardBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.addCardBtn]}
      onPress={onPress}>
        <Text>Add Card</Text>
    </TouchableOpacity>
  )
}

function StartQuizBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.startQuizBtn]}
      onPress={onPress}>
        <Text style={styles.startQuizBtnText}>Start Quiz</Text>
    </TouchableOpacity>
  )
}

export default class Deck extends Component {
  render() {
    const deck = this.props.navigation.state.params.deck;

    return (
      <View style={styles.deckContainer}>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>
            {deck.title}
          </Text>
          <Text style={styles.cardCount}>
            {deck.cards.length} Cards
          </Text>
        </View>
        <AddCardBtn onPress={() => this.props.navigation.navigate(
          'CardCreate',
          { deck }
        )} />
        <StartQuizBtn onPress={() => this.props.navigation.navigate(
          'Quiz',
          { deck }
        )} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 150
  },
  deckTitle: {
    fontSize: 30,
    marginBottom: 10
  },
  cardCount: {
    color: '#666',
    fontSize: 16
  },
  btn: {
    borderRadius: 5,
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
  },
  addCardBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10
  },
  startQuizBtn: {
    backgroundColor: 'black'
  },
  startQuizBtnText: {
    color: 'white'
  }
})
