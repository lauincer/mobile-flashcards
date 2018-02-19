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
    return (
      <View style={styles.container}>
          <Card />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
