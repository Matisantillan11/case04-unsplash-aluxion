import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import {HomeView as Home} from '../screens/Home/Home.view';
import {PictureDetailView as PictureDetail} from '../screens/Picture/PictureDetail.view';
import {AuthorView as Author} from '../screens/Author/Author.view';

//library
import {colors} from '../lib/theme/colors';
//interfaces
import {User} from '../interfaces/interfaces';

export type RootStackParamList = {
  Home: undefined;
  PictureDetail: {pictures: any; pictureSelected: string};
  Author: {author: User};
};

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: colors.white},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, headerTitle: 'Discover'}}
      />
      <Stack.Screen
        name="PictureDetail"
        component={PictureDetail}
        options={{headerShown: false, headerTitle: ''}}
      />
      <Stack.Screen
        name="Author"
        component={Author}
        options={{headerShown: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};
