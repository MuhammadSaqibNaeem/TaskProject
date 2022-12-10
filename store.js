import {configureStore} from '@reduxjs/toolkit';
import Cars from './App/Screens/Sclice/crudSclice';

let reducer = {
  Cars,
};

const store = configureStore({
  reducer,
});

export default store;
