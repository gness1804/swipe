
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from './styles/nomorecards';

class NoMoreCards extends React.Component {
  getMore() {
    // this.props.getMore();

  }

  render() {
    console.log('this.props:', this.props);
    return (
        <View style={styles.container}>
          <Text style={styles.text}>You are out of cards!</Text>
          <Button title="Get More!" onPress={this.getMore} />
        </View>
    );
  }
}

export default NoMoreCards;
