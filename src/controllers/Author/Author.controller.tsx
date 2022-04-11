import React, {useContext, useEffect, useMemo} from 'react';
import {Author} from '../../components/Author/Author.component';
import {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';
import {PictureContext} from '../../context/pictures/pictureContext';
import { Animated, useWindowDimensions } from 'react-native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<RootStackParamList, 'Author'>;
}

export const AuthorController = (props: Props) => {
  const { height, width } = useWindowDimensions()
  const {author} = props.route.params;
  const {getPhotosByUser, status, result, error} = useContext(PictureContext);

  const positionAnimationY = new Animated.Value(height);
  const positionAnimationX = new Animated.Value(-width);

  const toTop = () => {
    Animated.timing(positionAnimationY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const toRight = () => {
    Animated.timing(positionAnimationX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    getPhotosByUser(author.username, result.pictures );
  }, [author.username]);

  setTimeout(() =>{ 
    toTop()
    toRight()
  }, 500)

  const photosOfUser = useMemo(() => {
    if (status === 'fetched' && Object.keys(result.authorCollection).length > 0 && !error) return result.authorCollection;
    return [];
  }, [result]);

  return (
    <Author
      {...props}
      photosOfUser={photosOfUser}
      status={status}
      author={author}
      positionAnimationY={positionAnimationY}
      positionAnimationX={positionAnimationX}
    />
  );
};
