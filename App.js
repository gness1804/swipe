import React from 'react';
import {
  View,
  Text,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import NoMoreCards from './src/NoMoreCards';
import mainStyles from './src/styles/app';
import cardStyles from './src/styles/card';
import data from './src/data/dummy';

export default class App extends React.Component {
  renderCard(item) {
    const onButtonPressed = () => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Button was pressed.', ToastAndroid.SHORT);
      } else if (Platform.OS === 'ios') {
        AlertIOS.alert('Hello', 'Button Pressed.');
      }
    };

    const { id, text, uri } = item;
    return (<Card
              key={id}
              title={text}
              image={{
                uri,
              }}
            >
            <Text style={cardStyles.text}>Hello</Text>
            <Button
              icon={{
                name: 'code',
              }}
              backgroundColor="#03a9f4"
              title="View Now!"
              onPress={onButtonPressed}
            />
        </Card>
    );
  }

  getMore() {

    // if (Platform.OS === 'android') {
    //   ToastAndroid.show('Getting more cards...', ToastAndroid.SHORT);
    // } else if (Platform.OS === 'ios') {
    //   AlertIOS.alert('Hello', 'Getting more cards...');
    // }
  }

  renderNoMoreCards() {
    return (
        <NoMoreCards
              getMore={this.getMore}
        />
    );
  }

  onSwipeLeft(item) {

    // this.notify(`${item.text} was rejected.`);
  }

  onSwipeRight(item) {

    // this.notify(`${item.text} was liked.`);
  }

  render() {
    const {
      renderCard, onSwipeRight, onSwipeLeft, renderNoMoreCards,
    } = this;

    const attrs = {
      data,
      renderCard,
      onSwipeRight,
      onSwipeLeft,
      renderNoMoreCards,
    };
    return (
      <View style={mainStyles.container}>
        <Deck
            {...attrs}
        />
      </View>
    );
  }
}
