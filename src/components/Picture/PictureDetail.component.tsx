import React, {useRef} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../lib/theme/colors';
import {Header} from '../Header/Header.component';
import {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import {PictureFullPage} from './PictureFullpage.component';
import {RootStackParamList} from '../../navigators/HomeStackNavigator';
import Carousel from 'react-native-snap-carousel';
import {Picture} from '../../interfaces/interfaces';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  pictures: Picture[];
  picture: Picture;
}

export const PictureDetail = ({navigation, pictures, picture}: Props) => {
  const {width, height} = useWindowDimensions();

  return (
    <>
      <Carousel
        layout="tinder"
        data={pictures}
        renderItem={item => (
          <PictureFullPage navigation={navigation} picture={item.item} />
        )}
        sliderWidth={width}
        itemWidth={width}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    position: 'relative',
  },
  gradient: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textContainer: {marginLeft: '5%', marginRight: '20%', marginVertical: 15},
  title: {
    fontSize: 42,
    lineHeight: 49,
    fontWeight: 'bold',
    color: colors.white,
  },
  votes: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.white,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    marginVertical: 15,
  },
  authorImage: {width: 37, height: 37, borderRadius: 50, marginRight: 10},
  authorName: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
    marginBottom: 5,
  },
  viewButton: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.white,
  },
});
