
import React from 'react';
import {
  View,
} from 'react-native';
// import styles from '../src/styles/StaticCard';

class StaticCard extends React.Component {
  render() {
    const {
      styleClass,
      renderer,
    } = this.props;

    return (
        <View style={styleClass}>
          {renderer}
        </View>
    );
  }
}

export default StaticCard;
