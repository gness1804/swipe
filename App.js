import React from 'react';
import {
  View,
  Text,
  ToastAndroid,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import mainStyles from './src/styles/app';
import cardStyles from './src/styles/card';
import data from './src/data/dummy';

export default class App extends React.Component {
  renderOneCard(item) {
    const onButtonPressed = () => {
      ToastAndroid.show('Button was pressed.', ToastAndroid.SHORT);
    };

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
            renderCard={this.renderOneCard}
        />
      </View>
    );
  }
}
