import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './components/Card'
import CardCreate from './components/CardCreate'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import DeckCreate from './components/DeckCreate'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={25} color={tintColor} />
    },
  },
  DeckCreate: {
    screen: DeckCreate,
    navigationOptions: {
      title: 'New Deck',
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='library-add' size={25} color={tintColor} />
    },
  },
});

const MainNav = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List'
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: ''
    }
  },
  CardCreate: {
    screen: CardCreate,
    navigationOptions: {
      title: 'Add Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})


export default class App extends React.Component {
  componentDidMount() {
      setLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Ionicons name='ios-pizza' color='blue' size={200} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Card />
        <DeckCreate />*/}
        <MainNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
