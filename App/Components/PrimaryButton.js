import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Colors} from '../Assets/Theme/Colors';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const PrimaryButton = ({onPress, title}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.outlineTouchableOpacityStyle}
        onPress={onPress}>
        <Text style={styles.outlineButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outlineTouchableOpacityStyle: {
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 10,
    backgroundColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    color: Colors.secondary,
    fontFamily: 'ConcertOne-Regular',
    fontWeight: '500',
    fontSize: 25,
  },
});
