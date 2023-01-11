import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import CustomBackground from '../components/CustomBackground';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import Title from '../components/Title';
import CustomBtn from '../components/CustomBtn';

function GameStartScreen({navigation}) {
  const minNum = 1;
  const maxNum = 99;
  const [userInput, setUserInput] = useState('');

  const confirmNumHandler = () => {
    if (
      userInput === null ||
      userInput === '' ||
      userInput < minNum ||
      userInput > maxNum
    ) {
      Alert.alert(
        'Invalid input',
        'Input number must be in range of 1 to 99!',
        [
          {
            text: 'cancel',
            style: 'cancel',
          },
        ],
      );
    } else {
      navigation.navigate('GameScreen', {
        userNum: userInput,
      });
    }
  };

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Guess The Number</Title>
        <Card>
          <TextInput
            value={userInput}
            onChangeText={text => setUserInput(text)}
            maxLength={2}
            style={styles.textInput}
            keyboardType="number-pad"
          />
          <View style={styles.btnsContainer}>
            <CustomBtn text="Reset" onPress={() => setUserInput('')} />
            <CustomBtn text="Confirm" onPress={confirmNumHandler} />
          </View>
          {/* <Button
            title="Go to game screen"
            onPress={}
          /> */}
        </Card>
      </View>
    </CustomBackground>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    color: Colors.primary000,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInput: {
    width: 50,
    marginTop: 20,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
