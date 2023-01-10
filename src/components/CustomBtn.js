import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

function CustomBtn({text, onPress}) {
  return (
    <View style={styles.outerBtnContainer}>
      <TouchableOpacity style={styles.innerBtnContainer} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomBtn;

const styles = StyleSheet.create({
  outerBtnContainer: {borderRadius: 30, margin: 5, overflow: 'hidden'},
  innerBtnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
  },
  btnText: {color: Colors.primary111, textAlign: 'center'},
});
