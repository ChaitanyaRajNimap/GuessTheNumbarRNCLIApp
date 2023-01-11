import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';

function CustomBackground({children}) {
  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootContainer}>
      <ImageBackground
        source={require('../assests/images/background.png')}
        resizeMode="cover"
        imageStyle={{opacity: 0.15}}
        style={styles.rootContainer}>
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default CustomBackground;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
});
