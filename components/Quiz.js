import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import {
  clearLocalNotification,
  setLocalNotification
} from './../utils/helpers';

export default class Quiz extends Component {
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
      score: 0
    });

    // Clear local notification and create a new one for tomorrow
    clearLocalNotification()
      .then(setLocalNotification);
  }

  onAnswerSelection = (isCorrect) => {
    this.setState({
      activeCardIndex: this.state.activeCardIndex + 1,
      score: isCorrect ? this.state.score + 1 : this.state.score
    });
  }

  render() {
    const { cards, activeCardIndex, score } = this.state;
    const showScore = activeCardIndex === cards.length;
    const showCard = cards && cards.length && !showScore;

    return (
      <View style={styles.container}>
        {showCard &&
          <View>
            <Text style={styles.quizProgress}>
              {activeCardIndex + 1} / {cards.length}
            </Text>
            <Card card={cards[activeCardIndex]} onAnswerSelection={this.onAnswerSelection} />
          </View>
        }
        {showScore &&
          <View style={styles.score}>
            <Text style={styles.scoreText}>Score: {score} / {cards.length}</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  quizProgress: {
    fontSize: 16,
    padding: 15
  },
  score: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreText: {
    fontSize: 30,
  }
})
