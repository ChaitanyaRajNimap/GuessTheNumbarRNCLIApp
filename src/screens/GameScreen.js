import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import CustomBackground from '../components/CustomBackground';
import Title from '../components/Title';
import Colors from '../constants/Colors';
import CustomBtn from '../components/CustomBtn';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({navigation, route}) {
  const {userNum} = route.params;
  const initialGuess = generateRandomBetween(1, 100, userNum);

  setOppGuess(oppGuessGenerator());

  return (
    <CustomBackground>
      <Title>Opponent's Guess</Title>
      <View style={styles.oppGuessContainer}>
        <Text style={styles.oppGuessNum}>69</Text>
      </View>
      <Card>
        <Text style={styles.subTitle}>Higher or lower?</Text>
        <View style={styles.btnsContainer}>
          <CustomBtn text="-" onPress={() => {}} />
          <CustomBtn text="+" onPress={() => {}} />
        </View>
      </Card>

      {/* <View style={styles.rootContainer}>
        <Text style={styles.heading}>Game Screen</Text>
        <Text style={styles.heading}>{userNum}</Text>
        <Button
          title="Go to game over screen"
          onPress={() => navigation.navigate('GameOverScreen')}
        />
      </View> */}
    </CustomBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  oppGuessContainer: {
    marginHorizontal: 60,
    marginBottom: 20,
    alignItems: 'center',
  },
  oppGuessNum: {
    padding: 12,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: Colors.accent500,
    borderRadius: 7,
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    color: Colors.accent500,
    fontSize: 20,
  },
  btnsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
