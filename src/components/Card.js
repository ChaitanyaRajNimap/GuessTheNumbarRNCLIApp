import React, {Children} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    marginTop: 36,
    marginHorizontal: 24,
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    justifyContent: 'center',
    shadowColor: Colors.primary000,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
