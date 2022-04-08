import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {HomeController} from '../../controllers/Home/Home.controller';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Home'> {}
export const HomeView = (props: Props) => {
  return <HomeController {...props} />;
};
