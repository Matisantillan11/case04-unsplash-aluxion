import React, {useContext, useEffect, useMemo} from 'react';
import {Author} from '../../components/Author/Author.component';
import {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';
import {PictureContext} from '../../context/pictures/pictureContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<RootStackParamList, 'Author'>;
}

export const AuthorController = (props: Props) => {
  const {author} = props.route.params;
  const {getPhotosByUser, status, result, error} = useContext(PictureContext);

  useEffect(() => {
    getPhotosByUser(author.username);
  }, [author.username]);

  const photosOfUser = useMemo(() => {
    if (status === 'fetched' && result.length > 0 && !error) return result;
    return [];
  }, [result]);

  return (
    <Author
      {...props}
      photosOfUser={photosOfUser}
      status={status}
      author={author}
    />
  );
};
