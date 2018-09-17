import React from 'react';
import { View } from 'react-native';
import Ball from './src/Ball';
import styles from './src/styles/app';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}
