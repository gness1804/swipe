
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

    const position = new Animated.ValueXY();

    const responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        const { dx, dy } = gesture;
        position.setValue({
          x: dx,
          y: dy,
        });
      },
      onPanResponderRelease: () => {},
    });

    this.state = {
      responder,
      position,
    };
  }

  renderAllCards() {
    const { data, renderCard } = this.props;
    return data.map(item => renderCard(item));
  }


  render() {
    const { responder, position } = this.state;

    return (
        <Animated.View
            style={position.getLayout()}
            {...responder.panHandlers}
        >
          {this.renderAllCards()}
        </Animated.View>
    );
  }
}

export default Deck;
