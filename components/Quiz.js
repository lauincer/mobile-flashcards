import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Card from './Card'

export default class Quiz extends Component {
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