import React from 'react';
import { View } from 'react-native';
import Deck from './src/Deck';
import styles from './src/styles/app';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
      </View>
    );
  }
}
