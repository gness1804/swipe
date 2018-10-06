
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from '../data/static';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    marginTop: SCREEN_HEIGHT / 2,
  },
});

export default styles;
