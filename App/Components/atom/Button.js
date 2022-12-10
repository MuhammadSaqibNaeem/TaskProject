import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../../Assets/Theme/Colors';
export default function Button({
  onPress = () => null,
  style,
  text,
  textStyle = {
    color: Colors.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        return {
          ...style,
          elevation: pressed ? 5 : 0,
        };
      }}>
      <Text style={{...textStyle}}>{text}</Text>
    </Pressable>
  );
}
