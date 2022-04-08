import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack as HomeStackNavigator} from './src/navigators/HomeStackNavigator';
import {PictureProvider} from './src/context/pictures/pictureContext';
const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <PictureProvider>{children}</PictureProvider>;
};

export default App;
