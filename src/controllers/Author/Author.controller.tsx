import React from 'react';
import {Author} from '../../components/Author/Author.component';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const AuthorController = (props: Props) => {
  return <Author {...props} />;
};
