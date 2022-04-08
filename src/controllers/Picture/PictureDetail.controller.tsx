import React, {useRef} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {PictureDetail} from '../../components/Picture/PictureDetail.component';
import {Animated} from 'react-native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  opacity: any;
}

export const PictureDetailController = (props: Props) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <PictureDetail {...props} fadeIn={fadeIn} fadeAnimation={fadeAnimation} />
  );
};
