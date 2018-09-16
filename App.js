import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import mainStyles from './src/styles/app';
import cardStyles from './src/styles/card';
import data from './src/data/dummy';

export default class App extends React.Component {
  renderCard(item) {
    const onButtonPressed = () => {
      console.log('I was pressed.');
    }

    const { id, text, uri } = item;
    return (<Card
            key={id}
            title={text}
            image={{
              uri,
            }}
            >
            <Text style={cardStyles.text}>Hello</Text>
            <Button
              icon={{
                name: 'code',
              }}
              backgroundColor="#03a9f4"
              title="View Now!"
              onPress={onButtonPressed}
            />
        </Card>
    );
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <Deck
            data={data}
            renderCard={this.renderCard}
        />
      </View>
    );
  }
}
