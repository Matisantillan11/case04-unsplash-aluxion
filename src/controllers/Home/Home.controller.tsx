import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {Home} from '../../components/Home/Home.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const HomeController = (props: Props) => {
  return <Home {...props} />;
};
