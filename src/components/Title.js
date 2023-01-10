import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/Colors';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    maxWidth: '80%',
    padding: 12,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: Colors.primary111,
    color: Colors.primary111,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
