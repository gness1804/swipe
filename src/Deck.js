
import React from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
//import mainStyles from '../src/mainStyles/Deck';

class Deck extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  renderCards() {
    const { data, renderCard } = this.props;
    return data.map(item => renderCard(item));
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

