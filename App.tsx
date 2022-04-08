import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack as HomeStackNavigator} from './src/navigators/HomeStackNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
