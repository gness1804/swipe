import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

module.exports = {
  SCREEN_WIDTH,
  SWIPE_THRESHOLD,
};
