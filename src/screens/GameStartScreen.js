import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomBackground from '../components/CustomBackground';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import Title from '../components/Title';
import CustomBtn from '../components/CustomBtn';

function GameStartScreen({navigation}) {
  const [userInput, setUserInput] = useState('');

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
          />
          <CustomBtn text="Reset" onPress={() => setUserInput('')} />
          {/* <Button
            title="Go to game screen"
            onPress={() => navigation.navigate('GameScreen')}
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
    height: 50,
    backgroundColor: Colors.primary600,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
  },
});
