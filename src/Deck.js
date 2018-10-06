
import React from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';
import {
  SCREEN_WIDTH,
  SWIPE_THRESHOLD,
  SWIPE_OUT_DURATION,
  RESET_DURATION,
} from './data/static';
import styles from './styles/deck';
import StaticCard from './StaticCard';

class Deck extends React.Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
  };

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
      onPanResponderRelease: (e, gesture) => {
        const { dx } = gesture;

        if (dx > SWIPE_THRESHOLD) {
          this.removeCard('right');
          return;
        }
        if (dx < -SWIPE_THRESHOLD) {
          this.removeCard('left');
          return;
        }
        this.resetPosition();
      },
    });

    this.state = {
      responder,
      position,
      index: 0,
    };
  }

  async removeCard(dir) {
    const { position } = this.state;
    await Animated.timing(position, {
      toValue: {
        x: dir === 'left' ? -SCREEN_WIDTH : SCREEN_WIDTH,
        y: 0,
      },
      duration: SWIPE_OUT_DURATION,
    }).start();
    this.onSwipeComplete(dir);
  }

  resetPosition() {
    const { position } = this.state;
    Animated.spring(position, {
      toValue: {
        x: 0,
        y: 0,
      },
      tension: RESET_DURATION,
    }).start();
  }

  async onSwipeComplete(dir) {
    const { index, position } = this.state;
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const target = data[index];

    if (dir === 'right') {
      await onSwipeRight(target);
    } else {
      await onSwipeLeft(target);
    }

    position.setValue({
      x: 0,
      y: 0,
    });
    this.setState({
      index: index + 1,
    });
  }

  animateCard() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [(-SCREEN_WIDTH * 1.5), 0, (SCREEN_WIDTH * 1.5)],
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
    const { data, renderCard, renderNoMoreCards } = this.props;
    const { responder, index } = this.state;

    if (index >= data.length) {
      return renderNoMoreCards();
    }

    return data.map((item, currCardIndex) => {
      if (currCardIndex < index) {
        return null;
      }
      if (currCardIndex === index) {
        return (
            <Animated.View
                style={[this.animateCard(), styles.cardStyle]}
                key={item.id}
                {...responder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
        );
      }
      return <StaticCard
        styleClass={[styles.cardStyle, { top: 10 * (currCardIndex - index) }]}
        key={item.id}
        renderer={renderCard(item)}
      />;
    }).reverse();
  }


  render() {
    return (
        <View style={styles.container}>
          {this.renderAllCards()}
        </View>
    );
  }
}

export default Deck;
