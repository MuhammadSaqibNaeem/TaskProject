import {createAction, createReducer} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import uuid from "react-native-uuid";
const CREATE_NEW = createAction("add-new");
const MODAL = createAction("modal");
const UPDATE_MODAL = createAction("update-modal");
const LOADING = createAction("load");
const REMOVE_ONE = createAction("remove-one");
const UPDATE_ONE = createAction("update-one");
const PLACEHOLDER_DATA = createAction("placeholder-data");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

let date = mm + "/" + dd + "/" + yyyy;

const initialState = {
  modalOpen: false,
  PlaceHolder: null,
  updateModalOpen: false,
  loading: false,
  Cars: [
    {
      id: 1,
      carModel: "Honda Civic",
      date: `${date}`,
      carRegistration: "JH49kkl",
      carColor: "red",
    },
    {
      id: 2,
      carModel: "Ferrari",
      date: `${date}`,
      carRegistration: "49kerkkl",
      carColor: "yellow",
    },
    {
      id: 3,
      carModel: "Tesla",
      date: `${date}`,
      carRegistration: "49MSN123",
      carColor: "Green",
    },
  ],
};
// Create new
const Car = createReducer(initialState, builder => {
  builder.addCase(CREATE_NEW, (state, action) => {
    let prev = JSON.parse(JSON.stringify(state.Cars));
    prev.unshift({
      ...action.payload,
      id: uuid.v4(),
      date: `${date}`,
    });
    return {
      ...state,
      Cars: prev,
    };
  });

  // Update one

  builder.addCase(UPDATE_ONE, (state, action) => {
    let prev = JSON.parse(JSON.stringify(state.Cars));
    const index = prev.findIndex(obj => obj.id === action.payload.id);
    if (index !== -1) prev[index] = action?.payload;
    return {
      ...state,
      Cars: prev,
    };
  });

  // Delete one

  builder.addCase(REMOVE_ONE, (state, action) => {
    let prev = JSON.parse(JSON.stringify(state.Cars));
    const index = prev.findIndex(obj => obj.id === action?.payload);
    if (index !== -1) prev.splice(index, 1);
    return {
      ...state,
      Cars: prev,
    };
  });

  // Fire form modal
  builder.addCase(MODAL, (state, action) => {
    return {
      ...state,
      modalOpen: action.payload,
    };
  });

  // Fire update form modal
  builder.addCase(UPDATE_MODAL, (state, action) => {
    return {
      ...state,
      updateModalOpen: action.payload,
    };
  });

  // Fire Activity Indicator
  builder.addCase(LOADING, (state, action) => {
    return {
      ...state,
      loading: action.payload,
    };
  });
  // Use to hold temp data for update
  builder.addCase(PLACEHOLDER_DATA, (state, action) => {
    return {
      ...state,
      PlaceHolder: action.payload,
    };
  });
});

export default Car;

export {
  CREATE_NEW,
  MODAL,
  LOADING,
  REMOVE_ONE,
  UPDATE_ONE,
  UPDATE_MODAL,
  PLACEHOLDER_DATA,
};
