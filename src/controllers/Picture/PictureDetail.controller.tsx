import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {PictureDetail} from '../../components/Picture/PictureDetail.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const PictureDetailController = (props: Props) => {
  return <PictureDetail {...props} />;
};
