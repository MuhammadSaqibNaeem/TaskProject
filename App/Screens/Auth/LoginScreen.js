import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputCom from '../../Components/TextInputCom';
import PrimaryButton from '../../Components/PrimaryButton';
import {Colors} from '../../Assets/Theme/Colors';
import {loginData} from '../../../Auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    const find = loginData.find(
      item => item.email == email && item.password == password,
    );
    if (find) {
      navigation.navigate('Home');
    } else {
      alert('Your email and Password Do not Exist!');
    }

    // console.log(find);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require('../../Assets/Images/Car.png')}
      />

      <Text style={styles.textStyle}>CarApp</Text>
      <View style={styles.textInputMainView}>
        <View style={styles.inputView}>
          <TextInputCom
            text={'Email'}
            placeholder={'Please Enter Your Email Address '}
            keyboardType={'email-address'}
            onChangeText={email => setEmail(email)}
            value={email}
          />
          {/* <Text style={styles.error}>{errors.email}</Text> */}
        </View>
        <View style={styles.inputView}>
          <TextInputCom
            text={'Password'}
            placeholder={'Please Enter Your Password'}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            value={password}
          />
          {/* <Text style={styles.error}>{errors.password}</Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.createNewText}>New User?</Text>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.SignUpText}> Sign Up</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <PrimaryButton onPress={login} title={'Login'} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  buttonView: {bottom: hp('2%')},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  textInputMainView: {
    width: wp('88%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: wp('10%'),
  },
  error: {
    color: Colors.red,
    top: hp('0.5%'),
    width: wp('80%'),
  },
  inputView: {
    width: wp('100%'),
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
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
    width: wp('50%'),
    height: hp('20%'),
    bottom: hp('10%'),
  },
  createNewText: {
    fontSize: 15,
    color: Colors.secondary,
    fontFamily: 'Langar-Regular',
  },
  SignUpText: {
    fontSize: 18,
    color: Colors.button,
    fontFamily: 'Langar-Regular',
  },
});
