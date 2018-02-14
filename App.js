import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './components/Card'
import DeckList from './components/DeckList'
import DeckCreate from './components/DeckCreate'
// import { StackNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Ionicons name='ios-pizza' color='blue' size={200} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Card />
        <DeckCreate />*/}
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
