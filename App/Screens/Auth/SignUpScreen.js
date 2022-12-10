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
const SignScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const signUp = () => {
    if (
      password == '' &&
      email == '' &&
      confirmPassword == '' &&
      username == ''
    ) {
      alert('Please Fill Form Properly');
    } else if (password == confirmPassword) {
      const find = loginData.find(
        item => item.username == username || item.email == email,
      );
      console.log(find);
      if (find == undefined) {
        loginData.push({
          username: username,
          email: email,
          password: password,
        });
        navigation.navigate('LoginScreen');
      } else {
        alert('User with this name or email already Exist');
      }
    } else {
      alert('Password and Confirm Password must be Same');
    }
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
            text={'UserName'}
            placeholder={'Please Enter Your UserName '}
            keyboardType={'default'}
            value={username}
            onChangeText={username => setUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInputCom
            text={'Email'}
            placeholder={'Please Enter Your Email Address'}
            keyboardType={'email-address'}
            onChangeText={email => setEmail(email)}
            value={email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInputCom
            text={'Password'}
            placeholder={'Please Enter Your Password'}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <View style={styles.inputView}>
          <TextInputCom
            text={'Confirm Password'}
            placeholder={'Please Enter Your Confirm Password'}
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            value={confirmPassword}
          />
        </View>
      </View>

      <View style={styles.buttonView}>
        <PrimaryButton onPress={signUp} title={'SignUp'} />
      </View>
      <View
        style={{
          bottom: hp('4%'),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.createNewText}>you have an Account </Text>
        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.SignUpText}> LogIn</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  buttonView: {bottom: hp('5%')},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  textInputMainView: {
    width: wp('88%'),
    height: hp('60%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: wp('10%'),
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
    fontSize: 50,
    color: Colors.secondary,
    fontFamily: 'Langar-Regular',
    bottom: hp('5%'),
  },
  Image: {
    width: wp('35%'),
    height: hp('16%'),
    bottom: hp('2%'),
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
