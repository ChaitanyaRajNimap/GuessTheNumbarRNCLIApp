import * as React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameStartScreen from './src/screens/GameStartScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import Colors from './src/constants/Colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameStartScreen"
          component={GameStartScreen}
          options={{
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="GameOverScreen"
          component={GameOverScreen}
          options={{
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.primary800,
  },
  headerTintColor: Colors.accent500,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
