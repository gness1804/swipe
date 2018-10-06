
import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
} from 'react-native';

class StaticCard extends React.Component {
  render() {
    const {
      styleClass,
      renderer,
    } = this.props;
    //

    return (
        <Animated.View style={styleClass}>
          {renderer}
        </Animated.View>
    );
  }
}

StaticCard.propTypes = {
  renderer: PropTypes.shape().isRequired,
  styleClass: PropTypes.array.isRequired,
};

export default StaticCard;
