import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
//import { getMetricMetaInfo } from '../utils/helpers'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class Card extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }

  submit = () => {
    alert('Submit');
  }

  render() {
    return (
      <View>
        <Text>Card</Text>
        <SubmitBtn onPress={this.submit} />
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
