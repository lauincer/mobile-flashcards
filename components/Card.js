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
  render() {
    const { card } = this.props;

    return (
      <View style={styles.questionContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {card.question}
          </Text>
          <Text style={styles.answer}>
            Answer
          </Text>
        </View>
        <ResponseButton correct={true} />
        <ResponseButton correct={false} />
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
  questionText: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    width: 300
  },
  answer: {
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
