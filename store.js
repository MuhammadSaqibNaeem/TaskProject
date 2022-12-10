import {configureStore} from '@reduxjs/toolkit';
import quotes from './App/Screens/Sclice/crudSclice';

let reducer = {
  quotes,
};

const store = configureStore({
  reducer,
});

export default store;
