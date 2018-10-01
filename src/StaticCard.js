
import React from 'react';
import {
  Animated,
} from 'react-native';

class StaticCard extends React.Component {
  render() {
    const {
      styleClass,
      renderer,
    } = this.props;

    return (
        <Animated.View style={styleClass}>
          {renderer}
        </Animated.View>
    );
  }
}

export default StaticCard;
