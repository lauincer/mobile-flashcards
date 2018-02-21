import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function ResponseButton ({ correct, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: correct ? 'green' : 'red'}]}
      onPress={onPress}>
        <Text style={styles.btnText}>{correct ? 'Correct' : 'Incorrect'}</Text>
    </TouchableOpacity>
  )
}

export default class Card extends Component {
  state = {
      showingAnswer: false
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.card !== nextProps.card) {
      this.setState({
        showingAnswer: false
      });
    }
  }

  flipCard = () => {
    this.setState({
      showingAnswer: !this.state.showingAnswer
    })
  }

  render() {
    const { card, onAnswerSelection } = this.props;
    const { showingAnswer } = this.state;

    return (
      <View style={styles.questionContainer}>
        <View style={styles.question}>
          <Text style={styles.questionAnswerText}>
            {showingAnswer ? card.answer : card.question }
          </Text>
          <TouchableOpacity onPress={() => this.flipCard() }>
            <Text style={styles.questionAnswerBtn}>
              {showingAnswer ? 'Question' : 'Answer' }
            </Text>
          </TouchableOpacity>
        </View>
        <ResponseButton correct={true} onPress={() =>
          onAnswerSelection(true)
        } />
        <ResponseButton correct={false} onPress={() =>
          onAnswerSelection(false)
        } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 150
  },
  questionAnswerText: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    width: 300
  },
  questionAnswerBtn: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
  },
  btn: {
    borderRadius: 5,
    padding: 10,
    width: 150,
    marginBottom: 10,
    alignItems: 'center'
  },
  btnText: {
    color: 'white'
  }
})
