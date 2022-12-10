import AppRout from './App/Navigator/AppRoute';
import {StatusBar, View} from 'react-native';
import {Colors} from './App/Assets/Theme/Colors';

function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <AppRout />
    </View>
  );
}
export default App;

// const styles = StyleSheet.create({});
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import store from './store';
// import {Provider} from 'react-redux';
// import Home from './App/Screens/Home';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// };

// export default App;
