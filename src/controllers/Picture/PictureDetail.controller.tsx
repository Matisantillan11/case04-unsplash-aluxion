import React, {useMemo, useRef} from 'react';
import {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import {PictureDetail} from '../../components/Picture/PictureDetail.component';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';
import {Picture} from '../../interfaces/interfaces';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<RootStackParamList, 'PictureDetail'>;
}

export const PictureDetailController = (props: Props) => {
  const {pictures, pictureSelected} = props.route.params;

  const picture = useMemo(() => {
    if (pictures.length > 0)
      return pictures.find(
        (picture: Picture) => picture.id === pictureSelected,
      );
    return [];
  }, [pictures, pictureSelected]);

  console.log(pictureSelected);
  console.log({picture});

  return <PictureDetail {...props} pictures={pictures} picture={picture} />;
};
