import React, {useContext, useEffect, useMemo} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {Home} from '../../components/Home/Home.component';
import {PictureContext} from '../../context/pictures/pictureContext';
import { Animated, useWindowDimensions } from 'react-native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const HomeController = (props: Props) => {
  const { height } = useWindowDimensions()
  const {getAll, result, status, error} = useContext(PictureContext);


  const positionAnimationY = new Animated.Value(height);

  const toTop = () => {
    Animated.timing(positionAnimationY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };


  setTimeout(() =>{ 
    toTop()
  }, 500)

  useEffect(() => {
    getAll();
  }, []);

  const pictures = useMemo(() => {
    if (status === 'fetched' && Object.entries(result.pictures).length > 0 && !error) return result?.pictures;
    return [];
  }, [result]);

  return <Home {...props} pictures={pictures} status={status} positionAnimationY={positionAnimationY}/>;
};
