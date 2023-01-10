import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

function Text({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default Text;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
