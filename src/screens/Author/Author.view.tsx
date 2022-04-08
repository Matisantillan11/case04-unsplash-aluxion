import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {AuthorController} from '../../controllers/Author/Author.controller';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Author'> {}
export const AuthorView = (props: Props) => {
  return <AuthorController {...props} />;
};
