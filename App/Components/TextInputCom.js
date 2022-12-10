import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../Assets/Theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const textInput = ({
  placeholder,
  text,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  onBlur,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onBlur={onBlur}
      />
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.transarent,
  },
  secondView: {
    bottom: hp('1%'),
  },
  textInput: {
    paddingLeft: wp('5%'),
    height: hp('8%'),
    width: wp('82%'),
    borderColor: Colors.button,
    borderWidth: 2,
    borderRadius: 10,
    color: Colors.secondary,
  },
  textStyle: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: '500',
    fontFamily: 'Radley-Regular',
  },
});
