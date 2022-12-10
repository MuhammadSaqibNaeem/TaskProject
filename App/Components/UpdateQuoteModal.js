import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React, {useEffect, useState} from "react";
import Button from "./atom/Button";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CreateCar, UpdateCar} from "../Screens/util/Helpers";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_MODAL} from "../Screens/Sclice/crudSclice";
import {Colors} from "../Assets/Theme/Colors";
const UpdateCarModal = ({handleCloseUpdateModal}) => {
  const showModal = useSelector(state => state.Cars.updateModalOpen);
  const loading = useSelector(state => state.Cars.loading);
  const placehoderData = useSelector(state => state.Cars.PlaceHolder);
  const [carModel, setCarModel] = useState();
  const [carRegistration, setCarRegistration] = useState();
  const [carColor, setColor] = useState();
  const dispatch = useDispatch();
  let handleUpdateCar = () => {
    let data = {
      carModel,
      carRegistration,
      carColor,
      id: placehoderData.id,
    };

    if (carModel && carRegistration && carColor) {
      UpdateCar(dispatch, data);
    }
  };
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <Pressable
        onPress={handleCloseUpdateModal}
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      <View style={styles.modalCard}>
        <KeyboardAwareScrollView>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: "10%",
            }}>
            <View
              style={{
                width: "100%",
              }}>
              <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>
                Car Model
              </Text>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.button,
                }}>
                <TextInput
                  onChangeText={setCarModel}
                  defaultValue={`${placehoderData?.carModel}`}
                  placeholderTextColor={Colors.black}
                  placeholder={"Please Enter Your Car Model"}
                  style={{padding: 5, height: 50, color: "black"}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: "10%",
            }}>
            <View
              style={{
                width: "100%",
              }}>
              <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>
                Car Registration No
              </Text>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.button,
                }}>
                <TextInput
                  onChangeText={setCarRegistration}
                  defaultValue={`${placehoderData?.carRegistration}`}
                  placeholderTextColor={Colors.black}
                  placeholder={"Please Enter Your Car Registration No"}
                  style={{padding: 5, height: 50, color: "black"}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}>
            <View
              style={{
                width: "100%",
              }}>
              <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>
                Color
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 2,
                borderRadius: 10,
                borderColor: Colors.button,
              }}>
              <Picker
                value={`${placehoderData?.carColor}`}
                selectedValue={carColor}
                onValueChange={(itemValue, itemIndex) => setColor(itemValue)}>
                <Picker.Item label="Car Color" value="" />
                <Picker.Item label="Red" value="Red" />
                <Picker.Item label="Green" value="Green" />
                <Picker.Item label="Yellow" value="Yellow" />
                <Picker.Item label="Blue" value="Blue" />
                <Picker.Item label="Black" value="Black" />
                <Picker.Item label="White" value="White" />
              </Picker>
            </View>
          </View>
          {!loading ? (
            <Button
              onPress={handleUpdateCar}
              text={"Save"}
              textStyle={styles.btnText}
              style={styles.btn}
            />
          ) : (
            <ActivityIndicator
              style={{alignSelf: "flex-end", marginRight: 20, marginTop: 20}}
              size={30}
              color={Colors.button}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default UpdateCarModal;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    backgroundColor: Colors.button,
    marginTop: 20,
    alignSelf: "flex-end",
    borderRadius: 5,
    marginRight: 18,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalCard: {
    width: "90%",
    height: "60%",
    zIndex: 100,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: "30%",
    justifyContent: "center",
    borderRadius: 10,
  },
});
