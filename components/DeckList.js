import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const stubDecks = [
    {
      title: 'Deck #1'
    },
    {
      title: 'Deck #2'
    },
    {
      title: 'Deck #3'
    }
]

export default class DeckList extends Component {
  renderItem = ({item}) => {
    return (
      <View>
        <Text>
          {item.title}
        </Text>
        <Ionicons name='ios-pizza' color='red' size='200' />
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text>Deck List (first card list)</Text>
        <FlatList
          data={stubDecks}
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
  }
})
