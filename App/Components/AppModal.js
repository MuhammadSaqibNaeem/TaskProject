import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import Button from './atom/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CreateQuote} from '../Screens/util/Helpers';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {MODAL} from '../Screens/Sclice/crudSclice';
import TextInputCom from './TextInputCom';
import {Colors} from '../Assets/Theme/Colors';

const AppModal = ({handleCloseModal}) => {
  const showModal = useSelector(state => state.quotes.modalOpen);
  const loading = useSelector(state => state.quotes.loading);
  const [carModel, setCarModel] = useState();
  const [carRegistration, CarRegistration] = useState();
  const [carColor, setColor] = useState();

  const dispatch = useDispatch();
  handleAddQuote = () => {
    let data = {
      carModel,
      carRegistration,
      carColor,
    };
    if (carModel && carRegistration && carColor) {
      CreateQuote(dispatch, data);
    }
  };
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <Pressable
        onPress={() => dispatch(MODAL(false))}
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />

      <View style={styles.modalCard}>
        <KeyboardAwareScrollView>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: '10%',
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Car Model
              </Text>
              <View
                style={{
                  width: '100%',
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.button,
                }}>
                <TextInput
                  onChangeText={setCarModel}
                  placeholderTextColor={Colors.black}
                  placeholder={'Please Enter Your Car Model'}
                  style={{padding: 5, height: 50, color: 'black'}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: '10%',
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Car Registration No
              </Text>
              <View
                style={{
                  width: '100%',
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.button,
                }}>
                <TextInput
                  onChangeText={CarRegistration}
                  placeholderTextColor={Colors.black}
                  placeholder={'Please Enter Your Car Registration No'}
                  style={{padding: 5, height: 50, color: 'black'}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Color
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                borderWidth: 2,
                borderRadius: 10,
                borderColor: Colors.button,
              }}>
              <Picker
                selectedValue={carColor}
                onValueChange={(itemValue, itemIndex) => setColor(itemValue)}>
                <Picker.Item label="Car Color" value="" />
                <Picker.Item label="Red" value="Red" />
                <Picker.Item label="Green" value="Green" />
                <Picker.Item label="Yellow" value="Yellow" />
              </Picker>
            </View>
          </View>
          {!loading ? (
            <Button
              onPress={handleAddQuote}
              text={'Save'}
              textStyle={styles.btnText}
              style={styles.btn}
            />
          ) : (
            <ActivityIndicator
              style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 20}}
              size={30}
              color={Colors.button}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    backgroundColor: Colors.button,
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight: 18,
    justifyContent: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalCard: {
    width: '90%',
    height: '60%',
    zIndex: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '30%',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
