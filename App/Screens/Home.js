import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import List from '../Components/List';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../Assets/Theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MODAL, UPDATE_MODAL} from '../Screens/Sclice/crudSclice';
import AppModal from '../Components/AppModal';
import UpdateQuoteModal from '../Components/AppModal';
import Button from '../Components/atom/Button';
const Home = () => {
  const data = useSelector(state => state.quotes.quotes);
  let dispatch = useDispatch();
  let _renderList = ({item, _}) => <List item={item} />;

  let handleShowModal = () => {
    dispatch(MODAL(true));
  };
  let handleCloseModal = () => {
    dispatch(MODAL(false));
  };
  let handleCloseUpdateModal = () => {
    dispatch(UPDATE_MODAL(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.UserNameView}>
        <Text style={styles.textStyle}>WelCome To CareApp !</Text>
      </View>

      <View style={styles.flatlistView}>
        <FlatList
          data={data}
          renderItem={_renderList}
          keyExtractor={(_, i) => i.toString()}
        />
        <AppModal handleCloseModal={handleCloseModal} />
        <UpdateQuoteModal handleCloseUpdateModal={handleCloseUpdateModal} />
      </View>
      <View style={styles.PlusButtonView}>
        <Button
          onPress={handleShowModal}
          text={'+'}
          style={styles.PlusButton}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 40,
    backgroundColor: 'tomato',
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight: 18,
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  PlusButtonView: {
    width: wp('20%'),
    height: hp('10%'),
    alignSelf: 'flex-end',
    right: wp('2%'),
    position: 'absolute',
    bottom: hp('5%'),
    right: wp('5%'),
    alignSelf: 'flex-end',
  },
  PlusButton: {
    width: hp('10%'),
    height: hp('10%'),
    borderRadius: 100,
    backgroundColor: Colors.button,
    justifyContent: 'center',
  },
  UserNameView: {
    // backgroundColor: Colors.secondary,
    alignContent: 'center',
    justifyContent: 'center',
    top: hp('5%'),
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 35,
    color: Colors.secondary,
    fontFamily: 'Langar-Regular',
  },
  flatlistView: {
    top: hp('10%'),
  },
});
