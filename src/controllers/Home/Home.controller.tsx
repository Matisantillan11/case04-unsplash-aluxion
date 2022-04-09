import React, {useContext, useEffect, useMemo} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {Home} from '../../components/Home/Home.component';
import {PictureContext} from '../../context/pictures/pictureContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const HomeController = (props: Props) => {
  const {getAll, tryAgain, result, status, error, dispatch} =
    useContext(PictureContext);

  useEffect(() => {
    tryAgain();
    getAll();
  }, [dispatch]);

  const pictures = useMemo(() => {
    if (status === 'fetched' && Array.isArray(result) && !error) return result;
    return [];
  }, [result]);

  return <Home {...props} pictures={pictures} status={status} />;
};
