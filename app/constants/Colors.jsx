'use strict';
const tintColorLight = '#002FA7';
const tintColorDark = '#fff';

export const journeyColors = {
  focus: '#002FA7',
  goodnight: '#2A5741',
  happiness: '#E8A455',
  textGray: '#718096',
  titleBlack: '#343A40',
};
export default {
  light: {
    text: '#000',
    background: '#fff',
    blue: '#012fa6',
    textGray: '#718096',
    titleBlack: '#343A40',
    blue: '#002FA7',
    green: '#2A5741',
    yellow: '#E8A455',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    blue: '#012fa6',
    textGray: '#718096',
    titleBlack: '#343A40',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
