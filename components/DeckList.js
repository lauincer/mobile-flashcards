import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const stubDB = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export default class DeckList extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>
          {item.title}
        </Text>
        <Text style={styles.cardCount}>
          {item.questions.length} {item.questions.length === 1 ? 'Card' : 'Cards'}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text>
          Deck List (first card list)
        </Text>
        <FlatList
          data={Object.values(stubDB)}
          renderItem={this.renderItem}
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
  deck: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomWidth: 1
  },
  deckTitle: {
    fontSize: 30,
    marginBottom: 10
  },
  cardCount: {
    color: '#666',
    fontSize: 16
  }
})
