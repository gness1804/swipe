
import React from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
// import mainStyles from '../src/mainStyles/Deck';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
        this.resetPosition();
      },
    });

    this.state = {
      responder,
      position,
    };
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: {
        x: 0,
        y: 0,
      },
      tension: 30,
    }).start();
  }

  animateCard() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
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
