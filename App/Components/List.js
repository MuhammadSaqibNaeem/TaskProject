import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DeletCar} from "../Screens/util/Helpers";
import {PLACEHOLDER_DATA, UPDATE_MODAL} from "../Screens/Sclice/crudSclice";
import {Colors} from "../Assets/Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function List({item}) {
  const placehoderData = useSelector(state => state.Cars.PlaceHolder);
  let dispatch = useDispatch();
  let onPressRemove = () => {
    DeletCar(dispatch, item?.id);
  };
  let onPressUpdate = () => {
    dispatch(PLACEHOLDER_DATA(item));
    if (placehoderData) {
      dispatch(UPDATE_MODAL(true));
    }
  };
  return (
    <View
      style={{
        width: wp("95%"),
        alignSelf: "center",
        backgroundColor: Colors.secondary,
        borderWidth: 2,
        borderColor: Colors.button,
        marginVertical: 5,
        borderRadius: 10,
        padding: 5,
        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}>
        <TouchableOpacity
          onPress={onPressUpdate}
          style={styles.TouchableOpacityStyle}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressRemove}
          style={[styles.TouchableOpacityStyle, {backgroundColor: Colors.red}]}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: "space-between", flexDirection: "row"}}>
        <Text style={{color: "#000", fontWeight: "900"}}>
          Car Model "{item.carModel}"
        </Text>
        <Text style={{color: "#000", fontWeight: "900"}}>
          Car Registration No "{item.carRegistration}"
        </Text>
      </View>
      <Text
        style={{color: "#000", fontWeight: "900", alignSelf: "center", top: 5}}>
        Car Color "{item.carColor}"
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <Text style={{alignSelf: "flex-end", color: Colors.button}}>
          {item.date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.secondary,
    fontFamily: "Radley-Regular",
    fontSize: 20,
    alignSelf: "center",
  },
  TouchableOpacityStyle: {
    backgroundColor: Colors.button,
    width: wp("25%"),
    height: hp("5%"),
    borderRadius: 10,
    justifyContent: "center",
  },
});
