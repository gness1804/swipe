
import React from 'react';
import {
  View,
  PanResponder,
} from 'react-native';
// import mainStyles from '../src/mainStyles/Deck';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    const responder = PanResponder.create({
      // config for PR
    });

    this.state = {
      responder,
    };
  }

  renderAllCards() {
    const { data, renderCard } = this.props;
    return data.map(item => renderCard(item));
  }


  render() {
    return (
        <View>
          {this.renderAllCards()}
        </View>
    );
  }
}

export default Deck;
