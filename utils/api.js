import { AsyncStorage } from 'react-native';
import { generateId } from 'helpers';
const DECKS_STORAGE_KEY = 'mobileFlashcards'

// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
        return results ? JSON.parse(results) : []
    })
    .catch((err) => console.log(err))
}

// take in a single title argument and add it to the decks.
export function saveDeckTitle(id, title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
        const newDeck = {
            id,
            title,
            cards: []
        }
        if (results) {
            const data = JSON.parse(results)
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify([...data, newDeck]))
        }
        else {
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify([newDeck]))
        }

    })
    .catch((err) => console.log(err))
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        const deck = data.find(d => d.title === title)
        deck.cards.push(card)
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
    .catch((err) => console.log(err))
}
