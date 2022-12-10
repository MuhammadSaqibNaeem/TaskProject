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
