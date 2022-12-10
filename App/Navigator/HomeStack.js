// import React from 'react';
// import {View} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {Colors} from '../Assets/Theme/Colors';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../Screens/Home';

// const HomeStack = ({navigation}) => {
//   const Stack = createNativeStackNavigator();
//   return (
//     // <Stack.Navigator
//     //   initialRouteName="Home"
//     //   //   screenOptions={{headerShown: false}}>
//     // >
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         headerShown: true,
//         headerTitle: 'Home',
//         headerTitleAlign: 'center',
//         headerTintColor: Colors.secondary,
//         headerStyle: {
//           backgroundColor: Colors.background,
//         },
//         headerLeft: () => {
//           return (
//             <View style={{marginLeft: hp('0.5%')}}>
//               <Ionicons
//                 name={'ios-chevron-back'}
//                 color={Colors.secondary}
//                 size={30}
//                 onPress={() => navigation.goBack()}
//               />
//             </View>
//           );
//         },
//       }}
//     />
//     // </Stack.Navigator>
//   );
// };

// export default HomeStack;

import React from 'react';
import store from '../../store';
import {Provider} from 'react-redux';
import Home from '../Screens/Home';

const HomeStack = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default HomeStack;
