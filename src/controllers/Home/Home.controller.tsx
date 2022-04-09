import React, {useContext, useEffect, useMemo} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {Home} from '../../components/Home/Home.component';
import {
  PictureContext,
  PictureProvider,
} from '../../context/pictures/pictureContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const HomeController = (props: Props) => {
  const {getAll, result, status, error, message} = useContext(PictureContext);
  useEffect(() => {
    getAll();
  }, []);

  const pictures = useMemo(() => {
    if (status === 'fetched' && Array.isArray(result) && !error) return result;
    return [];
  }, [result]);

  return <Home {...props} pictures={pictures} status={status} />;
};
