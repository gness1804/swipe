
import React from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
//import styles from '../src/styles/Deck';

class Deck extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }


  render() {
    return (
        <View>
          {this.renderCards()}
        </View>
    );
  }
}

export default Deck;

