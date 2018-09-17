import React from 'react';
import {
  View,
  Animated,
} from 'react-native';
import styles from './styles/ball';

class Ball extends React.Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {
        x: 200,
        y: 500,
      },
    }).start();
  }


  render() {
    return (
        <Animated.View style={this.position.getLayout()}>
          <View style={styles.ball} />
        </Animated.View>
    );
  }
}

export default Ball;
