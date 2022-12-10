import React from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../Assets/Theme/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../Screens/Auth/SplashScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import HomeStack from './HomeStack';
const AuthNavigator = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitle: 'All Conferences',
          headerTitleAlign: 'center',
          headerTintColor: Colors.secondary,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerLeft: () => {
            return (
              <View style={{marginLeft: hp('0.5%')}}>
                <Ionicons
                  name={'ios-chevron-back'}
                  color={Colors.secondary}
                  size={30}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
