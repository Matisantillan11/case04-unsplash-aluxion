import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import {HomeView as Home} from '../screens/Home/Home.view';
import {PictureDetailView as PictureDetail} from '../screens/Picture/PictureDetail.view';
import {AuthorView as Author} from '../screens/Author/Author.view';

//library
import {colors} from '../lib/theme/colors';
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
        /* headerLeft: () => <Icon name="" size={40} color={colors.lightGreen} style={{marginLeft: 20}}/>, */
        headerTintColor: colors.dark,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
        cardStyle: {backgroundColor: colors.white},
        /*  cardStyleInterpolator: ({index, current, next, layouts: {screen}}) => {
          const translateX = current.progress.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [screen.width, 0, 0],
          });

          return {cardStyle: {transform: [{translateX}]}};
        }, */
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
