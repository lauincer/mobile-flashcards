import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import SubmitButton from './SubmitButton';
import { addCardToDeck } from '../utils/api';

export default class CardCreate extends Component {
  state = {
    question: '',
    answer: ''
  }

  submit(question, answer) {
    const deck = this.props.navigation.state.params.deck;

    const card = {
      question,
      answer
    }

    if (question && answer) {
      addCardToDeck(deck.title, card);
      this.props.navigation.goBack();
    }
  }

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={(input) =>
            this.setState({
              question: input
            })
          }
          placeholder="question"
        />
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={(input) =>
            this.setState({
              answer: input
            })
          }
          placeholder="answer"
        />
        <SubmitButton onPress={() =>
          this.submit(question, answer)
        } />
      </KeyboardAvoidingView>
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
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 40
  }
})
