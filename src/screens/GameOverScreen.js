import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CustomBackground from '../components/CustomBackground';
import Colors from '../constants/Colors';

function GameOverScreen({navigation}) {
  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>Game Over Screen</Text>
        <Button
          title="Go to game start screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </CustomBackground>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: Colors.primary000,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
