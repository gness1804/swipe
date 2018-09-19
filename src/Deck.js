
import React from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';
// import mainStyles from '../src/mainStyles/Deck';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    const responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {

      },
      onPanResponderRelease: () => {},
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
    const { responder } = this.state;

    return (
        <View {...responder.panHandlers}>
          {this.renderAllCards()}
        </View>
    );
  }
}

export default Deck;
