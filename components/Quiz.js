import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
// import {
//   clearLocalNotification,
//   setLocalNotification
// } from './utils/helpers'

export default class Quiz extends Component {
  // ToDo: Clear local notification
  // clearLocalNotification()
  //   .then(setLocalNotification)

  state = {
    cards: [],
    activeCardIndex: 0,
    score: 0,
    questionsCompleted: 0
  }

  componentDidMount() {
    const cards = this.props.navigation.state.params.deck.cards;

    this.setState({
      cards: cards,
      activeCardIndex: 0,
      score: 0,
      questionsCompleted: 0
    })
  }

  onAnswerSelection = (isCorrect) => {
    this.setState({
      activeCardIndex: this.state.activeCardIndex + 1,
      score: isCorrect ? this.state.score + 1 : this.state.score,
      questionsCompleted: this.state.questionsCompleted + 1,
    });
  }

  render() {
    const { cards, activeCardIndex, score } = this.state;
    const showScore = activeCardIndex === cards.length;
    const showCard = cards && cards.length && !showScore;

    return (
      <View style={styles.container}>
        {showCard &&
          <Card card={cards[activeCardIndex]} onAnswerSelection={this.onAnswerSelection} />
        }
        {showScore &&
          <View>
            <Text>Score:</Text>
            <Text>{score}</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
