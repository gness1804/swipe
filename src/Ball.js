import React from 'react';
import {
  View,
    StyleSheet,
} from 'react-native';

class Ball extends React.Component {

  render() {
    return (
      <View style={styles.ball} />
    );
  }
}

export default Ball;

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: '#000',
  },
});

