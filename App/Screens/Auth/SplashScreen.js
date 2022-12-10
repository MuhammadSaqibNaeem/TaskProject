import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Colors} from '../../Assets/Theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require('../../Assets/Images/Car.png')}
      />

      <Text style={styles.textStyle}>CarApp</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },

  textStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: Colors.secondary,
    fontFamily: 'Langar-Regular',
    bottom: hp('10%'),
  },
  Image: {
    width: wp('90%'),
    height: hp('40%'),
    bottom: hp('10%'),
  },
});
