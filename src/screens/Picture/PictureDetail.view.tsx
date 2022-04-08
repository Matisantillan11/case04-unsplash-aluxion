import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PictureDetailController} from '../../controllers/Picture/PictureDetail.controller';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'PictureDetail'> {}
export const PictureDetailView = (props: Props) => {
  return <PictureDetailController {...props} />;
};
