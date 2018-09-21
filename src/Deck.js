
import React from 'react';
import {
  View,
  Animated,
  PanResponder,
  ToastAndroid,
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
      onPanResponderRelease: () => {
        ToastAndroid.show('Animation stopped.', ToastAndroid.SHORT);
      },
    });

    this.state = {
      responder,
      position,
    };
  }

  animateCard() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...position.getLayout(),
      transform: [
        {
          rotate,
        },
      ],
    };
  }

  renderAllCards() {
    const { data, renderCard } = this.props;
    const { responder } = this.state;
    return data.map((item, index) => {
      if (index === 0) {
        return (
            <Animated.View
                style={this.animateCard()}
                key={item.id}
                {...responder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
        );
      }
      return renderCard(item);
    });
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
