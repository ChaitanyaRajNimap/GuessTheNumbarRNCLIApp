import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CustomBackground from '../components/CustomBackground';
import Colors from '../constants/Colors';

function GameScreen({navigation}) {
  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>Game Screen</Text>
        <Button
          title="Go to game over screen"
          onPress={() => navigation.navigate('GameOverScreen')}
        />
      </View>
    </CustomBackground>
  );
}

export default GameScreen;

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
