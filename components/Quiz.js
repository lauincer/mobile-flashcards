import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Card from './Card'
// import {
//   clearLocalNotification,
//   setLocalNotification
// } from './utils/helpers'

export default class Quiz extends Component {
  // ToDo: Clear local notification
  // clearLocalNotification()
  //   .then(setLocalNotification)

  render() {
    const deck = this.props.navigation.state.params.deck;

    return (
      <View style={styles.container}>
        <Card card={deck.cards[0]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
