import React from 'react';
import { View, Text } from 'react-native';
import Deck from './src/Deck';
import styles from './src/styles/app';
import data from './src/data/dummy';

export default class App extends React.Component {
  renderCard(item) {
    return (<View key={item.id}>
          <Text>{item.text}</Text>
            </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
            data={data}
            renderCard={this.renderCard}
        />
      </View>
    );
  }
}
