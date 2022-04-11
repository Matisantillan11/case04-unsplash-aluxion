import React, {useMemo} from 'react';
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

  const firtItem = useMemo(() => {
    if (pictures.length > 0)
      return pictures.indexOf(
        pictures.find((picture: Picture) => picture.id === pictureSelected),
      );
    return 0;
  }, [pictureSelected]);

  return <PictureDetail {...props} pictures={pictures} picture={firtItem} />;
};
