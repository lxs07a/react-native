import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello there, {this.props.name}!</Text>
      </View>
    );
  }
}